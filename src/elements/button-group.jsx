import cn from 'classnames';

const ButtonGroup = ({
	className,
	children
}) => (
	<div className={cn('pixmagix-button-group', className)}>
		{children}
	</div>
);

export default ButtonGroup;
