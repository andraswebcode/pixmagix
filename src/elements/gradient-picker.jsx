import {
	useState
} from 'react';
import {
	GradientPicker,
	AnglePicker
} from 'react-linear-gradient-picker';
import {
	debounce
} from 'lodash';

import ColorPicker from './color-picker.jsx';
import {
	toFixed
} from './utils.js';

const WrappedColorPicker = ({
	label,
	color,
	onSelect
}) => (
	<ColorPicker
		key={color}
		label={label}
		color={color}
		palette={false}
		onChange={color => onSelect(color)} />
);

const Picker = ({
	label,
	value = {},
	onChange,
	defColorStops = []
}) => {

	const {
		type,
		colorStops = defColorStops,
		angle = 0
	} = value;
	const [_colorStops, setColorStops] = useState(colorStops);
	const [_angle, setAngle] = useState(angle);
	const _onChange = debounce(onChange, 400);

	return (
		<div className='pixmagix-gradient-picker-wrapper'>
			<GradientPicker
				palette={_colorStops}
				onPaletteChange={newValue => {
					const colors = newValue.map(({color, offset}) => ({
						color,
						offset:toFixed(offset)
					}));
					setColorStops(newValue);
					_onChange({
						...value,
						colorStops:colors
					});
				}}
				width={176}
				paletteHeight={15} >
				<WrappedColorPicker
					label={label} />
			</GradientPicker>
			{(type === 'linear') && (
				<div className='controls-wrapper'>
					<AnglePicker
						angle={_angle}
						setAngle={newValue => {
							setAngle(newValue);
							_onChange({
								...value,
								angle:newValue || _angle || 0
							});
						}}
						snap={1}
						size={30} />
				</div>
			)}
		</div>
	);

};

export default Picker;
