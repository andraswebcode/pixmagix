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
	Point,
	util,
	loadSVGFromString as loadSVG
} from 'fabric';
import QRCode from './../canvas/class-qrcode.js';
import Color from './../../utils/class-color.js';

const {
	findScaleToFit,
	transformPoint,
	invertTransform,
	joinPath,
	qrDecompose
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
		'i-text',
		'textbox'
	];

	return includes(svgElements, type);

}

/**
 * Extends the incomplete options with all defaults
 * by creating and fabric object, and returns its json data,
 * or creating a new fabric object synchronously, and returns it.
 * @param {object} options
 * @param {boolean} fabricObject If true it returns a fabric object, if false it returns a plain object for redux state.
 * @param {function} callback Optional onload callback function especially for image objects.
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
		},{
			crossOrigin:'anonymus', // To be able to load external images.
			convertToDataURL:options.convertToDataURL
		});
		break;
		case 'text':
		case 'i-text':
		case 'textbox':
		object = new IText(options.text, options);
		callback && callback(object);
		break;
		case 'rect':
		object = new Rect(options);
		callback && callback(object);
		break;
		case 'circle':
		object = new Circle(options);
		callback && callback(object);
		break;
		case 'ellipse':
		object = new Ellipse(options);
		callback && callback(object);
		break;
		case 'path':
		object = new Path(isArray(options.path) ? joinPath(options.path) : options.path, options);
		callback && callback(object);
		break;
		case 'polygon':
		object = new Polygon(options.points, options);
		callback && callback(object);
		break;
		case 'polyline':
		object = new Polyline(options.points, options);
		callback && callback(object);
		break;
		case 'qrcode':
		object = new QRCode(options);
		callback && callback(object);
		break;
		case 'group':
		const promises = [];
		const _objects = options.objects?.map(obj => {
			let _obj;
			promises.push(new Promise(resolve => {
				_obj = createLayerObject(obj, true, () => resolve());
			}));
			return _obj;
		}).filter(obj => !!obj) || [];
		object = new Group(_objects, options);
		// Using Promise.all() for running callback() to make sure that all images in group has been loaded.
		Promise.all(promises).then(() => {
			callback && callback(object);
		});
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

	const element = document.createElement('input');
	const reader = new FileReader();

	element.type = 'file';
	element.accept = accept;
	element.style.display = 'none';
	element.onchange = e => {
		reader[readAs](e.target.files[0]);
	};

	reader.onload = e => {
		onChange(reader.result);
	};

	document.body.appendChild(element);

	return element;

}

/**
 *
 * @since 1.0.0
 * @param {string} href
 * @param {string} filename
 * @param {string} extension
 * @return {HTMLAnchorElement}
 */

export function getDownloadAnchor(href = '', filename = 'pixmagix', extension = ''){

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

/**
 *
 * @since 1.3.0
 * @param {mixed} color
 * @return {string}
 */

export function colorToString(color){
	const _color = new Color(color);
	return _color.getHEX();
}

/**
 *
 * @since 1.6.0
 * @param {string} points
 * @return {array}
 */

export function parsePoints(points = ''){

	if (!points){
		return [];
	}

	const nArray = points.split(' ').map(p => parseFloat(p) || 0);
	const length = nArray.length - 1;
	const output = [];
	let i;

	for (i = 0; i <= length; i += 2){
		output.push(new Point(nArray[i], nArray[i + 1]));
	}

	return output;

}

/**
 *
 * @param {string} family
 * @since 1.5.0
 */

export function loadGFont(family){

	if (!family){
		return;
	}

	const linkId = 'pixmagix_gfont_' + family.replace(/\s+/g, '_').toLowerCase();
	let linkElement = document.getElementById(linkId);

	if (!linkElement){
		linkElement = document.createElement('link');
		linkElement.id = linkId;
		linkElement.rel = 'stylesheet';
		linkElement.href = 'https://fonts.googleapis.com/css2?family=' + family.replace(/\s+/g, '+');
		document.head.appendChild(linkElement);
	}

}

/**
 * Create mask for an image from a path.
 * Useful for creating mask for AI tools.
 * @since 1.7.0
 * @param {object} image
 * @param {object} path
 * @return {string} The base64 encoded black/white mask image data.
 */

export function createMask(image, path){

	const group = createLayerObject({
		type:'group',
		objects:[{
			...image,
			type:'rect',
			strokeWidth:0,
			fill:'#000000'
		}, {
			...path,
			stroke:'#FFFFFF',
			fill:'#FFFFFF'
		}]
	}, true);

	return group.toDataURL();

}

/**
 * Also export utils from Fabric.js.
 * @since 1.3.0
 */

export {
	findScaleToFit,
	transformPoint,
	invertTransform,
	joinPath,
	qrDecompose
};
