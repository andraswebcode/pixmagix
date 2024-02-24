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

const ContentApiKeys = props => {

	const {
		pixabay_api_key,
		pexels_api_key,
		unsplash_api_key,
		gfonts_api_key,
		openai_api_key,
		stabilityai_api_key,
		clipdrop_api_key,
		onSettingChange
	} = props;

	return (
		<Fragment>
			<Input
				label={__('Pixabay API Key', 'pixmagix')}
				help={getHelpText('pixabayApiKey')}
				value={pixabay_api_key}
				onChange={value => onSettingChange('pixabay_api_key', value)} />
			<Input
				label={__('Pexels API Key', 'pixmagix')}
				help={getHelpText('pexelsApiKey')}
				value={pexels_api_key}
				onChange={value => onSettingChange('pexels_api_key', value)} />
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
			<Input
				label={__('OpenAI API Key', 'pixmagix')}
				value={openai_api_key}
				onChange={value => onSettingChange('openai_api_key', value)} />
			<Input
				label={__('Stability AI API Key', 'pixmagix')}
				value={stabilityai_api_key}
				onChange={value => onSettingChange('stabilityai_api_key', value)} />
			<Input
				label={__('Clipdrop API Key', 'pixmagix')}
				value={clipdrop_api_key}
				onChange={value => onSettingChange('clipdrop_api_key', value)} />
		</Fragment>
	);

};

export default ContentApiKeys;
