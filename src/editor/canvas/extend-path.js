import {
	Path,
	Polyline,
	util
} from 'fabric';
import {
	isArray,
	isNumber
} from 'lodash';

import {
	toFixed
} from './../utils/utils.js';

const {
	parsePath,
	makePathSimpler
} = util;

/**
 * 
 * @since 1.1.0
 */

util.object.extend(Path.prototype, {

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
