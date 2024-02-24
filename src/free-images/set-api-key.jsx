import {
	useState
} from 'react';
import {
	Input,
	Button,
	InlineControls
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	REST_PATH
} from './../utils/constants.js';
import getHelpText from './../editor/utils/help-texts.js';

const SetAPIKey = ({
	platform,
	onReady
}) => {

	const [key, setKey] = useState('');
	const onClick = () => {
		if (!platform){
			return;
		}
		const data = {};
		data[platform + '_api_key'] = key;
		apiFetch({
			path:REST_PATH + 'settings/',
			method:'POST',
			data
		}).then(response => {
			console.log(response);
			onReady?.();
		}).catch(error => {
			console.error(error);
		});
	};

	return (
		<InlineControls>
			<Input
				label={__('API Key', 'pixmagix')}
				help={getHelpText(platform + 'ApiKey')}
				value={key}
				onChange={setKey} />
			<Button
				small
				active={!!key}
				disabled={!key}
				onClick={onClick} >
				{__('Continue', 'pixmagix')}
			</Button>
		</InlineControls>
	);

};

export default SetAPIKey;
