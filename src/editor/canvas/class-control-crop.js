import ResizeControl from './class-control-resize.js';
import {
	clamp
} from './../../utils/utils.js';

/**
 * The image crop control class.
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

		const fabricObject = transformData.target;
		const currentControl = fabricObject.controls[transformData.corner];
		const pointerLocalPosition = fabricObject.toLocalPoint({x, y}, 'center', 'center');
		const {
			scaleX,
			scaleY,
			originalWidth,
			originalHeight
		} = fabricObject;

		if (currentControl.x){
			const width = Math.abs(pointerLocalPosition.x) * 2 / scaleX;
			fabricObject.width = clamp(width, 0, originalWidth);
			fabricObject.cropX = (originalWidth - fabricObject.width) / 2;
		} else if (currentControl.y){
			const height = Math.abs(pointerLocalPosition.y) * 2 / scaleY;
			fabricObject.height = clamp(height, 0, originalHeight);
			fabricObject.cropY = (originalHeight - fabricObject.height) / 2;
		}

		// We need to update clip path too.
		if (fabricObject.clipPath){
			fabricObject.clipPath.scaleX = fabricObject.width / 100;
			fabricObject.clipPath.scaleY = fabricObject.height / 100;
		}

		return true;

	}

}
