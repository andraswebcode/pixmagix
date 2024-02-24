import {
	Control,
	controlsUtils
} from 'fabric';

const {
	renderSquareControl,
	scaleCursorStyleHandler
} = controlsUtils;

/**
 * The resize control class.
 * @since 1.6.0
 * @class
 * @extends fabric.Control
 */

export default class extends Control {

	/**
	 * Constructor.
	 * @since 1.6.0
	 * @param {object} options
	 */

	constructor(options = {}){
		super(options);
		this.actionName = 'resize';
		this.sizeX = this.x ? 4 : 12;
		this.sizeY = this.y ? 4 : 12;
	}

	/**
	 * Render control.
	 * @since 1.6.0
	 * @param {object} ctx
	 * @param {int} left
	 * @param {int} top
	 * @param {object} styleOverride
	 * @param {object} fabricObject
	 */

	render(ctx, left, top, styleOverride, fabricObject){
		renderSquareControl.call(this, ctx, left, top, styleOverride, fabricObject);
	}

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
			width,
			height,
			scaleX,
			scaleY
		} = fabricObject;
		const newWidth = Math.abs(pointerLocalPosition.x * 2 / scaleX);
		const newHeight = Math.abs(pointerLocalPosition.y * 2 / scaleY);

		if (currentControl.x){
			if (fabricObject.type === 'circle'){
				fabricObject.radius = newWidth / 2;
				fabricObject.width = newWidth;
				fabricObject.height = newWidth;
			} else {
				fabricObject.width = newWidth;
				if (fabricObject.type === 'ellipse'){
					fabricObject.rx = newWidth / 2;
				}
			}
		} else if (currentControl.y){
			if (fabricObject.type === 'circle'){
				fabricObject.radius = newHeight / 2;
				fabricObject.width = newHeight;
				fabricObject.height = newHeight;
			} else {
				fabricObject.height = newHeight;
				if (fabricObject.type === 'ellipse'){
					fabricObject.ry = newHeight / 2;
				}
			}
		}

		return (width !== newWidth || height !== newHeight);

	}

	/**
	 *
	 * @since 1.6.0
	 * @param {object} eventData
	 * @param {object} control
	 * @param {object} fabricObject
	 * @return {string}
	 */

	cursorStyleHandler(eventData, control, fabricObject){
		return scaleCursorStyleHandler(eventData, control, fabricObject);
	}

}
