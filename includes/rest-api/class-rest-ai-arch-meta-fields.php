<?php

namespace AndrasWeb\PixMagix\Rest;

use function AndrasWeb\PixMagix\Utils\is_base64;
use function AndrasWeb\PixMagix\Utils\create_image_from_base64;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.2.0
 * @see WP_REST_Post_Meta_Fields
 * @see WP_REST_Meta_Fields
 */

class AI_Arch_Meta_Fields extends \WP_REST_Post_Meta_Fields {

	/**
	 * Constructor.
	 * For setting the default post type to pixmagix.
	 * @since 1.2.0
	 * @access public
	 * @param string $post_type
	 */

	public function __construct($post_type = 'pixmagix_ai_arch'){
		$this->post_type = $post_type;
	}

	/**
	 * 
	 * @since 1.2.0
	 * @access public
	 * @param int $object_id
	 * @param string $meta_key
	 * @param string $name
	 * @param mixed $value
	 * @return true|WP_Error
	 */

	function update_meta_value($object_id, $meta_key, $name, $value){

		if ($meta_key !== 'pixmagix_ai_arch_project' || !isset($value['samples'])){
			return parent::update_meta_value($object_id, $meta_key, $name, $value);
		}

		$new_value = $value;
		$samples = array();

		foreach ($value['samples'] as $sample){
			$sample_id = $sample['id'] ?? '';
			$src = $sample['src'] ?? '';
			if (empty($sample_id) || empty($src)){
				continue;
			}
			if (is_base64($src)){
				$filename = 'image-' . $object_id . '-' . $sample_id . '.png';
				$src = create_image_from_base64($src, 'ai', $filename);
			}
			$samples[] = array_merge(
				$sample,
				array(
					'src' => esc_url_raw($src)
				)
			);
		}

		$new_value['samples'] = $samples;

		return parent::update_meta_value($object_id, $meta_key, $name, $new_value);

	}

}

?>
