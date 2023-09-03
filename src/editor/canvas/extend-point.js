import {
	Point,
	util
} from 'fabric';

import {
	isAround
} from './../utils/utils.js';

util.object.extend(Point.prototype, {

	/**
	 * 
	 * @since 1.0.0
	 * @return {object}
	 */

	toObject(){
		return {
			x:this.x,
			y:this.y
		};
	},

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} pointer
	 * @param {number} distance
	 * @return {boolean}
	 */

	isAround(pointer, distance = 10){
		return (isAround(pointer.x, this.x, distance) && isAround(pointer.y, this.y, distance));
	}

});
