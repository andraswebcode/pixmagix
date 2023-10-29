import {
	Fragment
} from 'react';
import {
	Select,
	InlineNotice
} from 'elements';
import {
	__,
	sprintf
} from 'wp-i18n';
import {
	find as _find
} from 'lodash';

import {
	doComponents
} from './../utils/hooks.js';

const ContentGeneral = props => {

	const {
		default_free_images,
		onSettingChange
	} = props;
	const platforms = [{
		label:__('Pixabay', 'pixmagix'),
		value:'pixabay'
	},{
		label:__('Pexels', 'pixmagix'),
		value:'pexels'
	},{
		label:__('Unsplash', 'pixmagix'),
		value:'unsplash'
	}];
	const platformLabel = _find(platforms, {value:default_free_images})?.label || '';
	const showWarning = !!(default_free_images && !props[`${default_free_images}_api_key`]);

	return (
		<Fragment>
			<Select
				label={__('Default Free Image Source', 'pixmagix')}
				options={platforms}
				value={default_free_images}
				onChange={value => onSettingChange('default_free_images', value)} />
			<InlineNotice
				type='warning'
				message={sprintf(
					__('You set default free image source to %s, but do not set API key. Please go to API Keys tab, and provide a valid %s API key.', 'pixmagix'),
					platformLabel,
					platformLabel
				)}
				show={showWarning} />
			{doComponents('settings.general', props)}
		</Fragment>
	);

};

export default ContentGeneral;
