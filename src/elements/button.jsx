import {
	forwardRef
} from 'react';
import {
	isObject
} from 'lodash';
import cn from 'classnames';

import Icon from './icon.jsx';

const Button = ({
	className,
	label,
	icon,
	active,
	small,
	block,
	disabled,
	onClick,
	children
}, ref) => icon ? (
	<button
		ref={ref}
		className={cn('pixmagix-button', className, {
			active,
			small,
			block
		})}
		disabled={disabled}
		title={!disabled ? label : undefined}
		onClick={onClick} >
		{isObject(icon) ? (
			<Icon {...icon} />
		) : (
			<Icon icon={icon} />
		)}
	</button>
) : (
	<button
		ref={ref}
		className={cn('pixmagix-button', className, {
			active,
			small,
			block
		})}
		disabled={disabled}
		onClick={onClick} >
		{children}
	</button>
);

export default forwardRef(Button);
