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

import Button from './button.jsx';
import ButtonGroup from './button-group.jsx';
import Dropdown from './dropdown.jsx';
import ColorPalette from './color-palette.jsx';
import {
	colorToString
} from './utils.js';

const PickerBase = CustomPicker(props => {

	const {
		label,
		disableAlpha,
		enableCanvasPicker,
		canvasPickerIsActive,
		color,
		onChange,
		currentColor,
		onPickStart
	} = props;

	return (
		<div className='pixmagix-color-picker-wrapper'>
			{!!label && (
				<div className='pixmagix-label-wrapper'>
					<span className='pixmagix-label'>
						{label}
					</span>
				</div>
			)}
			<ColorPalette.Base
				color={color}
				onChange={value => onChange(value || color)} />
			<ButtonGroup className='pixmagix-color-picker__custom-color'>
				<Button
					className='pixmagix-color-picker__editable-input'
					small >
					<Dropdown
						trigger={(
							<span
								className='pixmagix-color-picker__indicator'
								style={{
									backgroundColor:color
								}} />
						)} >
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
					</Dropdown>
					<EditableInput
						value={color}
						onChange={color => onChange(color)} />
				</Button>
				{enableCanvasPicker && (
					<Button
						label={__('Pick Color From Canvas', 'pixmagix')}
						icon='eye-dropper'
						small
						active={canvasPickerIsActive}
						onClick={onPickStart} />
				)}
			</ButtonGroup>
		</div>
	);

});

const ColorPicker = ({
	label,
	disableAlpha,
	enableCanvasPicker,
	canvasPickerIsActive,
	color,
	onChange,
	onPickStart
}) => {

	const defColor = disableAlpha ? '#000000' : 'rgba(0, 0, 0, 0)';
	const [currentColor, setCurrentColor] = useState(color || defColor);
	const props = {
		label,
		disableAlpha,
		enableCanvasPicker,
		canvasPickerIsActive,
		color:currentColor,
		onChange:({rgb}) => setCurrentColor(colorToString(disableAlpha ? {
			...rgb,
			a:1
		} : rgb)),
		onChangeComplete:({rgb}) => onChange(colorToString(disableAlpha ? {
			...rgb,
			a:1
		} : rgb)),
		onPickStart
	};

	return (
		<PickerBase {...props} />
	);

};

export default ColorPicker;
