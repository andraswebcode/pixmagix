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

const Transform = ({
	layer = {},
	activeLayers,
	setLayerProps
}) => {

	const {
		id,
		left,
		top,
		scaleX,
		scaleY,
		skewX,
		skewY,
		angle
	} = layer;
	const onTransform = property => value => {

		if (activeLayers.length === 1){
			setLayerProps(id, property, value);
		} else {
			// multiselection
		}

	};

	return (
		<Fragment>
			<InputGroup>
				<Input
					type='number'
					label={__('Translate X', 'pixmagix')}
					value={left}
					onChange={onTransform('left')}
					min={-4000}
					max={4000} />
				<Input
					type='number'
					label={__('Translate Y', 'pixmagix')}
					value={top}
					onChange={onTransform('top')}
					min={-4000}
					max={4000} />
			</InputGroup>
			<InputGroup>
				<Input
					type='number'
					label={__('Scale X', 'pixmagix')}
					value={scaleX}
					onChange={onTransform('scaleX')}
					min={0.01}
					max={10}
					step={0.01} />
				<Input
					type='number'
					label={__('Scale Y', 'pixmagix')}
					value={scaleY}
					onChange={onTransform('scaleY')}
					min={0.01}
					max={10}
					step={0.01} />
			</InputGroup>
			<InputGroup>
				<Input
					type='number'
					label={__('Skew X', 'pixmagix')}
					value={skewX}
					onChange={onTransform('skewX')}
					min={-100}
					max={100} />
				<Input
					type='number'
					label={__('Skew Y', 'pixmagix')}
					value={skewY}
					onChange={onTransform('skewY')}
					min={-100}
					max={100} />
			</InputGroup>
			<Input
				type='number'
				label={__('Angle', 'pixmagix')}
				value={angle}
				onChange={onTransform('angle')}
				min={-360}
				max={360} />
		</Fragment>
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]],
	activeLayers:state.editor.activeLayers
}),{
	setLayerProps
})(Transform);
