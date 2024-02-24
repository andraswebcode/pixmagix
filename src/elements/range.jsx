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

const Range = ({
	label,
	help,
	value,
	onChange,
	min = 0,
	max = 10000,
	step = 1,
	withInputField = true,
	debounce = 400
}) => {

	const id = uniqueId('pixmagix_input_');

	return (
		<div className='pixmagix-range-wrapper'>
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
			<div className='pixmagix-range'>
				<DebounceInput
					type='range'
					id={id}
					value={toFixed(value)}
					onChange={e => onChange(clamp(parseFloat(e.target.value) || 0, min, max))}
					debounceTimeout={debounce}
					min={min}
					max={max}
					step={step} />
				{withInputField && (
					<DebounceInput
						type='number'
						value={toFixed(value)}
						onChange={e => onChange(clamp(parseFloat(e.target.value) || 0, min, max))}
						debounceTimeout={debounce}
						min={min}
						max={max}
						step={step} />
				)}
			</div>
		</div>
	);

};

export default Range;
