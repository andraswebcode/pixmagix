import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Button,
	Widget,
	LibrarySelect,
	Range,
	ColorPicker,
	ShadowPicker
} from 'elements';
import {
	__
} from 'wp-i18n';

import shapes from './../../utils/shapes.js';
import {
	EDITOR_COLOR,
	PENCIL_MIN_WIDTH,
	PENCIL_MAX_WIDTH
} from './../../utils/constants.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import getHelpText from './../../utils/help-texts.js';

const DrawShape = ({
	drawnShape,
	isDrawingMode,
	pencilWidth,
	pencilColor,
	pencilShadow,
	fillColor,
	setEditor
}) => (
	<Fragment>
			<Widget
				label={__('Select Shape', 'pixmagix')} >
				<LibrarySelect
					itemType='svg'
					svgAttrs={{
						fill:'none',
						stroke:EDITOR_COLOR,
						strokeWidth:8
					}}
					items={shapes}
					value={drawnShape}
					onChange={({name}) => setEditor('drawnShape', name)} />
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
					name:'fill',
					label:__('Fill', 'pixmagix'),
					icon:'fill',
					content:(
						<Fragment>
							<ColorPicker
								label={__('Fill Color', 'pixmagix')}
								color={fillColor}
								onChange={color => setEditor('fillColor', color)} />
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
	drawnShape:state.editor.drawnShape,
	isDrawingMode:state.editor.isDrawingMode,
	pencilWidth:state.editor.pencilWidth,
	pencilColor:state.editor.pencilColor,
	pencilShadow:state.editor.pencilShadow,
	fillColor:state.editor.fillColor
}),{
	setEditor
})(DrawShape);
