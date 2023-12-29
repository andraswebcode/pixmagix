<?php

namespace AndrasWeb\PixMagix\Editor;

use function AndrasWeb\PixMagix\Utils\get_asset_url;
use function AndrasWeb\PixMagix\Settings\get_setting;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Render div for react app.
 * @since 1.0.0
 */

function render(){
	echo '<div id="pixmagix" class="pixmagix"><p class="hide-if-js">';
	esc_html_e('The editor requires JavaScript. Please enable JavaScript in your browser settings.', 'pixmagix');
	echo '</p></div>';
}

/**
 * Register script dependencies.
 * @since 1.0.0
 */

function register_dependencies(){

	wp_register_script(
		'pixmagix-fabric',
		get_asset_url('libs/js', 'fabric', 'js'),
		array(),
		PIXMAGIX_VERSION
	);

	wp_register_script(
		'pixmagix-elements',
		get_asset_url('js', 'elements.build', 'js'),
		array(
			'react',
			'lodash'
		),
		PIXMAGIX_VERSION
	);

}

/**
 * Enqueue styles for a specific page.
 * @since 1.1.0
 * @param array $styles
 */

function enqueue_styles(...$styles){
	if (!empty($styles)){
		foreach ($styles as $style){
			if (!isset($style['handle']) || !isset($style['src'])){
				continue;
			}
			$handle = $style['handle'];
			$src = $style['src'];
			$deps = isset($style['deps']) ? $style['deps'] : array();
			wp_enqueue_style(
				$handle,
				$src,
				$deps,
				PIXMAGIX_VERSION
			);
		}
	}
}

/**
 * Enqueue scripts for a specific page.
 * @since 1.1.0
 * @param array $scripts
 */

function enqueue_scripts(...$scripts){
	$def_deps = array(
		'react',
		'react-dom',
		'lodash',
		'wp-dom-ready',
		'wp-api-fetch',
		'wp-i18n',
		'wp-hooks',
		'pixmagix-elements'
	);
	if (!empty($scripts)){
		foreach ($scripts as $script){
			if (!isset($script['handle']) || !isset($script['src'])){
				continue;
			}
			$handle = $script['handle'];
			$src = $script['src'];
			$deps = isset($script['deps']) ? $script['deps'] : $def_deps;
			$l10n = isset($script['l10n']) ? $script['l10n'] : array();
			wp_enqueue_script(
				$handle,
				$src,
				$deps,
				PIXMAGIX_VERSION
			);
			if (!empty($l10n)){
				wp_localize_script(
					$handle,
					'pixmagixGlobals',
					$l10n
				);
			}
			wp_set_script_translations($handle, 'pixmagix', PIXMAGIX_DIR . 'languages');
		}
	}
}

/**
 * Initialize react application on a specific page.
 * @since 1.1.0
 * @param string $handle
 * @param array $params
 */

function initialize($handle = '', $params = array()){

	if (empty($handle)){
		return;
	}

	$init_script = '
		(function(){
			wp.domReady(function(){
				pixmagixEditor.initialize(%s);
			});
		})();
	';
	$script = sprintf(
		$init_script,
		wp_json_encode($params)
	);

	wp_add_inline_script(
		$handle,
		$script
	);

}

?>
