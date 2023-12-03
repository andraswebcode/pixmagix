<?php

/**
 * Plugin Name: PixMagix
 * Plugin URI: https://pixmagixplugin.com/
 * Description: Advanced image editor plugin for media images. Add filters, adjust brightness and contrast, crop and resize images, add text, and much more. Overall, PixMagix is a powerful tool for anyone looking to take their website's visual content to the next level.
 * Version: 1.4.0
 * Requires at least: 6.0.0
 * Requires PHP: 7.0.0
 * Author: Andras Tovishati
 * Author URI: https://andrasweb.com/
 * License: GPLv2
 * Text Domain: pixmagix
 * 
 * @fs_premium_only /includes/pro/, /assets/pro/
 */

namespace AndrasWeb\PixMagix;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

// Define constants.

define('PIXMAGIX_DIR', plugin_dir_path(__FILE__));
define('PIXMAGIX_URL', plugin_dir_url(__FILE__));
define('PIXMAGIX_VERSION', rand(1000, 9999));
define('PIXMAGIX_REQUIRED_PHP_VERSION', '7.0.0');
define('PIXMAGIX_REQUIRED_WP_VERSION', '6.0.0');

// Init Freemius.

if (function_exists(__NAMESPACE__ . '\\pixmagix_fs')){
	pixmagix_fs()->set_basename(true, __FILE__);
} else {
	// Create a helper function for easy SDK access.
	function pixmagix_fs() {
		global $pixmagix_fs;
		if (!isset($pixmagix_fs)){
			// Include Freemius SDK.
			require_once dirname(__FILE__) . '/vendor/freemius/start.php';
			$pixmagix_fs = fs_dynamic_init(array(
				'id'                  => '13606',
				'slug'                => 'pixmagix',
				'premium_slug'        => 'pixmagix-pro',
				'type'                => 'plugin',
				'public_key'          => 'pk_1973b1ed21d80a8d70e1863662ab3',
				'is_premium'          => true,
				'premium_suffix'      => 'pro',
				// If your plugin is a serviceware, set this option to false.
				'has_premium_version' => true,
				'has_addons'          => false,
				'has_paid_plans'      => true,
				'trial'               => array(
					'days'               => 7,
					'is_require_payment' => false
				),
				'menu'                => array(
					'slug'           => 'pixmagix',
					'support'        => false
				)
			));
		}
		return $pixmagix_fs;
	}
	// Init Freemius.
	pixmagix_fs();
	// Signal that SDK was initiated.
	do_action('pixmagix_fs_loaded');
}

// Load textdomain.

if (!function_exists(__NAMESPACE__ . '\\load_textdomain')){
	function load_textdomain(){
		load_plugin_textdomain('pixmagix', false, basename(dirname(__FILE__)) . '/languages');
	}
	add_action('plugins_loaded', __NAMESPACE__ . '\\load_textdomain');
}

// Load the plugin.

if (!version_compare(PHP_VERSION, PIXMAGIX_REQUIRED_PHP_VERSION, '>=')){
	add_action('admin_notices', __NAMESPACE__ . '\\fail_php_version');
} elseif (!version_compare(get_bloginfo('version'), PIXMAGIX_REQUIRED_WP_VERSION, '>=')){
	add_action('admin_notices', __NAMESPACE__ . '\\fail_wp_version');
} else {
	if (!class_exists(__NAMESPACE__ . '\\Plugin')){
		require_once PIXMAGIX_DIR . 'includes/init.php';
		Plugin::run();
	}
}

/**
 * Add admin notice if php version is lower than required.
 * @since 1.0.0
 */

if (!function_exists(__NAMESPACE__ . '\\fail_php_version')){
	function fail_php_version(){
		$message = sprintf(
			esc_html__(
				'PixMagix requires PHP version %s+, plugin is currently NOT RUNNING.',
				'pixmagix'
			),
			PIXMAGIX_REQUIRED_PHP_VERSION
		);
		$html_message = sprintf(
			'<div class="error">%s</div>',
			wpautop($message)
		);
		echo wp_kses_post($html_message);
	}
}

/**
 * Add admin notice if WordPress version is lower than required.
 * @since 1.0.0
 */

if (!function_exists(__NAMESPACE__ . '\\fail_wp_version')){
	function fail_wp_version(){
		$message = sprintf(
			esc_html__(
				'PixMagix requires WordPress version %s+, plugin is currently NOT RUNNING.',
				'pixmagix'
			),
			PIXMAGIX_REQUIRED_WP_VERSION
		);
		$html_message = sprintf(
			'<div class="error">%s</div>',
			wpautop($message)
		);
		echo wp_kses_post($html_message);
	}
}

/**
 * Register activation hook.
 * @since 1.1.0
 */

if (!function_exists(__NAMESPACE__ . '\\plugin_activate')){
	function plugin_activate(){
		require_once PIXMAGIX_DIR . 'includes/utils-users.php';
		$roles = array(
			'administrator' => true,
			'editor' => false,
			'author' => false
		);
		foreach ($roles as $role => $allow_others){
			Users\Utils\add_capabilities($role, $allow_others, $allow_others);
		}
	}
	register_activation_hook(__FILE__, __NAMESPACE__ . '\\plugin_activate');
}

?>
