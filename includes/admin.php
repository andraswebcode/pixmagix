<?php

namespace AndrasWeb\PixMagix;

use function AndrasWeb\PixMagix\Editor\register_dependencies;
use function AndrasWeb\PixMagix\Editor\enqueue_editor_scripts;
use function AndrasWeb\PixMagix\Editor\initialize_editor;
use function AndrasWeb\PixMagix\Editor\enqueue_projects_scripts;
use function AndrasWeb\PixMagix\Editor\initialize_projects;
use function AndrasWeb\PixMagix\Utils\get_asset_url;

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
			'upload_files',
			'pixmagix',
			__NAMESPACE__ . '\\Editor\render_page',
			get_asset_url('img', 'logo', 'svg', false)
		);
		add_submenu_page(
			'pixmagix',
			esc_html__('Editor - PixMagix', 'pixmagix'),
			esc_html__('Add New', 'pixmagix'),
			'upload_files',
			'pixmagix_editor',
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
			enqueue_projects_scripts();
			initialize_projects($page, $search);
		} elseif ($hook_suffix === 'pixmagix_page_pixmagix_editor'){
			$project_id = isset($_GET['id']) ? absint($_GET['id']) : 0;
			$attachment_id = isset($_GET['image']) ? absint($_GET['image']) : 0;
			enqueue_editor_scripts();
			initialize_editor($project_id, $attachment_id);
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
			'pixmagix_page_pixmagix_editor'
		);

		if (in_array($screen->id, $screen_ids)){
			return 'pixmagix-body ' . $classes;
		}

		return $classes;

	}

}

?>
