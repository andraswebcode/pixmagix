<?php

namespace AndrasWeb\PixMagix;

use function AndrasWeb\PixMagix\Editor\register_dependencies;
use function AndrasWeb\PixMagix\Editor\enqueue_fonts;
use function AndrasWeb\PixMagix\Editor\enqueue_admin_styles;
use function AndrasWeb\PixMagix\Editor\enqueue_admin_scripts;
use function AndrasWeb\PixMagix\Editor\initialize_admin_page;
use function AndrasWeb\PixMagix\Utils\get_asset_url;
use function AndrasWeb\PixMagix\Utils\get_upload_url;
use function AndrasWeb\PixMagix\Utils\get_months_dropdown_items;
use function AndrasWeb\PixMagix\Utils\admin_editor_url;
use function AndrasWeb\PixMagix\Utils\admin_page_url;
use function AndrasWeb\PixMagix\Utils\get_json_data;
use function AndrasWeb\PixMagix\Utils\get_project_data;
use function AndrasWeb\PixMagix\Users\Utils\get_roles;
use function AndrasWeb\PixMagix\Users\Utils\get_users_dropdown_items;
use function AndrasWeb\PixMagix\Settings\has_setting;
use function AndrasWeb\PixMagix\Settings\get_setting;
use function AndrasWeb\PixMagix\Settings\get_all_settings;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Handle pages, scripts, and more in admin dashboard.
 * @since 1.0.0
 * @final
 */

final class Admin {

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @access public
	 */

	public function __construct(){
		if (!is_admin() || !is_user_logged_in()){
			return;
		}
		add_action('admin_menu', array($this, 'add_menu_pages'), 99, 0);
		add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'), 99, 1);
		add_filter('admin_body_class', array($this, 'body_classes'), 99, 1);
	}

	/**
	 * Add menus to wp admin.
	 * @since 1.0.0
	 * @access public
	 */

	public function add_menu_pages(){
		add_menu_page(
			esc_html__('Projects - PixMagix', 'pixmagix'),
			esc_html__('PixMagix', 'pixmagix'),
			'edit_pixmagix',
			'pixmagix',
			__NAMESPACE__ . '\\Editor\render_page',
			get_asset_url('img', 'logo', 'svg', false)
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Editor - PixMagix', 'pixmagix'),
			esc_html__('Add New', 'pixmagix'),
			'edit_pixmagix',
			'pixmagix_editor',
			__NAMESPACE__ . '\\Editor\render_page'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Templates - PixMagix', 'pixmagix'),
			esc_html__('Templates', 'pixmagix'),
			'edit_pixmagix',
			'pixmagix_tmpls',
			__NAMESPACE__ . '\\Editor\render_page'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Free Images - PixMagix', 'pixmagix'),
			esc_html__('Free Images', 'pixmagix'),
			'upload_files',
			'pixmagix_freeimgs',
			__NAMESPACE__ . '\\Editor\render_page'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Fonts - PixMagix', 'pixmagix'),
			esc_html__('Fonts', 'pixmagix'),
			'manage_options',
			'pixmagix_fonts',
			__NAMESPACE__ . '\\Editor\render_page'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Settings - PixMagix', 'pixmagix'),
			esc_html__('Settings', 'pixmagix'),
			'manage_options',
			'pixmagix_settings',
			__NAMESPACE__ . '\\Editor\render_page'
		);
	}

	/**
	 * Enqueue styles, and scripts for admin pages.
	 * @since 1.0.0
	 * @access public
	 * @param string $hook_suffix
	 */

	public function enqueue_scripts($hook_suffix){

		register_dependencies();

		if ($hook_suffix === 'toplevel_page_pixmagix'){
			$page = isset($_GET['p']) ? absint($_GET['p']) : 1;
			$search = isset($_GET['s']) ? esc_html($_GET['s']) : '';
			$date = isset($_GET['d']) ? absint($_GET['d']) : '';
			$author = isset($_GET['a']) ? absint($_GET['a']) : '';
			$items_request = new \WP_Rest_Request('GET', '/wp/v2/pixmagix');
			$items_request->set_query_params(
				array(
					'page' => $page,
					'search' => $search,
					'yearmonth' => $date,
					'author' => $author,
					'per_page' => 12
				)
			);
			$items_response = rest_get_server()->dispatch($items_request);
			$data = $items_response->get_data();
			$max_pages = absint($items_response->get_headers()['X-WP-TotalPages'] ?? 1);
			$items_list = array();
			if (isset($data['message'])){
				$items_list[] = $data['message'];
			} else {
				foreach ($data as $item){
					$items_list[] = array(
						'id' => absint($item['id']),
						'caption' => $item['caption'] ?? '',
						'project' => $item['meta']['pixmagix_project'] ?? array()
					);
				}
			}
			enqueue_admin_styles(
				array(
					'handle' => 'pixmagix-projects',
					'src' => get_asset_url('css', 'projects.build', 'css')
				)
			);
			enqueue_admin_scripts(
				array(
					'handle' => 'pixmagix-projects',
					'src' => get_asset_url('js', 'projects.build', 'js'),
					'l10n' => array(
						'new_url' => esc_url(admin_editor_url()),
						'projects_url' => esc_url(admin_page_url()),
						'project_dates' => get_months_dropdown_items(),
						'users' => get_users_dropdown_items()
					)
				)
			);
			initialize_admin_page(
				'pixmagix-projects',
				array(
					'page' => $page,
					'maxPages' => $max_pages,
					'search' => $search,
					'date' => (string) $date,
					'author' => $author,
					'items' => $items_list
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_editor'){
			$project_id = isset($_GET['id']) ? absint($_GET['id']) : 0;
			$title = $project_id ? get_the_title($project_id) : '';
			$project = get_project_data($project_id);
			$attachment_id = isset($_GET['image']) ? absint($_GET['image']) : 0;
			$attachment_src = wp_get_attachment_image_src($attachment_id, 'full_size');
			$revision_url = get_post_meta($attachment_id, 'pixmagix_revision_url', true);
			$media = array(
				'id' => $attachment_id,
				'url' => isset($attachment_src[0]) ? $attachment_src[0] : '',
				'width' =>  isset($attachment_src[1]) ? $attachment_src[1] : 0,
				'height' => isset($attachment_src[2]) ? $attachment_src[2] : 0,
				'revision' => !empty($revision_url) ? $revision_url : ''
			);
			enqueue_fonts();
			enqueue_admin_styles(
				array(
					'handle' => 'pixmagix-editor',
					'src' => get_asset_url('css', 'editor.build', 'css')
				)
			);
			enqueue_admin_scripts(
				array(
					'handle' => 'pixmagix-editor',
					'src' => get_asset_url('js', 'editor.build', 'js'),
					'deps' => array(
						'react',
						'react-dom',
						'lodash',
						'wp-dom-ready',
						'wp-api-fetch',
						'wp-i18n',
						'pixmagix-fabric',
						'pixmagix-elements'
					),
					'l10n' => array(
						'new_url' => esc_url(admin_editor_url()),
						'projects_url' => esc_url(admin_page_url()),
						'images_folder' => esc_url(get_asset_url('img', '', '', false)),
						'thumbnails_folder' => esc_url(get_upload_url('thumbnails')),
						'project_dates' => get_months_dropdown_items(),
						'users' => get_users_dropdown_items(),
						'media_dates' => get_months_dropdown_items('attachment'),
						'gfonts' => get_setting('google_fonts', array()),
						'wsfonts' => get_setting('web_safe_fonts', array()),
						'fa_icons' => get_json_data('fa-icons')
					)
				)
			);
			initialize_admin_page(
				'pixmagix-editor',
				array(
					'id' => $project_id,
					'title' => esc_html($title),
					'author' => absint(get_post_field('post_author', $project_id)),
					'project' => $project,
					'media' => $media
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_tmpls'){
			$filters = array('search', 'category', 'aspect');
			$params = array(
				'page' => isset($_GET['p']) ? absint($_GET['p']) : 1
			);
			foreach ($filters as $key){
				$params[$key] = isset($_GET[$key]) ? esc_html($_GET[$key]) : '';
			}
			$items_request = new \WP_Rest_Request('GET', '/pixmagix/v1/templates');
			$items_request->set_query_params($params);
			$items_response = rest_get_server()->dispatch($items_request);
			$data = $items_response->get_data();
			enqueue_admin_styles(
				array(
					'handle' => 'pixmagix-tmpls',
					'src' => get_asset_url('css', 'templates.build', 'css')
				)
			);
			enqueue_admin_scripts(
				array(
					'handle' => 'pixmagix-tmpls',
					'src' => get_asset_url('js', 'templates.build', 'js'),
					'l10n' => array(
						'new_url' => esc_url(admin_editor_url()),
						'self_url' => esc_url(admin_page_url('tmpls'))
					)
				)
			);
			initialize_admin_page(
				'pixmagix-tmpls',
				array_merge(
					$params,
					array(
						'items' => isset($data['items']) ? $data['items'] : array(),
						'maxPages' => isset($data['maxPages']) ? absint($data['maxPages']) : 1
					)
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_freeimgs'){
			$filters = array('search', 'type', 'orientation', 'category', 'color');
			$params = array(
				// Service, and page is not in the foreach loop, because it has a different default value.
				'service' => isset($_GET['service']) ? esc_html($_GET['service']) : 'pixabay',
				'page' => isset($_GET['p']) ? absint($_GET['p']) : 1
			);
			foreach ($filters as $key){
				$params[$key] = isset($_GET[$key]) ? esc_html($_GET[$key]) : '';
			}
			$items_request = new \WP_Rest_Request('GET', '/pixmagix/v1/free_images');
			$items_request->set_query_params($params);
			$items_response = rest_get_server()->dispatch($items_request);
			$data = $items_response->get_data();
			enqueue_admin_styles(
				array(
					'handle' => 'pixmagix-freeimgs',
					'src' => get_asset_url('css', 'free-images.build', 'css')
				)
			);
			enqueue_admin_scripts(
				array(
					'handle' => 'pixmagix-freeimgs',
					'src' => get_asset_url('js', 'free-images.build', 'js'),
					'l10n' => array(
						'new_url' => esc_url(admin_editor_url()),
						'self_url' => esc_url(admin_page_url('freeimgs')),
						'images_folder' => esc_url(get_asset_url('img', '', '', false))
					)
				)
			);
			initialize_admin_page(
				'pixmagix-freeimgs',
				array_merge(
					$params,
					array(
						'hasPixabayKey' => has_setting('pixabay_api_key'),
						'hasUnsplashKey' => has_setting('unsplash_api_key'),
						'items' => isset($data['items']) ? $data['items'] : array(),
						'maxPages' => isset($data['maxPages']) ? absint($data['maxPages']) : 1
					)
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_fonts'){
			$filters = array('search', 'category', 'language');
			$params = array(
				'collection' => isset($_GET['collection']) ? esc_html($_GET['collection']) : 'websafe',
				'page' => isset($_GET['p']) ? absint($_GET['p']) : 1
			);
			foreach ($filters as $key){
				$params[$key] = isset($_GET[$key]) ? esc_html($_GET[$key]) : '';
			}
			$items_request = new \WP_Rest_Request('GET', '/pixmagix/v1/fonts');
			$items_request->set_query_params($params);
			$items_response = rest_get_server()->dispatch($items_request);
			$data = $items_response->get_data();
			enqueue_admin_styles(
				array(
					'handle' => 'pixmagix-fonts',
					'src' => get_asset_url('css', 'fonts.build', 'css')
				)
			);
			enqueue_admin_scripts(
				array(
					'handle' => 'pixmagix-fonts',
					'src' => get_asset_url('js', 'fonts.build', 'js'),
					'l10n' => array(
						'self_url' => esc_url(admin_page_url('fonts'))
					)
				)
			);
			initialize_admin_page(
				'pixmagix-fonts',
				array_merge(
					$params,
					array(
						'hasGFontsKey' => has_setting('gfonts_api_key'),
						'gFonts' => get_setting('google_fonts', array()),
						'wsFonts' => get_setting('web_safe_fonts', array()),
						'items' => isset($data['items']) ? $data['items'] : array(),
						'maxPages' => isset($data['maxPages']) ? absint($data['maxPages']) : 1
					)
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_settings'){
			enqueue_admin_styles(
				array(
					'handle' => 'pixmagix-settings',
					'src' => get_asset_url('css', 'settings.build', 'css')
				)
			);
			enqueue_admin_scripts(
				array(
					'handle' => 'pixmagix-settings',
					'src' => get_asset_url('js', 'settings.build', 'js'),
					'l10n' => array(
						'self_url' => esc_url(admin_page_url('settings'))
					)
				)
			);
			initialize_admin_page(
				'pixmagix-settings',
				array_merge(
					get_all_settings(),
					array(
						'roles' => get_roles(),
						'tab' => isset($_GET['tab']) ? esc_html($_GET['tab']) : 'apikeys'
					)
				)
			);
		}

	}

	/**
	 *
	 * @since 1.0.0
	 * @access public
	 * @param string $classes
	 * @return string
	 */

	public function body_classes($classes){

		$screen = get_current_screen();

		if (empty($screen)){
			return $classes;
		}

		$screen_ids = array(
			'toplevel_page_pixmagix',
			'pixmagix_page_pixmagix_editor',
			'pixmagix_page_pixmagix_tmpls',
			'pixmagix_page_pixmagix_freeimgs',
			'pixmagix_page_pixmagix_fonts',
			'pixmagix_page_pixmagix_settings'
		);

		if (in_array($screen->id, $screen_ids)){
			return 'pixmagix-body ' . $classes;
		}

		return $classes;

	}

}

?>
