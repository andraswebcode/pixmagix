import {
	useState
} from 'react';

import ErrorBoundary from './../editor/components/error-boundary.jsx';
import Header from './header.jsx';
import Content from './content.jsx';
import Notification from './../utils/notification.jsx';

const Wrapper = props => {

	const [settings, setSettings] = useState(props);
	const [notice, setNotice] = useState(null);
	const onSettingChange = (key, value) => {
		setSettings({
			...settings,
			[key]:value
		});
	};

	return (
		<ErrorBoundary>
			<Header
				settings={settings}
				sendNotice={setNotice} />
			<Content
				{...settings}
				onSettingChange={onSettingChange} />
			<Notification
				{...notice}
				onExpire={setNotice} />
		</ErrorBoundary>
	);

};

export default Wrapper;
