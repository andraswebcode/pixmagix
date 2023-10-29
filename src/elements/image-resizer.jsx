import {
	__
} from 'wp-i18n';

import Input from './input.jsx';
import InputGroup from './input-group.jsx';
import Range from './range.jsx';
import Help from './help.jsx';
import {
	toFixed
} from './utils.js';

const ImageResizer = ({
	label,
	help,
	value = 1, // scale
	onChange,
	originalWidth = 1,
	originalHeight = 1
}) => {

	return (
		<div className='pixmagix-image-resizer'>
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
			<Range
				label={__('Scale', 'pixmagix')}
				value={value}
				onChange={onChange}
				min={0.01}
				max={4}
				step={0.01} />
			<InputGroup>
				<Input
					type='number'
					label={__('Width', 'pixmagix')}
					value={parseInt(originalWidth * value)}
					onChange={value => {
						const newValue = value / originalWidth;
						onChange(toFixed(newValue));
					}} />
				<Input
					type='number'
					label={__('Height', 'pixmagix')}
					value={parseInt(originalHeight * value)}
					onChange={value => {
						const newValue = value / originalHeight;
						onChange(toFixed(newValue));
					}} />
			</InputGroup>
		</div>
	);

};

export default ImageResizer;
