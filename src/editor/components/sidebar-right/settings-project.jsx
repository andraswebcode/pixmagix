import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Widget,
	Input,
	InputGroup,
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

const SettingsProject = ({
	canvasWidth,
	canvasHeight,
	canvasBackground,
	projectName,
	setData,
	setEditor
}) => {

	return (
		<Widget
			tabs={[{
				name:'settings',
				label:__('Settings', 'pixmagix'),
				content:(
					<Fragment>
						<Input
							label={__('Title', 'pixmagix')}
							value={projectName}
							onChange={value => setEditor('projectName', value)} />
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
				label:__('Background', 'pixmagix'),
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
			}]} />
	);

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasBackground:state.data.present.canvasBackground,
	projectName:state.editor.projectName
}),{
	setData,
	setEditor
})(SettingsProject);
