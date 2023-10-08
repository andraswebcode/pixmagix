import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Button,
	Widget,
	Range,
	Select,
	ColorPicker,
	ShadowPicker
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	PENCIL_MIN_WIDTH,
	PENCIL_MAX_WIDTH
} from './../../utils/constants.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import getHelpText from './../../utils/help-texts.js';

const DrawPath = ({
	isDrawingMode,
	pathType,
	pencilWidth,
	pencilColor,
	pencilShadow,
	setEditor
}) => (
	<Fragment>
			<Widget
				label={__('Draw Path', 'pixmagix')} >
				<Select
					label={__('Path Type', 'pixmagix')}
					value={pathType}
					options={[{
						label:__('Cubic Bezier', 'pixmagix'),
						value:'cubic'
					},{
						label:__('Quadratic Bezier', 'pixmagix'),
						value:'quadratic'
					},{
						label:__('Polyline', 'pixmagix'),
						value:'polyline'
					},{
						label:__('Polygon', 'pixmagix'),
						value:'polygon'
					}]}
					onChange={value => setEditor({
						pathType:value,
						isDrawingMode:false
					})} />
				<Button
					block
					active={isDrawingMode}
					onClick={() => setEditor('isDrawingMode', !isDrawingMode)} >
					{isDrawingMode ? __('Stop Drawing', 'pixmagix') : __('Start Drawing', 'pixmagix')}
				</Button>
			</Widget>
			<Widget
				tabs={[{
					name:'stroke',
					label:__('Stroke', 'pixmagix'),
					icon:'paintbrush',
					content:(
						<Fragment>
							<Range
								label={__('Stroke Width', 'pixmagix')}
								help={getHelpText('strokeWidth')}
								value={pencilWidth}
								onChange={value => setEditor('pencilWidth', value)}
								min={PENCIL_MIN_WIDTH}
								max={PENCIL_MAX_WIDTH}
								step={1} />
							<ColorPicker
								label={__('Stroke Color', 'pixmagix')}
								color={pencilColor}
								onChange={color => setEditor('pencilColor', color)} />
						</Fragment>
					)
				},{
					name:'shadow',
					label:__('Shadow', 'pixmagix'),
					icon:'circle-half-stroke',
					content:(
						<Fragment>
							<ShadowPicker
								value={pencilShadow}
								onChange={value => setEditor('pencilShadow', value)} />
						</Fragment>
					)
				}]} />
	</Fragment>
);

export default connect(state => ({
	isDrawingMode:state.editor.isDrawingMode,
	pathType:state.editor.pathType,
	pencilWidth:state.editor.pencilWidth,
	pencilColor:state.editor.pencilColor,
	pencilShadow:state.editor.pencilShadow
}),{
	setEditor
})(DrawPath);
