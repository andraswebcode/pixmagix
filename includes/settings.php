<?php

namespace AndrasWeb\PixMagix\Settings;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.1.0
 * @var string
 */

const SETTINGS_KEY = 'pixmagix_general_settings';

/**
 *
 * @since 1.1.0
 * @return array
 */

function get_default_settings(){

	$settings = array(
		// General Settings.
		'thumbnail_width' => 300,
		'preview_width' => 1280,
		// API Keys.
		'pixabay_api_key' => '',
		'pexels_api_key' => '',
		'unsplash_api_key' => '',
		'gfonts_api_key' => '',
		'openai_api_key' => '',
		'stabilityai_api_key' => '',
		'clipdrop_api_key' => ''
	);

	return $settings;

}

/**
 *
 * @since 1.1.0
 * @return array
 */

function get_sanitize_callbacks(){

	$callbacks = array(
		// General Settings.
		'thumbnail_width' => 'absint',
		'preview_width' => 'absint',
		// API Keys.
		'pixabay_api_key' => 'sanitize_text_field',
		'pexels_api_key' => 'sanitize_text_field',
		'unsplash_api_key' => 'sanitize_text_field',
		'gfonts_api_key' => 'sanitize_text_field',
		'openai_api_key' => 'sanitize_text_field',
		'stabilityai_api_key' => 'sanitize_text_field',
		'clipdrop_api_key' => 'sanitize_text_field'
	);

	return $callbacks;

}

/**
 *
 * @since 1.1.0
 * @param array $settings
 * @return array
 */

function sanitize_settings($settings = array()){

	$sanitized = array();
	$callbacks = get_sanitize_callbacks();

	foreach ($settings as $key => $value){
		if (isset($callbacks[$key])){
			$sanitized[$key] = call_user_func($callbacks[$key], $value);
		}
	}

	return $sanitized;

}

/**
 *
 * @since 1.1.0
 * @return array
 */

function get_all_settings(){
	return get_option(SETTINGS_KEY, get_default_settings());
}

/**
 *
 * @since 1.1.0
 * @param string $key
 * @param mixed $default
 * @return mixed
 */

function get_setting($key = '', $default = null){

	if (empty($key)){
		return $default;
	}

	$settings = get_all_settings();

	return isset($settings[$key]) ? $settings[$key] : $default;

}

/**
 *
 * @since 1.1.0
 * @param string $key
 * @return boolean
 */

function has_setting($key = ''){
	return !empty(get_setting($key));
}

/**
 *
 * @since 1.1.0
 * @param string|array $key
 * @param string $value
 * @return boolean
 */

function update_settings($key = '', $value = ''){

	if (!current_user_can('manage_options') || empty($key)){
		return false;
	}

	if (is_string($key)){
		$_key = $key;
		$key = array();
		$key[$_key] = $value;
	}

	$old_settings = get_all_settings();
	$new_settings = wp_parse_args(
		$key,
		$old_settings
	);
	$new_settings = sanitize_settings($new_settings);

	return update_option(SETTINGS_KEY, $new_settings);

}

?>
