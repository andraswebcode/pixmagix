<?php

namespace AndrasWeb\PixMagix\Rest;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 *
 * @since 1.2.0
 * @see \WP_REST_Terms_Controller
 * @see \WP_REST_Controller
 */

class Terms_Controller extends \WP_REST_Terms_Controller {

	/**
	 * Constructor.
	 * For set the default taxonomy.
	 * @since 1.2.0
	 * @access public
	 * @param string $taxonomy
	 */

	public function __construct($taxonomy = 'pixmagix_category'){
		parent::__construct($taxonomy);
	}

	/**
	 *
	 * @since 1.2.0
	 * @access public
	 * @param WP_Term $item
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response
	 */

	function prepare_item_for_response($item, $request){

		$response = parent::prepare_item_for_response($item, $request);
		$data = $response->get_data();
		$caption = sprintf(
			__('%s - Count: %d - ID: #%d', 'pixmagix'),
			$item->name,
			$item->count,
			$item->term_id
		);

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
