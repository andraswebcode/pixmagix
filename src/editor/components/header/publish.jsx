import {
	connect
} from 'react-redux';
import {
	Button,
	ButtonGroup,
	Dropdown
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	new_url
} from 'editor-globals';

import {
	setEditor,
	sendNotice
} from './../../redux/actions-editor.js';
import getOptionsMenuItems from './../../utils/options-menu.js';
import save from './../../utils/save.js';
import {
	applyFilters
} from './../../../utils/hooks.js';

const Publish = props => applyFilters('editor.publish', (
	<ButtonGroup className='pixmagix-header__publish'>
		<Button
			label={__('New', 'pixmagix')}
			icon='plus'
			href={new_url} />
		<Button
			label={__('Save', 'pixmagix')}
			icon='floppy-disk'
			active
			onClick={() => save(props)} />
		<Dropdown
			position='bottom right'
			trigger={() => (
				<Button
					label={__('Options', 'pixmagix')}
					icon='bars' />
			)}
			items={getOptionsMenuItems(props)} />
	</ButtonGroup>
), props, getOptionsMenuItems);

export default connect(state => ({
	projectId:state.editor.projectId,
	projectName:state.editor.projectName,
	projectDescription:state.editor.projectDescription,
	projectAuthor:state.editor.projectAuthor,
	projectCategory:state.editor.projectCategory,
	projectStatus:state.editor.projectStatus,
	mediaId:state.editor.mediaId,
	mediaUrl:state.editor.mediaUrl,
	revisionURL:state.editor.revisionURL,
	thumbnail:state.editor.thumbnail,
	preview:state.editor.preview,
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
