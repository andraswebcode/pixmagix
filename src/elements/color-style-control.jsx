import {
	Fragment
} from 'react';
import {
	__
} from 'wp-i18n';

import Select from './select.jsx';
import ColorPicker from './color-picker.jsx';
import GradientPicker from './gradient-picker.jsx';

const ColorStyleControl = ({
	labels = {},
	value,
	defColor = '#FFFFFF',
	defColorStops = [{
		color:'#000000',
		offset:0
	},{
		color:'#FFFFFF',
		offset:1
	}],
	allowReset,
	onChange,
	colorPicker = ColorPicker,
	gradientPicker = GradientPicker
}) => {

	const {
		type = 'color'
	} = value || {};
	const CP = colorPicker;
	const GP = gradientPicker;
	let options = [];

	if (allowReset){
		options = [{
			label:__('None', 'pixmagix'),
			value:undefined
		}];
	}

	options = options.concat([{
		label:__('Color', 'pixmagix'),
		value:'color'
	},{
		label:__('Linear Gradient', 'pixmagix'),
		value:'linear'
	},{
		label:__('Radial Gradient', 'pixmagix'),
		value:'radial'
	}]);

	return (
		<Fragment>
			<Select
				label={labels.style}
				options={options}
				value={value && type}
				onChange={style => {
					if (style === 'color'){
						onChange(defColor, 'color');
					} else if (style === 'linear' || style === 'radial'){
						onChange({
							type:style,
							colorStops:value?.colorStops || defColorStops
						}, style);
					} else {
						onChange();
					}
				}} />
			{(type === 'linear' || type === 'radial') ? (
				<GP
					label={labels.gradient}
					value={value}
					onChange={gradient => onChange(gradient, type)}
					defColorStops={defColorStops} />
			) : (value && type === 'color') ? (
				<CP
					label={labels.color}
					color={value}
					onChange={color => onChange(color, 'color')} />
			) : null}
		</Fragment>
	);

};

export default ColorStyleControl;
