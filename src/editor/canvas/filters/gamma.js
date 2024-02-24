import {
	Image as FabricImage,
	Color,
	util
} from 'fabric';

const {
	Gamma
} = FabricImage.filters;
const _initialize = Gamma.prototype.initialize;

/**
 * 
 * @since 1.0.0
 */

export default util.createClass(Gamma, {

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} options
	 */

	initialize(options){
		_initialize.call(this, options);
		if (options.red){
			this.gamma[0] = options.red;
		}
		if (options.green){
			this.gamma[1] = options.green;
		}
		if (options.blue){
			this.gamma[2] = options.blue;
		}
	}

});
