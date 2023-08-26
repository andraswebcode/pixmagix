<?php

namespace AndrasWeb\PixMagix\Editor;

use function AndrasWeb\PixMagix\Utils\get_asset_url;
use function AndrasWeb\PixMagix\Utils\admin_editor_url;
use function AndrasWeb\PixMagix\Utils\admin_page_url;
use function AndrasWeb\PixMagix\Utils\count_project_pages;
use function AndrasWeb\PixMagix\Utils\get_upload_url;
use function AndrasWeb\PixMagix\Utils\get_months_dropdown_items;
use function AndrasWeb\PixMagix\Utils\get_json_data;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Render div in pages for react app.
 * @since 1.0.0
 */

function render_page(){
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
 * Enqueue styles, and scripts for editor.
 * @since 1.0.0
 */

function enqueue_editor_scripts(){

	wp_enqueue_style(
		'pixmagix-editor',
		get_asset_url('css', 'editor.build', 'css'),
		array(),
		PIXMAGIX_VERSION
	);

	wp_enqueue_script(
		'pixmagix-editor',
		get_asset_url('js', 'editor.build', 'js'),
		array(
			'react',
			'react-dom',
			'lodash',
			'wp-dom-ready',
			'wp-api-fetch',
			'wp-i18n',
			'pixmagix-fabric',
			'pixmagix-elements'
		),
		PIXMAGIX_VERSION
	);

	wp_localize_script(
		'pixmagix-editor',
		'pixmagixGlobals',
		array(
			'new_url' => esc_url(admin_editor_url()),
			'projects_url' => esc_url(admin_page_url()),
			'images_folder' => esc_url(get_asset_url('img', '', '', false)),
			'thumbnails_folder' => esc_url(get_upload_url('thumbnails')),
			'project_dates' => get_months_dropdown_items(),
			'media_dates' => get_months_dropdown_items('attachment'),
			'fa_icons' => get_json_data('fa-icons')
		)
	);

	wp_set_script_translations('pixmagix-editor', 'pixmagix', PIXMAGIX_DIR . 'languages');

}

/**
 * Initialize editor.
 * @since 1.0.0
 * @param int $project_id
 * @param int $attachment_id
 */

function initialize_editor($project_id = 0, $attachment_id = 0){

	$init_script = <<<JS
		(function(){
			wp.domReady(function(){
				pixmagixEditor.initialize(%d, '%s', %s, %s);
			});
		})();
	JS;
	$project_id = absint($project_id);
	$title = $project_id ? get_the_title($project_id) : '';
	$project = $project_id ? get_post_meta($project_id, 'pixmagix_project', true) : array(
		'layers' => array()
	);
	$attachment_id = absint($attachment_id);
	$attachment_src = wp_get_attachment_image_src($attachment_id, 'full_size');
	$revision_url = get_post_meta($attachment_id, 'pixmagix_revision_url', true);
	$media = array(
		'id' => $attachment_id,
		'url' => isset($attachment_src[0]) ? $attachment_src[0] : '',
		'width' =>  isset($attachment_src[1]) ? $attachment_src[1] : 0,
		'height' => isset($attachment_src[2]) ? $attachment_src[2] : 0,
		'revision' => !empty($revision_url) ? $revision_url : ''
	);

	$script = sprintf(
		$init_script,
		$project_id,
		esc_html($title),
		wp_json_encode($project),
		wp_json_encode($media)
	);

	wp_add_inline_script(
		'pixmagix-editor',
		$script
	);

}

/**
 * Enqueue styles, and scripts for projects list.
 * @since 1.0.0
 */

function enqueue_projects_scripts(){

	wp_enqueue_style(
		'pixmagix-projects',
		get_asset_url('css', 'projects.build', 'css'),
		array(),
		PIXMAGIX_VERSION
	);

	wp_enqueue_script(
		'pixmagix-projects',
		get_asset_url('js', 'projects.build', 'js'),
		array(
			'react',
			'react-dom',
			'lodash',
			'wp-dom-ready',
			'wp-api-fetch',
			'wp-i18n',
			'pixmagix-elements'
		),
		PIXMAGIX_VERSION
	);

	wp_localize_script(
		'pixmagix-projects',
		'pixmagixGlobals',
		array(
			'new_url' => esc_url(admin_editor_url()),
			'projects_url' => esc_url(admin_page_url()),
			'project_dates' => get_months_dropdown_items()
		)
	);

	wp_set_script_translations('pixmagix-projects', 'pixmagix', PIXMAGIX_DIR . 'languages');

}


/**
 * Initialize projects list.
 * @since 1.0.0
 * @param int $page
 * @param string $search
 */

function initialize_projects($page = 1, $search = ''){

	$init_script = <<<JS
		(function(){
			wp.domReady(function(){
				pixmagixEditor.initialize(%d, %d, '%s', %s);
			});
		})();
	JS;
	$page = absint($page);
	$max_pages = absint(count_project_pages());
	$search = esc_html($search);
	$items_request = new \WP_Rest_Request('GET', '/wp/v2/pixmagix');
	$items_request->set_query_params(
		array(
			'author' => get_current_user_id(),
			'page' => $page,
			'search' => $search,
			'per_page' => 12
		)
	);
	$items_response = rest_get_server()->dispatch($items_request);
	$data = $items_response->get_data();
	$items_list = array();

	if (isset($data['message'])){
		$items_list[] = $data['message'];
	} else {
		foreach ($data as $item){
			$items_list[] = array(
				'id' => absint($item['id']),
				'title' => (isset($item['title']) && isset($item['title']['rendered'])) ? esc_html($item['title']['rendered']) : '',
				'project' => (isset($item['meta']) && isset($item['meta']['pixmagix_project'])) ? $item['meta']['pixmagix_project'] : array()
			);
		}
	}

	$script = sprintf(
		$init_script,
		$page,
		$max_pages,
		$search,
		wp_json_encode($items_list)
	);

	wp_add_inline_script(
		'pixmagix-projects',
		$script
	);

}

?>
