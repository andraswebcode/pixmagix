import {
	Image as FabricImage,
	util
} from 'fabric';

const {
	Convolute
} = FabricImage.filters;

/**
 * 
 * @since 1.0.0
 */

export default util.createClass(Convolute, {

	/**
	 * 
	 * @since 1.0.0
	 * @var {string} type
	 */

	type:'Sharpen',

	/**
	 *
	 * @since 1.0.0
	 * @param {object} options
	 */

	initialize(options = {}){
		this.setOptions(options);
		this.opaque = true;
		this.matrix = [
			0, -1, 0,
			-1, 5, -1,
			0, -1, 0
		];
	}

});
