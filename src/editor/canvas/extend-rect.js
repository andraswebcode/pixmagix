import {
	Rect,
	util
} from 'fabric';
import {
	faUpRightAndDownLeftFromCenter
} from '@fortawesome/free-solid-svg-icons/faUpRightAndDownLeftFromCenter';

import ResizeControl from './class-control-resize.js';

/**
 * 
 * @since 1.6.0
 */

util.object.extend(Rect.prototype, {

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

	createModifyControls(){

		this.modifyControls = {
			mt:new ResizeControl({
				x:0,
				y:-0.5
			}),
			mb:new ResizeControl({
				x:0,
				y:0.5
			}),
			ml:new ResizeControl({
				x:-0.5,
				y:0
			}),
			mr:new ResizeControl({
				x:0.5,
				y:0
			})
		};

	}

});
