import {
	useEffect
} from 'react';
import cn from 'classnames';

import {
	NOTIFICATION_EXPIRATION_TIME
} from './constants.js';

const Notification = ({
	type,
	message,
	onExpire
}) => {

	useEffect(() => {

		if (message){
			setTimeout(() => {
				onExpire(null);
			}, NOTIFICATION_EXPIRATION_TIME);
		}

	},[message]);

	if (!message){
		return null;
	}

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

export default Notification;
