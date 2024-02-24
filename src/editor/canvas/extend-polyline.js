import {
	Polyline,
	Path,
	util
} from 'fabric';
import {
	reduce,
	isArray
} from 'lodash';
import {
	faPenNib
} from '@fortawesome/free-solid-svg-icons/faPenNib';

import PolylineControl from './class-control-polyline.js';
import {
	parsePoints
} from './../utils/utils.js';

const _initialize = Polyline.prototype.initialize;

/**
 * 
 * @since 1.1.0
 */

util.object.extend(Polyline.prototype, {

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
	 * 
	 * @since 1.6.0
	 * @param {boolean} updateTranslation
	 */

	updateBoundingBox:Path.prototype.updateBoundingBox,

	/**
	 * Constructor.
	 * @since 1.6.0
	 * @param {array|string} points
	 * @param {object} options
	 */

	initialize(points, options){
		_initialize.call(this, points, options);
		this.points = isArray(points) ? points : parsePoints(points);
		this.createModifyControls();
	},

	/**
	 *
	 * @since 1.6.0
	 */

	createModifyControls(){

		this.modifyControls = reduce(this.points, (memo, p, i) => {
			memo[`p${i}`] = new PolylineControl({
				index:i
			})
			return memo;
		}, {});

	}

});
