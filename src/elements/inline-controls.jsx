import cn from 'classnames';

const InlineControls = ({
	className,
	children,
	logo
}) => (
	<div className={cn('pixmagix-inline-controls', className)}>
		<div className='pixmagix-inline-controls__container'>
			{children}
		</div>
		{!!logo && (
			<div className='pixmagix-inline-controls__logo'>
				<a
					href={logo.url}
					title={logo.title} >
					<img src={logo.src} />
				</a>
			</div>
		)}
	</div>
);

export default InlineControls;
