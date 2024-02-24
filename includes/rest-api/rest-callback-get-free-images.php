<?php

namespace AndrasWeb\PixMagix\Rest\Callbacks;

use function AndrasWeb\PixMagix\Settings\get_setting;
use function AndrasWeb\PixMagix\Utils\get_cropped_image_size;

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

function get_free_images($request){

	$platform = $request->get_param('platform');

	if (empty($platform)){
		return new \WP_Error(
			'missing_parameter',
			esc_html__('Platform is Missing', 'pixmagix'),
			array(
				'status' => 404
			)
		);
	}

	$search = sanitize_text_field($request->get_param('search'));
	$type = sanitize_text_field($request->get_param('type'));
	$orientation = sanitize_text_field($request->get_param('orientation'));
	$category = sanitize_text_field($request->get_param('category'));
	$color = sanitize_text_field($request->get_param('color'));
	$page = $request->get_param('page');
	$page = !empty($page) ? absint($page) : 1;
	$api_key = sanitize_text_field(get_setting($platform . '_api_key'));

	if (empty($api_key)){
		return new \WP_Error(
			'authorization_failed',
			esc_html__('API Key is Not Set', 'pixmagix'),
			array(
				'status' => rest_authorization_required_code()
			)
		);
	}

	$args = array(
		'page' => $page,
		'per_page' => 12
	);
	$free_img_urls = array(
	    'pixabay' => 'https://pixabay.com/api/',
	    'pexels' => 'https://api.pexels.com/v1/curated/',
	    'unsplash' => 'https://api.unsplash.com/photos/'
	);
	$api_url = $free_img_urls[$platform] ?? '';
	$remote_args = array(
		'timeout' => 20
	);

	if ($platform === 'pixabay'){
		$args = array_merge(
			$args,
			array_filter(
				array(
					'key' => $api_key,
					'q' => $search,
					'image_type' => $type,
					'category' => $category,
					'orientation' => $orientation,
					'colors' => $color
				)
			)
		);
	} elseif ($platform === 'pexels'){
		$api_url = $search ? str_replace('/curated', '/search', $api_url) : $api_url;
		$remote_args['headers'] = 'Authorization: ' . $api_key;
		$args = array_merge(
			$args,
			array_filter(
				array(
					'query' => $search,
					'orientation' => $orientation,
					'color' => $color
				)
			)
		);
	} elseif ($platform === 'unsplash'){
		$api_url = $search ? str_replace('/photos', '/search/photos', $api_url) : $api_url;
		$args = array_merge(
			$args,
			array_filter(
				array(
					'client_id' => $api_key,
					'query' => $search,
					'orientation' => $search ? $orientation : '',
					'color' => $search ? $color : ''
				)
			)
		);
	}

	$api_url = add_query_arg($args, $api_url);
	$remote_response = wp_remote_get($api_url, $remote_args);

	if (is_wp_error($remote_response)){
		return $remote_response;
	}

	$body = wp_remote_retrieve_body($remote_response);
	$data = json_decode($body, true);
	$response = array(
		'items' => array(),
		'maxPages' => 1
	);

	if (empty($data)){
		return new \WP_Error();
	}

	if ($platform === 'pixabay'){
		$items = isset($data['hits']) ? $data['hits'] : array();
		$total_items = isset($data['totalHits']) ? absint($data['totalHits']) : 12;
		foreach ($items as $item){
			$size_lg = get_cropped_image_size($item['imageWidth'], $item['imageHeight'], 1280);
			$size_md = get_cropped_image_size($item['imageWidth'], $item['imageHeight'], 640);
			$size_tm = get_cropped_image_size($item['imageWidth'], $item['imageHeight'], 150);
			$response['items'][] = array(
				'id' => absint($item['id']),
				'title' => esc_html($item['tags']),
				'author' => esc_html($item['user']),
				'thumbnail' => esc_url($item['previewURL']),
				'preview' => esc_url($item['webformatURL']),
				'sizes' => array(
					array(
						'label' => sprintf(
							esc_html__('Large - %dx%d', 'pixmagix'),
							$size_lg['width'],
							$size_lg['height']
						),
						'value' => esc_url($item['largeImageURL'])
					),
					array(
						'label' => sprintf(
							esc_html__('Medium - %dx%d', 'pixmagix'),
							$size_md['width'],
							$size_md['height']
						),
						'value' => esc_url($item['webformatURL'])
					),
					array(
						'label' => sprintf(
							esc_html__('Thumbnail - %dx%d', 'pixmagix'),
							$size_tm['width'],
							$size_tm['height']
						),
						'value' => esc_url($item['previewURL'])
					)
				)
			);
		}
		$response['maxPages'] = ceil($total_items / 12);
	} elseif ($platform === 'pexels'){
		$items = isset($data['photos']) ? $data['photos'] : array();
		$total_items = isset($data['total_results']) ? absint($data['total_results']) : 12;
		foreach ($items as $item){
			$size_lg = get_cropped_image_size($item['width'], $item['height'], 1280);
			$size_md = get_cropped_image_size($item['width'], $item['height'], 640);
			$size_tm = get_cropped_image_size($item['width'], $item['height'], 150);
			$response['items'][] = array(
				'id' => absint($item['id']),
				'title' => esc_html($item['alt']),
				'author' => esc_html($item['photographer']),
				'thumbnail' => esc_url($item['src']['tiny']),
				'preview' => esc_url(
					add_query_arg(
						array(
							'w' => 640,
							'h' => 640,
							'auto' => 'compress',
							'cs' => 'tinysrgb'
						),
						$item['src']['original']
					)
				),
				'sizes' => array(
					array(
						'label' => sprintf(
							esc_html__('Large - %dx%d', 'pixmagix'),
							$size_lg['width'],
							$size_lg['height']
						),
						'value' => esc_url(
							add_query_arg(
								array(
									'w' => 1280,
									'h' => 1280,
									'auto' => 'compress',
									'cs' => 'tinysrgb'
								),
								$item['src']['original']
							)
						)
					),
					array(
						'label' => sprintf(
							esc_html__('Medium - %dx%d', 'pixmagix'),
							$size_md['width'],
							$size_md['height']
						),
						'value' => esc_url(
							add_query_arg(
								array(
									'w' => 640,
									'h' => 640,
									'auto' => 'compress',
									'cs' => 'tinysrgb'
								),
								$item['src']['original']
							)
						)
					),
					array(
						'label' => sprintf(
							esc_html__('Thumbnail - %dx%d', 'pixmagix'),
							$size_tm['width'],
							$size_tm['height']
						),
						'value' => esc_url(
							add_query_arg(
								array(
									'w' => 150,
									'h' => 150,
									'auto' => 'compress',
									'cs' => 'tinysrgb'
								),
								$item['src']['original']
							)
						)
					)
				)
			);
		}
		$response['maxPages'] = ceil($total_items / 12);
	} elseif ($platform === 'unsplash'){
		$items = ($search && isset($data['results'])) ? $data['results'] : $data;
		$total_pages = isset($data['total_pages']) ? absint($data['total_pages']) : 10;
		foreach ($items as $item){
			$size_lg = get_cropped_image_size($item['width'], $item['height'], 1280);
			$size_md = get_cropped_image_size($item['width'], $item['height'], 640);
			$size_tm = get_cropped_image_size($item['width'], $item['height'], 150);
			$response['items'][] = array(
				'id' => esc_attr($item['id']),
				'title' => esc_html($item['alt_description']),
				'author' => esc_html($item['user']['name']),
				'thumbnail' => esc_url($item['urls']['thumb']),
				'preview' => esc_url(
					add_query_arg(
						array(
							'w' => 640,
							'h' => 640,
							'crop' => 'entropy',
							'fit' => 'max',
							'fm' => 'jpg'
						),
						$item['urls']['raw']
					)
				),
				'sizes' => array(
					array(
						'label' => sprintf(
							esc_html__('Large - %dx%d', 'pixmagix'),
							$size_lg['width'],
							$size_lg['height']
						),
						'value' => esc_url(
							add_query_arg(
								array(
									'w' => 1280,
									'h' => 1280,
									'crop' => 'entropy',
									'fit' => 'max',
									'fm' => 'jpg'
								),
								$item['urls']['raw']
							)
						)
					),
					array(
						'label' => sprintf(
							esc_html__('Medium - %dx%d', 'pixmagix'),
							$size_md['width'],
							$size_md['height']
						),
						'value' => esc_url(
							add_query_arg(
								array(
									'w' => 640,
									'h' => 640,
									'crop' => 'entropy',
									'fit' => 'max',
									'fm' => 'jpg'
								),
								$item['urls']['raw']
							)
						)
					),
					array(
						'label' => sprintf(
							esc_html__('Thumbnail - %dx%d', 'pixmagix'),
							$size_tm['width'],
							$size_tm['height']
						),
						'value' => esc_url(
							add_query_arg(
								array(
									'w' => 150,
									'h' => 150,
									'crop' => 'entropy',
									'fit' => 'max',
									'fm' => 'jpg'
								),
								$item['urls']['raw']
							)
						)
					)
				)
			);
		}
		$response['maxPages'] = $total_pages;
	}

	return new \WP_REST_Response($response);

}

?>
