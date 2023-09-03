import ErrorBoundary from './../editor/components/error-boundary.jsx';
import Header from './header.jsx';
import Content from './content.jsx';

const Wrapper = props => (
	<ErrorBoundary>
		<Header />
		<Content {...props} />
	</ErrorBoundary>
);

export default Wrapper;
