<?php

namespace AndrasWeb\PixMagix\Rest;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.1.0
 * @see WP_REST_Post_Meta_Fields
 * @see WP_REST_Meta_Fields
 */

class Meta_Fields extends \WP_REST_Post_Meta_Fields {

	/**
	 * Constructor.
	 * For set the default post type: pixmagix.
	 * @since 1.1.0
	 * @access public
	 * @param string $post_type
	 */

	public function __construct($post_type = 'pixmagix'){
		$this->post_type = $post_type;
	}

}

?>
