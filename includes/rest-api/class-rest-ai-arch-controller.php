<?php

namespace AndrasWeb\PixMagix\Rest;

use function AndrasWeb\PixMagix\Utils\get_upload_dir;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.2.0
 * @see \AndrasWeb\PixMagix\Rest\Post_Controller
 * @see \WP_REST_Posts_Controller
 * @see \WP_REST_Controller
 */

class AI_Arch_Controller extends Post_Controller {

	/**
	 * Constructor.
	 * For setting the default post type.
	 * @since 1.2.0
	 * @access public
	 * @param string $post_type
	 */

	public function __construct($post_type = 'pixmagix_ai_arch'){
		parent::__construct($post_type);
		$this->meta = new AI_Arch_Meta_Fields();
	}

	/**
	 *
	 * @since 1.2.0
	 * @access public
	 * @param WP_Post $item
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function delete_item($request){

		$id = absint($request['id']);

		if (empty($id)){
			return parent::delete_item($request);
		}

		$meta = $this->meta->get_value($id, $request);
		$samples = $meta['pixmagix_ai_arch_project']['samples'] ?? array();

		foreach ($samples as $sample){
			$sample_id = $sample['id'] ?? '';
			$filename = get_upload_dir('ai', 'image-' . $id . '-' . $sample_id . '.png');
			if (!empty($sample_id) && file_exists($filename)){
				wp_delete_file($filename);
			}
		}

		return parent::delete_item($request);

	}

	/**
	 *
	 * @since 1.2.0
	 * @access public
	 * @param WP_Post $item
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response
	 */

	function prepare_item_for_response($item, $request){

		$response = parent::prepare_item_for_response($item, $request);
		$data = $response->get_data();
		$project = $data['meta']['pixmagix_ai_arch_project'] ?? array();
		$samples_count = $project['samplesCount'] ?? 0;
		$generator = ($project['generator'] === 'openai') ? esc_html__('DALL-E') : esc_html__('Stable Diffusion', 'pixmagix');
		$prompt = $project['prompts'][0]['text'] ?? '';
		$trim_prompt = wp_trim_words($prompt, 5, '...');
		$caption = sprintf(
			_n('%s - %d Sample - Created With %s', '%s - %d Samples - Created With %s', $samples_count, 'pixmagix'),
			$trim_prompt,
			$samples_count,
			$generator
		);

		$new_data = array_merge(
			$data,
			array(
				'caption' => esc_html($caption)
			)
		);

		$response->set_data($new_data);

		return $response;

	}

	/**
	 * Put all prompts to post content to be able to filter by search.
	 * Maybe this is the easiest way...
	 * @since 1.2.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return stdClass|WP_Error
	 */

	function prepare_item_for_database($request){

		$prepared = parent::prepare_item_for_database($request);

		if (is_wp_error($prepared)){
			return $prepared;
		}

		$content = array();

		// How to get meta from here?...

		$prepared->post_content = implode(' ', $content);

		return $prepared;

	}

}