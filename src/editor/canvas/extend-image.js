import {
	Image as FabricImage,
	util
} from 'fabric';

/**
 * 
 * @since 1.0.0
 */

util.object.extend(FabricImage.prototype, {

	/**
	 * Extends fabric.Image.prototype._set()
	 * @since 1.0.0
	 * @param {string} key
	 * @param {mixed} value
	 * @return {object}
	 */

	_set(key, value){

		if (key === 'filters'){
			util.enlivenObjects(value, filters => {
				try {
					this.applyFilters(filters);
				} catch (error){
					// console.error(error);
				}
			}, 'fabric.Image.filters');
		} else {
			this.callSuper('_set', key, value);
		}

		return this;

	},

	/**
	 * Extends fabric.Image.prototype.getSvgSrc()
	 * @since 1.1.0
	 */

	getSvgSrc(){

		const {
			left,
			top,
			scaleX,
			scaleY,
			skewX,
			skewY,
			angle
		} = this;

		this.scaleX = 1;
		this.scaleY = 1;
		this.skewX = 0;
		this.skewY = 0;
		this.angle = 0;

		const src = this.toDataURL();

		this.scaleX = scaleX;
		this.scaleY = scaleY;
		this.skewX = skewX;
		this.skewY = skewY;
		this.angle = angle;

		return src;

	}

});
