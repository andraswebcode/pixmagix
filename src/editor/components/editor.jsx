import ErrorBoundary from './error-boundary.jsx';
import Globals from './globals.jsx';
import Header from './header.jsx';
import Toolbar from './toolbar.jsx';
import SidebarLeft from './sidebar-left.jsx';
import SidebarRight from './sidebar-right.jsx';
import Canvas from './canvas.jsx';
import Modals from './modals.jsx';
import Notification from './notification.jsx';

const Editor = () => (
	<ErrorBoundary>
		<Globals />
		<Header />
		<div className='pixmagix-content'>
			<Toolbar />
			<SidebarLeft />
			<Canvas />
			<SidebarRight />
		</div>
		<Modals />
		<Notification />
	</ErrorBoundary>
);

export default Editor;
