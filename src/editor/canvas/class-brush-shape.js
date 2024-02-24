import {
	BaseBrush,
	Point,
	Rect,
	Circle,
	Ellipse,
	Polygon,
	Polyline,
	Path,
	util
} from 'fabric';
import {
	find as _find
} from 'lodash';

import {
	toFixed
} from './../utils/utils.js';
import shapes from './../utils/shapes.js';

/**
 * 
 * @since 1.0.0
 */

export default util.createClass(BaseBrush, {

	/**
	 * Type of svg element: 'square', 'circle', 'path', 'polygon', or 'polyline'.
	 * @since 1.0.0
	 * @var {string}
	 */

	type:'square',

	/**
	 * Path commands, or points.
	 * @since 1.0.0
	 * @var {string}
	 */

	path:'',

	/**
	 *
	 * @since 1.0.0
	 * @var {string}
	 */

	name:'',

	/**
	 *
	 * @since 1.0.0
	 * @var {string}
	 */

	fill:'',

	/**
	 * Svg viewBox.
	 * @since 1.0.0
	 * @var {object}
	 */

	viewBox:new Point(100, 100),

	/**
	 * 
	 * @since 1.0.0
	 * @var {number}
	 */

	gridSize:1,

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} canvas
	 * @param {object} options
	 */

	initialize(canvas, options = {}){
		this.canvas = canvas;
		for (let key in options){
			this[key] = options[key];
		}
		const object = _find(shapes, {
			name:options.name
		});
		if (object){
			this.name = object.label || '';
			this.type = object.type || 'square';
			this.path = object.path || '';
		}
		this._reset();
	},

	/**
	 *
	 * @since 1.0.0
	 * @param {object} pointer
	 * @param {object} options
	 */

	onMouseDown(pointer, options){
		this._path = this.type === 'path' ? util.parsePath(this.path) :
			(this.type === 'polygon' || this.type === 'polyline') ? this.path.split(' ').map(toFixed) : [];
		if (!this.canvas._isMainEvent(options.e)){
			return;
		}
		this._reset();
		this._startPosition.setFromPoint(pointer);
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
		this._ctrlKey = options.e.ctrlKey || options.e.metaKey;
		this._currentPosition.setFromPoint(pointer);
		this.canvas.clearContext(this.canvas.contextTop);
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
		this.canvas.clearContext(this.canvas.contextTop);
		if (this._currentPosition.x && this._currentPosition.y){ // Check if shape has size, and you didn't click.
			this._finalizeAndAddShape();
		}
		this._ctrlKey = false;
		return false;
	},

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @return {object}
	 */

	_getSizeAndPosition(){
		const startPos = this._startPosition;
		const currPos = this._currentPosition;
		const size = currPos.subtract(startPos);
		const gridSize = this.gridSize;
		if (this._ctrlKey){
			size.x = Math.max(size.x, size.y);
			size.y = Math.max(size.x, size.y);
		}
		const position = startPos.subtract(
			new Point(
				size.x < 0 ? Math.abs(size.x) : 0,
				size.y < 0 ? Math.abs(size.y) : 0
			)
		);
		if (gridSize){
			size.x = Math.round(size.x / gridSize) * gridSize;
			size.y = Math.round(size.y / gridSize) * gridSize;
			position.x = Math.round(position.x / gridSize) * gridSize;
			position.y = Math.round(position.y / gridSize) * gridSize;
		}
		return {
			size,
			position
		};
	},

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 */

	_reset(){
		if (this.fill){
			const ctx = this.canvas.contextTop;
			this._setBrushStyles(ctx);
			ctx.fillStyle = this.fill;
		}
		this._setShadow();
		this._startPosition = new Point(0, 0);
		this._currentPosition = new Point(0, 0);
	},

	/**
	 * Render context top when you are drawing shape.
	 * @since 1.0.0
	 * @access protected
	 */

	_render(){
		const ctx = this.canvas.contextTop;
		this._saveAndTransform(ctx);
		if (this.type === 'path'){
			this._renderPath(ctx);
		} else if (this.type === 'polygon' || this.type === 'polyline'){
			this._renderPolyline(ctx);
		} else if (this.type === 'square'){
			this._renderSquare(ctx);
		} else if (this.type === 'circle'){
			this._renderCircle(ctx);
		}
		ctx.fill();
		this.width && ctx.stroke();
		ctx.restore();
	},

	/**
	 * Render context top when this type is square.
	 * @since 1.0.0
	 * @access private
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderSquare(ctx){
		const {
			size,
			position
		} = this._getSizeAndPosition();
		ctx.beginPath();
		ctx.rect(position.x, position.y, Math.abs(size.x), Math.abs(size.y));
	},

	/**
	 * Render context top when this type is circle.
	 * @since 1.0.0
	 * @access private
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderCircle(ctx){
		const {
			size,
			position
		} = this._getSizeAndPosition();
		const pos = position.add(
			new Point(
				size.x < 0 ? - size.x : size.x,
				size.y < 0 ? - size.y : size.y
			).divide(2)
		);
		ctx.beginPath();
		ctx.ellipse(pos.x, pos.y, Math.abs(size.x / 2), Math.abs(size.y / 2), 0, 0, Math.PI * 2);
	},

	/**
	 * Render context top when this type is path.
	 * @since 1.0.0
	 * @access private
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderPath(ctx){
		const {
			size,
			position
		} = this._getSizeAndPosition();
		const viewBox = this.viewBox;
		const path = this._path;
		let i, c, cp1x, cp1y, cp2x, cp2y, x, y;
		ctx.beginPath();
		for (i = 0; i < path?.length || 0; i++){
			c = path[i];
			switch (c[0]){ // Command
				case 'M':
				x = size.x < 0 ? position.x - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x + position.x;
				y = size.y < 0 ? position.y - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y + position.y;
				ctx.moveTo(x, y);
				break;
				case 'L':
				x = size.x < 0 ? position.x - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x + position.x;
				y = size.y < 0 ? position.y - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y + position.y;
				ctx.lineTo(x, y);
				break;
				case 'Q':
				cp1x = size.x < 0 ? position.x - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x + position.x;
				cp1y = size.y < 0 ? position.y - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y + position.y;
				x = size.x < 0 ? position.x - (c[3] / viewBox.x) * size.x : (c[3] / viewBox.x) * size.x + position.x;
				y = size.y < 0 ? position.y - (c[4] / viewBox.y) * size.y : (c[4] / viewBox.y) * size.y + position.y;
				ctx.quadraticCurveTo(cp1x, cp1y, x, y);
				break;
				case 'C':
				cp1x = size.x < 0 ? position.x - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x + position.x;
				cp1y = size.y < 0 ? position.y - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y + position.y;
				cp2x = size.x < 0 ? position.x - (c[3] / viewBox.x) * size.x : (c[3] / viewBox.x) * size.x + position.x;
				cp2y = size.y < 0 ? position.y - (c[4] / viewBox.y) * size.y : (c[4] / viewBox.y) * size.y + position.y;
				x = size.x < 0 ? position.x - (c[5] / viewBox.x) * size.x : (c[5] / viewBox.x) * size.x + position.x;
				y = size.y < 0 ? position.y - (c[6] / viewBox.y) * size.y : (c[6] / viewBox.y) * size.y + position.y;
				ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
				break;
				case 'z':
				case 'Z':
				ctx.closePath();
				break;
				default:
				break;
			}
		}
	},

	/**
	 * Render context top when this type is polyline or polygon.
	 * @since 1.0.0
	 * @access private
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderPolyline(ctx){
		const {
			size,
			position
		} = this._getSizeAndPosition();
		const viewBox = this.viewBox;
		const path = this._path;
		let i, x, y, _x, _y;
		ctx.beginPath();
		for (i = 0; i < path?.length || 0; i += 2){
			x = path[i];
			y = path[i + 1];
			_x = (x / viewBox.x) * size.x;
			_y = (y / viewBox.y) * size.y;
			if (i === 0){
				ctx.moveTo(
					size.x < 0 ? position.x - _x : _x + position.x,
					size.y < 0 ? position.y - _y : _y + position.y
				);
			} else {
				ctx.lineTo(
					size.x < 0 ? position.x - _x : _x + position.x,
					size.y < 0 ? position.y - _y : _y + position.y
				);
			}
		}
		if (this.type === 'polygon'){
			ctx.closePath();
		}
	},

	/**
	 * Create shape object when you have finished drawing.
	 * @since 1.0.0
	 * @access private
	 */

	_finalizeAndAddShape(){
		const {
			size,
			position
		} = this._getSizeAndPosition();
		const pos = position.add(
			new Point(
				size.x < 0 ? - size.x : size.x,
				size.y < 0 ? - size.y : size.y
			).divide(2)
		);
		const viewBox = this.viewBox;
		const path = this._path;
		let shape = {};
		if (this.type === 'path'){
			const commands = [];
			let i, c;
			for (i = 0; i < path.length; i++){
				c = path[i];
				switch (c[0]){ // Command.
					case 'M':
					commands.push([
						'M',
						toFixed(size.x < 0 ? - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y)
					]);
					break;
					case 'L':
					commands.push([
						'L',
						toFixed(size.x < 0 ? - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y)
					]);
					break;
					case 'Q':
					commands.push([
						'Q',
						toFixed(size.x < 0 ? - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y),
						toFixed(size.x < 0 ? - (c[3] / viewBox.x) * size.x : (c[3] / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (c[4] / viewBox.y) * size.y : (c[4] / viewBox.y) * size.y)
					]);
					break;
					case 'C':
					commands.push([
						'C',
						toFixed(size.x < 0 ? - (c[1] / viewBox.x) * size.x : (c[1] / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (c[2] / viewBox.y) * size.y : (c[2] / viewBox.y) * size.y),
						toFixed(size.x < 0 ? - (c[3] / viewBox.x) * size.x : (c[3] / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (c[4] / viewBox.y) * size.y : (c[4] / viewBox.y) * size.y),
						toFixed(size.x < 0 ? - (c[5] / viewBox.x) * size.x : (c[5] / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (c[6] / viewBox.y) * size.y : (c[6] / viewBox.y) * size.y)
					]);
					break;
					case 'z':
					case 'Z':
					commands.push(['Z']);
					break;
					default:
					break;
				}
			}
			shape = new Path(util.joinPath(commands), {
				left:pos.x,
				top:pos.y,
				stroke:this.color,
				strokeWidth:this.width,
				fill:this.fill,
				shadow:this.shadow
			});
		} else if (this.type === 'polygon' || this.type === 'polyline'){
			const points = [];
			let i, x, y;
			for (i = 0; i < path.length; i += 2){
				x = path[i];
				y = path[i + 1];
				points.push(
					new Point(
						toFixed(size.x < 0 ? - (x / viewBox.x) * size.x : (x / viewBox.x) * size.x),
						toFixed(size.y < 0 ? - (y / viewBox.y) * size.y : (y / viewBox.y) * size.y)
					)
				);
			}
			shape = (this.type === 'polygon') ? new Polygon(points, {
				left:toFixed(pos.x),
				top:toFixed(pos.y),
				stroke:this.color,
				strokeWidth:this.width,
				fill:this.fill,
				shadow:this.shadow
			}) : new Polyline(points, {
				left:toFixed(pos.x),
				top:toFixed(pos.y),
				stroke:this.color,
				strokeWidth:this.width,
				fill:this.fill,
				shadow:this.shadow
			});
		} else if (this.type === 'square'){
			shape = new Rect({
				left:toFixed(pos.x),
				top:toFixed(pos.y),
				width:toFixed(Math.abs(size.x)),
				height:toFixed(Math.abs(size.y)),
				stroke:this.color,
				strokeWidth:this.width,
				fill:this.fill,
				shadow:this.shadow
			});
		} else if (this.type === 'circle'){
			shape = (size.x === size.y) ? new Circle({
				left:toFixed(pos.x),
				top:toFixed(pos.y),
				radius:toFixed(Math.abs(size.x / 2)),
				stroke:this.color,
				strokeWidth:this.width,
				fill:this.fill,
				shadow:this.shadow
			}) : new Ellipse({
				left:toFixed(pos.x),
				top:toFixed(pos.y),
				rx:toFixed(Math.abs(size.x / 2)),
				ry:toFixed(Math.abs(size.y / 2)),
				stroke:this.color,
				strokeWidth:this.width,
				fill:this.fill,
				shadow:this.shadow
			});
		}
		shape.name = this.name;
		this.canvas.add(shape).fire('path:created', {
			path:shape
		});
	}

});
