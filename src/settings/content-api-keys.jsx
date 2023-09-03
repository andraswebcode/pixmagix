import {
	Fragment
} from 'react';
import {
	Input
} from 'elements';
import {
	__
} from 'wp-i18n';

import getHelpText from './../editor/utils/help-texts.js';

const ContentApiKeys = ({
	pixabay_api_key,
	unsplash_api_key,
	gfonts_api_key,
	onSettingChange
}) => (
	<Fragment>
		<Input
			label={__('Pixabay API Key', 'pixmagix')}
			help={getHelpText('pixabayApiKey')}
			value={pixabay_api_key}
			onChange={value => onSettingChange('pixabay_api_key', value)} />
		<Input
			label={__('Unsplash API Key', 'pixmagix')}
			help={getHelpText('unsplashApiKey')}
			value={unsplash_api_key}
			onChange={value => onSettingChange('unsplash_api_key', value)} />
		<Input
			label={__('Google Fonts API Key', 'pixmagix')}
			help={getHelpText('gfontsApiKey')}
			value={gfonts_api_key}
			onChange={value => onSettingChange('gfonts_api_key', value)} />
	</Fragment>
);

export default ContentApiKeys;
