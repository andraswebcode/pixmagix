<?php

namespace AndrasWeb\PixMagix\Rest\Utils;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Helper function for wp_unique_filename filter hook to keep filename the same while replacing image.
 * @see AndrasWeb\PixMagix\Rest_Api::export_image()
 * @see AndrasWeb\PixMagix\Rest_Api::restore_image()
 * @since 1.0.0
 * @param string $filename
 * @param string $ext
 * @param string $dir
 * @param callable $unique_filename_callback
 * @param string[] $alt_filenames
 * @param int|string $number
 * @return string
 */

function unique_filename($filename, $ext, $dir, $unique_filename_callback, $alt_filenames, $number){
	return str_replace('-' . $number . $ext, $ext, $filename);
}

/**
 * Add YearMonth argument, when querying items via REST API to can be filtered them by dates.
 * Used for 'rest_{$post_type}_query' filter hook.
 * @since 1.0.0
 * @param array $args
 * @param array $request
 * @return array
 */

function add_date_arg($args, $request){

	if (isset($request['yearmonth'])){
		$args['m'] = intval($request['yearmonth']);
	}

	return $args;

}

?>
