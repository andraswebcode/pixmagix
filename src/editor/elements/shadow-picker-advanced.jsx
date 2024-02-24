import {
	ShadowPicker
} from 'elements';

import ColorPickerAdvanced from './color-picker-advanced.jsx';

const ShadowPickerAdvanced = props => (
	<ShadowPicker
		{...props}
		colorPicker={ColorPickerAdvanced} />
);

export default ShadowPickerAdvanced;
