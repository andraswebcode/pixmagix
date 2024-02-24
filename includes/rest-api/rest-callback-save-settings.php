<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Settings\update_settings;
use function AndrasWeb\PixMagix\Users\Utils\update_roles;

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

function save_settings($request){

	$settings = $request->get_json_params();
	$roles_success = false;

	if (empty($settings)){
		return new \WP_Error();
	}

	if (isset($settings['roles'])){
		$roles_success = update_roles($settings['roles']);
		unset($settings['roles']);
	}

	$settings_success = update_settings($settings);

	return new \WP_REST_Response(
		array(
			'settings_success' => $settings_success,
			'roles_success' => $roles_success
		)
	);

}

?>
