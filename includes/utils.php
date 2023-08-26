<?php

namespace AndrasWeb\PixMagix\Utils;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Get URL of a specific file from the plugin's assets folder.
 * @since 1.0.0
 * @param string $folder
 * @param string $file_name
 * @param string $extension
 * @param boolean $with_min_suffix
 * @return string
 */

function get_asset_url($folder = '', $file_name = '', $extension = 'js', $with_min_suffix = true){

	$min_suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '.min';
	$min_suffix = $with_min_suffix ? $min_suffix : '';
	$extension = $extension ? '.' . $extension : '';

	return PIXMAGIX_URL . 'assets/' . $folder . '/' . $file_name . $min_suffix . $extension;

}

/**
 * Set up, and return wp filesystem class instance.
 * @since 1.0.0
 * @return WP_Filesystem
 */

function get_filesystem(){

	global $wp_filesystem;

	if (empty($wp_filesystem)){
		require_once ABSPATH . '/wp-admin/includes/file.php';
		WP_Filesystem();
	}

	return $wp_filesystem;

}

/**
 *
 * @since 1.0.0
 * @param string $folder_name
 * @param string $file_name
 * @return string
 */

function get_upload_dir($folder_name = '', $file_name = ''){

	$wp_upload_dir = wp_upload_dir();
	$basedir = $wp_upload_dir['basedir'];

	/**
	 * 
	 * @since 1.0.0
	 * @param string $basedir
	 * @param string $folder_name
	 * @param string $file_name
	 */

	$basedir = apply_filters('pixmagix_upload_dir', $basedir . '/pixmagix/', $folder_name, $file_name);
	$folder_name = !empty($folder_name) ? '' . $folder_name . '/' : '';

	return $basedir . $folder_name . $file_name;

}

/**
 *
 * @since 1.0.0
 * @param string $folder_name
 * @param string $file_name
 * @return string
 */

function get_upload_url($folder_name = '', $file_name = ''){

	$wp_upload_dir = wp_upload_dir();
	$baseurl = $wp_upload_dir['baseurl'];

	/**
	 * 
	 * @since 1.0.0
	 * @param string $baseurl
	 * @param string $folder_name
	 * @param string $file_name
	 */

	$baseurl = apply_filters('pixmagix_upload_url', $baseurl . '/pixmagix/', $folder_name, $file_name);
	$folder_name = !empty($folder_name) ? '' . $folder_name . '/' : '';

	return $baseurl . $folder_name . $file_name;

}

/**
 * Returns the link to editor page.
 * @since 1.0.0
 * @access public
 * @static
 * @param int $id
 * @param string $key The key of query arg: 'id', or 'image'.
 * @return string
 */

function admin_editor_url($id = 0, $key = 'id'){

	$args = array(
		'page' => 'pixmagix_editor'
	);

	if (!empty($id)){
		$args[$key] = $id;
	}

	return add_query_arg(
		$args,
		admin_url('admin.php')
	);

}

/**
 * Returns the link to the specific admin page inside PixMagix.
 * @since 1.0.0
 * @access public
 * @static
 * @param string $suffix
 * @return string
 */

function admin_page_url($suffix = ''){
	$suffix = !empty($suffix) ? '_' . $suffix : '';
	return add_query_arg(
		'page',
		'pixmagix' . $suffix,
		admin_url('admin.php')
	);
}

/**
 * Returns the decoded data from a json file.
 * @since 1.0.0
 * @access public
 * @static
 * @param string $filename
 * @return array
 */

function get_json_data($filename = ''){

	if (empty($filename)){
		return array();
	}

	$filesystem = get_filesystem();
	$json_file = PIXMAGIX_DIR . 'assets/json/' . $filename . '.json';

	if (!file_exists($json_file)){
		return apply_filters('pixmagix_json_data_' . $filename, array());
	}

	$json = $filesystem->get_contents($json_file);
	$data = json_decode($json, true);
	$data = !empty($data) ? $data : array();

	/**
	 * 
	 * @since 1.0.0
	 * @param array $data
	 */

	return apply_filters('pixmagix_json_data_' . $filename, $data);

}

/**
 * 
 * @since 1.0.0
 * @access public
 * @static
 * @return int
 */

function count_project_pages(){

	$count = wp_count_posts('pixmagix');

	return ceil(intval($count->publish) / 12);

}

/**
 * There doesn't seem to be any function in WordPress that would helps us list the months of posts
 * for filters. So we have to make this function explicitly, based on WP_List_Table::months_dropdown().
 * @since 1.0.0
 * @static
 * @param string $post_type
 * @return array
 */

function get_months_dropdown_items($post_type = 'pixmagix'){

	global $wpdb, $wp_locale;

	// This filter is documented in wp-admin/includes/class-wp-list-table on line: 677.
	if (apply_filters('disable_months_dropdown', false, $post_type)){
		return array();
	}

	$user_id = get_current_user_id();
	$months = $wpdb->get_results(
		$wpdb->prepare(
			"
				SELECT DISTINCT YEAR(post_date) AS year, MONTH(post_date) AS month
				FROM $wpdb->posts
				WHERE post_type = %s
				AND post_author = %s
				AND post_status != 'auto-draft'
				ORDER BY post_date DESC
			",
			$post_type,
			$user_id
		)
	);

	// This filter is documented in wp-admin/includes/class-wp-list-table on line: 721.
	$months = apply_filters('months_dropdown_results', $months, $post_type);
	$output = array(
		array(
			'label' => esc_html__('All Dates', 'pixmagix'),
			'value' => ''
		)
	);

	foreach ($months as $arc_row){
		$month = zeroise($arc_row->month, 2);
		$year = $arc_row->year;
		$output[] = array(
			'label' => esc_html($wp_locale->get_month($month) . ' ' . $year),
			'value' => esc_attr($year . $month)
		);
	}

	return $output;

}

/**
 *
 * @since 1.0.0
 * @static
 * @param int $attachment_id
 */

function delete_attachment_subsizes($attachment_id = 0){

	if (empty($attachment_id)){
		return;
	}

	$image_sizes = get_intermediate_image_sizes();

	foreach ($image_sizes as $size){
		$image = image_get_intermediate_size($attachment_id, $size);
		if (empty($image)){
			continue;
		}
		$path = $image['path'];
		if (file_exists($path)){
			wp_delete_file($path);
		}
	}

}

?>
