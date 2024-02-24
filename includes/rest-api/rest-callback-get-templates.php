<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.1.0
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */

function get_templates($request){

	$search = sanitize_text_field($request->get_param('search'));
	$orientation = sanitize_text_field($request->get_param('orientation'));
	$category = sanitize_text_field($request->get_param('category'));
	$page = $request->get_param('page');
	$page = !empty($page) ? absint($page) : 1;
	$args = compact('search', 'orientation', 'category', 'page');
	$api_url = 'https://api.pixmagix.net/templates/';
	$api_url = add_query_arg($args, $api_url);
	$remote_response = wp_remote_get($api_url);

	if (is_wp_error($remote_response)){
		return $remote_response;
	}

	$body = wp_remote_retrieve_body($remote_response);
	$data = json_decode($body, true);

	if (empty($data)){
		return new \WP_Error();
	}

	$items = isset($data['items']) ? $data['items'] : array();
	$max_pages = isset($data['totalPages']) ? absint($data['totalPages']) : 1;
	$response = array(
		'items' => $items,
		'maxPages' => $max_pages
	);

	return new \WP_REST_Response($response);

}

?>
