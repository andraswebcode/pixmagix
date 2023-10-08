<?php

namespace AndrasWeb\PixMagix\Rest\Utils;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Manage options permission callback for routes.
 * @since 1.1.0
 * @return bool
 */

function manage_options_permission(){
	return apply_filters('pixmagix_rest_permission_manage_options', current_user_can('manage_options'));
}

/**
 * Create projects permission callback for routes.
 * @since 1.1.0
 * @return bool
 */

function create_projects_permission(){
	$permission = (current_user_can('edit_pixmagix') && current_user_can('upload_files'));
	return apply_filters('pixmagix_rest_permission_create_projects', $permission);
}

/**
 * Upload files permission callback for routes.
 * @since 1.0.0
 * @return bool
 */

function upload_files_permission(){
	return apply_filters('pixmagix_rest_permission_upload_files', current_user_can('upload_files'));
}

/**
 * Access list permission callback for routes.
 * @since 1.1.0
 * @return bool
 */

function access_list_permission(){
	return apply_filters('pixmagix_rest_permission_access_list', true);
}

/**
 * Helper function for wp_unique_filename filter hook to keep filename the same while replacing image.
 * @see AndrasWeb\PixMagix\Rest_Api::export_image()
 * @see AndrasWeb\PixMagix\Rest_Api::restore_image()
 * @since 1.0.0
 * @param string $filename
 * @param string $ext
 * @param string $dir
 * @param callable $unique_filename_callback
 * @param string[] $alt_filenames
 * @param int|string $number
 * @return string
 */

function unique_filename($filename, $ext, $dir, $unique_filename_callback, $alt_filenames, $number){
	return str_replace('-' . $number . $ext, $ext, $filename);
}

/**
 * Add YearMonth argument, when querying items via REST API to can be filtered them by dates.
 * Used for 'rest_{$post_type}_query' filter hook.
 * @since 1.0.0
 * @param array $args
 * @param array $request
 * @return array
 */

function add_date_arg($args, $request){

	if (isset($request['yearmonth'])){
		$args['m'] = intval($request['yearmonth']);
	}

	return $args;

}

?>
