(function($, fetch, i18n) {

	"use strict";

	// Document ready.
	$(function() {

		var __ = i18n.__;
		var sprintf = i18n.sprintf;
		var htmls = {
			loading:'<span class="spinner column-pixmagix__spinner"></span>',
			notEdited:'<div class="post-com-count-wrapper"><span aria-hidden="true">—</span><span class="screen-reader-text">%s</span></div>'
		}

		// Add event listener for restore media button.
		$(document).on('click', '.pixmagix-restore-button', function(e) {

			e.preventDefault();

			var ok = confirm(
				__('Do you really want to restore original media image?', 'pixmagix')
			);

			if (!ok){
				return;
			}

			var button = $(e.target);
			var parent = button.parent();
			var img = button.closest('tr').find('.media-icon img');
			var src = img.attr('src');
			var mediaId = button.data('mediaid');

			parent.html(htmls.loading);

			fetch({
				path:'pixmagix/v1/restore_image',
				method:'POST',
				data:{
					mediaId:mediaId
				}
			}).then(function(response) {
				if (response.success){
					parent.html(sprintf(htmls.notEdited, __('Not Edited', 'pixmagix')));
					img.attr('src', src.replace(/\?pixmagix_revision=\d+/, ''));
				}
			});

		});

	});

})(jQuery, wp.apiFetch, wp.i18n);
