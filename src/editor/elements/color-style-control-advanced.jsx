import {
	ColorStyleControl
} from 'elements';

import ColorPickerAdvanced from './color-picker-advanced.jsx';
import GradientrPickerAdvanced from './gradient-picker-advanced.jsx';

const ColorStyleControlAdvanced = props => (
	<ColorStyleControl
		{...props}
		colorPicker={ColorPickerAdvanced}
		gradientPicker={GradientrPickerAdvanced} />
);

export default ColorStyleControlAdvanced;
