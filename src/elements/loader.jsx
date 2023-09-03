import Icon from './icon.jsx';

const Loader = ({
	show
}) => show ? (
	<div className='pixmagix-loader'>
		<div className='pixmagix-loader__spinner'>
			<Icon icon='spinner' />
		</div>
	</div>
) : null;

export default Loader;
