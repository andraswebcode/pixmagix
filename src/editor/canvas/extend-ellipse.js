import {
	Rect,
	Ellipse,
	util
} from 'fabric';
import {
	faUpRightAndDownLeftFromCenter
} from '@fortawesome/free-solid-svg-icons/faUpRightAndDownLeftFromCenter';

/**
 * 
 * @since 1.6.0
 */

util.object.extend(Ellipse.prototype, {

	/**
	 *
	 * @since 1.6.0
	 */

	hasModifyControls:true,

	/**
	 *
	 * @since 1.6.0
	 */

	modifyIcon:faUpRightAndDownLeftFromCenter,

	/**
	 *
	 * @since 1.6.0
	 */

	createModifyControls:Rect.prototype.createModifyControls

});
