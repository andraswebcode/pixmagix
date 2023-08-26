<?php

namespace AndrasWeb\PixMagix;

use function AndrasWeb\PixMagix\Utils\count_project_pages;

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

class Rest_Controller extends \WP_REST_Posts_Controller {

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
	 * Retrieve the new list for react state so that it can be update easily after deleting an item.
	 * @since 1.0.0
	 * @access public
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */

	public function delete_item($request){

		$page = $request->get_param('page');
		$author = !empty($request->get_param('author')) ? absint($request->get_param('author')) : get_current_user_id();
		$response = parent::delete_item($request);

		if (empty($page)){
			return $response;
		}

		$page = absint($page);
		$max_pages = count_project_pages();
		$page = ($max_pages < $page) ? $max_pages : $page;
		$items_request = new \WP_Rest_Request('GET', '/' . $this->namespace . '/' . $this->rest_base);
		$items_request->set_query_params(
			array(
				'author' => $author,
				'page' => $page,
				'per_page' => 12
			)
		);
		$items_response = rest_get_server()->dispatch($items_request);
		$items = array();

		if (!$items_response->is_error()){
			$items = $items_response->get_data();
		}

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

}

?>
