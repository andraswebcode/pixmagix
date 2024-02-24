import {
	GradientPicker
} from 'elements';

import ColorPickerAdvanced from './color-picker-advanced.jsx';

const WrappedColorPickerAdvanced = ({
	label,
	color,
	onSelect
}) => (
	<ColorPickerAdvanced
		label={label}
		color={color}
		onChange={color => onSelect(color)} />
);

const GradientPickerAdvanced = props => (
	<GradientPicker
		{...props}
		colorPicker={WrappedColorPickerAdvanced} />
);

export default GradientPickerAdvanced;
