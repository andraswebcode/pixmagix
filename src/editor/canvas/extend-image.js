import {
	Image as FabricImage,
	Path,
	util
} from 'fabric';
import {
	faCrop
} from '@fortawesome/free-solid-svg-icons/faCrop';
import {
	faSpinner
} from '@fortawesome/free-solid-svg-icons/faSpinner';

import CropControl from './class-control-crop.js';

const __render = FabricImage.prototype._render;
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
	 * @var {boolean}
	 */

	hasModifyControls:true,

	/**
	 *
	 * @since 1.6.0
	 * @var {object}
	 */

	modifyIcon:faCrop,

	/**
	 *
	 * @since 1.7.0
	 * @var {boolean}
	 */

	isLoading:false,

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
	 * Extends fabric.Image.prototype._render()
	 * @since 1.7.0
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_render(ctx){
		__render.call(this, ctx);
		this._renderLoader(ctx);
	},

	/**
	 *
	 * @since 1.7.0
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderLoader(ctx){

		if (!this.isLoading){
			return;
		}

		const w = this.width;
		const h = this.height;
		const icon = faSpinner.icon;
		const spinnerSize = 50;
		const scaleX = spinnerSize / icon[0];
		const scaleY = spinnerSize / icon[0];

		if (!this._spinner){
			this._spinner = new Path(icon[4], {
				scaleX,
				scaleY
			});
			util.requestAnimFrame(timeStamp => {
				let start = timeStamp || +new Date(), time, current;
				const spinner = this._spinner;
				const canvas = this.canvas;
				const duration = 2000;
				(function tick(tickTime) {
					time = tickTime || +new Date();
					current = time - start;
					if (current > duration){
						start = time;
					}
					spinner.angle = util.ease.easeInOutQuad(current, 0, 360, duration);
					canvas.requestRenderAll();
					util.requestAnimFrame(tick);
				})(start);
			});
		}

		ctx.save();
		ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
		ctx.fillRect(- w / 2, - h / 2, w, h);
		ctx.fillStyle = '#FFFFFF';
		this._spinner.transform(ctx);
		this._spinner._renderPathCommands(ctx);
		ctx.fill();
		ctx.restore();

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
