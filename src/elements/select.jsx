import Select from 'react-select';
import {
	find as _find
} from 'lodash';

import Help from './help.jsx';

const _customStyles = {
	container:provided => ({
		...provided,
		minWidth:150
	}),
	control:provided => ({
		...provided,
		backgroundColor:'transparent',
		minHeight:'auto',
		border:'solid 1px #1b2124',
		borderRadius:0
	}),
	valueContainer:provided => ({
		...provided,
		padding:'2px 6px'
	}),
	menu:provided => ({
		...provided,
		backgroundColor:'#354147'
	}),
	input:provided => ({
		...provided,
		paddingTop:0,
		paddingBottom:0,
		margin:0,
		border:'none'
	}),
	dropdownIndicator:provided => ({
		...provided,
		padding:0
	}),
	indicatorSeparator:provided => ({
		display:'none'
	}),
	option:(provided, {isSelected, isFocused}) => ({
		...provided,
		padding:'2px 12px',
		backgroundColor:(isSelected || isFocused) ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
	}),
};

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
				styles={_customStyles}
				onChange={option => onChange(option.value)}
				isMulti={isMulti} />
		</div>
	);

};
