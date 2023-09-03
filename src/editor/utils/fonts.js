import {
	gfonts,
	wsfonts
} from 'editor-globals';
import FontFaceObserver from 'fontfaceobserver';

/**
 * 
 * @since 1.1.0
 * @param {function} callback
 */

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


/**
 * 
 * @since 1.1.0
 * @return {array}
 */

const getFonts = () => (wsfonts || []).concat(gfonts || []).map(({family}) => ({
	label:family,
	value:family
}));

export {
	getFonts,
	loadFonts
};
