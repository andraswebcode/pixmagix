import {
	Path,
	Polyline,
	Point,
	util
} from 'fabric';
import {
	isArray,
	isNumber,
	reduce
} from 'lodash';
import {
	faPenNib
} from '@fortawesome/free-solid-svg-icons/faPenNib';

import {
	toFixed
} from './../utils/utils.js';
import PathControl from './class-control-path.js';

const {
	parsePath,
	makePathSimpler,
	degreesToRadians,
	rotatePoint
} = util;
const _initialize = Path.prototype.initialize;

/**
 *
 * @since 1.6.0
 * @param {array} path Fabric path.
 * @param {integer} i Index.
 * @return {string}
 */

export function getControlPoint1(path, i) {
	if (i === 0){
		return '';
	}
	if (path[i - 1]){
		if (path[i - 1][0] === 'Q'){
			return `c${i - 1}`;
		} else if (path[i - 1][0] === 'C'){
			return `c2${i - 1}`;
		}
	}
	return '';
}

/**
 *
 * @since 1.6.0
 * @param {array} path Fabric path.
 * @param {integer} i Index.
 * @return {string}
 */

export function getControlPoint2(path, i) {
	if (!path[i + 1]){
		return '';
	}
	if (path[i + 1][0] === 'Q'){
		return `c${i + 1}`;
	} else if (path[i + 1][0] === 'C'){
		return `c1${i + 1}`;
	}
	return '';
}

/**
 * 
 * @since 1.1.0
 */

util.object.extend(Path.prototype, {

	/**
	 *
	 * @since 1.6.0
	 */

	hasModifyControls:true,

	/**
	 *
	 * @since 1.6.0
	 */

	modifyIcon:faPenNib,

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @param {string|array} path
	 * @param {object} options
	 */

	initialize(path, options){
		_initialize.call(this, path, options);
		this.createModifyControls();
	},

	/**
	 *
	 * @since 1.6.0
	 */

	createModifyControls(){
		const {
			path
		} = this;
		this.modifyControls = reduce(path, (memo, p, i) => {
			switch (p[0]){ // command
				case 'M':
				memo[`p${i}`] = new PathControl({
					index:i,
					xIndex:1,
					yIndex:2,
					type:'p',
					controlPoint1:getControlPoint1(path, i),
					controlPoint2:getControlPoint2(path, i)
				});
				break;
				case 'L':
				memo[`p${i}`] = new PathControl({
					index:i,
					xIndex:1,
					yIndex:2,
					type:'p'
				});
				break;
				case 'Q':
				memo[`c${i}`] = new PathControl({
					index:i,
					xIndex:1,
					yIndex:2,
					type:'c',
					connectPoint1:0 < i ? `p${i - 1}` : '',
					connectPoint2:`p${i}`
				});
				memo[`p${i}`] = new PathControl({
					index:i,
					xIndex:3,
					yIndex:4,
					type:'p',
					controlPoint1:`c${i}`,
					controlPoint2:getControlPoint2(path, i)
				});
				break;
				case 'C':
				memo[`c1${i}`] = new PathControl({
					index:i,
					xIndex:1,
					yIndex:2,
					type:'c1',
					connectPoint1:0 < i ? `p${i - 1}` : ''
				});
				memo[`c2${i}`] = new PathControl({
					index:i,
					xIndex:3,
					yIndex:4,
					type:'c2',
					connectPoint1:`p${i}`
				});
				memo[`p${i}`] = new PathControl({
					index:i,
					xIndex:5,
					yIndex:6,
					type:'p',
					controlPoint1:`c2${i}`,
					controlPoint2:getControlPoint2(path, i)
				});
				break;
				default:
				break;
			}
			return memo;
		},{});
	},

	/**
	 * 
	 * @since 1.6.0
	 * @param {boolean} updateTranslation
	 */

	updateBoundingBox(updateTranslation = true){
		const dim = this._calcDimensions();
		const pathOffset = {
			x:dim.width / 2 + dim.left,
			y:dim.height / 2 + dim.top
		};
		this.width = dim.width;
		this.height = dim.height;
		if (updateTranslation){
			const left = (this.pathOffset.x - pathOffset.x) * this.scaleX;
			const top = (this.pathOffset.y - pathOffset.y) * this.scaleY;
			const rotate = rotatePoint(
				new Point(left, top),
				new Point(0, 0),
				degreesToRadians(this.angle)
			);
			this.left -= rotate.x;
			this.top -= rotate.y;
		}
		this.pathOffset = pathOffset;
		// this.calcCoords();
		return this;
	},

	/**
	 * Extends Path.prototype._setPath()
	 * @since 1.1.0
	 * @param {string|array} path
	 * @param {object} options
	 */

	_setPath(path, options = {}){

		const _path = makePathSimpler(isArray(path) ? path : parsePath(path));

		this.path = _path.map(c => c.map(n => isNumber(n) ? toFixed(n) : n));

		Polyline.prototype._setPositionDimensions.call(this, options);

	}

});
