import QRCodeSVG from 'qrcode-svg';
import {
	Object as FabricObject,
	util
} from 'fabric';

import {
	QRCODE_DEFAULT_TEXT
} from './../utils/constants.js';

const {
	makePathSimpler,
	parsePath,
	joinPath
} = util;

const _properties = ['text', 'size', 'qrPadding', 'ecl'];

/**
 * 
 * @since 1.0.0
 */

const QRCode = util.createClass(FabricObject, {

	/**
	 * 
	 * @since 1.0.0
	 * @var {string}
	 */

	type:'qrcode',

	/**
	 * 
	 * @since 1.0.0
	 * @var {string}
	 */

	text:'',

	/**
	 * 
	 * @since 1.0.0
	 * @var {array}
	 */

	path:[],

	/**
	 * 
	 * @since 1.0.0
	 * @var {number}
	 */

	size:256,

	/**
	 * 
	 * @since 1.0.0
	 * @var {number}
	 */

	qrPadding:4,

	/**
	 * Error correction level.
	 * @since 1.0.0
	 * @var {string}
	 */

	ecl:'M',

	/**
	 * 
	 * @since 1.0.0
	 * @var {number}
	 */

	strokeWidth:0,

	/**
	 * 
	 * @since 1.0.0
	 * @var {array}
	 */

	cacheProperties:FabricObject.prototype.cacheProperties.concat(_properties),

	/**
	 * 
	 * @since 1.0.0
	 * @var {array}
	 */

	stateProperties:FabricObject.prototype.stateProperties.concat(_properties),

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} options
	 */

	initialize(options = {}){
		this.callSuper('initialize', options);
		this._createPathData();
	},

	/**
	 * 
	 * @since 1.0.0
	 * @param {array} propertiesToInclude
	 * @return {object}
	 */

	toObject(propertiesToInclude = []){
		return this.callSuper('toObject', _properties.concat(propertiesToInclude));
	},

	/**
	 * 
	 * @since 1.0.0
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_render(ctx){
		this._renderBackground(ctx);
		this._renderQRCode(ctx);
	},

	/**
	 * 
	 * @since 1.0.0
	 * @return {array}
	 */

	_toSVG(){

		const x = - (this.width / 2);
		const y = - (this.height / 2);
		const path = joinPath(this.path);

		return [
			'<rect style="fill:', this.fill, ';" ',
			'x="', x, '" y="', y,
			'" width="', this.width, '" height="', this.height,
			'" />\n',
			'<path style="fill:', this.stroke, ';" ',
			'transform="translate(', x, ', ', y, ')" ',
			'd="', path, '"',
			' />\n',
		];

	},

	/**
	 * 
	 * @since 1.0.0
	 * @param {string} key
	 * @param {mixed} value
	 * @return {QRCode}
	 */

	_set(key, value){

		this.callSuper('_set', key, value);

		switch (key){
			case 'text':
			case 'qrPadding':
			case 'ecl':
			this._createPathData();
			break;
			case 'size':
			this._createPathData();
			this.set({
				width:value,
				height:value
			});
			break;
			default:
			break;
		}

		return this;

	},

	/**
	 * 
	 * @since 1.0.0
	 * @return {QRCode}
	 */

	_createPathData(){

		const qr = new QRCodeSVG({
			content:this.text || QRCODE_DEFAULT_TEXT,
			padding:this.qrPadding,
			width:this.size,
			height:this.size,
			color:this.stroke,
			background:this.fill,
			ecl:this.ecl,
			join:true
		});
		const svg = qr.svg();
		const match = svg.match(/<path[^>]*?d=(["\'])?((?:.(?!\1|>))*.?)\1?/);
		const path = match ? match[2] : '';

		this.path = makePathSimpler(parsePath(path));

		return this;

	},

	/**
	 * 
	 * @since 1.0.0
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderQRCode(ctx){

		let current, i, x = 0, y = 0, w2 = this.width / 2, h2 = this.height / 2;

		ctx.beginPath();

		for (i = 0; i < this.path.length; i++){

			current = this.path[i];
			x = current[1];
			y = current[2];

			switch (current[0]){
				case 'M':
				ctx.moveTo(x - w2, y - h2);
				break;
				case 'L':
				ctx.lineTo(x - w2, y - h2);
				break;
				case 'Z':
				ctx.closePath();
				break;
				default:
				break;
			}

		}

		ctx.save();
		ctx.fillStyle = this.stroke;
		ctx.fill();
		ctx.restore();

	},

	/**
	 * 
	 * @since 1.0.0
	 * @param {CanvasRenderingContext2D} ctx
	 */

	_renderBackground(ctx){

		const w = this.width;
		const h = this.height;
		const x = - (w / 2);
		const y = - (h / 2);

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + w, y);
		ctx.lineTo(x + w, y + h);
		ctx.lineTo(x, y + h);
		ctx.lineTo(x, y);
		ctx.closePath();

		ctx.save();
		ctx.fillStyle = this.fill;
		ctx.fill();
		ctx.restore();

	}

});

/**
 * 
 * @static
 * @since 1.0.0
 * @var {array}
 */

QRCode.ATTRIBUTE_NAMES = [];

/**
 * 
 * @static
 * @since 1.0.0
 */

QRCode.fromElement = () => {};

/**
 * 
 * @static
 * @since 1.0.0
 * @param {object} object
 * @param {function} callback
 */

QRCode.fromObject = (object, callback) => {
	FabricObject._fromObject('Qrcode', object, callback);
};

window.fabric && (window.fabric.Qrcode = QRCode);

export default QRCode;
