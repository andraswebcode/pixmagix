import JSZip from 'jszip';
import {
	keys,
	includes,
	find as _find
} from 'lodash';

/**
 * 
 * @since 1.5.0
 * @access private
 * @param {object} sources
 * @param {object} layer
 * @return {function}
 */

const _layerMap = sources => layer => {

	if (layer.type === 'group'){
		return {
			...layer,
			objects:layer.objects.map(_layerMap(sources))
		};
	} else if (layer.type === 'image'){
		const {
			type,
			src
		} = _find(sources, {
			id:layer.id
		}) || {};
		return {
			...layer,
			src:'data:image/' + type + ';base64,' + src
		};
	}

	return {
		...layer
	};

};

/**
 * 
 * @since 1.5.0
 * @param {ArrayBuffer} buffer
 * @param {function} callback
 */

export default (buffer, callback) => {

	JSZip.loadAsync(buffer).then(response => {
		const layers = keys(response.files)
			.filter(name => includes(name, 'pixmagix-')) // Filters just layer files, layer files start with 'pixmagix-'.
			.map(name => response.file(name).async('base64').then(response => {
				const [id, type] = (name || '').split('.');
				return {
					id,
					type,
					src:response
				};
			}));
		const promises = [
			response.file('project.json').async('text'),
			response.file('thumbnail.jpg').async('base64'),
			response.file('preview.jpg').async('base64'),
			...layers
		];
		return Promise.all(promises);
	}).then(response => {
		const [project, thumbnail, preview, ...layerSources] = response;
		let output = {};
		try {
			output = JSON.parse(project);
		} catch (e){
			// do nothing...
		}
		output = {
			...output,
			preview:'data:image/jpeg;base64,' + preview,
			thumbnail:'data:image/jpeg;base64,' + thumbnail,
			layers:(output.layers || []).map(_layerMap(layerSources))
		};
		callback && callback(output);
	});

};
