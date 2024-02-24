<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Utils\get_filesystem;
use function AndrasWeb\PixMagix\Utils\get_upload_dir;
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

function restore_image($request){

	if (!current_user_can('upload_files')){
		return new \WP_Error(
			'not_allowed',
			esc_html__('Not Allowed to Upload Images.', 'pixmagix')
		);
	}

	$json = $request->get_json_params();
	$attachment_id = isset($json['mediaId']) ? intval($json['mediaId']) : 0;

	if (empty($attachment_id)){
		return new \WP_Error(
			'missing_parameter',
			esc_html__('ID is Missing.', 'pixmagix'),
			array(
				'status' => 404
			)
		);
	}

	if (!function_exists('wp_generate_attachment_metadata')){
		require_once ABSPATH . '/wp-admin/includes/image.php';
	}

	$filesystem = get_filesystem();
	$original_image_path = wp_get_original_image_path($attachment_id);
	$filename = basename($original_image_path);
	$meta_data = wp_get_attachment_metadata($attachment_id);
	$revision_folder = get_upload_dir('revisions');
	$time = str_replace($filename, '', $meta_data['file']);
	$revision_path = $revision_folder . $time . $filename;

	if (!file_exists($revision_path)){
		return new \WP_Error(
			'file_missing',
			esc_html__('Revision File is Missing', 'pixmagix')
		);
	}

	$image_data = $filesystem->get_contents($revision_path);
	wp_delete_file($revision_path);
	wp_delete_file($original_image_path);
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
	update_post_meta($attachment_id, 'pixmagix_revision_url', '');

	return new \WP_REST_Response(
		array(
			'success' => true
		)
	);

}

?>
