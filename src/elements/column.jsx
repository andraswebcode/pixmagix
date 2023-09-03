import cn from 'classnames';

const Row = ({
	className,
	children
}) => (
	<div className={cn('pixmagix-row', className)}>
		{children}
	</div>
);

const Column = ({
	className,
	width,
	children
}) => (
	<div className={cn('pixmagix-column', className, {
		[`pixmagix-column__w-${width}`]:width
	})}>
		{children}
	</div>
);

export {
	Row,
	Column
};
