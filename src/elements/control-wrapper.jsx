import Help from './help.jsx';

export default ({
	id,
	label,
	help,
	children
}) => (
	<div className='pixmagix-control-wrapper'>
		{!!label && (
			<div className='pixmagix-label-wrapper'>
				<label htmlFor={id} className='pixmagix-label'>
					{label}
				</label>
				{!!help && (
					<Help {...help} />
				)}
			</div>
		)}
		<div className='pixmagix-control'>
			{children}
		</div>
	</div>
);
