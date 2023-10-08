import {
	Button
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	new_url
} from 'editor-globals';

const Header = () => (
	<div className='pixmagix-header'>
		<div className='pixmagix-header__title'>
			<h1>
				{__('PixMagix - Projects', 'pixmagix')}
			</h1>
		</div>
		<Button
			active
			href={new_url} >
			{__('Add New', 'pixmagix')}
		</Button>
	</div>
)

export default Header;
