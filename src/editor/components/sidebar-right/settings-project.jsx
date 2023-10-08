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
	RadioButtons,
	ColorStyleControl
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
	applyFilters
} from './../../../utils/hooks.js';
import CategoryManager from './category-manager.jsx';

const SettingsProject = ({
	canvasWidth,
	canvasHeight,
	canvasBackground,
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
						min={100}
						max={4000} />
					<Input
						type='number'
						label={__('Height', 'pixmagix')}
						value={canvasHeight}
						onChange={value => setData('canvasHeight', value)}
						min={100}
						max={4000} />
				</InputGroup>
			</Fragment>
		)
	},{
		name:'background',
		label:__('Canvas Background', 'pixmagix'),
		icon:'fill',
		content:(
			<ColorStyleControl
				labels={{
					style:__('Background Style', 'pixmagix'),
					color:__('Background Color', 'pixmagix'),
					gradient:__('Background Gradient', 'pixmagix')
				}}
				value={canvasBackground}
				allowReset={true}
				onChange={value => console.log(value)||setData('canvasBackground', value)} />
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
	projectName:state.editor.projectName,
	projectDescription:state.editor.projectDescription,
	projectStatus:state.editor.projectStatus
}),{
	setData,
	setEditor
})(SettingsProject);
