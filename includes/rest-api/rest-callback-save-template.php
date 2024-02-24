<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use AndrasWeb\PixMagix\Rest\Post_Controller;
use AndrasWeb\PixMagix\Rest\Meta_Fields;
use function AndrasWeb\PixMagix\Utils\get_file_extension;
use function AndrasWeb\PixMagix\Utils\move_image_on_server;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.1.0
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */

function save_template($request){

	if (!current_user_can('upload_files')){
		return new \WP_Error(
			'not_allowed',
			esc_html__('Not Allowed to Upload Images.', 'pixmagix')
		);
	}

	if (!function_exists('download_url')){
		require_once ABSPATH . '/wp-admin/includes/file.php';
	}

	$json = $request->get_json_params();
	$title = $json['title'] ?? '';
	$description = $json['description'] ?? '';
	$width = $json['width'] ?? 0;
	$height = $json['height'] ?? 0;
	$background = $json['background'] ?? '';
	$thumbnail = $json['thumbnail'] ?? '';
	$preview = $json['preview'] ?? '';
	$layers = $json['layers'] ?? array();
	$body_params = array(
		'title' => sanitize_text_field($title),
		'content' => sanitize_textarea_field($description),
		'status' => 'private',
		'meta' => array(
			'pixmagix_project' => array(
				'canvasWidth' => absint($width),
				'canvasHeight' => absint($height),
				'canvasBackground' => is_array($background) ? $background : sanitize_hex_color($background),
				'thumbnail' => esc_url_raw($thumbnail),
				'preview' => esc_url_raw($preview),
				'layers' => array()
			)
		)
	);

	if (!empty($layers)){
		foreach ($layers as $layer){
			$type = $layer['type'] ?? '';
			if ($type === 'image'){
				// First we remove the src so that the src of the remote image is not saved
				// to avoid cross-origin errors on html5 canvas.
				// We will create new src for it below.
				$layer['src'] = '';
			}
			$body_params['meta']['pixmagix_project']['layers'][] = $layer;
		}
	}

	$post_request = new \WP_REST_Request('POST', 'wp/v2/pixmagix/');
	$post_request->set_body_params($body_params);
	$post_controller = new Post_Controller();
	$post_response = $post_controller->create_item($post_request);

	if (is_wp_error($post_response)){
		return $post_response;
	}

	$post_id = absint($post_response->get_data()['id'] ?? 0);
	$new_meta = $body_params['meta'];

	// Save, and move remote images to the layers folder.
	if ($post_id){
		foreach ($layers as $index => $layer){
			$type = $layer['type'] ?? '';
			if ($type === 'image'){
				$layer_id = $layer['id'] ?? '';
				$src = $layer['src'] ?? '';
				if (empty($src) || empty($layer_id)){
					continue;
				}
				$extension = get_file_extension($src, 'png');
				$tmp_name = download_url($src);
				if (is_wp_error($tmp_name)){
					return $tmp_name;
				}
				// Follow the pattern of file names inside layers directory.
				// @see Post_Type::create_images()
				$filename = 'layer-' . $post_id . '-' . $layer_id . '.' . $extension;
				$new_src = move_image_on_server($tmp_name, 'layers', $filename);
				if ($new_src){
					$new_meta['pixmagix_project']['layers'][$index]['src'] = $new_src;
				} else {
					return new \WP_Error();
				}
			}
		}
	}

	$meta_fields = new Meta_Fields();
	$update_meta = $meta_fields->update_value($new_meta, $post_id);

	if (is_wp_error($update_meta)){
		return $update_meta;
	}

	return $post_response;

}

?>
