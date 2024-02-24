import {
	useEffect
} from 'react';
import {
	connect
} from 'react-redux';
import cn from 'classnames';

import {
	NOTIFICATION_EXPIRATION_TIME
} from './../utils/constants.js';
import {
	setEditor
} from './../redux/actions-editor.js';

const Notification = ({
	notification,
	setEditor
}) => {

	useEffect(() => {

		if (notification){
			setTimeout(() => {
				setEditor('notification', null);
			}, NOTIFICATION_EXPIRATION_TIME);
		}

	}, [notification]);

	if (!notification){
		return null;
	}

	const {
		type,
		message
	} = notification;

	return (
		<div className={cn('pixmagix-notification', {
			[`pixmagix-notification__${type}`]:type
		})}>
			<p>
				{message}
			</p>
		</div>
	);

};

export default connect(state => ({
	notification:state.editor.notification
}), {
	setEditor
})(Notification);
