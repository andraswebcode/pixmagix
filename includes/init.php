<?php

namespace AndrasWeb\PixMagix;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Initialize plugin, and load components.
 * @since 1.0.0
 * @final
 */

final class Plugin {

	/**
	 * Holds the singleton instance of this object.
	 * @since 1.0.0
	 * @static
	 * @access private
	 * @var AndrasWeb\PixMagix\Plugin
	 */

	private static $instance;

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @access public
	 */

	public function __construct(){
		add_action('plugins_loaded', array($this, 'init'), 99, 0);
	}

	/**
	 * Initialize plugin.
	 * @since 1.0.0
	 * @access public
	 */

	public function init(){
		$this->load_files();
		$this->init_components();
	}

	/**
	 * Load files.
	 * @since 1.0.0
	 * @access public
	 */

	public function load_files(){
		require_once PIXMAGIX_DIR . 'includes/class-rest-meta-fields.php';
		require_once PIXMAGIX_DIR . 'includes/class-rest-post-controller.php';
		require_once PIXMAGIX_DIR . 'includes/utils.php';
		require_once PIXMAGIX_DIR . 'includes/utils-users.php';
		require_once PIXMAGIX_DIR . 'includes/editor.php';
		require_once PIXMAGIX_DIR . 'includes/settings.php';
		require_once PIXMAGIX_DIR . 'includes/admin.php';
		require_once PIXMAGIX_DIR . 'includes/media.php';
		require_once PIXMAGIX_DIR . 'includes/post-type.php';
		require_once PIXMAGIX_DIR . 'includes/rest-api.php';
	}

	/**
	 *
	 * @since 1.0.0
	 * @access public
	 */

	public function init_components(){
		$admin = new Admin();
		$media = new Media();
		$post_type = new Post_Type();
		$rest_api = new Rest_Api();
	}

	/**
	 *
	 * @since 1.0.0
	 * @static
	 * @access public
	 * @return AndrasWeb\PixMagix\Plugin
	 */

	public static function run(){
		if (!isset(self::$instance)){
			self::$instance = new self();
		}
		return self::$instance;
	}

}

?>
