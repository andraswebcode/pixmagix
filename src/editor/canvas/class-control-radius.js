import ResizeControl from './class-control-resize.js';
import {
	clamp
} from './../../utils/utils.js';

/**
 * The radius control class.
 * @since 1.6.0
 * @class
 * @extends fabric.Control
 */

export default class extends ResizeControl {

	/**
	 * Action event handler of control.
	 * @since 1.6.0
	 * @param {object} eventData
	 * @param {object} transformData
	 * @param {int} x
	 * @param {int} y
	 * @return {boolean}
	 */

	actionHandler(eventData, transformData, x, y){

		return true;

	}

}
