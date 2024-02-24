<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Utils\get_filesystem;
use function AndrasWeb\PixMagix\Utils\get_upload_dir;
use function AndrasWeb\PixMagix\Utils\get_upload_url;
use function AndrasWeb\PixMagix\Utils\delete_attachment_subsizes;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.0.0
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */

function export_image($request){

	if (!current_user_can('upload_files')){
		return new \WP_Error(
			'not_allowed',
			esc_html__('Not Allowed to Upload Images.', 'pixmagix')
		);
	}

	if (!function_exists('wp_generate_attachment_metadata')){
		require_once ABSPATH . '/wp-admin/includes/image.php';
	}

	$filesystem = get_filesystem();
	$json = $request->get_json_params();
	$attachment_id = isset($json['mediaId']) ? intval($json['mediaId']) : 0;
	$image_data_url = isset($json['imageDataURL']) ? $json['imageDataURL'] : '';
	$image_data = $filesystem->get_contents('data://' . $image_data_url);
	$response = array(
		'success' => true
	);

	if (empty($image_data_url) || empty($image_data)){
		return new \WP_Error(
			'empty_data',
			esc_html__('Image Data is Missing', 'pixmagix')
		);
	}

	if (empty($attachment_id)){ // In case of creating a new attachment image.
		$filename = (isset($json['filename']) && !empty($json['filename'])) ? $json['filename'] : 'pixmagix';
		$extension = (isset($json['extension']) && !empty($json['extension'])) ? $json['extension'] : 'png';
		$filename = sanitize_file_name($filename . '.' . $extension);
		$title = isset($json['title']) ? sanitize_text_field($json['title']) : '';
		$alt = isset($json['alt']) ? sanitize_text_field($json['alt']) : '';
		$caption = isset($json['caption']) ? sanitize_textarea_field($json['caption']) : '';
		$description = isset($json['description']) ? sanitize_textarea_field($json['description']) : '';
		$upload_file = wp_upload_bits($filename, null, $image_data);
		if (isset($upload_file['error']) && !empty($upload_file['error'])){
			return new \WP_Error(
				'upload_failed',
				$upload_file['error']
			);
		}
		$attachment = array(
			'post_title' => $title,
			'post_content' => $description,
			'post_excerpt' => $caption,
			'meta_input' => array(
				'_wp_attachment_image_alt' => $alt
			),
			'post_mime_type' => $upload_file['type']
		);
		$attachment_id = wp_insert_attachment($attachment, $upload_file['file']);
		$attachment_data = wp_generate_attachment_metadata($attachment_id, $upload_file['file']);
		wp_update_attachment_metadata($attachment_id, $attachment_data);
		$response['media'] = array(
			'id' => absint($attachment_id),
			'url' => esc_url(wp_get_attachment_url($attachment_id))
		);
	} else { // In case of replacement of an original media image.
		$original_image_path = wp_get_original_image_path($attachment_id);
		$filename = basename($original_image_path);
		$meta_data = wp_get_attachment_metadata($attachment_id);
		$revision_folder = get_upload_dir('revisions');
		$revision_url = get_upload_url('revisions');
		$time = str_replace($filename, '', $meta_data['file']);
		$revision_url = $revision_url . $time . $filename;
		if (empty(get_post_meta($attachment_id, 'pixmagix_revision_url', true))){
			if (wp_mkdir_p($revision_folder . $time) === false){
				return new \WP_Error(
					'upload_failed',
					esc_html__('Revision Folder Cannot be Created', 'pixmagix')
				);
			}
			if ($filesystem->move($original_image_path, $revision_folder . $time . $filename) === false){
				return new \WP_Error(
					'upload_failed',
					esc_html__('Revision Cannot be Created', 'pixmagix')
				);
			}
		} else {
			wp_delete_file($original_image_path);
		}
		delete_attachment_subsizes($attachment_id);
		add_filter('wp_unique_filename', 'AndrasWeb\PixMagix\Rest\Utils\unique_filename', 99, 6);
		$upload_file = wp_upload_bits($filename, null, $image_data, $time);
		remove_filter('wp_unique_filename', 'AndrasWeb\PixMagix\Rest\Utils\unique_filename', 99);
		if (isset($upload_file['error']) && !empty($upload_file['error'])){
			return new \WP_Error(
				'upload_failed',
				$upload_file['error']
			);
		}
		wp_generate_attachment_metadata($attachment_id, $upload_file['file']);
		// To update date modified.
		wp_update_post(
			array(
				'ID' => $attachment_id
			)
		);
		update_post_meta($attachment_id, 'pixmagix_revision_url', esc_url_raw($revision_url));
		$response['revision_url'] = esc_url($revision_url);
	}

	return new \WP_REST_Response($response);

}

?>
