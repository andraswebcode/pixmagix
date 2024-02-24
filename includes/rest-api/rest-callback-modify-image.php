<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Utils\array_to_form_data;
use function AndrasWeb\PixMagix\Settings\get_setting;

use WP_Error;
use WP_REST_Response;

/**
 *
 * @since 1.7.0
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */

function modify_image($request){

	$json = $request->get_json_params();
	$modifier = sanitize_text_field($json['modifier'] ?? '');

	if (empty($modifier)){
		return new WP_Error();
	}

	$api_key = sanitize_text_field(get_setting('clipdrop_api_key'));

	if (empty($api_key)){
		return new WP_Error(
			'authorization_failed',
			esc_html__('API Key is Not Set', 'pixmagix'),
			array(
				'status' => rest_authorization_required_code()
			)
		);
	}

	$src = sanitize_text_field($json['src'] ?? '');
	$mask = sanitize_text_field($json['mask'] ?? '');
	$prompt = sanitize_text_field($json['prompt'] ?? '');
	$mode = sanitize_text_field($json['mode'] ?? 'fast');
	$api_url = 'https://clipdrop-api.co/' . $modifier . '/v1';
	$headers = array(
		'Content-Type' => 'multipart/form-data; boundary=PIXMAGIX',
		'x-api-key' => $api_key
	);
	$params = array(
		'remove-background' => array(
			array(
				'is_file' => true,
				'name' => 'image_file',
				'src' => $src
			)
		),
		'replace-background' => array(
			array(
				'is_file' => true,
				'name' => 'image_file',
				'src' => $src
			),
			array(
				'name' => 'prompt',
				'value' => $prompt
			)
		),
		'remove-text' => array(
			array(
				'is_file' => true,
				'name' => 'image_file',
				'src' => $src
			)
		),
		'text-inpainting' => array(
			array(
				'is_file' => true,
				'name' => 'image_file',
				'src' => $src
			),
			array(
				'is_file' => true,
				'name' => 'mask_file',
				'src' => $mask
			),
			array(
				'name' => 'text_prompt',
				'value' => $prompt
			)
		),
		'cleanup' => array(
			array(
				'is_file' => true,
				'name' => 'image_file',
				'src' => $src
			),
			array(
				'is_file' => true,
				'name' => 'mask_file',
				'src' => $mask
			),
			array(
				'name' => 'mode',
				'value' => $mode
			)
		)
	);
	$fields = $params[$modifier] ?? null;

	if (empty($fields)){
		return new WP_Error();
	}

	$body = array_to_form_data('PIXMAGIX', $fields);

	/**
	 * The maximum waiting time for generating images.
	 * @since 1.7.0
	 * @param int $seconds
	 */

	$timeout = apply_filters('pixmagix_rest_image_generation_timeout', 45);
	$args = array(
		'headers' => $headers,
		'body' => $body,
		'timeout' => $timeout
	);
	$response = wp_remote_post($api_url, $args);

	if (is_wp_error($response)){
		return $response;
	}

	$status = absint($response['response']['code'] ?? 200);
	$data = wp_remote_retrieve_body($response);

	if ($status !== 200){
		$error = json_decode($data, true);
		$error = $error['error'] ?? '';
		if (!empty($error)){
			return new WP_Error('generation_failed', esc_html($error), array('status' => $status));
		}
	}

	$base64 = 'data:image/png;base64,' . base64_encode($data);

	return new WP_REST_Response(array('src' => $base64));

}

?>
