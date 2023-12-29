import JSZip from 'jszip';

/**
 * 
 * @since 1.5.0
 * @access private
 * @param {object} jsZip
 * @return {function}
 */

const _layerMap = jsZip => layer => {

	if (layer.type === 'group'){
		return {
			...layer,
			objects:layer.objects.map(_layerMap(jsZip))
		};
	} else if (layer.type === 'image'){
		const getLayer = fetch(layer.src).then(response => response.blob());
		jsZip.file(layer.id + '.png', getLayer);
		return {
			...layer,
			src:''
		};
	}

	return {
		...layer
	};

}

/**
 * 
 * @since 1.5.0
 * @param {object} options
 * @param {function} callback
 */

export default ({
	title,
	description,
	preview,
	thumbnail,
	canvasBackground,
	canvasHeight,
	canvasWidth,
	layers = []
}, callback) => {

	const jsZip = new JSZip();
	const options = {
		title,
		description,
		width:canvasWidth,
		height:canvasHeight,
		background:canvasBackground,
		layers:layers.map(_layerMap(jsZip))
	};
	const json = JSON.stringify(options);

	const getPreview = fetch(preview).then(response => response.blob());
	const getThumbnail = fetch(thumbnail).then(response => response.blob());

	jsZip.file('project.json', json);
	jsZip.file('preview.jpg', getPreview);
	jsZip.file('thumbnail.jpg', getThumbnail);

	jsZip.generateAsync({
		type:'blob'
	}).then(response => {
		const href = window.URL.createObjectURL(response);
		callback && callback(href);
	});

};
