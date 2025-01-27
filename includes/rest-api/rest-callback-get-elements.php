<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Utils\get_json_data;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.7.0
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */

function get_elements($request){

	$search = sanitize_text_field($request->get_param('search'));
	$page = $request->get_param('page');
	$page = !empty($page) ? absint($page) : 1;
	$items = get_json_data('fa-icons');

	if (!empty($search)){
		$items = array_filter($items, function($item) use ($search){
			$label = $item['label'] ?? '';
			return (empty($search) || stripos($label, $search) !== false);
		});
	}

	$response = array(
		'items' => array_slice($items, $page * 12 - 12, 12),
		'maxPages' => ceil(count($items) / 12)
	);

	return new \WP_REST_Response($response);

}

?>
