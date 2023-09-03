import {
	Fragment
} from 'react';
import {
	Input,
	Select,
	ColorPalette,
	InlineControls
} from 'elements';
import {
	images_folder
} from 'editor-globals';
import {
	__
} from 'wp-i18n';

import SetAPIKey from './set-api-key.jsx';
import {
	orientations,
	colors
} from './lists-unsplash.js';

const FiltersUnsplash = ({
	hasKey,
	search,
	orientation,
	color,
	onChange,
	onContinue
}) => {

	if (!hasKey){
		return (
			<SetAPIKey
				service='unsplash'
				onReady={onContinue} />
		);
	}

	return (
		<InlineControls
			logo={{
				title:__('Powered by Unsplash', 'pixmagix'),
				url:'https://unsplash.com/',
				src:images_folder + 'unsplash.jpg'
			}} >
			<Input
				label={__('Search', 'pixmagix')}
				value={search}
				onChange={value => onChange('search', value)} />
			{!!search && (
				<Fragment>
					<Select
						label={__('Orientation', 'pixmagix')}
						options={orientations}
						value={orientation}
						onChange={value => onChange('orientation', value)} />
					<ColorPalette.Dropdown
						label={__('Color', 'pixmagix')}
						options={colors}
						color={color}
						onChange={value => onChange('color', value)} />
				</Fragment>
			)}
		</InlineControls>
	);

};

export default FiltersUnsplash;
