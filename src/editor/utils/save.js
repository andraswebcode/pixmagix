import {
	batch
} from 'react-redux';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	PROJECTS_REST_PATH
} from './../../utils/constants.js';

/**
 * 
 * @since 1.2.0
 */

export default ({
	projectId,
	projectName,
	projectDescription,
	projectAuthor,
	projectCategory,
	projectStatus,
	layers,
	layerIds,
	canvasWidth,
	canvasHeight,
	canvasBackground,
	mediaId,
	mediaUrl,
	revisionURL,
	thumbnail,
	preview,
	setEditor,
	sendNotice
}) => {
	if (!layerIds.length && !canvasBackground){
		sendNotice(
			__('Please create something, before you save!', 'pixmagix'),
			'warning'
		);
		return;
	}
	apiFetch({
		path:PROJECTS_REST_PATH + (projectId || ''),
		method:'POST',
		data:{
			title:projectName || '',
			content:projectDescription || '',
			status:projectStatus || 'publish',
			author:projectAuthor,
			pixmagix_category:projectCategory ? [projectCategory] : [],
			meta:{
				pixmagix_project:{
					canvasWidth,
					canvasHeight,
					canvasBackground,
					layers:layerIds.map(id => layers[id]),
					thumbnail,
					preview,
					mediaId,
					mediaUrl,
					revisionURL
				}
			}
		}
	}).then(response => {
		batch(() => {
			setEditor({
				projectId:response.id,
				projectAuthor:response.author
			});
			sendNotice(
				__('Project Saved Successfully', 'pixmagix'),
				'success'
			);
		});
	}).catch(({message}) => {
		sendNotice(
			message,
			'error'
		);
	});
};
