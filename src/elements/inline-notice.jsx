import cn from 'classnames';

const InlineNotice = ({
	type,
	message,
	show
}) => show ? (
	<div className={cn('pixmagix-inlinenotice', {
		[`pixmagix-inlinenotice__${type}`]:type
	})}>
		<p>
			{message}
		</p>
	</div>
) : null;

export default InlineNotice;
