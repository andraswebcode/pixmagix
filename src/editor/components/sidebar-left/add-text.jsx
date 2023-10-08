import {
	Fragment
} from 'react';
import {
	connect,
	batch
} from 'react-redux';
import {
	Widget,
	Textarea,
	Button,
	Range,
	Select,
	MulticheckButtons,
	RadioButtons,
	ColorPicker,
	ShadowPicker
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	PENCIL_MIN_WIDTH,
	PENCIL_MAX_WIDTH,
	MIN_FONT_SIZE,
	MAX_FONT_SIZE
} from './../../utils/constants.js';
import {
	createLayerObject
} from './../../utils/utils.js';
import {
	getFonts
} from './../../utils/fonts.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	addLayer,
	setLayerProps
} from './../../redux/actions-data.js';
import getHelpText from './../../utils/help-texts.js';

const AddText = ({
	canvasWidth,
	canvasHeight,
	layer,
	newText,
	fontFamily,
	fontSize,
	fontStyle,
	fontWeight,
	textAlign,
	lineHeight,
	charSpacing,
	underline,
	pencilWidth,
	pencilColor,
	pencilShadow,
	fillColor,
	setEditor,
	addLayer,
	setLayerProps
}) => {

	const onChangeWithUpdateSize = (editorState, property) => value => {
		batch(() => {
			setEditor(editorState, value);
			if (layer && (layer.type === 'i-text' || layer.type === 'text')){
				const options = createLayerObject({
					...layer,
					[property]:value
				});
				setLayerProps(layer.id, {
					[property]:value,
					width:options.width,
					height:options.height
				});
			}
		});
	};
	const onChange = (editorState, property) => value => {
		batch(() => {
			setEditor(editorState, value);
			if (layer && (layer.type === 'i-text' || layer.type === 'text')){
				setLayerProps(layer.id, property, value);
			}
		});
	};

	return (
		<Fragment>
			<Widget
				label={__('Add Text', 'pixmagix')} >
				<Textarea
					placeholder={__('Write Text Here...', 'pixmagix')}
					value={newText}
					onChange={value => setEditor('newText', value)} />
				<Button
					block
					active
					onClick={() => {
						let name = newText.substring(0, 20).replace(/\n/g, ' ').trim();
							name = (name.length < newText.length) ? name + '...' : name;
						const object = createLayerObject({
							type:'i-text',
							name,
							text:newText,
							left:canvasWidth / 2,
							top:canvasHeight / 2,
							fontFamily,
							fontSize,
							fontStyle,
							fontWeight,
							textAlign,
							lineHeight,
							charSpacing,
							underline,
							strokeWidth:pencilWidth,
							stroke:pencilColor,
							fill:fillColor,
							shadow:pencilShadow
						});
						addLayer(object);
					}} >
					{__('Add Text', 'pixmagix')}
				</Button>
			</Widget>
			<Widget
				tabs={[{
					name:'font',
					label:__('Font', 'pixmagix'),
					icon:'font',
					content:(
						<Fragment>
							<Range
								label={__('Font Size', 'pixmagix')}
								value={fontSize}
								onChange={onChangeWithUpdateSize('fontSize', 'fontSize')}
								min={MIN_FONT_SIZE}
								max={MAX_FONT_SIZE}
								step={1} />
							<Range
								label={__('Line Height', 'pixmagix')}
								help={getHelpText('lineHeight')}
								value={lineHeight}
								onChange={onChangeWithUpdateSize('lineHeight', 'lineHeight')}
								min={0.01}
								max={4}
								step={0.01} />
							<Range
								label={__('Character Spacing', 'pixmagix')}
								value={charSpacing}
								onChange={onChangeWithUpdateSize('charSpacing', 'charSpacing')}
								min={0}
								max={MAX_FONT_SIZE}
								step={1} />
							<Select
								label={__('Font Family', 'pixmagix')}
								help={getHelpText('fontFamily')}
								options={getFonts()}
								value={fontFamily}
								onChange={onChangeWithUpdateSize('fontFamily', 'fontFamily')} />
							<MulticheckButtons
								label={__('Text Style', 'pixmagix')}
								items={[{
									label:__('Bold', 'pixmagix'),
									icon:'bold',
									value:fontWeight === 'bold',
									onChange:value => {
										const weight = value ? 'bold' : 'normal';
										onChangeWithUpdateSize('fontWeight', 'fontWeight')(weight);
									}
								},{
									label:__('Italic', 'pixmagix'),
									icon:'italic',
									value:fontStyle === 'italic',
									onChange:value => {
										const style = value ? 'italic' : 'normal';
										onChangeWithUpdateSize('fontStyle', 'fontStyle')(style);
									}
								},{
									label:__('Underline', 'pixmagix'),
									icon:'underline',
									value:underline,
									onChange:onChange('underline', 'underline')
								}]} />
							<RadioButtons
								label={__('Text Align', 'pixmagix')}
								options={[{
									label:__('Left', 'pixmagix'),
									icon:'align-left',
									value:'left'
								},{
									label:__('Center', 'pixmagix'),
									icon:'align-center',
									value:'center'
								},{
									label:__('Right', 'pixmagix'),
									icon:'align-right',
									value:'right'
								},{
									label:__('Justify', 'pixmagix'),
									icon:'align-justify',
									value:'justify'
								}]}
								value={textAlign}
								onChange={onChange('textAlign', 'textAlign')} />
						</Fragment>
					)
				},{
					name:'stroke',
					label:__('Stroke', 'pixmagix'),
					icon:'paintbrush',
					content:(
						<Fragment>
							<Range
								label={__('Stroke Width', 'pixmagix')}
								help={getHelpText('strokeWidth')}
								value={pencilWidth}
								onChange={onChange('pencilWidth', 'strokeWidth')}
								min={PENCIL_MIN_WIDTH}
								max={PENCIL_MAX_WIDTH}
								step={1} />
							<ColorPicker
								label={__('Stroke Color', 'pixmagix')}
								color={pencilColor}
								onChange={onChange('pencilColor', 'stroke')} />
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
								onChange={onChange('fillColor', 'fill')} />
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
								onChange={onChange('pencilShadow', 'shadow')} />
						</Fragment>
					)
				}]} />
		</Fragment>
	);

};

export default connect(state => {

	const activeLayer = state.editor.activeLayers[0];
	const layer = activeLayer ? state.data.present.layers[activeLayer] : null;

	return {
		canvasWidth:state.data.present.canvasWidth,
		canvasHeight:state.data.present.canvasHeight,
		layer,
		newText:state.editor.newText,
		fontFamily:state.editor.fontFamily,
		fontSize:state.editor.fontSize,
		fontStyle:state.editor.fontStyle,
		fontWeight:state.editor.fontWeight,
		textAlign:state.editor.textAlign,
		lineHeight:state.editor.lineHeight,
		charSpacing:state.editor.charSpacing,
		underline:state.editor.underline,
		pencilWidth:state.editor.pencilWidth,
		pencilColor:state.editor.pencilColor,
		pencilShadow:state.editor.pencilShadow,
		fillColor:state.editor.fillColor
	};

},{
	setEditor,
	addLayer,
	setLayerProps
})(AddText);
