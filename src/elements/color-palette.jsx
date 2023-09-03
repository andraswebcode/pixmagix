import {
	find as _find
} from 'lodash';
import cn from 'classnames';
import {
	__
} from 'wp-i18n';

import Button from './button.jsx';
import Dropdown from './dropdown.jsx';
import Help from './help.jsx';

/**
 * 
 * @since 1.1.0
 * @var {array}
 */

const DEFAULT_OPTIONS = [{
	label:__('Black', 'pixmagix'),
	value:'#000000'
},{
	label:__('White', 'pixmagix'),
	value:'#FFFFFF'
},{
	label:__('Red', 'pixmagix'),
	value:'#FF0000'
},{
	label:__('Green', 'pixmagix'),
	value:'#008000'
},{
	label:__('Yellow', 'pixmagix'),
	value:'#FFFF00'
},{
	label:__('Blue', 'pixmagix'),
	value:'#0000FF'
},{
	label:__('Brown', 'pixmagix'),
	value:'#A52A2A'
},{
	label:__('Orange', 'pixmagix'),
	value:'#FFA500'
},{
	label:__('Pink', 'pixmagix'),
	value:'#FFC0CB'
},{
	label:__('Purple', 'pixmagix'),
	value:'#800080'
},{
	label:__('Grey', 'pixmagix'),
	value:'#808080'
},{
	label:__('Silver', 'pixmagix'),
	value:'#C0C0C0'
},{
	label:__('Gold', 'pixmagix'),
	value:'#FFD700'
},{
	label:__('Turquoise', 'pixmagix'),
	value:'#40E0D0'
},{
	label:__('Cyan', 'pixmagix'),
	value:'#00FFFF'
},{
	label:__('Magenta', 'pixmagix'),
	value:'#FF00FF'
},{
	label:__('Indigo', 'pixmagix'),
	value:'#4B0082'
},{
	label:__('Lavender', 'pixmagix'),
	value:'#E6E6FA'
},{
	label:__('Beige', 'pixmagix'),
	value:'#F5F5DC'
},{
	label:__('Maroon', 'pixmagix'),
	value:'#800000'
},{
	label:__('Teal', 'pixmagix'),
	value:'#008080'
},{
	label:__('Navy', 'pixmagix'),
	value:'#000080'
},{
	label:__('Olive', 'pixmagix'),
	value:'#808000'
},{
	label:__('Coral', 'pixmagix'),
	value:'#FF7F50'
}];

/**
 * 
 * @since 1.1.0
 */

const ColorPaletteBase = ({
	color = '',
	options = DEFAULT_OPTIONS,
	multiple,
	onChange
}) => (
	<ul className='pixmagix-color-palette'>
		{options.map(({
			label,
			value
		}) => {
			const selected = (color.toUpperCase() === value.toUpperCase());
			return (
				<li
					key={value}
					className='pixmagix-color-palette__item'>
					<span
						title={label}
						className={cn('pixmagix-color-palette__color', {
							active:selected
						})}
						style={{
							backgroundColor:value
						}}
						onClick={() => onChange?.(selected ? undefined : value)} />
				</li>
			);
		})}
	</ul>
);

/**
 * 
 * @since 1.1.0
 */

const ColorPalette = ({
	label,
	help,
	...props
}) => (
	<div className='pixmagix-color-palette-wrapper'>
		{!!label && (
			<div className='pixmagix-label-wrapper'>
				<span className='pixmagix-label'>
					{label}
				</span>
				{!!help && (
					<Help {...help} />
				)}
			</div>
		)}
		<ColorPaletteBase {...props} />
	</div>
);

/**
 * 
 * @since 1.1.0
 */

const CPDropdown = ({
	label,
	...props
}) => {

	const buttonLabel = _find(props.options, {
		value:props.color
	})?.label || label;

	return (
		<Dropdown
			trigger={() => (
				<Button
					className='pixmagix-color-palette__button'
					small >
					{buttonLabel}
				</Button>
			)} >
			<ColorPaletteBase {...props} />
		</Dropdown>
	);

};

ColorPalette.Dropdown = CPDropdown;
ColorPalette.Base = ColorPaletteBase;

export default ColorPalette;
