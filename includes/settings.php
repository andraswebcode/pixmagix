<?php

namespace AndrasWeb\PixMagix\Settings;

use function AndrasWeb\PixMagix\Utils\find_object;

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
 * @var array
 */

const DEFAULT_SETTINGS = array(
	'pixabay_api_key' => '',
	'unsplash_api_key' => '',
	'gfonts_api_key' => '',
	'web_safe_fonts' => array(
		array(
			'family' => 'Arial',
			'collection' => 'websafe'
		),
		array(
			'family' => 'Arial Black',
			'collection' => 'websafe'
		),
		array(
			'family' => 'Times New Roman',
			'collection' => 'websafe'
		),
		array(
			'family' => 'Courier',
			'collection' => 'websafe'
		),
		array(
			'family' => 'Verdana',
			'collection' => 'websafe'
		),
		array(
			'family' => 'Georgia',
			'collection' => 'websafe'
		),
		array(
			'family' => 'Impact',
			'collection' => 'websafe'
		),
	),
	'google_fonts' => array()
);

/**
 *
 * @since 1.1.0
 * @var array
 */

const SANITIZE_CALLBACKS = array(
	'pixabay_api_key' => 'sanitize_text_field',
	'unsplash_api_key' => 'sanitize_text_field',
	'gfonts_api_key' => 'sanitize_text_field',
	'web_safe_fonts' => __NAMESPACE__ . '\\sanitize_fonts',
	'google_fonts' => __NAMESPACE__ . '\\sanitize_fonts'
);

/**
 *
 * @since 1.1.0
 * @param array $settings
 * @return array
 */

function sanitize_settings($settings = array()){

	$sanitized = array();

	foreach ($settings as $key => $value){
		if (isset(SANITIZE_CALLBACKS[$key])){
			$sanitized[$key] = call_user_func(SANITIZE_CALLBACKS[$key], $value);
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
	return get_option(SETTINGS_KEY, DEFAULT_SETTINGS);
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

/**
 *
 * @since 1.1.0
 * @param array $fonts
 * @return array
 */

function sanitize_fonts($fonts = array()){

	$sanitized = array();

	foreach ($fonts as $font){
		$family = sanitize_text_field($font['family'] ?? '');
		$collection = sanitize_text_field($font['collection'] ?? '');
		$category = sanitize_text_field($font['category'] ?? '');
		$subsets = array_map('sanitize_text_field', $font['subsets'] ?? array());
		$variants = array_map('sanitize_text_field', $font['variants'] ?? array());
		$sanitized[] = array_filter(compact('family', 'collection', 'category', 'subsets', 'variants'));
	}

	return $sanitized;

}

/**
 * Save settings by updating a specific font collection with a new item.
 * @since 1.1.0
 * @param string|array $font
 * @param string $collection
 * @return boolean
 */

function add_font($font = '', $collection = ''){

	if (empty($font) || empty($collection)){
		return false;
	}

	$collection_keys = array(
		'websafe' => 'web_safe_fonts',
		'gfonts' => 'google_fonts'
	);
	$setting_key = $collection_keys[$collection];
	$saved_fonts = get_setting($setting_key, array());
	$family = (is_array($font) && isset($font['family'])) ? $font['family'] : $font;
	$has_font = boolval($family && find_object($saved_fonts, 'family', $family));

	if ($has_font){
		return false;
	}

	if (is_string($font)){
		$new_item = array(
			'family' => $font,
			'collection' => $collection
		);
	} else {
		$new_item = $font;
	}

	$new_fonts = array_merge(
		$saved_fonts,
		array($new_item)
	);

	return update_settings($setting_key, $new_fonts);

}

?>
