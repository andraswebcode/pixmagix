<?php

namespace AndrasWeb\PixMagix\Settings;

use function  AndrasWeb\PixMagix\Utils\find_object ;
// Exit, if accessed directly.
if ( !defined( 'ABSPATH' ) ) {
    exit;
}
/**
 *
 * @since 1.1.0
 * @var string
 */
const  SETTINGS_KEY = 'pixmagix_general_settings' ;
/**
 *
 * @since 1.1.0
 * @var array
 */
const  DEFAULT_SETTINGS = array(
    'default_free_images' => 'pixabay',
    'pixabay_api_key'     => '',
    'pexels_api_key'      => '',
    'unsplash_api_key'    => '',
    'gfonts_api_key'      => '',
    'thumbnail_width'     => 300,
    'preview_width'       => 1280,
) ;
/**
 *
 * @since 1.1.0
 * @var array
 */
const  SANITIZE_CALLBACKS = array(
    'default_free_images' => 'sanitize_text_field',
    'pixabay_api_key'     => 'sanitize_text_field',
    'pexels_api_key'      => 'sanitize_text_field',
    'unsplash_api_key'    => 'sanitize_text_field',
    'gfonts_api_key'      => 'sanitize_text_field',
    'thumbnail_width'     => 'absint',
    'preview_width'       => 'absint',
) ;
/**
 *
 * @since 1.1.0
 * @param array $settings
 * @return array
 */
function sanitize_settings( $settings = array() )
{
    $sanitized = array();
    $callbacks = SANITIZE_CALLBACKS;
    foreach ( $settings as $key => $value ) {
        if ( isset( $callbacks[$key] ) ) {
            $sanitized[$key] = call_user_func( $callbacks[$key], $value );
        }
    }
    return $sanitized;
}

/**
 *
 * @since 1.1.0
 * @return array
 */
function get_all_settings()
{
    $defaults = DEFAULT_SETTINGS;
    return get_option( SETTINGS_KEY, $defaults );
}

/**
 *
 * @since 1.1.0
 * @param string $key
 * @param mixed $default
 * @return mixed
 */
function get_setting( $key = '', $default = null )
{
    if ( empty($key) ) {
        return $default;
    }
    $settings = get_all_settings();
    return ( isset( $settings[$key] ) ? $settings[$key] : $default );
}

/**
 *
 * @since 1.1.0
 * @param string $key
 * @return boolean
 */
function has_setting( $key = '' )
{
    return !empty(get_setting( $key ));
}

/**
 *
 * @since 1.1.0
 * @param string|array $key
 * @param string $value
 * @return boolean
 */
function update_settings( $key = '', $value = '' )
{
    if ( !current_user_can( 'manage_options' ) || empty($key) ) {
        return false;
    }
    
    if ( is_string( $key ) ) {
        $_key = $key;
        $key = array();
        $key[$_key] = $value;
    }
    
    $old_settings = get_all_settings();
    $new_settings = wp_parse_args( $key, $old_settings );
    $new_settings = sanitize_settings( $new_settings );
    return update_option( SETTINGS_KEY, $new_settings );
}
