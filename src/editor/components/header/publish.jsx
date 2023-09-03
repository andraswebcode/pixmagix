import {
	connect,
	batch
} from 'react-redux';
import {
	Button,
	ButtonGroup,
	Dropdown
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	new_url
} from 'editor-globals';

import getOptionsMenuItems from './../../utils/options-menu.js';
import {
	PROJECTS_REST_PATH
} from './../../utils/constants.js';

import {
	setEditor,
	sendNotice
} from './../../redux/actions-editor.js';

const Publish = props => {

	const {
		projectId,
		projectName,
		projectAuthor,
		thumbnail,
		mediaId,
		mediaUrl,
		revisionURL,
		canvasWidth,
		canvasHeight,
		canvasBackground,
		layers,
		layerIds,
		setEditor,
		sendNotice
	} = props;

	return (
		<ButtonGroup className='pixmagix-header__publish'>
			<Button
				label={__('New', 'pixmagix')}
				icon='plus'
				onClick={() => {
					window.location.replace(new_url);
				}} />
			<Button
				label={__('Save', 'pixmagix')}
				icon='floppy-disk'
				active
				onClick={() => {
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
							status:'publish',
							author:projectAuthor,
							meta:{
								pixmagix_project:{
									canvasWidth,
									canvasHeight,
									canvasBackground,
									layers:layerIds.map(id => layers[id]),
									thumbnail,
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
				}} />
			<Dropdown
				position='bottom right'
				trigger={() => (
					<Button
						label={__('Options', 'pixmagix')}
						icon='bars' />
				)}
				items={getOptionsMenuItems(props)} />
		</ButtonGroup>
	);

};

export default connect(state => ({
	projectId:state.editor.projectId,
	projectName:state.editor.projectName,
	projectAuthor:state.editor.projectAuthor,
	mediaId:state.editor.mediaId,
	mediaUrl:state.editor.mediaUrl,
	revisionURL:state.editor.revisionURL,
	thumbnail:state.editor.thumbnail,
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasBackground:state.data.present.canvasBackground,
	layers:state.data.present.layers,
	layerIds:state.data.present.layerIds,
	fullScreen:state.editor.fullScreen
}),{
	setEditor,
	sendNotice
})(Publish);
