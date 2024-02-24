import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Input,
	Range,
	Select
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	QRCODE_MIN_SIZE,
	QRCODE_MAX_SIZE
} from './../../../utils/constants.js';
import {
	setLayerProps
} from './../../../redux/actions-data.js';

const QRCodeSettings = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		text,
		size,
		qrPadding,
		ecl
	} = layer;

	return (
		<Fragment>
			<Input
				label={__('Text', 'pixmagix')}
				placeholder={__('Write Text Here...', 'pixmagix')}
				value={text}
				onChange={value => setLayerProps(id, 'text', value)} />
			<Range
				label={__('Size', 'pixmagix')}
				value={size}
				onChange={value => setLayerProps(id, 'size', value)}
				min={QRCODE_MIN_SIZE}
				max={QRCODE_MAX_SIZE}
				step={1} />
			<Range
				label={__('Padding', 'pixmagix')}
				value={qrPadding}
				onChange={value => setLayerProps(id, 'qrPadding', value)}
				min={0}
				max={20}
				step={1} />
			<Select
				label={__('Error Correction Level', 'pixmagix')}
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
				value={ecl}
				onChange={value => setLayerProps(id, 'ecl', value)} />
		</Fragment>
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(QRCodeSettings);
