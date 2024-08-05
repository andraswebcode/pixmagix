import {
	useState,
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Widget,
	Input,
	InputGroup,
	Textarea,
	RadioButtons
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setData
} from './../../redux/actions-data.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	CANVAS_MIN_SIZE,
	CANVAS_MAX_SIZE
} from './../../utils/constants.js';
import {
	applyFilters,
	doComponents
} from './../../../utils/hooks.js';
import CategoryManager from './category-manager.jsx';
import LayerItem from './layer-item.jsx';
import LayerActions from './layer-actions.jsx';
import ColorStyleControlAdvanced from './../../elements/color-style-control-advanced.jsx';

const SettingsProject = ({
	canvasWidth,
	canvasHeight,
	canvasBackground,
	layerIds,
	projectName,
	projectDescription,
	projectStatus,
	setData,
	setEditor
}) => {

	const tabs = applyFilters('editor.settingsProject.tabs', [{
		name:'settings',
		label:__('Canvas Settings', 'pixmagix'),
		icon:'gear',
		content:(
			<Fragment>
				<InputGroup>
					<Input
						type='number'
						label={__('Width', 'pixmagix')}
						value={canvasWidth}
						onChange={value => setData('canvasWidth', value)}
						min={CANVAS_MIN_SIZE}
						max={CANVAS_MAX_SIZE} />
					<Input
						type='number'
						label={__('Height', 'pixmagix')}
						value={canvasHeight}
						onChange={value => setData('canvasHeight', value)}
						min={CANVAS_MIN_SIZE}
						max={CANVAS_MAX_SIZE} />
				</InputGroup>
			</Fragment>
		)
	},{
		name:'background',
		label:__('Canvas Background', 'pixmagix'),
		icon:'fill',
		content:(
			<ColorStyleControlAdvanced
				labels={{
					style:__('Background Style', 'pixmagix'),
					color:__('Background Color', 'pixmagix'),
					gradient:__('Background Gradient', 'pixmagix')
				}}
				value={canvasBackground}
				allowReset={true}
				onChange={value => setData('canvasBackground', value)} />
		)
	},{
		name:'layers',
		label:__('Layers', 'pixmagix'),
		icon:'layer-group',
		content:(
			<Fragment>
				<ul className='pixmagix-sidebarright__layerlist'>
					{layerIds.length ? layerIds.map(id => (
						<LayerItem
							key={id}
							id={id} />
					)) : null}
				</ul>
				<LayerActions />
			</Fragment>
		)
	},{
		name:'metadata',
		label:__('Project Metadata', 'pixmagix'),
		icon:'file-lines',
		content:(
			<Fragment>
				<Input
					label={__('Title', 'pixmagix')}
					value={projectName}
					onChange={value => setEditor('projectName', value)} />
				<Textarea
					label={__('Description', 'pixmagix')}
					value={projectDescription}
					onChange={value => setEditor('projectDescription', value)} />
				{doComponents('editor.settingsProject.underDescription')}
				<RadioButtons
					label={__('Status', 'pixmagix')}
					value={projectStatus}
					options={[{
						label:__('Publish', 'pixmagix'),
						value:'publish'
					},{
						label:__('Private', 'pixmagix'),
						value:'private'
					}]}
					onChange={value => setEditor('projectStatus', value)} />
				{doComponents('editor.settingsProject.underStatus')}
				<CategoryManager />
			</Fragment>
		)
	}]);

	return tabs?.length ? (
		<Widget
			tabs={tabs} />
	) : null;

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasBackground:state.data.present.canvasBackground,
	layerIds:state.data.present.layerIds,
	projectName:state.editor.projectName,
	projectDescription:state.editor.projectDescription,
	projectStatus:state.editor.projectStatus
}),{
	setData,
	setEditor
})(SettingsProject);
