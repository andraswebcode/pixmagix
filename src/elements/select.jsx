import Select from 'react-select';
import {
	find as _find
} from 'lodash';

import Help from './help.jsx';
import {
	selectStyles
} from './lists.js';

export default ({
	label,
	help,
	options,
	value,
	onChange,
	isMulti
}) => {

	if (!options || options.length < 2){
		return null;
	}

	const placeholder = _find(options, {value})?.label;

	return (
		<div className='pixmagix-input-wrapper'>
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
			<Select
				className='pixmagix-input'
				placeholder={placeholder || label}
				options={options}
				value={value}
				styles={selectStyles}
				onChange={option => onChange(option.value)}
				isMulti={isMulti} />
		</div>
	);

};
