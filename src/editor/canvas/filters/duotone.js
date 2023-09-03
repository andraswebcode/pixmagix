import {
	Image as FabricImage,
	Color,
	util
} from 'fabric';

const {
	ColorMatrix
} = FabricImage.filters;

/**
 * 
 * @since 1.0.0
 */

export default util.createClass(ColorMatrix, {

	/**
	 * 
	 * @since 1.0.0
	 * @var {string} type
	 */

	type:'Duotone',

	/**
	 *
	 * @since 1.0.0
	 * @param {object} options
	 */

	initialize(options = {}){

		const {
			color1 = '#000',
			color2 = '#fff'
		} = options;
		const c1 = new Color(color1).getSource();
		const c2 = new Color(color2).getSource();
		const c1r = c1[0] / 255;
		const c1g = c1[1] / 255;
		const c1b = c1[2] / 255;
		const c2r = c2[0] / 255;
		const c2g = c2[1] / 255;
		const c2b = c2[2] / 255;

		this.color1 = color1;
		this.color2 = color2;
		this.matrix = [
			c2r - c1r, 0, 0, 0, c1r,
			c2g - c1g, 0, 0, 0, c1g,
			c2b - c1b, 0, 0, 0, c1b,
			0, 0, 0, 1, 0
		];

	}

});
