import {
	uniqueId
} from 'lodash';

const Checkbox = ({
	label,
	checked,
	onChange
}) => {

	const id = uniqueId('pixmagix_checkbox_');

	return (
		<div className='pixmagix-checkbox-wrapper'>
			<input
				type='checkbox'
				id={id}
				checked={checked || undefined}
				onChange={e => onChange(e.target.checked)} />
			<label htmlFor={id}>
				<span className='pixmagix-checkbox-switch'></span>
				<span className='pixmagix-checkbox-label'>
					{label}
				</span>
			</label>
		</div>
	);

};

export default Checkbox;
