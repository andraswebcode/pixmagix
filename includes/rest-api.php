<?php

namespace AndrasWeb\PixMagix;

use function AndrasWeb\PixMagix\Utils\get_filesystem;
use function AndrasWeb\PixMagix\Utils\get_upload_dir;
use function AndrasWeb\PixMagix\Utils\get_upload_url;
use function AndrasWeb\PixMagix\Utils\move_image_on_server;
use function AndrasWeb\PixMagix\Utils\delete_attachment_subsizes;
use function AndrasWeb\PixMagix\Utils\get_cropped_image_size;
use function AndrasWeb\PixMagix\Utils\get_json_data;
use function AndrasWeb\PixMagix\Utils\find_object;
use function AndrasWeb\PixMagix\Utils\get_file_extension;
use function AndrasWeb\PixMagix\Settings\get_setting;
use function AndrasWeb\PixMagix\Settings\update_settings;
use function AndrasWeb\PixMagix\Users\Utils\update_roles;

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
	 * The PixMagix API url.
	 * @since 1.4.0
	 * @access private
	 * @var string
	 */

	private $pixmagix_url = 'https://api.pixmagix.net/templates/';

	/**
	 * The Pixabay API url.
	 * @since 1.1.0
	 * @access private
	 * @var string
	 */

	private $pixabay_url = 'https://pixabay.com/api/';

	/**
	 * Holds the Pixabay API key.
	 * @since 1.1.0
	 * @access private
	 * @var string
	 */

	private $pixabay_key = '';

	/**
	 * The Pixabay API url.
	 * @since 1.2.0
	 * @access private
	 * @var string
	 */

	private $pexels_url = 'https://api.pexels.com/v1/curated/';

	/**
	 * Holds the Pixabay API key.
	 * @since 1.2.0
	 * @access private
	 * @var string
	 */

	private $pexels_key = '';

	/**
	 * The Unsplash API url.
	 * @since 1.1.0
	 * @access private
	 * @var string
	 */

	private $unsplash_url = 'https://api.unsplash.com/photos/';

	/**
	 * Holds the Unsplash API key.
	 * @since 1.1.0
	 * @access private
	 * @var string
	 */

	private $unsplash_key = '';

	/**
	 * The Unsplash API url.
	 * @since 1.1.0
	 * @access private
	 * @var string
	 */

	private $gfonts_url = 'https://www.googleapis.com/webfonts/v1/webfonts';

	/**
	 * Holds the Unsplash API key.
	 * @since 1.1.0
	 * @access private
	 * @var string
	 */

	private $gfonts_key = '';

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @access public
	 */

	public function __construct(){
		$this->set_api_keys();
		add_action('rest_api_init', array($this, 'register'), 99, 0);
	}

	/**
	 * Set up api keys.
	 * @since 1.1.0
	 * @access public
	 */

	public function set_api_keys(){
		$pixabay_key = sanitize_text_field(get_setting('pixabay_api_key'));
		$pexels_key = sanitize_text_field(get_setting('pexels_api_key'));
		$unsplash_key = sanitize_text_field(get_setting('unsplash_api_key'));
		$gfonts_key = sanitize_text_field(get_setting('gfonts_api_key'));
		if (!empty($pixabay_key)){
			$this->pixabay_key = $pixabay_key;
		}
		if (!empty($pexels_key)){
			$this->pexels_key = $pexels_key;
		}
		if (!empty($unsplash_key)){
			$this->unsplash_key = $unsplash_key;
		}
		if (!empty($gfonts_key)){
			$this->gfonts_key = $gfonts_key;
		}
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
				'callback' => array($this, 'export_image'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\upload_files_permission'
			)
		);

		register_rest_route(
			$this->namespace,
			'restore_image',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => array($this, 'restore_image'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\upload_files_permission'
			)
		);

		register_rest_route(
			$this->namespace,
			'templates',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array($this, 'get_templates'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\access_list_permission'
			)
		);

		register_rest_route(
			$this->namespace,
			'templates',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => array($this, 'save_template'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\create_projects_permission'
			)
		);

		register_rest_route(
			$this->namespace,
			'free_images',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array($this, 'get_free_images'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\access_list_permission'
			)
		);

		register_rest_route(
			$this->namespace,
			'free_images',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => array($this, 'save_free_image'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\upload_files_permission'
			)
		);

		register_rest_route(
			$this->namespace,
			'fonts',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array($this, 'get_fonts'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\access_list_permission'
			)
		);

		register_rest_route(
			$this->namespace,
			'settings',
			array(
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => array($this, 'save_settings'),
				'permission_callback' => __NAMESPACE__ . '\\Rest\Utils\manage_options_permission'
			)
		);

	}

	/**
	 *
	 * @since 1.0.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function export_image($request){

		if (!current_user_can('upload_files')){
			return new \WP_Error(
				'not_allowed',
				esc_html__('Not Allowed to Upload Images.', 'pixmagix')
			);
		}

		if (!function_exists('wp_generate_attachment_metadata')){
			require_once ABSPATH . '/wp-admin/includes/image.php';
		}

		$filesystem = get_filesystem();
		$json = $request->get_json_params();
		$attachment_id = isset($json['mediaId']) ? intval($json['mediaId']) : 0;
		$image_data_url = isset($json['imageDataURL']) ? $json['imageDataURL'] : '';
		$image_data = $filesystem->get_contents('data://' . $image_data_url);
		$response = array(
			'success' => true
		);

		if (empty($image_data_url) || empty($image_data)){
			return new \WP_Error(
				'empty_data',
				esc_html__('Image Data is Missing', 'pixmagix')
			);
		}

		if (empty($attachment_id)){ // In case of creating a new attachment image.
			$filename = (isset($json['filename']) && !empty($json['filename'])) ? $json['filename'] : 'pixmagix';
			$extension = (isset($json['extension']) && !empty($json['extension'])) ? $json['extension'] : 'png';
			$filename = sanitize_file_name($filename . '.' . $extension);
			$title = isset($json['title']) ? sanitize_text_field($json['title']) : '';
			$alt = isset($json['alt']) ? sanitize_text_field($json['alt']) : '';
			$caption = isset($json['caption']) ? sanitize_textarea_field($json['caption']) : '';
			$description = isset($json['description']) ? sanitize_textarea_field($json['description']) : '';
			$upload_file = wp_upload_bits($filename, null, $image_data);
			if (isset($upload_file['error']) && !empty($upload_file['error'])){
				return new \WP_Error(
					'upload_failed',
					$upload_file['error']
				);
			}
			$attachment = array(
				'post_title' => $title,
				'post_content' => $description,
				'post_excerpt' => $caption,
				'meta_input' => array(
					'_wp_attachment_image_alt' => $alt
				),
				'post_mime_type' => $upload_file['type']
			);
			$attachment_id = wp_insert_attachment($attachment, $upload_file['file']);
			$attachment_data = wp_generate_attachment_metadata($attachment_id, $upload_file['file']);
			wp_update_attachment_metadata($attachment_id, $attachment_data);
			$response['media'] = array(
				'id' => absint($attachment_id),
				'url' => esc_url(wp_get_attachment_url($attachment_id))
			);
		} else { // In case of replacement of an original media image.
			$original_image_path = wp_get_original_image_path($attachment_id);
			$filename = basename($original_image_path);
			$meta_data = wp_get_attachment_metadata($attachment_id);
			$revision_folder = get_upload_dir('revisions');
			$revision_url = get_upload_url('revisions');
			$time = str_replace($filename, '', $meta_data['file']);
			$revision_url = $revision_url . $time . $filename;
			if (empty(get_post_meta($attachment_id, 'pixmagix_revision_url', true))){
				if (wp_mkdir_p($revision_folder . $time) === false){
					return new \WP_Error(
						'upload_failed',
						esc_html__('Revision Folder Cannot be Created', 'pixmagix')
					);
				}
				if ($filesystem->move($original_image_path, $revision_folder . $time . $filename) === false){
					return new \WP_Error(
						'upload_failed',
						esc_html__('Revision Cannot be Created', 'pixmagix')
					);
				}
			} else {
				wp_delete_file($original_image_path);
			}
			delete_attachment_subsizes($attachment_id);
			add_filter('wp_unique_filename', __NAMESPACE__ . '\\Rest\Utils\unique_filename', 99, 6);
			$upload_file = wp_upload_bits($filename, null, $image_data, $time);
			remove_filter('wp_unique_filename', __NAMESPACE__ . '\\Rest\Utils\unique_filename', 99);
			if (isset($upload_file['error']) && !empty($upload_file['error'])){
				return new \WP_Error(
					'upload_failed',
					$upload_file['error']
				);
			}
			wp_generate_attachment_metadata($attachment_id, $upload_file['file']);
			// To update date modified.
			wp_update_post(
				array(
					'ID' => $attachment_id
				)
			);
			update_post_meta($attachment_id, 'pixmagix_revision_url', esc_url_raw($revision_url));
			$response['revision_url'] = esc_url($revision_url);
		}

		return new \WP_REST_Response($response);

	}

	/**
	 *
	 * @since 1.0.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function restore_image($request){

		if (!current_user_can('upload_files')){
			return new \WP_Error(
				'not_allowed',
				esc_html__('Not Allowed to Upload Images.', 'pixmagix')
			);
		}

		$json = $request->get_json_params();
		$attachment_id = isset($json['mediaId']) ? intval($json['mediaId']) : 0;

		if (empty($attachment_id)){
			return new \WP_Error(
				'missing_parameter',
				esc_html__('ID is Missing.', 'pixmagix'),
				array(
					'status' => 404
				)
			);
		}

		if (!function_exists('wp_generate_attachment_metadata')){
			require_once ABSPATH . '/wp-admin/includes/image.php';
		}

		$filesystem = get_filesystem();
		$original_image_path = wp_get_original_image_path($attachment_id);
		$filename = basename($original_image_path);
		$meta_data = wp_get_attachment_metadata($attachment_id);
		$revision_folder = get_upload_dir('revisions');
		$time = str_replace($filename, '', $meta_data['file']);
		$revision_path = $revision_folder . $time . $filename;

		if (!file_exists($revision_path)){
			return new \WP_Error(
				'file_missing',
				esc_html__('Revision File is Missing', 'pixmagix')
			);
		}

		$image_data = $filesystem->get_contents($revision_path);
		wp_delete_file($revision_path);
		wp_delete_file($original_image_path);
		delete_attachment_subsizes($attachment_id);
		add_filter('wp_unique_filename', __NAMESPACE__ . '\\Rest\Utils\unique_filename', 99, 6);
		$upload_file = wp_upload_bits($filename, null, $image_data, $time);
		remove_filter('wp_unique_filename', __NAMESPACE__ . '\\Rest\Utils\unique_filename', 99);

		if (isset($upload_file['error']) && !empty($upload_file['error'])){
			return new \WP_Error(
				'upload_failed',
				$upload_file['error']
			);
		}

		wp_generate_attachment_metadata($attachment_id, $upload_file['file']);
		// To update date modified.
		wp_update_post(
			array(
				'ID' => $attachment_id
			)
		);
		update_post_meta($attachment_id, 'pixmagix_revision_url', '');

		return new \WP_REST_Response(
			array(
				'success' => true
			)
		);

	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function get_templates($request){

		$search = sanitize_text_field($request->get_param('search'));
		$orientation = sanitize_text_field($request->get_param('orientation'));
		$category = sanitize_text_field($request->get_param('category'));
		$page = $request->get_param('page');
		$page = !empty($page) ? absint($page) : 1;
		$args = compact('search', 'orientation', 'category', 'page');
		$api_url = $this->pixmagix_url;
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

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function save_template($request){

		if (!current_user_can('upload_files')){
			return new \WP_Error(
				'not_allowed',
				esc_html__('Not Allowed to Upload Images.', 'pixmagix')
			);
		}

		if (!function_exists('download_url')){
			require_once ABSPATH . '/wp-admin/includes/file.php';
		}

		$json = $request->get_json_params();
		$title = $json['title'] ?? '';
		$description = $json['description'] ?? '';
		$width = $json['width'] ?? 0;
		$height = $json['height'] ?? 0;
		$background = $json['background'] ?? '';
		$thumbnail = $json['thumbnail'] ?? '';
		$preview = $json['preview'] ?? '';
		$layers = $json['layers'] ?? array();
		$body_params = array(
			'title' => sanitize_text_field($title),
			'content' => sanitize_textarea_field($description),
			'status' => 'private',
			'meta' => array(
				'pixmagix_project' => array(
					'canvasWidth' => absint($width),
					'canvasHeight' => absint($height),
					'canvasBackground' => is_array($background) ? $background : sanitize_hex_color($background),
					'thumbnail' => esc_url_raw($thumbnail),
					'preview' => esc_url_raw($preview),
					'layers' => array()
				)
			)
		);

		if (!empty($layers)){
			foreach ($layers as $layer){
				$type = $layer['type'] ?? '';
				if ($type === 'image'){
					// First we remove the src so that the src of the remote image is not saved
					// to avoid cross-origin errors on html5 canvas.
					// We will create new src for it below.
					$layer['src'] = '';
				}
				$body_params['meta']['pixmagix_project']['layers'][] = $layer;
			}
		}

		$post_request = new \WP_REST_Request('POST', 'wp/v2/pixmagix/');
		$post_request->set_body_params($body_params);
		$post_controller = new Rest\Post_Controller();
		$post_response = $post_controller->create_item($post_request);

		if (is_wp_error($post_response)){
			return $post_response;
		}

		$post_id = absint($post_response->get_data()['id'] ?? 0);
		$new_meta = $body_params['meta'];

		// Save, and move remote images to the layers folder.
		if ($post_id){
			foreach ($layers as $index => $layer){
				$type = $layer['type'] ?? '';
				if ($type === 'image'){
					$layer_id = $layer['id'] ?? '';
					$src = $layer['src'] ?? '';
					if (empty($src) || empty($layer_id)){
						continue;
					}
					$extension = get_file_extension($src, 'png');
					$tmp_name = download_url($src);
					if (is_wp_error($tmp_name)){
						return $tmp_name;
					}
					// Follow the structure of file names inside layers directory.
					// @see Post_Type::create_images()
					$filename = 'layer-' . $post_id . '-' . $layer_id . '.' . $extension;
					$new_src = move_image_on_server($tmp_name, 'layers', $filename);
					if ($new_src){
						$new_meta['pixmagix_project']['layers'][$index]['src'] = $new_src;
					} else {
						return new \WP_Error();
					}
				}
			}
		}

		$meta_fields = new Rest\Meta_Fields();
		$update_meta = $meta_fields->update_value($new_meta, $post_id);

		if (is_wp_error($update_meta)){
			return $update_meta;
		}

		return $post_response;

	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function get_free_images($request){

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
		$key = $platform . '_key';
		$url = $platform . '_url';
		$api_key = $this->$key;

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
		$api_url = $this->$url;
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

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function save_free_image($request){

		if (!current_user_can('upload_files')){
			return new \WP_Error(
				'not_allowed',
				esc_html__('Not Allowed to Upload Images.', 'pixmagix')
			);
		}

		if (!function_exists('download_url')){
			require_once ABSPATH . '/wp-admin/includes/file.php';
		}
		if (!file_exists('media_handle_sideload')){
			require_once ABSPATH . '/wp-admin/includes/media.php';
			require_once ABSPATH . '/wp-admin/includes/image.php';
		}

		$src = esc_url_raw($request->get_param('src'));

		if (!is_string($src) || empty($src)){
			return new \WP_Error();
		}

		$extension = get_file_extension($src, 'jpg');
		$filename = $request->get_param('filename');
		$filename = !empty($filename) ? sanitize_text_field($filename . '.' . $extension) : 'pixmagix.jpg';
		$tmp_name = download_url($src);

		if (is_wp_error($tmp_name)){
			return $tmp_name;
		}

		$file_array = array(
			'name' => $filename,
			'tmp_name' => $tmp_name
		);
		$id = media_handle_sideload($file_array, 0);

		if (is_wp_error($id)){
			@unlink($tmp_name);
			return $id;
		}

		$title = sanitize_text_field($request->get_param('title'));
		$description = sanitize_textarea_field($request->get_param('description'));
		$caption = sanitize_textarea_field($request->get_param('caption'));
		$alt = sanitize_text_field($request->get_param('alt'));
		$id = wp_update_post(
			array(
				'ID' => $id,
				'post_title' => $title,
				'post_content' => $description,
				'post_excerpt' => $caption,
				'meta_input' => array(
					'_wp_attachment_image_alt' => $alt
				),
			),
			true
		);

		if (is_wp_error($id)){
			return $id;
		}

		return new \WP_REST_Response(
			array(
				'mediaId' => absint($id)
			)
		);

	}

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function get_fonts($request){

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

		if (empty($this->gfonts_key)){
			$items = get_json_data('gfonts');
		} else {
			$args = array(
				'key' => $this->gfonts_key,
				'sort' => 'popularity'
			);
			$api_url = add_query_arg($args, $this->gfonts_url);
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

	/**
	 *
	 * @since 1.1.0
	 * @access public
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */

	public function save_settings($request){

		$settings = $request->get_json_params();
		$roles_success = false;

		if (empty($settings)){
			return new \WP_Error();
		}

		if (isset($settings['roles'])){
			$roles_success = update_roles($settings['roles']);
			unset($settings['roles']);
		}

		$settings_success = update_settings($settings);

		return new \WP_REST_Response(
			array(
				'settings_success' => $settings_success,
				'roles_success' => $roles_success
			)
		);

	}

}

?>
