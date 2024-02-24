import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Input,
	InputGroup
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setLayerProps
} from './../../../redux/actions-data.js';

const Dimensions = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		type,
		width,
		height,
		radius,
		rx,
		ry
	} = layer;

	if (type === 'circle'){
		return (
			<Input
				type='number'
				label={__('Radius', 'pixmagix')}
				value={radius}
				onChange={value => setLayerProps(id, 'radius', value)} />
		);
	} else if (type === 'ellipse'){
		return (
			<InputGroup>
				<Input
					type='number'
					label={__('Width', 'pixmagix')}
					value={width}
					onChange={value => setLayerProps(id, {
						width:value,
						rx:value / 2
					})} />
				<Input
					type='number'
					label={__('Height', 'pixmagix')}
					value={height}
					onChange={value => setLayerProps(id, {
						height:value,
						ry:value / 2
					})} />
			</InputGroup>
		);
	}

	return (
		<Fragment>
			<InputGroup>
				<Input
					type='number'
					label={__('Width', 'pixmagix')}
					value={width}
					onChange={value => setLayerProps(id, 'width', value)} />
				<Input
					type='number'
					label={__('Height', 'pixmagix')}
					value={height}
					onChange={value => setLayerProps(id, 'height', value)} />
			</InputGroup>
			<Input
				type='number'
				label={__('Corner Radius', 'pixmagix')}
				value={rx}
				onChange={value => setLayerProps(id, {
					rx:value,
					ry:value
				})} />
		</Fragment>
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(Dimensions);
