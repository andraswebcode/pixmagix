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

	type:'Emboss',

	/**
	 *
	 * @since 1.0.0
	 * @param {object} options
	 */

	initialize(options = {}){
		this.setOptions(options);
		this.matrix = [
			1, 1, 1,
			1, 0.7, -1,
			-1, -1, -1
		];
	}

});
