import {
	forwardRef
} from 'react';
import cn from 'classnames';

const Row = ({
	className,
	children
}) => (
	<div className={cn('pixmagix-row', className)}>
		{children}
	</div>
);

const ColumnBase = ({
	className,
	width,
	children
}, ref) => (
	<div
		ref={ref}
		className={cn('pixmagix-column', className, {
			[`pixmagix-column__w-${width}`]:width
		})} >
		{children}
	</div>
);

const Column = forwardRef(ColumnBase);

export {
	Row,
	Column
};
