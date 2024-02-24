import {
	connect
} from 'react-redux';
import {
	__
} from 'wp-i18n';

import {
	setLayerProps
} from './../../../redux/actions-data.js';
import ShadowPickerAdvanced from './../../../elements/shadow-picker-advanced.jsx';

const Shadow = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		shadow
	} = layer;
	return (
		<ShadowPickerAdvanced
			value={shadow}
			onChange={value => setLayerProps(id, 'shadow', value)} />
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(Shadow);
