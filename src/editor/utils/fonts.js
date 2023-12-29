/**
 * 
 * @since 1.1.0
 * @param {function} callback
 */
/*
const loadFonts = callback => {

	const promises = (gfonts || []).map(({family}) => {
		const ffo = new FontFaceObserver(family);
		return ffo.load();
	});

	if (!promises.length){
		return;
	}

	Promise.all(promises).then(() => callback?.());

};
*/

/**
 *
 * @param {string} family
 * @since 1.5.0
 */

const loadGFont = family => {

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

};

export {};
