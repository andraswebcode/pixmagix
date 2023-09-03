<?php

namespace AndrasWeb\PixMagix;

use function AndrasWeb\PixMagix\Utils\admin_editor_url;
use function AndrasWeb\PixMagix\Utils\get_asset_url;

// Exit, if accessed directly.

if (!defined('ABSPATH')){
	exit;
}

/**
 * Actions, and filters, that extend WordPress media with PixMagix featues.
 * @since 1.0.0
 * @final
 */

final class Media {

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @access public
	 */

	public function __construct(){
		add_filter('media_row_actions', array($this, 'row_actions'), 99, 2);
		add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'), 99, 1);
		add_action('admin_enqueue_scripts', array($this, 'enqueue_styles'), 99, 0);
		add_action('wp_enqueue_scripts', array($this, 'enqueue_styles'), 99, 0);
		add_action('admin_bar_menu', array($this, 'add_button_to_admin_bar'), 99, 1);
		add_filter('wp_get_attachment_image_src', array($this, 'add_revision_query_to_image_src'), 99, 2);
		add_filter('manage_media_columns', array($this, 'add_column'), 99, 1);
		add_action('manage_media_custom_column', array($this, 'manage_column'), 99, 2);
	}

	/**
	 * Add 'Edit With PixMagix' button to the media row actions.
	 * @since 1.0.0
	 * @access public
	 * @param array $actions
	 * @param WP_Post $post
	 * @return array
	 */

	public function row_actions($actions, $post){

		if (!current_user_can('upload_files')){
			return $actions;
		}

		$post_mime_type = $post->post_mime_type;
		$mime_types = array('image/png', 'image/jpeg');
		$correct_mime = in_array($post_mime_type, $mime_types);
		$can_edit = current_user_can('edit_post', $post->ID);

		if ($correct_mime && $can_edit){
			$actions['pixmagix'] = sprintf(
				'<a href="%1$s">%2$s</a>',
				esc_url(admin_editor_url($post->ID, 'image')),
				esc_html__('Edit With PixMagix', 'pixmagix')
			);
		}

		return $actions;

	}

	/**
	 * Add button to admin bar of attachment pages.
	 * @since 1.0.0
	 * @access public
	 * @param WP_Admin_Bar $wp_admin_bar
	 */

	public function add_button_to_admin_bar($wp_admin_bar){

		global $post;

		if (!is_user_logged_in() || !isset($post) || empty($post)){
			return;
		}

		// Check on frontend.
		$is_attachment = is_attachment();

		// Check on backend too.
		if (is_admin()){
			$screen = get_current_screen();
			if (isset($screen) && !empty($screen)){
				$is_attachment = ($screen->id === 'attachment');
			}

		}

		if ($is_attachment){
			$wp_admin_bar->add_menu(
				array(
					'id' => 'pixmagix',
					'title' => esc_html__('Edit With PixMagix', 'pixmagix'),
					'href' => esc_url(admin_editor_url($post->ID, 'image'))
				)
			);
		}

	}

	/**
	 * Enqueue global styles.
	 * @since 1.0.0
	 * @access public
	 */

	public function enqueue_styles(){

		wp_enqueue_style(
			'pixmagix-media-views',
			get_asset_url('css', 'media-views', 'css'),
			array(
				'admin-bar'
			),
			PIXMAGIX_VERSION
		);

		$url = get_asset_url('img', 'logo', 'svg', false);
		$post = get_post();
		$style = '#wp-admin-bar-pixmagix > .ab-item:before {';
		$style .= 'background-image:url("' . esc_url($url) . '")!important;';
		$style .= '}';

		// Show green circle, if it has revision url.
		if (
			!empty($post) &&
			$post->post_type === 'attachment' &&
			!empty(get_post_meta($post->ID, 'pixmagix_revision_url', true))
		){
			$style .= '#wp-admin-bar-pixmagix > .ab-item:after {';
			$style .= 'content:"";';
			$style .= '}';
		}

		wp_add_inline_style(
			'pixmagix-media-views',
			$style
		);

	}

	/**
	 * Enqueue scripts for media modals.
	 * @since 1.0.0
	 * @access public
	 * @param string $hook_suffix
	 */

	public function enqueue_scripts($hook_suffix){

		if ($hook_suffix === 'upload.php'){
			wp_enqueue_script(
				'pixmagix-media-list-table',
				get_asset_url('js', 'media-list-table', 'js'),
				array(
					'jquery',
					'wp-api-fetch',
					'wp-i18n'
				),
				PIXMAGIX_VERSION
			);
			wp_set_script_translations('pixmagix-media-list-table', 'pixmagix', PIXMAGIX_DIR . 'languages');
		}

		if (wp_script_is('media-views', 'enqueued')){
			wp_enqueue_script(
				'pixmagix-media-views',
				get_asset_url('js', 'media-views', 'js'),
				array(
					'jquery',
					'media-views'
				),
				PIXMAGIX_VERSION
			);
			wp_localize_script(
				'pixmagix-media-views',
				'pixmagixGlobals',
				array(
					'edit_label' => esc_html__('Edit With PixMagix', 'pixmagix'),
					'new_url' => esc_url(admin_editor_url())
				)
			);
		}

	}

	/**
	 * Browsers cache the image, so if we update an image
	 * can't see any changes, so we add a revision query to image url
	 * to prevent caching.
	 * @since 1.0.0
	 * @access public
	 * @param array $image
	 * @param int $attachment_id
	 */

	public function add_revision_query_to_image_src($image, $attachment_id){

		$revision_url = get_post_meta($attachment_id, 'pixmagix_revision_url', true);
		$revision = get_post_field('post_modified', $attachment_id);
		$revision = !empty($revision) ? preg_replace('/[^0-9]/', '', $revision) : '';

		if (!empty($revision_url) && !empty($revision) && is_user_logged_in()){
			$image[0] = esc_url(
				add_query_arg(
					'pixmagix_revision',
					$revision,
					$image[0]
				)
			);
		}

		return $image;

	}

	/**
	 * Add PixMagix column to media list table.
	 * @since 1.0.0
	 * @access public
	 * @param array $posts_columns
	 */

	public function add_column($posts_columns){

		$posts_columns['pixmagix'] = sprintf(
			'<span class="column-pixmagix__icon" title="%s" style="background-image:url(%s)"></span>',
			esc_html__('Edited With PixMagix', 'pixmagix'),
			esc_url($url = get_asset_url('img', 'logo', 'svg', false))
		);

		return $posts_columns;

	}

	/**
	 * Manage PixMagix column in media list table.
	 * @since 1.0.0
	 * @access public
	 * @param string $column_name
	 * @param int $post_id
	 */

	public function manage_column($column_name, $post_id){

		if ($column_name !== 'pixmagix'){
			return;
		}

		$revision_url = get_post_meta($post_id, 'pixmagix_revision_url', true);

		if (empty($revision_url)){
			printf(
				'<div class="post-com-count-wrapper"><span aria-hidden="true">—</span><span class="screen-reader-text">%s</span></div>',
				esc_html__('Not Edited', 'pixmagix')
			);
		} else {
			printf(
				'<button class="pixmagix-restore-button column-pixmagix__restore" title="%s" data-mediaid="%d"></button>',
				esc_html__('Restore Original Media Image', 'pixmagix'),
				absint($post_id)
			);
		}

	}

}

?>
