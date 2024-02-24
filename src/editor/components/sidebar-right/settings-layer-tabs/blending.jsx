import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Range,
	Select
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setLayerProps
} from './../../../redux/actions-data.js';
import {
	blendingModes
} from './../../../utils/lists.js';

const Blending = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		opacity,
		globalCompositeOperation
	} = layer;
	return (
		<Fragment>
			<Range
				label={__('Opacity', 'pixmagix')}
				value={opacity}
				onChange={value => setLayerProps(id, 'opacity', value)}
				min={0}
				max={1}
				step={0.01} />
			<Select
				label={__('Blending Mode', 'pixmagix')}
				options={blendingModes}
				value={globalCompositeOperation}
				onChange={value => setLayerProps(id, 'globalCompositeOperation', value)} />
		</Fragment>
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(Blending);
