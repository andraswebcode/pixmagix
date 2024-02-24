import {
	connect
} from 'react-redux';
import {
	__
} from 'wp-i18n';

import {
	setLayerProps
} from './../../../redux/actions-data.js';
import ColorStyleControlAdvanced from './../../../elements/color-style-control-advanced.jsx';

const Fill = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		fill
	} = layer;
	return (
		<ColorStyleControlAdvanced
			labels={{
				style:__('Fill Style', 'pixmagix'),
				color:__('Fill Color', 'pixmagix'),
				gradient:__('Fill Gradient', 'pixmagix')
			}}
			value={fill}
			onChange={value => setLayerProps(id, 'fill', value)} />
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(Fill);
