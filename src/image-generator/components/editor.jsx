import ErrorBoundary from './../../../src/editor/components/error-boundary.jsx';
import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import Images from './images.jsx';
import Modals from './modals.jsx';
import Notification from './notification.jsx';

const Editor = () => (
	<ErrorBoundary>
		<Header />
		<div className='pixmagix-content'>
			<Sidebar />
			<Images />
		</div>
		<Modals />
		<Notification />
	</ErrorBoundary>
);

export default Editor;
