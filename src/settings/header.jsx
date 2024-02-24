import {
	Button
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	REST_PATH
} from './../utils/constants.js';

const Header = ({
	settings,
	sendNotice
}) => {

	const onSave = () => {

		apiFetch({
			path:REST_PATH + 'settings/',
			method:'POST',
			data:settings
		}).then(({
			settings_success,
			roles_success
		}) => {
			if (settings_success || roles_success){
				sendNotice({
					type:'success',
					message:__('Settings Saved Successfully', 'pixmagix')
				});
			} else {
				sendNotice({
					type:'warning',
					message:__('No Changes Detected', 'pixmagix')
				});
			}
		}).catch(({message}) => {
			sendNotice({
				type:'error',
				message
			});
		});
	};

	return (
		<div className='pixmagix-header'>
			<div className='pixmagix-header__title'>
				<h1>
					{__('PixMagix - Settings', 'pixmagix')}
				</h1>
			</div>
			<Button
				active
				onClick={onSave} >
				{__('Save Settings', 'pixmagix')}
			</Button>
		</div>
	);

};

export default Header;
