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
	Checkbox,
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

const FreeHandDraw = ({
	isDrawingMode,
	pencilType,
	pencilWidth,
	pencilColor,
	pencilShadow,
	pencilDecimate,
	pencilDensity,
	pencilDotWidth,
	pencilDotWidthVariance,
	pencilRandomOpacity,
	setEditor
}) => (
	<Fragment>
			<Widget
				label={__('Free Hand Draw', 'pixmagix')} >
				<Select
					label={__('Pencil Type', 'pixmagix')}
					options={[{
						label:__('Pencil', 'pixmagix'),
						value:'pencil'
					},{
						label:__('Circle', 'pixmagix'),
						value:'circle'
					},{
						label:__('Spray', 'pixmagix'),
						value:'spray'
					}]}
					value={pencilType}
					onChange={value => setEditor('pencilType', value)} />
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
				},(pencilType !== 'circle') && {
					name:'settings',
					label:__('Settings', 'pixmagix'),
					icon:'gear',
					content:(
						<Fragment>
							{(pencilType === 'pencil') ? (
								<Range
									label={__('Distance of Path Nodes', 'wprembrant')}
									min={1}
									max={200}
									step={1}
									value={pencilDecimate}
									onChange={value => setEditor('pencilDecimate', value)} />
							) : (pencilType === 'spray') ? (
								<Fragment>
									<Range
										label={__('Density', 'wprembrant')}
										min={1}
										max={100}
										step={1}
										value={pencilDensity}
										onChange={value => setEditor('pencilDensity', value)} />
									<Range
										label={__('Dot Width', 'wprembrant')}
										min={1}
										max={20}
										step={1}
										value={pencilDotWidth}
										onChange={value => setEditor('pencilDotWidth', value)} />
									<Range
										label={__('Dot Width Variance', 'wprembrant')}
										min={1}
										max={20}
										step={1}
										value={pencilDotWidthVariance}
										onChange={value => setEditor('pencilDotWidthVariance', value)} />
									<Checkbox
										label={__('Random Opacity', 'wprembrant')}
										checked={pencilRandomOpacity}
										onChange={value => setEditor('pencilRandomOpacity', value)} />
								</Fragment>
							) : null}
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
				}].filter(item => !!item)} />
	</Fragment>
);

export default connect(state => ({
	isDrawingMode:state.editor.isDrawingMode,
	pencilType:state.editor.pencilType,
	pencilWidth:state.editor.pencilWidth,
	pencilColor:state.editor.pencilColor,
	pencilShadow:state.editor.pencilShadow,
	pencilDecimate:state.editor.pencilDecimate,
	pencilDensity:state.editor.pencilDensity,
	pencilDotWidth:state.editor.pencilDotWidth,
	pencilDotWidthVariance:state.editor.pencilDotWidthVariance,
	pencilRandomOpacity:state.editor.pencilRandomOpacity
}),{
	setEditor
})(FreeHandDraw);
