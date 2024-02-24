<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Utils\get_json_data;
use function AndrasWeb\PixMagix\Settings\get_setting;

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

function get_fonts($request){

	$gfonts_url = 'https://www.googleapis.com/webfonts/v1/webfonts';
	$gfonts_key = sanitize_text_field(get_setting('gfonts_api_key'));
	$page = $request->get_param('page');
	$page = !empty($page) ? absint($page) : 1;
	$search = $request->get_param('search');
	$category = $request->get_param('category');
	$language = $request->get_param('language');
	$variant = $request->get_param('variant');
	$has_filters = !empty(array_filter(array($search, $category, $language, $variant)));
	$response = array(
		'items' => array(),
		'maxPages' => 1
	);
	$items = array();

	if (empty($gfonts_key)){
		$items = get_json_data('gfonts');
	} else {
		$args = array(
			'key' => $gfonts_key,
			'sort' => 'popularity'
		);
		$api_url = add_query_arg($args, $gfonts_url);
		$remote_response = wp_remote_get($api_url);
		if (is_wp_error($remote_response)){
			return $remote_response;
		}
		$body = wp_remote_retrieve_body($remote_response);
		$data = json_decode($body, true);
		if (!empty($data) && isset($data['items'])){
			$items = $data['items'];
		}
	}
	if ($has_filters){
		$items = array_filter($items, function($item) use ($search, $category, $language, $variant){
			$fam = $item['family'] ?? '';
			$cat = $item['category'] ?? '';
			$s = (empty($search) || stripos($fam, $search) !== false);
			$c = (empty($category) || $category === $cat);
			// Filter by language, and variants is coming soon...
			return ($s && $c);
		});
	}

	$response['maxPages'] = ceil(count($items) / 12);
	$response['items'] = array_slice($items, $page * 12 - 12, 12);

	return new \WP_REST_Response($response);

}

?>
