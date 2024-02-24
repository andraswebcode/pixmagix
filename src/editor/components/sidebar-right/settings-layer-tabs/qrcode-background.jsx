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

const QRCodeBackground = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		fill
	} = layer;

	return (
		<ColorPickerAdvanced
			label={__('Background', 'pixmagix')}
			color={fill}
			onChange={color => setLayerProps(id, 'fill', color)} />
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(QRCodeBackground);
