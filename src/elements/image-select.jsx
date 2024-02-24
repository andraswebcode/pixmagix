import cn from 'classnames';
import {
	__
} from 'wp-i18n';
import {
	isString
} from 'lodash';

import Button from './button.jsx';

const ImageSelect = ({
	type = 'image', // Can be 'image', or 'svg'.
	className,
	label,
	buttonLabel,
	src,
	controls,
	children,
	onReplace,
	onSelect
}) => {

	return (
		<div className={cn('pixmagix-image-select', className)}>
			{(type === 'svg') ? (
				children ? (
					<figure
						className='pixmagix-image-select__preview'
						title={__('Replace', 'pixmagix')}
						onClick={() => onReplace()} >
						{children}
					</figure>
				) : (
					<figure
						className='pixmagix-image-select__preview'
						title={__('Replace', 'pixmagix')}
						onClick={() => onReplace()}
						dangerouslySetInnerHTML={{__html:src}} />
				)
			) : (
				<figure
					className='pixmagix-image-select__preview'
					title={__('Replace', 'pixmagix')}
					onClick={() => onReplace()} >
					<img src={src} />
				</figure>
			)}
			{controls}
			<Button
				block
				active
				onClick={() => onSelect()} >
				{buttonLabel || __('Import', 'pixmagix')}
			</Button>
		</div>
	);

};

export default ImageSelect;
