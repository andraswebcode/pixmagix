import {
	useState,
	Fragment
} from 'react';
import CustomPicker from 'react-color/lib/Custom';
import {
	EditableInput,
	Saturation,
	Alpha,
	Hue
} from 'react-color/lib/components/common';
import cn from 'classnames';
import {
	__
} from 'wp-i18n';

import RadioButtons from './radio-buttons.jsx';
import ButtonGroup from './button-group.jsx';
import ColorPalette from './color-palette.jsx';
import {
	colorToString
} from './utils.js';

const PickerBase = CustomPicker(props => {

	const {
		label,
		disableAlpha,
		palette = true,
		initTab = 'picker',
		color,
		onChange
	} = props;
	const [tab, setTab] = useState(initTab);

	return (
		<div className='pixmagix-color-picker-wrapper'>
			{!!label && (
				<div className='pixmagix-label-wrapper'>
					<span className='pixmagix-label'>
						{label}
					</span>
				</div>
			)}
			<ButtonGroup className='pixmagix-color-picker__editable-input'>
				<EditableInput
					value={color}
					onChange={color => onChange(color)} />
				{!!palette && (
					<RadioButtons
						options={[{
							label:__('Color Picker', 'pixmagix'),
							value:'picker',
							icon:'eye-dropper'
						},{
							label:__('Color Palette', 'pixmagix'),
							value:'palette',
							icon:'palette'
						}]}
						value={tab}
						onChange={setTab} />
				)}
			</ButtonGroup>
			{(tab === 'palette') ? (
				<ColorPalette.Base
					color={color}
					onChange={value => onChange(value || color)} />
			) : (
				<div className={cn('pixmagix-color-picker', {
					'pixmagix-color-picker__disablealpha':disableAlpha
				})} >
					<div className='pixmagix-color-picker__saturation'>
						<Saturation
							{...props} />
					</div>
					<div className='pixmagix-color-picker__hue'>
						<Hue
							{...props}
							direction='vertical' />
					</div>
					{!disableAlpha && (
						<div className='pixmagix-color-picker__alpha'>
							<Alpha
								{...props}
								direction='vertical' />
						</div>
					)}
				</div>
			)}
		</div>
	);

});

const ColorPicker = ({
	label,
	disableAlpha,
	palette,
	color,
	onChange
}) => {

	const defColor = disableAlpha ? '#000000' : 'rgba(0, 0, 0, 0)';
	const [currentColor, setCurrentColor] = useState(color || defColor);
	const props = {
		label,
		disableAlpha,
		palette,
		color:currentColor,
		onChange:({rgb}) => setCurrentColor(colorToString(disableAlpha ? {
			...rgb,
			a:1
		} : rgb)),
		onChangeComplete:({rgb}) => onChange(colorToString(disableAlpha ? {
			...rgb,
			a:1
		} : rgb))
	};

	return (
		<PickerBase {...props} />
	);

};

export default ColorPicker;
