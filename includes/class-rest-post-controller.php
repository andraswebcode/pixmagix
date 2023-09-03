<?php

namespace AndrasWeb\PixMagix\Rest;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.0.0
 * @see WP_REST_Posts_Controller
 * @see WP_REST_Controller
 */

class Post_Controller extends \WP_REST_Posts_Controller {

	/**
	 * Constructor.
	 * For set the default post type: pixmagix.
	 * @since 1.1.0
	 * @access public
	 * @param string $post_type
	 */

	public function __construct($post_type = 'pixmagix'){
		parent::__construct($post_type);
		$this->meta = new Meta_Fields();
	}

	/**
	 * Retrieves the item schema.
	 * This post type has only one status: publish.
	 * @since 1.0.0
	 * @access public
	 * @return array Item schema.
	 */

	public function get_item_schema(){
		$schema = parent::get_item_schema();
		$schema['properties']['status']['enum'] = array('publish');
		return $schema;
	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */

	public function get_items($request){
		if (!current_user_can('read_others_pixmagixs')){
			$request['author'] = get_current_user_id();
		}
		return parent::get_items($request);
	}

	/**
	 * The registered metas are very important things for working this plugin well.
	 * So here we validate these before save project to the database at all.
	 * @since 1.0.0
	 * @access public
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */

	public function create_item($request){
		$meta_fields = $this->meta->get_field_schema();
		$validate = rest_validate_value_from_schema((array) $request['meta'], $meta_fields);
		if (is_wp_error($validate)){
			return $validate;
		}
		return parent::create_item($request);
	}

	/**
	 * If you can only read, but not edit others' project,
	 * and you try to save that, you will create a copy of that project for you.
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */

	public function update_item($request){

		if (!current_user_can('edit_others_pixmagixs')){
			unset($request['id']);
			return $this->create_item($request);
		}

		return parent::update_item($request);

	}

	/**
	 * Retrieve the new list for react state so that it can be updated easily after deleting an item.
	 * @since 1.0.0
	 * @access public
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */

	public function delete_item($request){

		$page = $request->get_param('page');
		$page = absint($page);
		$author = get_current_user_id();

		// PixMagix project can not be move to trash, instead can be deleted permanently.
		add_filter("rest_{$this->post_type}_trashable", '__return_false');

		$response = parent::delete_item($request);

		if (empty($page)){
			return $response;
		}

		$items_request = new \WP_Rest_Request('GET', '/' . $this->namespace . '/' . $this->rest_base);
		$params = array(
			'page' => $page,
			'per_page' => 12
		);

		if (!current_user_can('read_others_pixmagixs')){
			$params['author'] = get_current_user_id();
		}

		$items_request->set_query_params($params);
		$items_response = $this->get_items($items_request);
		$items = array();

		if (is_wp_error($items_response)){
			return $items_response;
		} else {
			$items = $items_response->get_data();
		}

		$max_pages = absint($items_response->get_headers()['X-WP-TotalPages'] ?? 1);
		$page = min($page, $max_pages);
		$data = $response->get_data();
		$data = array_merge(
			array(
				'max_pages' => $max_pages,
				'page' => $page,
				'items' => $items
			),
			$data
		);

		$response->set_data($data);

		return $response;

	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_Post $post
	 * @return boolean
	 */

	public function check_read_permission($post){

		if (!current_user_can('read_others_pixmagixs') && absint($post->post_author) !== get_current_user_id()){
			return false;
		}

		return parent::check_read_permission($post);

	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_Post $post
	 * @return boolean
	 */

	public function check_delete_permission($post){

		if (!current_user_can('delete_others_pixmagixs') && absint($post->post_author) !== get_current_user_id()){
			return false;
		}

		return parent::check_delete_permission($post);

	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return true|WP_Error
	 */

	public function update_item_permissions_check($request){

		if (!current_user_can('edit_others_pixmagixs') && $request['author'] !== get_current_user_id()){
			unset($request['id']);
			$request['author'] = get_current_user_id();
			return $this->create_item_permissions_check($request);
		}

		return parent::update_item_permissions_check($request);

	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_Post $item
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response
	 */

	function prepare_item_for_response($item, $request){

		$response = parent::prepare_item_for_response($item, $request);
		$data = $response->get_data();
		$caption = $item->post_title;
		$author = absint($item->post_author);
		$current_user = get_current_user_id();
		$author_name = get_the_author_meta('display_name', $author);

		// The captions in items list has this structure: 'title' by 'author'.
		// Only when we can see others' projects, but the project is not ours.
		if ($author !== $current_user){
			if (!empty($caption)){
				$caption = sprintf(
					__('%s by %s', 'pixmagix'),
					$caption,
					$author_name
				);
			} else {
				$caption = sprintf(
					__('Created by %s', 'pixmagix'),
					$author_name
				);
			}
		}

		$new_data = array_merge(
			$data,
			array(
				'caption' => esc_html($caption)
			)
		);

		$response->set_data($new_data);

		return $response;

	}

}

?>
