import {
	forwardRef
} from 'react';
import {
	isObject
} from 'lodash';
import cn from 'classnames';

import Icon from './icon.jsx';

const onClickHref = (href, target) => {
	const a = document.createElement('a');
	if (href){
		a.href = href;
	}
	if (target){
		a.target = target;
	}
	a.click();
};

const Button = ({
	className,
	label,
	icon,
	active,
	small,
	block,
	disabled,
	href,
	target,
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
		onClick={href ? () => onClickHref(href, target) : onClick} >
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
		onClick={href ? () => onClickHref(href, target) : onClick} >
		{children}
	</button>
);

export default forwardRef(Button);
