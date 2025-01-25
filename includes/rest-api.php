<?php

namespace AndrasWeb\PixMagix;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Register rest routes.
 * @since 1.0.0
 * @final
 */

final class Rest_Api {

	/**
	 * Namespace of api.
	 * @since 1.0.0
	 * @access private
	 * @var string
	 */

	private $namespace = 'pixmagix/v1';

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @access public
	 */

	public function __construct(){
		add_action('rest_api_init', array($this, 'register'), 99, 0);
	}

	/**
	 * Register routes.
	 * @since 1.0.0
	 * @access public
	 */

	public function register(){

		register_rest_route(
			$this->namespace,
			'export_image',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\export_image',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\upload_files'
			)
		);

		register_rest_route(
			$this->namespace,
			'restore_image',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\restore_image',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\upload_files'
			)
		);

		register_rest_route(
			$this->namespace,
			'free_images',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\get_free_images',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\access_list'
			)
		);

		register_rest_route(
			$this->namespace,
			'free_images',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\save_free_image',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\upload_files'
			)
		);

		register_rest_route(
			$this->namespace,
			'elements',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\get_elements',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\access_list'
			)
		);

		register_rest_route(
			$this->namespace,
			'fonts',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\get_fonts',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\access_list'
			)
		);

		register_rest_route(
			$this->namespace,
			'settings',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\save_settings',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\manage_options'
			)
		);

		register_rest_route(
			$this->namespace,
			'generate_image',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\generate_image',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\generate_image'
			)
		);

		register_rest_route(
			$this->namespace,
			'modify_image',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\modify_image',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\generate_image'
			)
		);

		register_rest_route(
			$this->namespace,
			'export_ai_image',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => __NAMESPACE__ . '\\Rest\Callbacks\export_ai_image',
				'permission_callback' => __NAMESPACE__ . '\\Rest\Permissions\upload_files'
			)
		);

	}

}

?>
