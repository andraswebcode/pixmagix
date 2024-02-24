import {
	times
} from 'lodash';
import {
	__
} from 'wp-i18n';

import ButtonGroup from './button-group.jsx';
import Button from './button.jsx';
import Range from './range.jsx';
import Help from './help.jsx';

const StrokeDashArrayControl = ({
	label,
	help,
	value,
	onChange
}) => (
	<div className='pixmagix-stroke-dasharray-control'>
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
		{!!value?.length && (
			<div className='pixmagix-stroke-dasharray-control__labels'>
				<span className='pixmagix-label'>
					{__('Dashes', 'pixmagix')}
				</span>
				<span className='pixmagix-label'>
					{__('Gaps', 'pixmagix')}
				</span>
			</div>
		)}
		<div className='pixmagix-stroke-dasharray-control__inputs'>
			{value && times(value.length / 2, i => (
				<div
					key={i}
					className='pixmagix-input-and-button' >
					<ButtonGroup>
						<Range
							value={value[i * 2]}
							onChange={dash => {
								const array = value.slice();
								array[i * 2] = dash;
								onChange(array);
							}}
							min={0}
							max={100}
							step={1} />
						<Range
							value={value[i * 2 + 1]}
							onChange={gap => {
								const array = value.slice();
								array[i * 2 + 1] = gap;
								onChange(array);
							}}
							min={0}
							max={100}
							step={1} />
						<Button
							label={__('Remove', 'pixmagix')}
							icon='times'
							small
							onClick={() => {
								const array = value.filter((_n, _i) => (_i > i * 2 + 1 || _i < i * 2));
								onChange(array.length ? array : null);
							}} />
					</ButtonGroup>
				</div>
			))}
		</div>
		<Button
			label={__('Add Value', 'pixmagix')}
			icon='plus'
			small
			onClick={() => {
				const array = value ? value.slice() : [];
				array.push(4, 4);
				onChange(array);
			}} />
	</div>
);

export default StrokeDashArrayControl;
