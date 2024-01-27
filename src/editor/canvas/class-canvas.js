import {
	Canvas,
	ActiveSelection,
	util
} from 'fabric';
import {
	find as _find,
	uniq
} from 'lodash';
import {
	__
} from 'wp-i18n';
import FontFaceObserver from 'fontfaceobserver';

import {
	SELECTION_COLOR,
	SELECTION_BORDER_COLOR,
	BORDER_DASH_ARRAY,
	TARGET_FIND_TOLERANCE
} from './../utils/constants.js';
import {
	loadGFont
} from './../utils/utils.js';
import PathBrush from './class-brush-path.js';

const onMouseDown = Canvas.prototype.__onMouseDown;

/**
 * 
 * @since 1.0.0
 */

export default util.createClass(Canvas, {

	/**
	 *
	 * @since 1.0.0
	 * @var {string}
	 */

	selectionColor:SELECTION_COLOR,

	/**
	 *
	 * @since 1.0.0
	 * @var {string}
	 */

	selectionBorderColor:SELECTION_BORDER_COLOR,

	/**
	 *
	 * @since 1.0.0
	 * @var {string}
	 */

	selectionDashArray:BORDER_DASH_ARRAY,

	/**
	 *
	 * @since 1.0.0
	 * @var {string}
	 */

	selectionKey:'ctrlKey',

	/**
	 * Disable object stacking on select.
	 * @since 1.0.0
	 * @var {boolean}
	 */

	preserveObjectStacking:true,

	/**
	 * Set it to true to also render controls
	 * if there are outside the canvas.
	 * @since 1.0.0
	 * @var {boolean}
	 */

	controlsAboveOverlay:true,

	/**
	 *
	 * @since 1.0.0
	 * @var {boolean}
	 */

	perPixelTargetFind:true,

	/**
	 *
	 * @since 1.0.0
	 * @var {number}
	 */

	targetFindTolerance:TARGET_FIND_TOLERANCE,

	/**
	 *
	 * @since 1.0.0
	 * @var {boolean}
	 */

	stopContextMenu:true,

	/**
	 *
	 * @since 1.0.0
	 * @var {boolean}
	 */

	fireRightClick:true,

	/**
	 *
	 * @since 1.0.0
	 * @var {string}
	 */

	altActionKey:'ctrlKey',

	/**
	 *
	 * @since 1.0.0
	 * @var {string|null}
	 */

	uniScaleKey:null,

	/**
	 *
	 * @since 1.0.0
	 * @param {string} id
	 * @return {object|undefined}
	 */

	getObjectById(id = ''){
		return _find(this._objects, obj => obj.id === id);
	},

	/**
	 *
	 * @since 1.0.0
	 * @param {array} ids
	 * @return {Canvas}
	 */

	setActiveObjectsByIds(ids = []){

		this.discardActiveObject();

		if (!ids.length){
			return this;
		}

		const objects = uniq(ids).map(id => this.getObjectById(id)).filter(obj => !!obj);

		if (objects.length === 1){
			this.setActiveObject(objects[0]).requestRenderAll();
			return this;
		}

		const activeSelection = new ActiveSelection(objects, {
			canvas:this
		});

		this.setActiveObject(activeSelection).requestRenderAll();

		return this;

	},

	/**
	 *
	 * @since 1.0.0
	 * @param {array} ids
	 * @return {Canvas}
	 */

	sortObjectsByIds(ids = []){

		ids.forEach((id, index) => {
			const object = this.getObjectById(id);
			if (object){
				object.moveTo(index);
			}
		});

		return this;

	},

	/**
	 *
	 * @since 1.0.0
	 * @return {number}
	 */

	getScale(){
		return this.viewportTransform?.[0] || 1;
	},

	/**
	 * Extends Canvas.prototype.toSVG().
	 * @since 1.0.0
	 * @param {object} options
	 * @param {function} reviver
	 * @return {string}
	 */

	toSVG(options = {}, reviver){

		const markup = [];
		options.reviver = reviver;

		this._setSVGPreamble(markup, options);
		this._setSVGHeader(markup, options);
		this._setSVGBgOverlayColor(markup, 'background');
		this._setSVGObjects(markup, reviver);

		markup.push('</svg>');

		return markup.join('');

	},

	/**
	 * Extends Canvas.prototype._setSVGHeader().
	 * @since 1.0.0
	 * @param {array} markup
	 * @param {object} options
	 */

	_setSVGHeader(markup, options = {}){

		const {
			width = this.width,
			height = this.height,
			viewBox = {},
			preserveAspectRatio
		} = options;
		const vbWidth = viewBox.width || width;
		const vbHeight = viewBox.height || height;
		const viewBoxAttr = `0 0 ${vbWidth} ${vbHeight}`;

		markup.push(
			'<svg ',
			'xmlns="http://www.w3.org/2000/svg" ',
			'xmlns:xlink="http://www.w3.org/1999/xlink" ',
			'version="1.1" ',
			'width="', width, '" ',
			'height="', height, '" ',
			'viewBox="', viewBoxAttr, '" ',
			preserveAspectRatio ? 'preserveAspectRatio="' + preserveAspectRatio + '" ' : '',
			'xml:space="preserve">\n',
			'<desc>',
			__('Created With PixMagix', 'pixmagix'),
			'</desc>',
			'<defs>\n',
			this.createSVGFontFacesMarkup(),
			this.createSVGRefElementsMarkup(),
			'</defs>\n',
		);

	},

	/**
	 * Extends Canvas.prototype.createSVGFontFacesMarkup() for loading Google fonts.
	 * @since 1.1.0
	 * @return {string}
	 */

	createSVGFontFacesMarkup(){

		const query = uniq(this._objects.map(obj => {
			if (obj.type !== 'i-text' && obj.type !== 'text'){
				return '';
			}
			if (obj.fontCollection === 'gfonts'){
				return obj.fontFamily.replace(/\s+/g, '+');
			}
			return '';
		}).filter(str => (str !== ''))).join('&amp;family=');

		if (!query){
			return '';
		}

		const url = 'https://fonts.googleapis.com/css2?family=' + query;

		return [
			'<style type="text/css">',
			'@import url(\'' + url + '\')',
			'</style>'
		].join('');

	},

	/**
	 *
	 * @since 1.5.0
	 */

	loadFonts(){
		const texts = this.getObjects('i-text').concat(this.getObjects('text'));
		const promises = texts.map(({
			fontFamily,
			fontCollection
		}) => {
			if (fontCollection !== 'gfonts'){
				return;
			}
			loadGFont(fontFamily);
			const ffo = new FontFaceObserver(fontFamily);
			return ffo.load(null, 8000);
		}).filter(promise => !!promise);
		Promise.all(promises).then(() => {
			util.clearFabricFontCache();
			texts.forEach(text => {
				text.initDimensions();
				text.setCoords();
			});
			this.requestRenderAll();
		});
	},

	/**
	 * Extends Canvas.prototype._renderBackgroundOrOverlay().
	 * @since 1.1.0
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {string} property
	 */

	_renderBackgroundOrOverlay(ctx, property){

		const fill = this[property + 'Color'];
		const object = this[property + 'Image'];
		const v = this.viewportTransform;
		const needsVpt = this[property + 'Vpt'];

		if (!fill && !object){
			return;
		}

		if (fill){
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(this.width, 0);
			ctx.lineTo(this.width, this.height);
			ctx.lineTo(0, this.height);
			ctx.closePath();
			ctx.fillStyle = fill.toLive ? fill.toLive(ctx, this) : fill;
			if (needsVpt){
				ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
			}
			if (fill.colorStops){
				ctx.transform(this.width, 0, 0, this.height, 0, 0);
			}
			ctx.fill();
			ctx.restore();
		}

		if (object){
			ctx.save();
			if (needsVpt) {
				ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
			}
			object.render(ctx);
			ctx.restore();
		}

	},

	/**
	 * Extends Canvas.prototype.__onMouseDown().
	 * We need to handle right click in path brush.
	 * @since 1.0.0
	 * @param {Event} e
	 */

	__onMouseDown(e){
		onMouseDown.call(this, e);
		if (this.freeDrawingBrush instanceof PathBrush && this.isDrawingMode && e.button === 2){
			this._onMouseDownInDrawingMode(e);
		}
	}

});
