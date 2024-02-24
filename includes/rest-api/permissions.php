<?php

namespace AndrasWeb\PixMagix\Rest\Permissions;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Manage options permission callback for routes.
 * @since 1.1.0
 * @return bool
 */

function manage_options(){
	return apply_filters('pixmagix_rest_permission_manage_options', current_user_can('manage_options'));
}

/**
 * Create projects permission callback for routes.
 * @since 1.1.0
 * @return bool
 */

function create_projects(){
	$permission = (current_user_can('edit_pixmagix') && current_user_can('upload_files'));
	return apply_filters('pixmagix_rest_permission_create_projects', $permission);
}

/**
 * Upload files permission callback for routes.
 * @since 1.0.0
 * @return bool
 */

function upload_files(){
	return apply_filters('pixmagix_rest_permission_upload_files', current_user_can('upload_files'));
}

/**
 * Access list permission callback for routes.
 * @since 1.1.0
 * @return bool
 */

function access_list(){
	return apply_filters('pixmagix_rest_permission_access_list', true);
}

/**
 * Generate image permission callback for routes.
 * @since 1.2.0
 * @return bool
 */

function generate_image(){
	return apply_filters('pixmagix_rest_permission_generate_image', current_user_can('upload_files'));
}

?>
