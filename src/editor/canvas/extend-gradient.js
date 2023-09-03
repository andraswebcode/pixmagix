import {
	Gradient,
	Point,
	util
} from 'fabric';
import {
	isUndefined
} from 'lodash';

import {
	clamp,
	createUniqueId
} from './../utils/utils.js';

const {
	degreesToRadians,
	rotatePoint,
	populateWithProperties
} = util;

const _toSVG = Gradient.prototype.toSVG;

util.object.extend(Gradient.prototype, {

	/**
	 * Update default 'pixels' value to 'percentage'.
	 * @since 1.1.0
	 */

	gradientUnits:'percentage',

	/**
	 * Extend fabric.Gradient.prototype.initialize()
	 * @since 1.1.0
	 */

	initialize(options = {}){
		this.type = options.type || 'linear';
		this.angle = options.angle;
		if (!this.id || ('' + this.id).indexOf('pixmagix') !== 0){
			this.id = createUniqueId();
		}
		if (this.type === 'linear'){
			if (isUndefined(this.angle)){
				const {
					x1 = 0,
					y1 = 0,
					x2 = 1,
					y2 = 0
				} = (options.coords || {});
				this.angle = Math.atan2(y1 - y2, x1 - x2) * 180 / Math.PI + 180;
			}
			const p1 = rotatePoint(
				new Point(0, 0.5),
				new Point(0.5, 0.5),
				degreesToRadians(this.angle)
			);
			const p2 = rotatePoint(
				new Point(1, 0.5),
				new Point(0.5, 0.5),
				degreesToRadians(this.angle)
			);
			this.coords = {
				x1:clamp(p1.x),
				y1:clamp(p1.y),
				x2:clamp(p2.x),
				y2:clamp(p2.y)
			};
		} else if (this.type === 'radial'){
			this.coords = {
				x1:0.5,
				y1:0.5,
				x2:0.5,
				y2:0.5,
				r1:0,
				r2:0.5
			};
		}
		this.colorStops = (options.colorStops || []).slice();
	},

	/**
	 * Extend fabric.Gradient.prototype.toObject()
	 * @since 1.1.0
	 */

	toObject(propertiesToInclude){
		const {
			type,
			colorStops,
			angle
		} = this;
		const object = {
			type,
			colorStops,
			angle
		};
		populateWithProperties(this, object, propertiesToInclude);
		return object;
	},

	/**
	 * Extend fabric.Gradient.prototype.toSVG()
	 * @since 1.1.0
	 * @param {object} object
	 * @param {object} options
	 * @return {string}
	 */

	toSVG(object, options){
		const svg = _toSVG.call(this, object);
		return svg.replace(/SVGID_/g, '');
	}

});
