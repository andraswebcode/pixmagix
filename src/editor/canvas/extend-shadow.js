import {
	Shadow,
	util
} from 'fabric';

import {
	createUniqueId
} from './../utils/utils.js';

const _toSVG = Shadow.prototype.toSVG;

util.object.extend(Shadow.prototype, {

	/**
	 * Extend fabric.Shadow.prototype.initialize()
	 * @since 1.1.0
	 * @constructs
	 * @param {object|string} options
	 */

	initialize(options){

		if (typeof options === 'string'){
			options = this._parseShadow(options);
		}

		for (let prop in options){
			this[prop] = options[prop];
		}

		this.id = createUniqueId();

	},

	/**
	 * Extend fabric.Shadow.prototype.toSVG()
	 * @since 1.1.0
	 * @param {object} object
	 * @return {string}
	 */

	toSVG(object){
		const svg = _toSVG.call(this, object);
		return svg.replace(/SVGID_/g, '');
	}

});
