import {
	times,
	random,
	reduce,
	omitBy
} from 'lodash';

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
 * @param {object} args
 * @param {string} url
 * @since 1.1.0
 */

export function addToRouter(args, url){
	const _args = omitBy(args, (v, k) => (!v || k === 'page'));
	// We need to replace 'page' param to 'p', because the 'page' name is reserved by wp admin.
	if (args.page){
		_args.p = args.page;
	}
	window.history?.pushState?.({}, '', addQueryArgs(_args, url));
}

/**
 *
 * @since 1.5.0
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
 * @since 1.5.0
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
