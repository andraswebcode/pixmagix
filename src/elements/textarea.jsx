import {
	DebounceInput
} from 'react-debounce-input';
import {
	uniqueId
} from 'lodash';

const Textarea = ({
	label,
	value,
	onChange,
	placeholder,
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
				</div>
			)}
			<div className='pixmagix-input'>
				<DebounceInput
					element='textarea'
					id={id}
					className='widefat'
					value={value}
					onChange={e => onChange(e.target.value)}
					placeholder={placeholder}
					debounceTimeout={debounce} />
			</div>
		</div>
	);

};

export default Textarea;
