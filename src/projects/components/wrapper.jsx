import ErrorBoundary from './../../editor/components/error-boundary.jsx';
import Globals from './globals.jsx';
import Header from './header.jsx';
import Content from './content.jsx';
import Modals from './modals.jsx';
import Notification from './notification.jsx';

const Wrapper = () => (
	<ErrorBoundary>
		<Globals />
		<Header />
		<Content />
		<Modals />
		<Notification />
	</ErrorBoundary>
);

export default Wrapper;
