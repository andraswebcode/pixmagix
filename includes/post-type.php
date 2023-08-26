<?php

namespace AndrasWeb\PixMagix;

use function AndrasWeb\PixMagix\Utils\get_filesystem;
use function AndrasWeb\PixMagix\Utils\get_json_data;
use function AndrasWeb\PixMagix\Utils\get_upload_dir;
use function AndrasWeb\PixMagix\Utils\get_upload_url;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Register PixMagix post type, and its post meta.
 * This post type is used to save graphics as a project.
 * As well as, we register 'pixmagix_revision_url' post meta
 * for attachments to can be restored.
 * @since 1.0.0
 * @final
 */

final class Post_Type {

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @access public
	 */

	public function __construct(){
		add_action('init', array($this, 'register'), 99, 0);
		add_action('rest_insert_pixmagix', array($this, 'create_images'), 99, 3);
		add_action('rest_delete_pixmagix', array($this, 'delete_images'), 99, 2);
		add_filter('rest_attachment_query', array($this, 'add_date_arg'), 99, 2);
		add_filter('rest_pixmagix_query', array($this, 'add_date_arg'), 99, 2);
	}

	/**
	 * Register the post type, and post metas.
	 * @since 1.0.0
	 * @access public
	 */

	public function register(){
		register_post_type(
			'pixmagix',
			array(
				'label' => esc_html__('PixMagix', 'pixmagix'),
				'public' => false,
				'show_in_rest' => true,
				'supports' => array(
					'title',
					'custom-fields',
					'author'
				),
				'rewrite' => false,
				'query_var' => false,
				'can_export' => false,
				'rest_controller_class' => __NAMESPACE__ . '\\Rest_Controller'
			)
		);
		register_post_meta(
			'pixmagix',
			'pixmagix_project',
			array(
				'type' => 'object',
				'single' => true,
				'show_in_rest' => array(
					'schema' => get_json_data('project-schema')
				)
			)
		);
		register_post_meta(
			'attachment',
			'pixmagix_revision_url',
			array(
				'type' => 'string',
				'single' => true,
				'show_in_rest' => true
			)
		);
	}

	/**
	 * Creating asset files for the saved projects such as thumbnail image, or optionally image layers.
	 * @since 1.0.0
	 * @access public
	 * @param WP_Post $post
	 * @param WP_REST_Request $request
	 * @param bool $creating
	 */

	public function create_images($post, $request, $creating){

		if (!current_user_can('upload_files')){
			return;
		}

		/**
		 * If you set it to false, please note that the base64 encoded images
		 * will be saved to the database that are - sometimes - extremely large strings.
		 * Some MySQL server configuration do not allow to save too large strings.
		 * @since 1.0.0
		 * @param bool $allow
		 */

		$allow_save_image = apply_filters('pixmagix_allow_save_layers_as_image', true);
		$has_meta = $request->has_param('meta');

		if (!$allow_save_image || !$has_meta){
			return;
		}

		$id = $post->ID;
		$meta = $request->get_param('meta');
		$project = isset($meta['pixmagix_project']) ? $meta['pixmagix_project'] : array();

		if (empty($project) || empty($id)){
			return;
		}

		$thumbnail = isset($project['thumbnail']) ? $project['thumbnail'] : '';
		$layers = isset($project['layers']) ? (array) $project['layers'] : array();
		$new_layers = array();

		// Remove old layers when we update a project.
		if (!$creating){
			$this->_remove_old_layers($id, $layers);
		}

		// Create thumbnail image
		if (strpos($thumbnail, ';base64,') !== false){
			$filename = 'project-' . $id . '.jpg';
			$meta['pixmagix_project']['thumbnail'] = $this->_create_image($thumbnail, 'thumbnails', $filename);
		}

		// Create layer images.
		if (!empty($layers)){
			foreach ($layers as $layer){
				if ($layer['type'] === 'image' && isset($layer['src']) && strpos($layer['src'], ';base64,') !== false){
					$layer_id = $layer['id'];
					$filename = 'layer-' . $id . '-' . $layer_id . '.png';
					$layer['src'] = $this->_create_image($layer['src'], 'layers', $filename);
				}
				$new_layers[] = $layer;
			}
		}

		$meta['pixmagix_project']['layers'] = $new_layers;

		$request->set_param('meta', $meta);

	}

	/**
	 * Delete all asset files on project deleted.
	 * @since 1.0.0
	 * @access public
	 * @param WP_Post $post
	 * @param WP_REST_Response $response
	 */

	public function delete_images($post, $response){

		if (!current_user_can('upload_files')){
			return;
		}

		$data = $response->get_data();
		$id = (isset($data['previous']) && isset($data['previous']['id'])) ? intval($data['previous']['id']) : 0;
		$meta = (isset($data['previous']) && isset($data['previous']['meta'])) ? $data['previous']['meta'] : array();
		$project = isset($meta['pixmagix_project']) ? $meta['pixmagix_project'] : array();
		$layers = isset($project['layers']) ? $project['layers'] : array();

		if (empty($id) || empty($project)){
			return;
		}

		$thumbnail = get_upload_dir('thumbnails', 'project-' . $id . '.jpg');
		if (file_exists($thumbnail)){
			wp_delete_file($thumbnail);
		}

		if (!empty($layers)){
			foreach ($layers as $layer){
				$layer_id = $layer['id'];
				$file = get_upload_dir('layers', 'layer-' . $id . '-' . $layer_id . '.png');
				if (file_exists($file)){
					wp_delete_file($file);
				}
			}
		}

	}

	/**
	 * Add YearMonth argument, when querying items via REST API to can be filtered them by dates.
	 * @since 1.0.0
	 * @access public
	 * @param array $args
	 * @param array $request
	 * @return array
	 */

	public function add_date_arg($args, $request){

		if (isset($request['yearmonth'])){
			$args['m'] = intval($request['yearmonth']);
		}

		return $args;

	}

	/**
	 * This private method handles file creation from base64 string.
	 * @since 1.0.0
	 * @access private
	 * @param string $base64
	 * @param string $folder_name
	 * @param string $file_name
	 * @return string URL of the created image.
	 */

	private function _create_image($base64 = '', $folder_name = '', $file_name = ''){

		$data = explode(',', $base64);
		$filesystem = get_filesystem();
		$dir = get_upload_dir($folder_name);
		$file = $dir . $file_name;

		if (wp_mkdir_p($dir) === false){
			return '';
		}

		if ($filesystem->put_contents($file, base64_decode($data[1]), FS_CHMOD_FILE) === false){
			return '';
		}

		return get_upload_url($folder_name, $file_name);

	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param int $id Project id.
	 * @param array $layers
	 */

	private function _remove_old_layers(){

		if (empty($id)){
			return;
		}

		$dir = get_upload_dir('layers');
		$files = @scandir($dir);
		$layer_ids = array_map(array($this, '_get_layer_ids'), $layers);

		if (!empty($files)){
			foreach ($files as $filename){
				$layer_id = str_replace(
					array(
						'layer-' . $id . '-',
						'.png'
					),
					'',
					$filename
				);
				// The filenames of layers are 'layer-{$post_id}-${$layer_id}.png'.
				// The $layer_id starts with 'pixmagix-'.
				// Here, we search for files that belong to the updated post,
				// and delete it if it was deleted from the layers list.
				if (strpos($filename, '-' . $id . '-pixmagix') !== false && !in_array($layer_id, $layer_ids)){
					wp_delete_file($dir . $filename);
				}
			}
		}

	}

	/**
	 * Helper function for array_map() in self::_remove_old_layers().
	 * @since 1.0.0
	 * @access private
	 * @param array $layers
	 * @return array List of layer ids.
	 */

	private function _get_layer_ids($layer){
		return isset($layer['id']) ? $layer['id'] : '';
	}

}

?>
