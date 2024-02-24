<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use AndrasWeb\PixMagix\Rest\AI_Arch_Controller;
use function AndrasWeb\PixMagix\Utils\get_file_extension;
use function AndrasWeb\PixMagix\Utils\create_unique_id;
use function AndrasWeb\PixMagix\Settings\get_setting;

/**
 *
 * @since 1.2.0
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */

function generate_image($request){

	$generator = $request->get_param('generator');

	if (empty($generator)){
		return new \WP_Error(
			'missing_parameter',
			esc_html__('Generator is Missing', 'pixmagix'),
			array(
				'status' => 404
			)
		);
	}

	$is_dalle = ($generator === 'dall-e');
	$api = $is_dalle ? 'openai' : 'stabilityai';
	$api_urls = array(
		'openai' => 'https://api.openai.com/v1/images/generations',
		'stabilityai' => 'https://api.stability.ai/v1/generation/'
	);
	$api_key = sanitize_text_field(get_setting($api . '_api_key'));
	$api_url = $api_urls[$api] ?? '';

	if (empty($api_key)){
		return new \WP_Error(
			'authorization_failed',
			esc_html__('API Key is Not Set', 'pixmagix'),
			array(
				'status' => rest_authorization_required_code()
			)
		);
	}

	$size = $request['size'] ?? '1024x1024';
	$style = $request['style'] ?? '';
	$model = $request['model'] ?? '';
	$quality = $request['quality'] ?? '';
	$samples_count = $request['samplesCount'] ?? 1;
	$prompts = $request['prompts'] ?? array();

	if (empty($prompts) || !isset($prompts[0]['text']) || empty($prompts[0]['text'])){
		return new \WP_Error(
			'bad_request',
			esc_html__('Prompts cannot be empty.', 'pixmagix'),
			array(
				'status' => 400
			)
		);
	}

	$headers = array(
		'Content-Type' => 'application/json',
		'Authorization' => 'Bearer ' . $api_key
	);
	$body = array();
	$body_params = array(
		'title' => '',
		'status' => 'publish',
		'meta' => array(
			'pixmagix_ai_arch_project' => array(
				'generator' => sanitize_text_field($generator),
				'size' => sanitize_text_field($size),
				'style' => sanitize_text_field($style),
				'model' => sanitize_text_field($model),
				'quality' => sanitize_text_field($quality),
				'samplesCount' => absint($samples_count),
				'prompts' => $prompts
			)
		)
	);

	if ($is_dalle){
		$model = sanitize_text_field($request['model'] ?? 'dall-e-3');
		$style = sanitize_text_field($request['style'] ?? 'vivid');
		$quality = sanitize_text_field($request['quality'] ?? 'standard');
		$n = ($model === 'dall-e-3') ? 1 : $samples_count;
		$body = array(
			'response_format' => 'b64_json',
			'prompt' => sanitize_text_field($prompts[0]['text']),
			'n' => absint($n),
			'size' => sanitize_text_field($size),
			'style' => sanitize_text_field($style),
			'model' => sanitize_text_field($model),
			'quality' => sanitize_text_field($quality)
		);
	} else {
		$model = sanitize_text_field($request['model'] ?? 'stable-diffusion-xl-1024-v1-0');
		$style = sanitize_text_field($request['style'] ?? 'photographic');
		$s = explode('x', $size);
		$steps = $request['steps'] ?? 40;
		$cfg_scale = $request['cfgScale'] ?? 5;
		$api_url = $api_url . $model . '/text-to-image';
		$body = array(
			'style_preset' => $style,
			'steps' => absint($steps),
			'width' => absint($s[0]),
			'height' => absint($s[1]),
			'seed' => 0,
			'cfg_scale' => absint($cfg_scale),
			'samples' => absint($samples_count),
			'text_prompts' => $prompts
		);
	}

	/**
	 * The maximum waiting time for generating images.
	 * @since 1.2.0
	 * @param int $seconds
	 */

	$timeout = apply_filters('pixmagix_rest_image_generation_timeout', 45);
	$args = array(
		'headers' => $headers,
		'body' => wp_json_encode($body),
		'timeout' => $timeout
	);
	$response = wp_remote_post($api_url, $args);

	if (is_wp_error($response)){
		return $response;
	}

	$body = wp_remote_retrieve_body($response);
	$data = json_decode($body, true);
	$samples = array();

	if (empty($data)){
		return new \WP_Error();
	}

	if ($is_dalle){
		$items = $data['data'] ?? array();
		foreach ($items as $item){
			if (isset($item['b64_json']) && !empty($item['b64_json'])){
				$samples[] = array(
					'id' => create_unique_id(),
					'src' => 'data:image/png;base64,' . $item['b64_json']
				);
			}
		}
		$body_params['meta']['pixmagix_ai_arch_project']['samples'] = $samples;
	} else {
		$items = $data['artifacts'] ?? array();
		foreach ($items as $item){
			if (isset($item['finishReason']) && $item['finishReason'] === 'SUCCESS'){
				$samples[] = array(
					'id' => create_unique_id(),
					'src' => 'data:image/png;base64,' . $item['base64']
				);
			}
		}
		$body_params['meta']['pixmagix_ai_arch_project']['samples'] = $samples;
	}

	$arch_request = new \WP_REST_Request('POST', 'wp/v2/pixmagix_ai_arch/');
	$arch_request->set_body_params($body_params);
	$arch_controller = new AI_Arch_Controller();
	$arch_response = $arch_controller->create_item($arch_request);

	if (is_wp_error($arch_response)){
		return $arch_response;
	}

	$arch_data = $arch_response->get_data();
	$samples = $arch_data['meta']['pixmagix_ai_arch_project']['samples'] ?? array();
	$response = array(
		'samples' => $samples,
		'archive' => absint($arch_data['id'] ?? 0)
	);

	return new \WP_REST_Response($response);

}

?>
