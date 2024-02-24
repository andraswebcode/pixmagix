import {
	Path,
	Control,
	controlsUtils
} from 'fabric';

const {
	renderCircleControl
} = controlsUtils;

/**
 * The control switch button control class.
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
		this.actionName = 'controlSwitch';
		this.x = 0;
		this.y = 0.5;
		this.offsetY = 20;
		this.cursorStyle = 'pointer';
		this.sizeX = 20;
		this.sizeY = 20;
		this.padding = 8;
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

		// Render circle.
		styleOverride.transparentCorners = true;
		renderCircleControl.call(this, ctx, left, top, styleOverride, fabricObject);

		// Render icon.
		if (this.icon){
			const icon = this.icon.icon;
			const w = icon[0];
			const h = icon[1];
			const d = icon[4];
			const scaleX = (this.sizeX - this.padding) / w;
			const scaleY = (this.sizeY - this.padding) / h;
			const path = new Path(d);
			ctx.save();
			ctx.transform(scaleX, 0, 0, scaleY, left, top);
			ctx.fillStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor;
			// ctx.strokeStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor;
			// ctx.lineWidth = 1 / scaleX;
			path._renderPathCommands(ctx);
			ctx.fill();
			ctx.restore();
		}
	}

	/**
	 * Mouse up event handler of control.
	 * @since 1.6.0
	 * @param {object} eventData
	 * @param {object} transformData
	 * @param {int} x
	 * @param {int} y
	 * @return {boolean}
	 */

	mouseUpHandler(eventData, transformData, x, y){
		const fabricObject = transformData.target;
		fabricObject.switchControls();
	}

}
