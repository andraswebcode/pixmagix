import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Textarea,
	Range,
	MulticheckButtons,
	RadioButtons
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	MIN_FONT_SIZE,
	MAX_FONT_SIZE
} from './../../../utils/constants.js';
import {
	setLayerProps
} from './../../../redux/actions-data.js';
import FontPickerAdvanced from './../../../elements/font-picker-advanced.jsx';

const Font = ({
	layer = {},
	fontList,
	setLayerProps
}) => {

	const {
		id,
		text,
		fontSize,
		fontFamily,
		fontStyle,
		fontWeight,
		textAlign,
		lineHeight,
		charSpacing,
		underline
	} = layer;

	return (
		<Fragment>
			<Textarea
				label={__('Text', 'pixmagix')}
				value={text}
				onChange={value => setLayerProps(id, 'text', value)} />
			<Range
				label={__('Font Size', 'pixmagix')}
				value={fontSize}
				onChange={value => setLayerProps(id, 'fontSize', value)}
				min={MIN_FONT_SIZE}
				max={MAX_FONT_SIZE}
				step={1} />
			<Range
				label={__('Line Height', 'pixmagix')}
				value={lineHeight}
				onChange={value => setLayerProps(id, 'lineHeight', value)}
				min={0.01}
				max={4}
				step={0.01} />
			<Range
				label={__('Character Spacing', 'pixmagix')}
				value={charSpacing}
				onChange={value => setLayerProps(id, 'charSpacing', value)}
				min={0}
				max={MAX_FONT_SIZE}
				step={1} />
			<FontPickerAdvanced
				label={__('Font Family', 'pixmagix')}
				value={fontFamily}
				onChange={(fontFamily, fontCollection) => setLayerProps(id, {
					fontFamily,
					fontCollection
				})}
				onAdd={() => setEditor('activeModal', 'font-manager')} />
			<MulticheckButtons
				label={__('Text Style', 'pixmagix')}
				items={[{
					label:__('Bold', 'pixmagix'),
					icon:'bold',
					value:fontWeight === 'bold',
					onChange:value => {
						const weight = value ? 'bold' : 'normal';
						setLayerProps(id, 'fontWeight', weight);
					}
				},{
					label:__('Italic', 'pixmagix'),
					icon:'italic',
					value:fontStyle === 'italic',
					onChange:value => {
						const style = value ? 'italic' : 'normal';
						setLayerProps(id, 'fontStyle', style);
					}
				},{
					label:__('Underline', 'pixmagix'),
					icon:'underline',
					value:underline,
					onChange:value => setLayerProps(id, 'underline', value)
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
				onChange={value => setLayerProps(id, 'textAlign', value)} />
		</Fragment>
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]],
	fontList:state.editor.fontList
}),{
	setLayerProps
})(Font);
