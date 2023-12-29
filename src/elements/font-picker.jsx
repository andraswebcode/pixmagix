import {
	__
} from 'wp-i18n';
import Select from 'react-select';
import {
	find as _find
} from 'lodash';

import Button from './button.jsx';
import Help from './help.jsx';
import {
	selectStyles
} from './lists.js';
import {
	loadGFont
} from './utils.js';

const FontPicker = ({
	label,
	help,
	options = [],
	value,
	onChange,
	onAdd
}) => {

	const selected = _find(options, {family:value}) || {};

	return (
		<div className='pixmagix-font-picker-wrapper'>
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
			<div className='pixmagix-font-picker'>
				<Select
					className='pixmagix-input'
					placeholder={value || selected.family || label}
					styles={{
						...selectStyles,
						menu:provided => ({
							...provided,
							backgroundColor:'#354147',
							minWidth:163
						}),
						placeholder:provided => ({
							...provided,
							fontFamily:selected.family,
							overflow:'hidden',
							whiteSpace:'nowrap',
							textOverflow:'ellipsis'
						}),
						option:(provided, {isSelected, isFocused, data}) => ({
							...provided,
							padding:'2px 12px',
							backgroundColor:(isSelected || isFocused) ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
							fontFamily:data.value
						})
					}}
					options={options.map(({
						family,
						collection
					}) => {
						if (collection === 'gfonts'){
							loadGFont(family);
						}
						return {
							label:family,
							value:family
						};
					})}
					value={value}
					onChange={option => onChange(option.value)} />
				<Button
					label={__('Open Font Manager', 'pixmagix')}
					icon='font'
					small
					onClick={onAdd} />
			</div>
		</div>
	);

};

export default FontPicker;
