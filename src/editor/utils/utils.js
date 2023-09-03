import {
	times,
	random,
	reduce,
	includes,
	isArray,
	isNumber
} from 'lodash';
import {
	Image as FabricImage,
	IText,
	Rect,
	Circle,
	Ellipse,
	Path,
	Polygon,
	Polyline,
	Group,
	util,
	loadSVGFromString as loadSVG
} from 'fabric';
import QRCode from './../canvas/class-qrcode.js';

const {
	findScaleToFit,
	transformPoint,
	invertTransform,
	joinPath
} = util;

/**
 * Useful for fitting canvas to screen.
 * @param {number} width
 * @param {number} height
 * @param {number} elWidth
 * @param {number} elHeight
 * @return {number}
 * @since 1.0.0
 */

export function getFitZoom(width, height, elWidth, elHeight){
	const zoom = findScaleToFit({
		width,
		height
	},{
		width:elWidth - 20,
		height:elHeight - 20 // Let it be a little bit smaller to get a border.
	});
	return toFixed(zoom);
}

/**
 *
 * @param {float|int} value
 * @param {float|int} min
 * @param {float|int} max
 * @return {float|int}
 * @since 1.0.0
 */

export function clamp(value = 0, min = 0, max = 1){
	const _value = parseFloat(value) || 0;
	return Math.min(Math.max(_value, min), max);
}

/**
 *
 * @param {float|int} value
 * @param {int} fractionDigits
 * @return {float|int}
 * @since 1.0.0
 */

export function toFixed(value, fractionDigits = 2){
	const _value = parseFloat(value) || 0;
	return (Math.round(_value * (10 ** fractionDigits)) / (10 ** fractionDigits)) || 0;
}

/**
 * Create unique id for fabric objects.
 * @param {string} prefix
 * @return {string}
 * @since 1.0.0
 */

export function createUniqueId(prefix = 'pixmagix'){
	const id = times(20, () => random(36).toString(35)).join('');
	return prefix + '-' + id;
}

/**
 *
 * @param {object} args
 * @param {string} url
 * @return {string}
 * @since 1.0.0
 */

export function addQueryArgs(args = {}, url = ''){

	if (url.indexOf('data:') === 0){
		return url;
	}

	const join = (url?.indexOf('?') === -1) ? '?' : '&';
	const query = reduce(args, (memo, value, key) => {
		memo.push('' + key + '=' + value);
		return memo;
	}, []).join('&');

	return url + join + query;

}

/**
 *
 * @since 1.0.0
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */

export function isBetween(value, min, max){
	return (value >= min && value <= max);
}

/**
 *
 * @since 1.0.0
 * @param {number} v1
 * @param {number} v2
 * @param {number} distance
 * @return {boolean}
 */

export function isAround(v1, v2, distance){
	return isBetween(v1, v2 - distance, v2 + distance);
}

/**
 *
 * @since 1.0.0
 * @param {object} point
 * @param {object} canvasSize
 * @param {object} elementSize
 * @param {object} pan
 * @param {object} zoom
 * @return {object}
 */

export function absolutePositionToPixel(point = {}, canvasSize = {}, elementSize = {}, pan = {}, zoom = 1){

	const translateX = (elementSize.x / 2) - (canvasSize.x / 2 * zoom) + pan.x;
	const translateY = (elementSize.y / 2) - (canvasSize.y / 2 * zoom) + pan.y;
	const matrix = [zoom, 0, 0, zoom, translateX, translateY];
	const transformed = transformPoint(isNumber(point) ? {
		x:point,
		y:point
	} : point, matrix);

	return {
		x:toFixed(transformed.x),
		y:toFixed(transformed.y)
	};

}

/**
 *
 * @since 1.0.0
 * @param {object} point
 * @param {object} canvasSize
 * @param {object} elementSize
 * @param {object} pan
 * @param {object} zoom
 * @return {object}
 */

export function pixelToAbsolutePosition(point = {}, canvasSize = {}, elementSize = {}, pan = {}, zoom = 1){

	const translateX = (elementSize.x / 2) - (canvasSize.x / 2 * zoom) + pan.x;
	const translateY = (elementSize.y / 2) - (canvasSize.y / 2 * zoom) + pan.y;
	const matrix = [zoom, 0, 0, zoom, translateX, translateY];
	const transformed = transformPoint(isNumber(point) ? {
		x:point,
		y:point
	} : point, invertTransform(matrix));

	return {
		x:toFixed(transformed.x),
		y:toFixed(transformed.y)
	};

}

/**
 *
 * @since 1.0.0
 * @param {string} type
 * @return {boolean}
 */

export function isSVGElement(type){

	const svgElements = [
		'rect',
		'circle',
		'ellipse',
		'path',
		'polygon',
		'polyline',
		'text',
		'i-text'
	];

	return includes(svgElements, type);

}

/**
 * Extends the incomplete options with all defaults
 * by creating and fabric object, and returns its json data,
 * or creating a new fabric object synchronously, and returns it.
 * @param {object} options
 * @param {boolean} fabricObject If true it returns a fabric object, if false it returns a plain object for redux state.
 * @param {function} callback Optional callback function for image objects.
 * @return {object}
 * @since 1.0.0
 */

export function createLayerObject(options = {}, fabricObject = false, callback){

	let object;

	switch (options.type){
		case 'image':
		object = new FabricImage(null, options);
		// Get src from xlink:href if we load image from SVG.
		object.setSrc(options.src || options['xlink:href'], () => {
			callback && callback(object);
		});
		break;
		case 'text':
		case 'i-text':
		object = new IText(options.text, options);
		break;
		case 'rect':
		object = new Rect(options);
		break;
		case 'circle':
		object = new Circle(options);
		break;
		case 'ellipse':
		object = new Ellipse(options);
		break;
		case 'path':
		object = new Path(isArray(options.path) ? joinPath(options.path) : options.path, options);
		break;
		case 'polygon':
		object = new Polygon(options.points, options);
		break;
		case 'polyline':
		object = new Polyline(options.points, options);
		break;
		case 'qrcode':
		object = new QRCode(options);
		break;
		case 'group':
		const _objects = options.objects?.map(obj => createLayerObject(obj, true)).filter(obj => !!obj) || [];
		object = new Group(_objects, options);
		break;
		default:
		break;
	}

	if (fabricObject && options.clipPath){
		object.clipPath = createLayerObject(options.clipPath, true);
	}
	if (fabricObject && options.filters?.length){
		object.filters = options.filters.map(filter => FabricImage.filters.BaseFilter.fromObject(filter));
	}

	return fabricObject ? object : object.toObject();

}

/**
 *
 * @since 1.0.0
 * @param {string} accept
 * @param {string} readAs The function name of how to read the file by reader: 'readAsDataURL', 'readAsText', etc.
 * @param {function} onChange
 * @return {HTMLInputElement}
 */

export function getHiddenFileInput(accept = '', readAs = '', onChange){

	if (!getHiddenFileInput._element){
		getHiddenFileInput._element = document.createElement('input');
		getHiddenFileInput._element.type = 'file';
		getHiddenFileInput._element.style.display = 'none';
		document.body.appendChild(getHiddenFileInput._element);
	}

	if (!getHiddenFileInput._reader){
		getHiddenFileInput._reader = new FileReader();
		getHiddenFileInput._element.onchange = e => {
			getHiddenFileInput._reader[readAs](e.target.files[0]);
		};
	}

	getHiddenFileInput._element.accept = accept;
	getHiddenFileInput._reader.onload = e => {
		onChange(getHiddenFileInput._reader.result);
	};

	return getHiddenFileInput._element;

}

/**
 *
 * @since 1.0.0
 * @param {string} href
 * @param {string} filename
 * @param {string} extension
 * @return {HTMLAnchorElement}
 */

export function getDownloadAnchor(href = '', filename = '', extension = ''){

	if (!getDownloadAnchor._anchor){
		getDownloadAnchor._anchor = document.createElement('a');
	}

	const download = filename.replace(/\s+/g, '-').toLowerCase() + '.' + extension;

	getDownloadAnchor._anchor.href = href;
	getDownloadAnchor._anchor.download = download;

	return getDownloadAnchor._anchor;

}

/**
 *
 * @since 1.0.0
 * @param {string} source
 * @param {function} onSuccess
 * @param {function} onError
 */

export function loadSVGFromString(source = '', onSuccess, onError){
	try {
		loadSVG(source, onSuccess);
	} catch (error){
		onError?.(error);
	}
}

/**
 *
 * @since 1.0.0
 * @param {object} size
 * @param {object} position
 * @param {object} elementSize
 * @return {string}
 */

export function getCropCSSClipPath(size = {}, position = {}, elementSize = {}){

	const {x, y} = elementSize;
	const sX2 = size.x / 2;
	const sY2 = size.y / 2;
	const pX = position.x;
	const pY = position.y;
	const tlX = pX - sX2;
	const tlY = pY - sY2;
	const trX = pX + sX2;
	const trY = pY - sY2;
	const blX = pX - sX2;
	const blY = pY + sY2;
	const brX = pX + sX2;
	const brY = pY + sY2;
	const path = [
		[0, 0],
		[0, y],

		[blX, y],
		[tlX, tlY],

		[trX, trY],
		[brX, brY],

		[blX, blY],
		[blX, y],
		[x, y],
		[x, 0]
	];
	const p = path.map(p => p.join('px ')).join('px, ');

	return 'polygon(' + p + ')';

}

/**
 *
 * @since 1.0.0
 * @access private
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @param {string} cropAspectRatio
 * @param {number} scale
 * @param {number} canvasZoom This param only needs if we want to get size in pixel, in case of absolute postition, we can ignore it.
 * @return {object}
 */

export function getCropShapeSize(canvasWidth, canvasHeight, cropAspectRatio, scale = 1, canvasZoom = 1){

	const aspect = cropAspectRatio.split(':');
	const aspX = parseInt(aspect[0]) || 0;
	const aspY = parseInt(aspect[1]) || 0;
	const zoom = findScaleToFit({
		width:aspX,
		height:aspY
	},{
		width:canvasWidth,
		height:canvasHeight
	});
	const width = (!cropAspectRatio || cropAspectRatio === '?:?') ? canvasWidth : zoom * aspX;
	const height = (!cropAspectRatio || cropAspectRatio === '?:?') ? canvasHeight : zoom * aspY;

	return {
		x:width * canvasZoom * scale,
		y:height * canvasZoom * scale
	};

}
