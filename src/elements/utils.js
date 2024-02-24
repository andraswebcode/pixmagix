import {
	isString,
	isUndefined
} from 'lodash';

/**
 *
 * @param {float|int} value
 * @param {float|int} min
 * @param {float|int} max
 * @return {float|int}
 * @since 1.0.0
 */

export function clamp(value = 0, min = 0, max = 1) {
	const _value = parseFloat(value) || 0;
	return Math.min(Math.max(_value, min), max);
}

/**
 *
 * @param {float|int} value
 * @param {int} fractionDigits
 * @return {float|int}
 * @since 1.0.0
 */

export function toFixed(value, fractionDigits = 2) {
	const _value = parseFloat(value) || 0;
	return (Math.round(_value * (10 ** fractionDigits)) / (10 ** fractionDigits)) || 0;
}

/**
 *
 * @param {object|string} colorObject
 * @return {string}
 * @since 1.0.0
 */

export function colorToString(colorObject = {}){

	if (isString(colorObject)){
		return colorObject;
	}

	if (isUndefined(colorObject.r) || isUndefined(colorObject.g) || isUndefined(colorObject.b)){
		return 'rgb(0, 0, 0)';
	}

	const {
		r = 0,
		g = 0,
		b = 0,
		a = 1
	} = colorObject;

	if (a === 1){
		var _r = r.toString(16),
			_r = _r.length === 1 ? '0' + _r : _r,
			_g = g.toString(16),
			_g = _g.length === 1 ? '0' + _g : _g,
			_b = b.toString(16),
			_b = _b.length === 1 ? '0' + _b : _b;
		return '#' + _r + _g + _b;
	}

	return `rgba(${r}, ${g}, ${b}, ${a})`;

}
