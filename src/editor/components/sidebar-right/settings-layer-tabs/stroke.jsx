import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Range,
	StrokeDashArrayControl
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	PENCIL_MIN_WIDTH,
	PENCIL_MAX_WIDTH
} from './../../../utils/constants.js';
import {
	setLayerProps
} from './../../../redux/actions-data.js';
import ColorPickerAdvanced from './../../../elements/color-picker-advanced.jsx';

const Stroke = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		strokeWidth,
		stroke,
		strokeDashArray,
		strokeDashOffset
	} = layer;
	return (
		<Fragment>
			<Range
				label={__('Stroke Width', 'pixmagix')}
				value={strokeWidth}
				onChange={value => setLayerProps(id, 'strokeWidth', value)}
				min={PENCIL_MIN_WIDTH}
				max={PENCIL_MAX_WIDTH}
				step={1} />
			<ColorPickerAdvanced
				label={__('Stroke Color', 'pixmagix')}
				color={stroke}
				onChange={color => setLayerProps(id, 'stroke', color)} />
			<StrokeDashArrayControl
				label={__('Stroke Dash Array', 'pixmagix')}
				value={strokeDashArray}
				onChange={value => setLayerProps(id, 'strokeDashArray', value)} />
			<Range
				label={__('Stroke Dash Offset', 'pixmagix')}
				value={strokeDashOffset}
				onChange={value => setLayerProps(id, 'strokeDashOffset', value)}
				min={PENCIL_MIN_WIDTH}
				max={PENCIL_MAX_WIDTH}
				step={1} />
		</Fragment>
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(Stroke);
