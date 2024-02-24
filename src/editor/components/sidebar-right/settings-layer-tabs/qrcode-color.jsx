import {
	connect
} from 'react-redux';
import {
	__
} from 'wp-i18n';

import {
	setLayerProps
} from './../../../redux/actions-data.js';
import ColorPickerAdvanced from './../../../elements/color-picker-advanced.jsx';

const QRCodeColor = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		stroke
	} = layer;

	return (
		<ColorPickerAdvanced
			label={__('Color', 'pixmagix')}
			color={stroke}
			onChange={color => setLayerProps(id, 'stroke', color)} />
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(QRCodeColor);
