import {
	BaseBrush,
	Path,
	Polygon,
	Polyline,
	Point,
	util,
	controlsUtils
} from 'fabric';
import {
	isUndefined
} from 'lodash';

import {
	BORDER_COLOR,
	CORNER_SIZE
} from './../utils/constants.js';

/**
 * 
 * @since 1.0.0
 * @access private
 */

function _renderNode(ctx, left, top, scale = 1) {
	ctx.shadowBlur = 0;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	controlsUtils.renderCircleControl(ctx, left, top, {
		transparentCorners:false,
		cornerSize:CORNER_SIZE / scale,
		cornerColor:BORDER_COLOR,
		cornerStrokeColor:BORDER_COLOR
	}, {});
}

/**
 * 
 * @since 1.0.0
 * @access private
 */

function _renderControlPoint(ctx, left, top, scale = 1) {
	ctx.shadowBlur = 0;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	controlsUtils.renderCircleControl(ctx, left, top, {
		transparentCorners:true,
		cornerSize:CORNER_SIZE / scale,
		cornerColor:BORDER_COLOR,
		cornerStrokeColor:BORDER_COLOR
	}, {});
}

/**
 * 
 * @since 1.0.0
 * @access private
 */

function _renderLine(ctx, x1, y1, x2, y2){
	ctx.save();
	ctx.shadowBlur = 0;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.strokeStyle = BORDER_COLOR;
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.restore();
}

export default util.createClass(BaseBrush, {

	/**
	 * Type of path: 'cubic', 'quadratic', 'polygon', or 'polyline'.
	 * @since 1.0.0
	 * @var {string}
	 */

	type:'cubic',

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} canvas
	 * @param {object} options
	 */

	initialize(canvas, options = {}){
		this.canvas = canvas;
		this._path = [];
		this._nextControlPoint = new Point(0, 0);
		this.setOptions(options);
	},

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} options
	 */

	setOptions(options){
		for (let key in options){
			this[key] = options[key];
		}
		this._setBrushStyles(this.canvas.contextTop);
		this._setShadow();
		this._render();
	},

	/**
	 *
	 * @since 1.0.0
	 * @param {object} pointer
	 * @param {object} options
	 */

	onMouseDown(pointer, options){

		if (!this.canvas._isMainEvent(options.e)){
			return;
		}

		if (options.e.button === 2){ // on right click
			this._removeCommand(pointer);
		} else {
			if (this._isNodeClicked(pointer)){
				this._setControlPointsDistances();
				this._changeCommand(pointer);
			} else {
				this._addCommand(pointer);
			}
		}

		this._render();

	},

	/**
	 *
	 * @since 1.0.0
	 * @param {object} pointer
	 * @param {object} options
	 */

	onMouseMove(pointer, options){

		if (!this.canvas._isMainEvent(options.e)){
			return;
		}

		this._changeCommand(pointer, options.e);

		this._render();

	},

	/**
	 *
	 * @since 1.0.0
	 * @param {object} options
	 */

	onMouseUp(options){

		if (!this.canvas._isMainEvent(options.e)){
			return true;
		}

		this.__activeNode = null;
		this.__controlPointsDistances = null;

	},

	/**
	 *
	 * @since 1.0.0
	 */

	finalizeAndAddPath(){
		const path = this.createPath();
		if (!path){
			return;
		}
		this._path = [];
		this.canvas.clearContext(this.canvas.contextTop);
		this.canvas.fire('before:path:created', {
			path
		});
		this.canvas.add(path);
		this.canvas.requestRenderAll();
		path.setCoords();
		this._resetShadow();
		this.canvas.fire('path:created', {
			path
		}).setActiveObject(path);
	},

	/**
	 *
	 * @since 1.0.0
	 * @return {fabric.Path|fabric.Polygon|fabric.Polyline|undefined}
	 */

	createPath(){

		if (!this._path?.length){
			return;
		}

		const isPath = this._isPath();
		const isPolygon = (this.type === 'polygon');
		const path = isPath ? this._path : this._path.map(c => {
			if (c[0] === 'M' || c[0] === 'L'){
				return new Point(c[1], c[2]);
			}
			return new Point(0, 0);
		});
		const options = {
			fill:null,
			stroke:this.color,
			strokeWidth:this.width,
			strokeLineCap:this.strokeLineCap,
			strokeMiterLimit:this.strokeMiterLimit,
			strokeLineJoin:this.strokeLineJoin,
			strokeDashArray:this.strokeDashArray,
			shadow:this.shadow
		};

		return isPath ? new Path(path, options) : isPolygon ? new Polygon(path, options) : new Polyline(path, options);

	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @return boolean
	 */

	_isPath(){
		return (this.type === 'cubic' || this.type === 'quadratic');
	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @param {object} pointer
	 * @return boolean
	 */

	_isNodeClicked(pointer){

		let activeNode = false, i, c;
		const path = this._path;
		const length = path.length;

		for (i = 0; i <= length; i++){
			if (activeNode){
				break;
			}
			c = path[i];
			if (!c){
				continue;
			}
			switch (c[0]){
				case 'M':
				case 'L':
				if (pointer.isAround({
					x:c[1],
					y:c[2]
				})){
					activeNode = {
						type:'p',
						index:i
					};
				}
				break;
				case 'C':
				if (pointer.isAround({
					x:c[1],
					y:c[2]
				})){
					activeNode = {
						type:'c1',
						index:i
					};
				} else if (pointer.isAround({
					x:c[3],
					y:c[4]
				})){
					activeNode = {
						type:'c2',
						index:i
					};
				} else if (pointer.isAround({
					x:c[5],
					y:c[6]
				})){
					activeNode = {
						type:'p',
						index:i
					};
				}
				break;
				case 'Q':
				if (pointer.isAround({
					x:c[1],
					y:c[2]
				})){
					activeNode = {
						type:'c',
						index:i
					};
				} else if (pointer.isAround({
					x:c[3],
					y:c[4]
				})){
					activeNode = {
						type:'p',
						index:i
					};
				}
				break;
				default:
				break;
			}
		}

		this.__activeNode = activeNode;

		return !!activeNode;

	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @param {number} index
	 * @return array
	 */

	_getCommand(index){
		return this._path[index] || [];
	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @param {number} index
	 * @return array
	 */

	_getPrevCommand(index){
		const i = isUndefined(index) ? this._path.length : index;
		return this._getCommand(i - 1);
	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @param {number} index
	 * @return array
	 */

	_getNextCommand(index = -1){
		return this._getCommand(index + 1);
	},

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} pointer
	 */

	_addCommand(pointer){

		const path = this._path;
		const length = path.length;
		let command = ['M', pointer.x, pointer.y];

		if (length){
			const {x, y} = this._nextControlPoint;
			switch (this.type){
				case 'cubic':
				command = ['C', x, y, pointer.x, pointer.y, pointer.x, pointer.y];
				break;
				case 'quadratic':
				command = ['Q', x, y, pointer.x, pointer.y];
				break;
				case 'polygon':
				case 'polyline':
				command = ['L', pointer.x, pointer.y];
				break;
				default:
				break;
			}
		}

		if (this._isPath()){
			this.__activeNode = {
				type:(this.type === 'cubic') ? 'c2' : 'c',
				index:length
			};
		}

		path.push(command);

		this._nextControlPoint.setFromPoint(pointer);

	},

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} pointer
	 * @param {Event} e
	 */

	_changeCommand(pointer, e = {}){

		const {
			type,
			index
		} = this.__activeNode || {};
		const {
			shiftKey
		} = e;
		const isPath = this._isPath();
		const length = this._path.length;
		const i = !this.__activeNode ? length - 1 : index;
		const c = this._getCommand(i);
		const nc = this._getNextCommand(i);
		const pc = this._getPrevCommand(i);
		const dists = this.__controlPointsDistances;

		if (c){
			switch (c[0]){
				case 'M':
				if (isPath){
					if (nc.length){
						c[1] = pointer.x;
						c[2] = pointer.y;
					} else {
						this._nextControlPoint.setFromPoint(pointer);
					}
				} else {
					c[1] = pointer.x;
					c[2] = pointer.y;
				}
				break;
				case 'L':
				c[1] = pointer.x;
				c[2] = pointer.y;
				break;
				case 'C':
				if (type === 'c1'){
					c[1] = pointer.x;
					c[2] = pointer.y;
					if (!shiftKey && pc.length){
						const distX = c[1] - pc[5];
						const distY = c[2] - pc[6];
						pc[3] = pc[5] - distX;
						pc[4] = pc[6] - distY;
					}
				} else if (type === 'c2'){
					c[3] = pointer.x;
					c[4] = pointer.y;
					if (!shiftKey && nc.length){
						const distX = c[3] - c[5];
						const distY = c[4] - c[6];
						nc[1] = c[5] - distX;
						nc[2] = c[6] - distY;
					}
				} else if (type === 'p'){
					c[5] = pointer.x;
					c[6] = pointer.y;
					if (dists?.c1){
						nc[1] = pointer.x + dists.c1.x;
						nc[2] = pointer.y + dists.c1.y;
					}
					if (dists?.c2){
						c[3] = pointer.x + dists.c2.x;
						c[4] = pointer.y + dists.c2.y;
					}
				}
				if (isPath && !nc.length){
					this._nextControlPoint.setXY(
						c[5] - (c[3] - c[5]),
						c[6] - (c[4] - c[6])
					);
				}
				break;
				case 'Q':
				if (type === 'c'){
					c[1] = pointer.x;
					c[2] = pointer.y;
				} else if (type === 'p'){
					c[3] = pointer.x;
					c[4] = pointer.y;
				}
				break;
				default:
				break;
			}
		}

	},

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} pointer
	 */

	_removeCommand(pointer){

		if (!this._isNodeClicked(pointer)){
			return;
		}

		const {
			type,
			index
		} = this.__activeNode || {};

		if (type === 'p' && index){
			this._path.splice(index, 1);
		}

		this.__activeNode = null;

	},

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 */

	_setControlPointsDistances(){

		const {
			type,
			index
		} = this.__activeNode || {};
		const isPath = this._isPath();
		const dists = {};
		const c = this._getCommand(index);
		const nc = this._getNextCommand(index);

		if (type === 'p' && isPath){
			if (this.type === 'cubic'){
				if (nc.length){
					dists.c1 = new Point(
						nc[1] - c[5],
						nc[2] - c[6]
					);
				}
				dists.c2 = new Point(
					c[3] - c[5],
					c[4] - c[6]
				);
			} else if (this.type === 'quadratic'){
				dists.c = new Point();
			}
			this.__controlPointsDistances = dists;
		}

	},

	/**
	 * Render context top when you are drawing path.
	 * @since 1.0.0
	 * @access protected
	 */

	_render(){
		const ctx = this.canvas.contextTop;
		this.canvas.clearContext(ctx);
		this._saveAndTransform(ctx);
		ctx.beginPath();
		this._renderPath(ctx);
		(this.type === 'polygon' && this._path.length > 1) && ctx.closePath();
		this.width && ctx.stroke();
		this._renderControls(ctx);
		this._renderNextControl(ctx);
		ctx.restore();
	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderPath(ctx){
		this._path.forEach(c => {
			switch (c[0]){
				case 'M':
				ctx.moveTo(c[1], c[2]);
				break;
				case 'C':
				ctx.bezierCurveTo(c[1], c[2], c[3], c[4], c[5], c[6]);
				break;
				case 'Q':
				ctx.quadraticCurveTo(c[1], c[2], c[3], c[4]);
				break;
				case 'L':
				ctx.lineTo(c[1], c[2]);
				break;
				default:
				break;
			}
		});
	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderControls(ctx){

		const scale = this.canvas.getScale();

		this._path.forEach((c, i) => {
			const pc = this._getPrevCommand(i);
			switch (c[0]){
				case 'M':
				case 'L':
				_renderNode(ctx, c[1], c[2], scale);
				break;
				case 'C':
				_renderLine(ctx, pc[pc.length - 2], pc[pc.length - 1], c[1], c[2]);
				_renderLine(ctx, c[3], c[4], c[5], c[6]);
				_renderControlPoint(ctx, c[1], c[2], scale);
				_renderControlPoint(ctx, c[3], c[4], scale);
				_renderNode(ctx, c[5], c[6], scale);
				break;
				case 'Q':
				_renderLine(ctx, pc[pc.length - 2], pc[pc.length - 1], c[1], c[2]);
				_renderLine(ctx, c[1], c[2], c[3], c[4]);
				_renderControlPoint(ctx, c[1], c[2], scale);
				_renderNode(ctx, c[3], c[4], scale);
				break;
				default:
				break;
			}
		});

	},

	/**
	 * 
	 * @since 1.0.0
	 * @access private
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderNextControl(ctx){

		if (!this._isPath()){
			return;
		}

		const last = this._getPrevCommand();
		const pX = last?.[last?.length - 2];
		const pY = last?.[last?.length - 1];
		const scale = this.canvas.getScale();
		const {x, y} = this._nextControlPoint;
		if (pX && pY && x && y){
			_renderLine(ctx, pX, pY, x, y);
			_renderControlPoint(ctx, x, y, scale);
		}

	}

});
