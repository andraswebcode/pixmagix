import cn from 'classnames';

const InputGroup = ({
	className,
	children
}) => (
	<div className={cn('pixmagix-input-group', className)}>
		{children}
	</div>
);

export default InputGroup;
