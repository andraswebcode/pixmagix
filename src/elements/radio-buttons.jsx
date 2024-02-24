import {
	uniqueId
} from 'lodash';
import cn from 'classnames';

import Icon from './icon.jsx';
import ButtonGroup from './button-group.jsx';

const RadioButtons = ({
	label,
	options = [],
	value,
	onChange
}) => {

	const name = uniqueId('pixmagix_radio_buttons_');

	return (
		<div className='pixmagix-radio-buttons-wrapper'>
			{!!label && (
				<span className='pixmagix-label'>
					{label}
				</span>
			)}
			<ButtonGroup className='pixmagix-radio-buttons'>
				{options.map((item, i) => (
					<label
						key={i}
						className={cn('pixmagix-button', {
							active:value === item.value,
							small:true
						})}
						title={item.icon ? item.label : undefined} >
						{item.icon ? (
							<Icon icon={item.icon} />
						) : item.label}
						<input
							type='radio'
							name={name}
							value={item.value}
							onChange={e => onChange(e.target.value)}
							checked={value === item.value ? true : undefined} />
					</label>
				))}
			</ButtonGroup>
		</div>
	);

};

export default RadioButtons;
