import {
	__
} from 'wp-i18n';

const Header = () => (
	<div className='pixmagix-header'>
		<div className='pixmagix-header__title'>
			<h1>
				{__('PixMagix - Royalty Free Images', 'pixmagix')}
			</h1>
		</div>
	</div>
)

export default Header;
