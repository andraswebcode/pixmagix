import {
	isInteger,
	isNumber,
	isUndefined,
	isArray,
	isString
} from 'lodash';

/**
 * 
 * @since 1.1.0
 */

class Color {

	/**
	 * 
	 * @since 1.1.0
	 * @access private
	 * @var {number}
	 */

	_r = 0;

	/**
	 * 
	 * @since 1.1.0
	 * @access private
	 * @var {number}
	 */

	_g = 0;

	/**
	 * 
	 * @since 1.1.0
	 * @access private
	 * @var {number}
	 */

	_b = 0;

	/**
	 * 
	 * @since 1.1.0
	 * @access private
	 * @var {number}
	 */

	_a = 1;

	/**
	 * 
	 * @constructor
	 * @since 1.1.0
	 */

	constructor(r, g, b, a){
		this.set(r, g, b, a);
	}

	/**
	 * 
	 * @since 1.1.0
	 * @param {number|string|array|Color} r
	 * @param {number} g
	 * @param {number} b
	 * @param {number} a
	 * @return {Color}
	 */

	set(r, g, b, a){

		if (isNumber(r)){
			this._r = r;
			this._g = !isUndefined(g) ? g : r;
			this._b = !isUndefined(b) ? b : r;
			this._a = !isUndefined(a) ? a : 1;
		} else if (isString(r)){
			if (Color.colorNameMap[r]){
				this.setFromHEX(Color.colorNameMap[r]);
			} else if (Color.isHEX(r)){
				this.setFromHEX(r);
			} else if (Color.isRGB(r)){
				this.setFromRGB(r);
			} else if (r === 'transparent'){
				this._r = 0;
				this._g = 0;
				this._b = 0;
				this._a = 0;
			}
		} else if (isArray(r)){
			this._r = r[0] || 0;
			this._g = r[1] || 0;
			this._b = r[2] || 0;
			this._a = !isUndefined(r[3]) ? r[3] : 1;
		} else if (r instanceof this.constructor){
			this.set(r.r, r.g, r.b, r.a);
		}

		return this;

	}

	/**
	 * 
	 * @since 1.1.0
	 * @param {string} color
	 * @return {Color}
	 */

	setFromHEX(color){
		return this;
	}

	/**
	 * 
	 * @since 1.1.0
	 * @param {string} color
	 * @return {Color}
	 */

	setFromRGB(color){
		const match = color.match(/^rgba?\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i);
		if (match){
			this._r = parseInt(match[1], 10);
			this._g = parseInt(match[2], 10);
			this._b = parseInt(match[3], 10);
			this._a = !isUndefined(match[4]) ? parseFloat(match[4]) : 1;
		}
		return this;
	}

	/**
	 * 
	 * @since 1.1.0
	 * @return {string}
	 */

	getHEX(){

		let r = this._r.toString(16);
		let g = this._g.toString(16);
		let b = this._b.toString(16);

		r = (r.length === 1) ? ('0' + r) : r;
		g = (g.length === 1) ? ('0' + g) : g;
		b = (b.length === 1) ? ('0' + b) : b;

		return '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();

	}

	/**
	 * 
	 * @since 1.1.0
	 * @return {string}
	 */

	getHEXA(){

		let a = (this._a * 255).toString(16);

		a = a.toString(16);
		a = (a.length === 1) ? ('0' + a) : a;

		return this.getHEX() + a.toUpperCase();

	}

	/**
	 * 
	 * @since 1.1.0
	 * @return {string}
	 */

	getRGB(){
		const {_r, _g, _b} = this;
		return `rgb(${_r}, ${_g}, ${_b})`;
	}

	/**
	 * 
	 * @since 1.1.0
	 * @return {string}
	 */

	getRGBA(){
		const {_r, _g, _b, _a} = this;
		return `rgba(${_r}, ${_g}, ${_b}, ${_a})`;
	}

	/**
	 * 
	 * @since 1.1.0
	 * @return {number}
	 */

	getAlpha(){
		return this._a;
	}

}

/**
 * 
 * @since 1.1.0
 * @static
 * @var {object}
 */

Color.colorNameMap = {
	aliceblue:'#F0F8FF',
	antiquewhite:'#FAEBD7',
	aqua:'#00FFFF',
	aquamarine:'#7FFFD4',
	azure:'#F0FFFF',
	beige:'#F5F5DC',
	bisque:'#FFE4C4',
	black:'#000000',
	blanchedalmond:'#FFEBCD',
	blue:'#0000FF',
	blueviolet:'#8A2BE2',
	brown:'#A52A2A',
	burlywood:'#DEB887',
	cadetblue:'#5F9EA0',
	chartreuse:'#7FFF00',
	chocolate:'#D2691E',
	coral:'#FF7F50',
	cornflowerblue:'#6495ED',
	cornsilk:'#FFF8DC',
	crimson:'#DC143C',
	cyan:'#00FFFF',
	darkblue:'#00008B',
	darkcyan:'#008B8B',
	darkgoldenrod:'#B8860B',
	darkgray:'#A9A9A9',
	darkgrey:'#A9A9A9',
	darkgreen:'#006400',
	darkkhaki:'#BDB76B',
	darkmagenta:'#8B008B',
	darkolivegreen:'#556B2F',
	darkorange:'#FF8C00',
	darkorchid:'#9932CC',
	darkred:'#8B0000',
	darksalmon:'#E9967A',
	darkseagreen:'#8FBC8F',
	darkslateblue:'#483D8B',
	darkslategray:'#2F4F4F',
	darkslategrey:'#2F4F4F',
	darkturquoise:'#00CED1',
	darkviolet:'#9400D3',
	deeppink:'#FF1493',
	deepskyblue:'#00BFFF',
	dimgray:'#696969',
	dimgrey:'#696969',
	dodgerblue:'#1E90FF',
	firebrick:'#B22222',
	floralwhite:'#FFFAF0',
	forestgreen:'#228B22',
	fuchsia:'#FF00FF',
	gainsboro:'#DCDCDC',
	ghostwhite:'#F8F8FF',
	gold:'#FFD700',
	goldenrod:'#DAA520',
	gray:'#808080',
	grey:'#808080',
	green:'#008000',
	greenyellow:'#ADFF2F',
	honeydew:'#F0FFF0',
	hotpink:'#FF69B4',
	indianred:'#CD5C5C',
	indigo:'#4B0082',
	ivory:'#FFFFF0',
	khaki:'#F0E68C',
	lavender:'#E6E6FA',
	lavenderblush:'#FFF0F5',
	lawngreen:'#7CFC00',
	lemonchiffon:'#FFFACD',
	lightblue:'#ADD8E6',
	lightcoral:'#F08080',
	lightcyan:'#E0FFFF',
	lightgoldenrodyellow:'#FAFAD2',
	lightgray:'#D3D3D3',
	lightgrey:'#D3D3D3',
	lightgreen:'#90EE90',
	lightpink:'#FFB6C1',
	lightsalmon:'#FFA07A',
	lightseagreen:'#20B2AA',
	lightskyblue:'#87CEFA',
	lightslategray:'#778899',
	lightslategrey:'#778899',
	lightsteelblue:'#B0C4DE',
	lightyellow:'#FFFFE0',
	lime:'#00FF00',
	limegreen:'#32CD32',
	linen:'#FAF0E6',
	magenta:'#FF00FF',
	maroon:'#800000',
	mediumaquamarine:'#66CDAA',
	mediumblue:'#0000CD',
	mediumorchid:'#BA55D3',
	mediumpurple:'#9370DB',
	mediumseagreen:'#3CB371',
	mediumslateblue:'#7B68EE',
	mediumspringgreen:'#00FA9A',
	mediumturquoise:'#48D1CC',
	mediumvioletred:'#C71585',
	midnightblue:'#191970',
	mintcream:'#F5FFFA',
	mistyrose:'#FFE4E1',
	moccasin:'#FFE4B5',
	navajowhite:'#FFDEAD',
	navy:'#000080',
	oldlace:'#FDF5E6',
	olive:'#808000',
	olivedrab:'#6B8E23',
	orange:'#FFA500',
	orangered:'#FF4500',
	orchid:'#DA70D6',
	palegoldenrod:'#EEE8AA',
	palegreen:'#98FB98',
	paleturquoise:'#AFEEEE',
	palevioletred:'#DB7093',
	papayawhip:'#FFEFD5',
	peachpuff:'#FFDAB9',
	peru:'#CD853F',
	pink:'#FFC0CB',
	plum:'#DDA0DD',
	powderblue:'#B0E0E6',
	purple:'#800080',
	rebeccapurple:'#663399',
	red:'#FF0000',
	rosybrown:'#BC8F8F',
	royalblue:'#4169E1',
	saddlebrown:'#8B4513',
	salmon:'#FA8072',
	sandybrown:'#F4A460',
	seagreen:'#2E8B57',
	seashell:'#FFF5EE',
	sienna:'#A0522D',
	silver:'#C0C0C0',
	skyblue:'#87CEEB',
	slateblue:'#6A5ACD',
	slategray:'#708090',
	slategrey:'#708090',
	snow:'#FFFAFA',
	springgreen:'#00FF7F',
	steelblue:'#4682B4',
	tan:'#D2B48C',
	teal:'#008080',
	thistle:'#D8BFD8',
	tomato:'#FF6347',
	turquoise:'#40E0D0',
	violet:'#EE82EE',
	wheat:'#F5DEB3',
	white:'#FFFFFF',
	whitesmoke:'#F5F5F5',
	yellow:'#FFFF00',
	yellowgreen:'#9ACD32'
};

/**
 * 
 * @since 1.1.0
 * @static
 * @return {boolean}
 */

Color.isHEX = color => {
	const isHex = /^(#?)([a-f0-9]{3}){1,2}$/i.test(color);
	const isHexa = /^(#?)([a-f0-9]{8})$/i.test(color);;
	return (isHex || isHexa);
};

/**
 * 
 * @since 1.1.0
 * @static
 * @return {boolean}
 */

Color.isRGB = color => {
	const isRgb = /^(rgb)[(]\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*[)]$/.test(color);
	const isRgba = /^(rgba)[(]\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*[)]$/.test(color);;
	return (isRgb || isRgba);
};

export default Color;
