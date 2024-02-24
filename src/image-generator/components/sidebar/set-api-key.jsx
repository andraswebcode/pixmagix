import {
	useState
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Widget,
	Input,
	Button
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	REST_PATH
} from './../../../../src/utils/constants.js';
import {
	setEditor
} from './../../redux/actions.js';

const SetAPIKey = ({
	generator,
	setEditor
}) => {

	const [apiKey, setApiKey] = useState('');
	const onContinue = () => {

		const data = {};
		const isDalle = (generator === 'openai');

		if (isDalle){
			data.openai_api_key = apiKey;
		} else {
			data.stabilityai_api_key = apiKey;
		}

		apiFetch({
			path:REST_PATH + 'settings/',
			method:'POST',
			data
		}).then(response => {
			console.log(response);
			if (response.settings_success){
				setEditor(isDalle ? 'hasOpenAIKey' : 'hasStabilityAIKey', true);
			}
		}).catch(console.error);

	};

	return (
		<Widget
			label={__('API Key', 'pixmagix')} >
			<Input
				label={__('API Key', 'pixmagix')}
				value={apiKey}
				onChange={setApiKey} />
			<Button
				block
				active
				onClick={onContinue} >
				{__('Continue', 'pixmagix')}
			</Button>
		</Widget>
	);

};

export default connect(state => ({
	generator:state.generator
}), {
	setEditor
})(SetAPIKey);
