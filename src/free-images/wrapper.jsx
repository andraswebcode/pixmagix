import {
	useState
} from 'react';

import ErrorBoundary from './../editor/components/error-boundary.jsx';
import Header from './header.jsx';
import Content from './content.jsx';
import Notification from './../utils/notification.jsx';

const Wrapper = props => {

	const [notice, setNotice] = useState(null);

	return (
		<ErrorBoundary>
			<Header />
			<Content
				{...props}
				sendNotice={setNotice} />
			<Notification
				{...notice}
				onExpire={setNotice} />
		</ErrorBoundary>
	);

};

export default Wrapper;
