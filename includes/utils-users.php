<?php

namespace AndrasWeb\PixMagix\Users\Utils;

use function AndrasWeb\PixMagix\Utils\find_object;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.1.0
 * @return array
 */

function get_roles(){

	$roles = wp_roles()->roles;
	$output = array();

	if (!empty($roles)){
		foreach ($roles as $name => $role){
			$can_upload = $role['capabilities']['upload_files'] ?? false;
			$can_edit = $role['capabilities']['edit_pixmagixs'] ?? false;
			$can_edit_others = $role['capabilities']['edit_others_pixmagixs'] ?? false;
			$can_read_others = $role['capabilities']['read_others_pixmagixs'] ?? false;
			$output[] = array(
				'name' => esc_attr($name),
				'label' => esc_html($role['name']),
				'can_upload' => boolval($can_upload),
				'can_edit' => boolval($can_edit),
				'can_edit_others' => boolval($can_read_others && $can_edit_others),
				'can_read_others' => boolval($can_read_others)
			);
		}
	}

	return $output;

}

/**
 *
 * @since 1.1.0
 * @param array $roles List of roles with new values.
 * @return boolean
 */

function update_roles($roles = array()){

	$success = false;

	if (!current_user_can('manage_options') || empty($roles)){
		return $success;
	}

	$prev_roles = get_roles();

	foreach ($roles as $role){
		$name = $role['name'] ?? '';
		$prev_role = find_object($prev_roles, 'name', $name);
		if (
			$prev_role['can_edit'] !== $role['can_edit'] ||
			$prev_role['can_edit_others'] !== $role['can_edit_others'] ||
			$prev_role['can_read_others'] !== $role['can_read_others'] ||
			$prev_role['can_upload'] !== $role['can_upload']
		){
			$success = true;
		}
		// Do not update empty name of role's caps, or administrator's caps.
		if (empty($name) || $name === 'administrator'){
			continue;
		}
		if (isset($role['can_edit'])){
			$can_edit_others = $role['can_edit_others'] ?? false;
			$can_read_others = $role['can_read_others'] ?? false;
			if ($role['can_edit']){
				add_capabilities($name, $can_edit_others, $can_read_others);
			} else {
				remove_capabilities($name);
			}
		}
		if (isset($role['can_upload'])){
			if ($role['can_upload']){
				get_role($name)->add_cap('upload_files');
			} else {
				get_role($name)->remove_cap('upload_files');
			}
		}
	}

	return $success;

}

/**
 *
 * @since 1.1.0
 * @access private
 * @param boolean $allow_manage_others
 * @param boolean $allow_read_others
 * @return array
 */

function _get_all_caps($allow_manage_others = false, $allow_read_others = false){

	$caps = array(
		'edit_pixmagix',
		'delete_pixmagix',
		'edit_pixmagixs',
		'delete_pixmagixs',
		'publish_pixmagixs'
	);

	if ($allow_manage_others){
		$caps = array_merge(
			$caps,
			array(
				'edit_others_pixmagixs',
				'delete_others_pixmagixs'
			)
		);
	}

	if ($allow_read_others){
		$caps[] = 'read_others_pixmagixs';
	}

	/**
	 * 
	 * @since 1.1.0
	 * @param array $caps
	 */

	return apply_filters('pixmagix_user_capabilities', $caps);

}

/**
 *
 * @since 1.1.0
 * @param string $role_name
 * @param boolean $allow_manage_others
 * @param boolean $allow_read_others
 */

function add_capabilities($role_name = '', $allow_manage_others = false, $allow_read_others = false){

	if (empty($role_name)){
		return;
	}

	$role = get_role($role_name);
	$caps = _get_all_caps($allow_manage_others, $allow_read_others);

	remove_capabilities($role_name);

	if (!empty($role)){
		foreach ($caps as $cap){
			$role->add_cap($cap);
		}
	}

}

/**
 *
 * @since 1.1.0
 * @param string $role_name
 */

function remove_capabilities($role_name = ''){

	if (empty($role_name)){
		return;
	}

	$role = get_role($role_name);
	$caps = _get_all_caps(true, true);

	if (!empty($role)){
		foreach ($caps as $cap){
			$role->remove_cap($cap);
		}
	}

}

/**
 * Returns the list of all users for dropdown menu,
 * if the current user have permission to access others projects.
 * @since 1.1.0
 * @return array
 */

function get_users_dropdown_items(){

	if (!current_user_can('read_others_pixmagixs')){
		return array();
	}

	$users = get_users(
		array(
			'fields' => array('ID', 'display_name')
		)
	);
	$output = array(
		array(
			'label' => esc_html__('All Users', 'pixmagix'),
			'value' => ''
		)
	);

	foreach ($users as $user){
		$output[] = array(
			'label' => esc_html($user->display_name),
			'value' => absint($user->ID)
		);
	}

	return $output;

}

?>
