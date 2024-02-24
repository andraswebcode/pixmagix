import {
	Control,
	Point,
	controlsUtils,
	util
} from 'fabric';
import {
	cloneDeep
} from 'lodash';

import {
	toFixed
} from './../utils/utils.js';
import {
	ACTIVE_BORDER_COLOR
} from './../utils/constants.js';

const {
	transformPoint,
	multiplyTransformMatrices
} = util;
const {
	renderCircleControl
} = controlsUtils;

/**
 * The path control class.
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
		this.actionName = 'modifyPath';
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
		if (this.type === 'p'){
			renderCircleControl.call(this, ctx, left, top, styleOverride, fabricObject);
		} else {
			renderCircleControl.call(this, ctx, left, top, {
				...styleOverride,
				transparentCorners:true
			}, fabricObject);
			if (!this.connectPoint1 && !this.connectPoint2){
				return;
			}
			let control, x, y, lineTo;
			ctx.save();
			ctx.beginPath();
			if (this.connectPoint1){
				control = fabricObject.controls[this.connectPoint1];
				x = fabricObject.path[control.index][control.xIndex] - fabricObject.pathOffset.x;
				y = fabricObject.path[control.index][control.yIndex] - fabricObject.pathOffset.y;
				lineTo = transformPoint({x, y}, multiplyTransformMatrices(
					fabricObject.canvas.viewportTransform,
					fabricObject.calcTransformMatrix()
				));
				ctx.moveTo(left, top);
				ctx.lineTo(lineTo.x, lineTo.y);
			}
			if (this.connectPoint2){
				control = fabricObject.controls[this.connectPoint2];
				x = fabricObject.path[control.index][control.xIndex] - fabricObject.pathOffset.x;
				y = fabricObject.path[control.index][control.yIndex] - fabricObject.pathOffset.y;
				lineTo = transformPoint({x, y}, multiplyTransformMatrices(
					fabricObject.canvas.viewportTransform,
					fabricObject.calcTransformMatrix()
				));
				ctx.moveTo(left, top);
				ctx.lineTo(lineTo.x, lineTo.y);
			}
			ctx.stroke();
			ctx.restore();
		}
	}

	/**
	 * Set position of control.
	 * @since 1.6.0
	 * @param {object} dim
	 * @param {array} finalMatrix
	 * @param {object} fabricObject
	 * @return {object}
	 */

	positionHandler(dim, finalMatrix, fabricObject){
		const x = fabricObject.path[this.index][this.xIndex];
		const y = fabricObject.path[this.index][this.yIndex];
		return transformPoint({
			x:x - fabricObject.pathOffset.x,
			y:y - fabricObject.pathOffset.y
		}, multiplyTransformMatrices(
			fabricObject.canvas.viewportTransform,
			fabricObject.calcTransformMatrix()
		));
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
		const fX = fabricObject.flipX ? -1 : 1;
		const fY = fabricObject.flipY ? -1 : 1;
		const pX = pointerLocalPosition.x * fX / fabricObject.scaleX + fabricObject.pathOffset.x;
		const pY = pointerLocalPosition.y * fY / fabricObject.scaleY + fabricObject.pathOffset.y;

		fabricObject.path = cloneDeep(fabricObject.path);
		fabricObject.path[currentControl.index][currentControl.xIndex] = toFixed(pX);
		fabricObject.path[currentControl.index][currentControl.yIndex] = toFixed(pY);

		if (currentControl.type === 'p'){
			if (currentControl.controlPoint1){
				const c = fabricObject.controls[currentControl.controlPoint1];
				const cX = fabricObject.path[c.index][c.xIndex];
				const cY = fabricObject.path[c.index][c.yIndex];
				fabricObject.path[c.index][c.xIndex] = toFixed(pX + c._distance.x);
				fabricObject.path[c.index][c.yIndex] = toFixed(pY + c._distance.y);
			}
			if (currentControl.controlPoint2){
				const c = fabricObject.controls[currentControl.controlPoint2];
				const cX = fabricObject.path[c.index][c.xIndex];
				const cY = fabricObject.path[c.index][c.yIndex];
				fabricObject.path[c.index][c.xIndex] = toFixed(pX + c._distance.x);
				fabricObject.path[c.index][c.yIndex] = toFixed(pY + c._distance.y);
			}
		} else {
			if (!eventData.shiftKey){
				const p = fabricObject.controls[currentControl.connectPoint1];
				const c = currentControl.type === 'c2' ? fabricObject.controls[p.controlPoint2] : fabricObject.controls[p.controlPoint1];
				if (c){
					const distance = new Point(
						fabricObject.path[currentControl.index][currentControl.xIndex] - fabricObject.path[p.index][p.xIndex],
						fabricObject.path[currentControl.index][currentControl.yIndex] - fabricObject.path[p.index][p.yIndex]
					);
					fabricObject.path[c.index][c.xIndex] = toFixed(fabricObject.path[p.index][p.xIndex] - distance.x);
					fabricObject.path[c.index][c.yIndex] = toFixed(fabricObject.path[p.index][p.yIndex] - distance.y);
				}
			}
		}

		fabricObject.canvas && fabricObject.canvas.fire('object:morphing', {
			e:eventData,
			transform:transformData,
			target:fabricObject,
			pointer:{x, y}
		});

		return true;

	}

	/**
	 * Mouse down event handler of control.
	 * @since 1.6.0
	 * @param {object} eventData
	 * @param {object} transformData
	 * @param {int} x
	 * @param {int} y
	 * @return {boolean}
	 */

	mouseDownHandler(eventData, transformData, x, y){

		const fabricObject = transformData.target;
		const currentControl = fabricObject.controls[transformData.corner];

		if (currentControl.controlPoint1){
			const c = fabricObject.controls[currentControl.controlPoint1];
			c._distance = new Point(
				fabricObject.path[c.index][c.xIndex] - fabricObject.path[currentControl.index][currentControl.xIndex],
				fabricObject.path[c.index][c.yIndex] - fabricObject.path[currentControl.index][currentControl.yIndex]
			);
		}

		if (currentControl.controlPoint2){
			const c = fabricObject.controls[currentControl.controlPoint2];
			c._distance = new Point(
				fabricObject.path[c.index][c.xIndex] - fabricObject.path[currentControl.index][currentControl.xIndex],
				fabricObject.path[c.index][c.yIndex] - fabricObject.path[currentControl.index][currentControl.yIndex]
			);
		}

	}

}
