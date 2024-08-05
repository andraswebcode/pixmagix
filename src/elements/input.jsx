import {
	DebounceInput
} from 'react-debounce-input';
import {
	uniqueId
} from 'lodash';
import {
	clamp,
	toFixed
} from './utils.js';

import Help from './help.jsx';

const Input = ({
	label,
	help,
	type = 'text',
	value,
	onChange,
	placeholder,
	readonly,
	min = 0,
	max = 10000,
	step = 1,
	debounce = 400
}) => {

	const id = uniqueId('pixmagix_input_');

	return (
		<div className='pixmagix-input-wrapper'>
			{!!label && (
				<div className='pixmagix-label-wrapper'>
					<label htmlFor={id} className='pixmagix-label'>
						{label}
					</label>
					{!!help && (
						<Help {...help} />
					)}
				</div>
			)}
			<div className='pixmagix-input'>
				<DebounceInput
					type={type}
					id={id}
					value={(type === 'number') ? toFixed(value) : value}
					onChange={e => onChange(
						(type === 'number') ?
							clamp(parseFloat(e.target.value) || 0, min, max) :
							e.target.value
					)}
					debounceTimeout={debounce}
					placeholder={placeholder}
					readOnly={readonly}
					min={min}
					max={max}
					step={step} />
			</div>
		</div>
	);

};

export default Input;
