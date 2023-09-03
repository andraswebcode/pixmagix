(function($, media, globals) {

	"use strict";

	var render = media.view.Attachment.Details.prototype.render;
	var mime_types = ['image/jpeg', 'image/png'];

	/**
	 * Extends the Attachment Details media view with a button,
	 * that links to PixMagix editor.
	 * @since 1.0.0
	 */

	media.view.Attachment.Details.prototype.render = function() {

		render.call(this);

		if ($.inArray(this.model.get('mime'), mime_types) === -1){
			return this;
		}

		var id = this.model.get('id');
		var label = globals.edit_label;
		var url = globals.new_url;
		var a = $('<a></a>', {
			text:label,
			href:url + '&image=' + id,
			style:'display:block;text-decoration:none;'
		});
		var button = $('<a></a>', {
			text:label,
			href:url + '&image=' + id,
			class:'button'
		});

		this.$('.details .edit-attachment').after(a);
		this.$('.attachment-actions').append(button);

		return this;

	};

})(jQuery, wp.media, pixmagixGlobals);
