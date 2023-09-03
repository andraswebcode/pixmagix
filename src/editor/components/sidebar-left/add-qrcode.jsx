import {
	Fragment
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Button,
	Widget,
	Input,
	Range,
	Select,
	ColorPicker,
	ShadowPicker
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	addLayer,
	setLayerProps
} from './../../redux/actions-data.js';
import {
	createLayerObject
} from './../../utils/utils.js';
import {
	QRCODE_MIN_SIZE,
	QRCODE_MAX_SIZE
} from './../../utils/constants.js';
import getHelpText from './../../utils/help-texts.js';

const AddQRCode = ({
	qrCodeText,
	qrCodeSize,
	qrCodePadding,
	qrCodeECL,
	pencilColor,
	pencilShadow,
	fillColor,
	canvasWidth,
	canvasHeight,
	layer,
	setEditor,
	addLayer,
	setLayerProps
}) => {

	const onChange = (editorState, property) => value => {
		batch(() => {
			setEditor(editorState, value);
			if (layer && (layer.type === 'qrcode')){
				setLayerProps(layer.id, property, value);
			}
		});
	};

	return (
		<Fragment>
			<Widget
				label={__('Add QR Code', 'pixmagix')} >
				<Input
					placeholder={__('Write Text Here...', 'pixmagix')}
					value={qrCodeText}
					onChange={value => setEditor('qrCodeText', value)} />
				<Button
					active
					block
					onClick={() => {
						const object = createLayerObject({
							type:'qrcode',
							text:qrCodeText,
							size:qrCodeSize,
							qrPadding:qrCodePadding,
							ecl:qrCodeECL,
							left:canvasWidth / 2,
							top:canvasHeight / 2,
							stroke:pencilColor,
							fill:fillColor,
							shadow:pencilShadow
						});
						addLayer(object);
					}} >
					{__('Generate QR Code', 'pixmagix')}
				</Button>
			</Widget>
			<Widget
				tabs={[{
					name:'settings',
					label:__('Settings', 'pixmagix'),
					icon:'gear',
					content:(
						<Fragment>
							<Range
								label={__('Size', 'pixmagix')}
								value={qrCodeSize}
								onChange={onChange('qrCodeSize', 'size')}
								min={QRCODE_MIN_SIZE}
								max={QRCODE_MAX_SIZE}
								step={1} />
							<Range
								label={__('Padding', 'pixmagix')}
								value={qrCodePadding}
								onChange={onChange('qrCodePadding', 'qrPadding')}
								min={0}
								max={20}
								step={1} />
							<Select
								label={__('Error Correction Level', 'pixmagix')}
								help={getHelpText('ecl')}
								options={[{
									label:'L',
									value:'L'
								},{
									label:'M',
									value:'M'
								},{
									label:'Q',
									value:'Q'
								},{
									label:'H',
									value:'H'
								}]}
								value={qrCodeECL}
								onChange={onChange('qrCodeECL', 'ecl')} />
						</Fragment>
					)
				},{
					name:'color',
					label:__('Color', 'pixmagix'),
					icon:'paintbrush',
					content:(
						<Fragment key='c'>
							<ColorPicker
								label={__('Color', 'pixmagix')}
								color={pencilColor}
								onChange={onChange('pencilColor', 'stroke')} />
						</Fragment>
					)
				},{
					name:'background',
					label:__('Background', 'pixmagix'),
					icon:'fill',
					content:(
						<Fragment key='b'>
							<ColorPicker
								label={__('Background', 'pixmagix')}
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
		qrCodeSize:state.editor.qrCodeSize,
		qrCodeText:state.editor.qrCodeText,
		qrCodePadding:state.editor.qrCodePadding,
		qrCodeECL:state.editor.qrCodeECL,
		pencilColor:state.editor.pencilColor,
		pencilShadow:state.editor.pencilShadow,
		fillColor:state.editor.fillColor,
		layer,
		canvasWidth:state.data.present.canvasWidth,
		canvasHeight:state.data.present.canvasHeight
	};

},{
	setEditor,
	addLayer,
	setLayerProps
})(AddQRCode);
