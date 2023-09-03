import Title from './header/title.jsx';
import UndoRedo from './header/undo-redo.jsx';
import Publish from './header/publish.jsx';

const Header = () => (
	<div className='pixmagix-header'>
		<Title />
		<UndoRedo />
		<Publish />
	</div>
);

export default Header;
