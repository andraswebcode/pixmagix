import {
	Image as FabricImage,
	util
} from 'fabric';
import {
	faCrop
} from '@fortawesome/free-solid-svg-icons/faCrop';

import CropControl from './class-control-crop.js';

const _setSrc = FabricImage.prototype.setSrc;
const _toObject = FabricImage.prototype.toObject;

/**
 * 
 * @since 1.0.0
 */

util.object.extend(FabricImage.prototype, {

	/**
	 *
	 * @since 1.6.0
	 */

	hasModifyControls:true,

	/**
	 *
	 * @since 1.6.0
	 */

	modifyIcon:faCrop,

	/**
	 *
	 * @since 1.6.0
	 */

	createModifyControls(){

		this.modifyControls = {
			mt:new CropControl({
				x:0,
				y:-0.5
			}),
			mb:new CropControl({
				x:0,
				y:0.5
			}),
			ml:new CropControl({
				x:-0.5,
				y:0
			}),
			mr:new CropControl({
				x:0.5,
				y:0
			})
		};

	},

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

	},

	/**
	 * Extends fabric.Image.prototype.setSrc()
	 * @since 1.6.0
	 */

	setSrc(src = '', callback, options = {}){
		src = src.replace(/&#038;/g, '&');
		let cb = callback;
		if (options.convertToDataURL){
			cb = (_this, isError) => {
				const dataURL = _this.getSvgSrc(); // For svg, we also convert link to data url.
				_this.set('src', dataURL);
				callback && callback(_this, isError);
			};
		}
		_setSrc.call(this, src, cb, options);
	},

	/**
	 * Extends fabric.Image.prototype._setWidthHeight()
	 * @since 1.6.0
	 */

	_setWidthHeight(options = {}){
		const el = this.getElement();
		this.width = options.width || el.naturalWidth || el.width || 0;
		this.height = options.height || el.naturalHeight || el.height || 0;
		if (!this.originalWidth){
			this.originalWidth = el.naturalWidth || el.width || 0;
		}
		if (!this.originalHeight){
			this.originalHeight = el.naturalHeight || el.height || 0;
		}
	},

	/**
	 * Extends fabric.Image.prototype.toObject()
	 * @since 1.6.0
	 * @param {array} propertiesToInclude
	 * @return {object}
	 */

	toObject(propertiesToInclude = []){
		return _toObject.call(this, ['originalWidth', 'originalHeight'].concat(propertiesToInclude));
	}

});
