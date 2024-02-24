<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Utils\get_file_extension;

/**
 *
 * @since 1.2.0
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */

function export_ai_image($request){

	if (!current_user_can('upload_files')){
		return new \WP_Error(
			'not_allowed',
			esc_html__('Not Allowed to Upload Images.', 'pixmagix')
		);
	}

	if (!function_exists('download_url')){
		require_once ABSPATH . '/wp-admin/includes/file.php';
	}
	if (!file_exists('media_handle_sideload')){
		require_once ABSPATH . '/wp-admin/includes/media.php';
		require_once ABSPATH . '/wp-admin/includes/image.php';
	}

	$src = esc_url_raw($request['src'] ?? '');
	$extension = get_file_extension($src, 'png');
	$filename = $request['filename'] ?? '';
	$filename = !empty($filename) ? sanitize_file_name($filename . '.' . $extension) : 'pixmagix.png';
	$title = sanitize_text_field($request['title'] ?? '');
	$alt = sanitize_text_field($request['alt'] ?? '');
	$caption = sanitize_textarea_field($request['caption'] ?? '');
	$description = sanitize_textarea_field($request['description'] ?? '');
	$tmp_name = download_url($src);

	if (is_wp_error($tmp_name)){
		return $tmp_name;
	}

	$file_array = array(
		'name' => $filename,
		'tmp_name' => $tmp_name
	);
	$id = media_handle_sideload($file_array, 0);

	if (is_wp_error($id)){
		@unlink($tmp_name);
		return $id;
	}

	$id = wp_update_post(
		array(
			'ID' => $id,
			'post_title' => $title,
			'post_content' => $description,
			'post_excerpt' => $caption,
			'meta_input' => array(
				'_wp_attachment_image_alt' => $alt
			),
		),
		true
	);

	if (is_wp_error($id)){
		return $id;
	}

	return new \WP_REST_Response(
		array(
			'mediaId' => absint($id)
		)
	);

}

?>
