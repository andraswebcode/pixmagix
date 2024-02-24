<?php

namespace AndrasWeb\PixMagix;

use function AndrasWeb\PixMagix\Editor\register_dependencies;
use function AndrasWeb\PixMagix\Editor\enqueue_styles;
use function AndrasWeb\PixMagix\Editor\enqueue_scripts;
use function AndrasWeb\PixMagix\Editor\initialize;
use function AndrasWeb\PixMagix\Utils\get_asset_url;
use function AndrasWeb\PixMagix\Utils\get_upload_url;
use function AndrasWeb\PixMagix\Utils\get_media_info;
use function AndrasWeb\PixMagix\Utils\get_months_dropdown_items;
use function AndrasWeb\PixMagix\Utils\get_categories_dropdown_items;
use function AndrasWeb\PixMagix\Utils\admin_editor_url;
use function AndrasWeb\PixMagix\Utils\admin_page_url;
use function AndrasWeb\PixMagix\Utils\get_projects;
use function AndrasWeb\PixMagix\Utils\get_project;
use function AndrasWeb\PixMagix\Utils\get_authenticated_free_image_platforms;
use function AndrasWeb\PixMagix\Utils\get_authenticated_ai_platforms;
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
	}

	/**
	 * Add menus to wp admin.
	 * @since 1.0.0
	 * @access public
	 */

	public function add_menu_pages(){

		global $submenu;

		add_menu_page(
			esc_html__('Projects - PixMagix', 'pixmagix'),
			esc_html__('PixMagix', 'pixmagix'),
			'edit_pixmagix',
			'pixmagix',
			__NAMESPACE__ . '\\Editor\render',
			get_asset_url('img', 'logo', 'svg', false)
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Editor - PixMagix', 'pixmagix'),
			esc_html__('Add New', 'pixmagix'),
			'edit_pixmagix',
			'pixmagix_editor',
			__NAMESPACE__ . '\\Editor\render'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Templates - PixMagix', 'pixmagix'),
			esc_html__('Templates', 'pixmagix'),
			'edit_pixmagix',
			'pixmagix_tmpls',
			__NAMESPACE__ . '\\Editor\render'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Free Images - PixMagix', 'pixmagix'),
			esc_html__('Free Images', 'pixmagix'),
			'upload_files',
			'pixmagix_freeimgs',
			__NAMESPACE__ . '\\Editor\render'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Image Generator - PixMagix', 'pixmagix'),
			esc_html__('Image Generator', 'pixmagix'),
			'upload_files',
			'pixmagix_imggen',
			__NAMESPACE__ . '\\Editor\render'
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Settings - PixMagix', 'pixmagix'),
			esc_html__('Settings', 'pixmagix'),
			'manage_options',
			'pixmagix_settings',
			__NAMESPACE__ . '\\Editor\render'
		);

		$submenu['pixmagix'][] = array(
			esc_html__('Support', 'pixmagix'),
			'read',
			'https://wordpress.org/support/plugin/pixmagix/'
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
			$search = isset($_GET['s']) ? sanitize_text_field($_GET['s']) : '';
			$category = isset($_GET['c']) ? absint($_GET['c']) : '';
			$status = isset($_GET['st']) ? sanitize_text_field($_GET['st']) : 'any';
			$date = isset($_GET['d']) ? absint($_GET['d']) : '';
			$author = isset($_GET['a']) ? absint($_GET['a']) : '';
			$projects = get_projects(
				array(
					'page' => $page,
					'search' => $search,
					'pixmagix_category' => $category,
					'status' => $status,
					'yearmonth' => $date,
					'author' => $author,
					'per_page' => 12
				),
				true
			);
			$items = $projects['items'];
			$max_pages = $projects['max_pages'];
			enqueue_styles(
				array(
					'handle' => 'pixmagix-projects',
					'src' => get_asset_url('css', 'projects.build', 'css')
				)
			);
			enqueue_scripts(
				array(
					'handle' => 'pixmagix-projects',
					'src' => get_asset_url('js', 'projects.build', 'js'),
					'l10n' => array(
						'new_url' => esc_url(admin_editor_url()),
						'projects_url' => esc_url(admin_page_url()),
						'project_dates' => get_months_dropdown_items(),
						'project_categories' => get_categories_dropdown_items(),
						'users' => get_users_dropdown_items()
					)
				)
			);
			initialize(
				'pixmagix-projects',
				array(
					'page' => $page,
					'maxPages' => absint($max_pages),
					'search' => esc_html($search),
					'category' => $category,
					'status' => esc_html($status),
					'date' => (string) $date,
					'author' => $author,
					'items' => $items
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_editor'){
			$project_id = isset($_GET['id']) ? absint($_GET['id']) : 0;
			$project = get_project($project_id);
			$image = $_GET['image'] ?? 0;
			$media = get_media_info($image);
			$l10n = array(
				'new_url' => esc_url(admin_editor_url()),
				'projects_url' => esc_url(admin_page_url()),
				'images_folder' => esc_url(get_asset_url('img', '', '', false)),
				'thumbnails_folder' => esc_url(get_upload_url('thumbnails')),
				'previews_folder' => esc_url(get_upload_url('previews')),
				'thumbnail_width' => absint(get_setting('thumbnail_width', 200)),
				'preview_width' => absint(get_setting('preview_width', 1280)),
				'project_dates' => get_months_dropdown_items(),
				'project_categories' => get_categories_dropdown_items(),
				'users' => get_users_dropdown_items(),
				'media_dates' => get_months_dropdown_items('attachment'),
				'free_image_platforms' => get_authenticated_free_image_platforms(),
				'ai_platforms' => get_authenticated_ai_platforms(),
				'archive_dates' => get_months_dropdown_items('pixmagix_ai_arch')
			);
			enqueue_styles(
				array(
					'handle' => 'pixmagix-editor',
					'src' => get_asset_url('css', 'editor.build', 'css')
				)
			);
			enqueue_scripts(
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
						'wp-hooks',
						'pixmagix-fabric',
						'pixmagix-elements'
					),
					'l10n' => $l10n
				)
			);
			initialize(
				'pixmagix-editor',
				array_merge(
					$project,
					array(
						'media' => $media
					)
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_tmpls'){
			$filters = array('search', 'category', 'orientation');
			$params = array(
				'page' => isset($_GET['p']) ? absint($_GET['p']) : 1
			);
			foreach ($filters as $key){
				$params[$key] = isset($_GET[$key]) ? sanitize_text_field($_GET[$key]) : '';
			}
			$items_request = new \WP_Rest_Request('GET', '/pixmagix/v1/templates');
			$items_request->set_query_params($params);
			$items_response = rest_get_server()->dispatch($items_request);
			$data = $items_response->get_data();
			enqueue_styles(
				array(
					'handle' => 'pixmagix-tmpls',
					'src' => get_asset_url('css', 'templates.build', 'css')
				)
			);
			enqueue_scripts(
				array(
					'handle' => 'pixmagix-tmpls',
					'src' => get_asset_url('js', 'templates.build', 'js'),
					'l10n' => array(
						'new_url' => esc_url(admin_editor_url()),
						'self_url' => esc_url(admin_page_url('tmpls'))
					)
				)
			);
			initialize(
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
				// Page is not in the foreach loop, because it has a different default value.
				'page' => isset($_GET['p']) ? absint($_GET['p']) : 1
			);
			foreach ($filters as $key){
				$params[$key] = isset($_GET[$key]) ? sanitize_text_field($_GET[$key]) : '';
			}
			$items_request = new \WP_Rest_Request('GET', '/pixmagix/v1/free_images');
			$items_request->set_query_params($params);
			$items_response = rest_get_server()->dispatch($items_request);
			$data = $items_response->get_data();
			enqueue_styles(
				array(
					'handle' => 'pixmagix-freeimgs',
					'src' => get_asset_url('css', 'free-images.build', 'css')
				)
			);
			enqueue_scripts(
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
			initialize(
				'pixmagix-freeimgs',
				array_merge(
					$params,
					array(
						'hasPixabayKey' => has_setting('pixabay_api_key'),
						'hasPexelsKey' => has_setting('pexels_api_key'),
						'hasUnsplashKey' => has_setting('unsplash_api_key'),
						'canEdit' => current_user_can('edit_pixmagix'),
						'items' => isset($data['items']) ? $data['items'] : array(),
						'maxPages' => isset($data['maxPages']) ? absint($data['maxPages']) : 1
					)
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_imggen'){
			$arch_id = absint($_GET['archive'] ?? 0);
			$archive = get_project($arch_id, 'pixmagix_ai_arch')['project'] ?? array();
			enqueue_styles(
				array(
					'handle' => 'pixmagix-image-generator',
					'src' => get_asset_url('css', 'image-generator.build', 'css')
				)
			);
			enqueue_scripts(
				array(
					'handle' => 'pixmagix-image-generator',
					'src' => get_asset_url('js', 'image-generator.build', 'js'),
					'l10n' => array(
						'new_url' => esc_url(admin_page_url('imggen')),
						'editor_url' => esc_url(admin_editor_url()),
						'archive_dates' => get_months_dropdown_items('pixmagix_ai_arch'),
						'users' => get_users_dropdown_items()
					)
				)
			);
			initialize(
				'pixmagix-image-generator',
				array_merge(
					$archive,
					array(
						'hasOpenAIKey' => has_setting('openai_api_key'),
						'hasStabilityAIKey' => has_setting('stabilityai_api_key')
					)
				)
			);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_settings'){
			enqueue_styles(
				array(
					'handle' => 'pixmagix-settings',
					'src' => get_asset_url('css', 'settings.build', 'css')
				)
			);
			enqueue_scripts(
				array(
					'handle' => 'pixmagix-settings',
					'src' => get_asset_url('js', 'settings.build', 'js'),
					'l10n' => array(
						'self_url' => esc_url(admin_page_url('settings'))
					)
				)
			);
			initialize(
				'pixmagix-settings',
				array_merge(
					get_all_settings(),
					array(
						'roles' => get_roles(),
						'tab' => isset($_GET['tab']) ? sanitize_text_field($_GET['tab']) : 'general'
					)
				)
			);
		}

	}

}

?>
