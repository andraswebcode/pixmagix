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
	types,
	orientations,
	categories,
	colors
} from './lists-pixabay.js';

const FiltersPixabay = ({
	hasKey,
	search,
	type,
	orientation,
	category,
	color,
	onChange,
	onContinue
}) => {

	if (!hasKey){
		return (
			<SetAPIKey
				service='pixabay'
				onReady={onContinue} />
		);
	}

	return (
		<InlineControls
			logo={{
				title:__('Powered by Pixabay', 'pixmagix'),
				url:'https://pixabay.com/',
				src:images_folder + 'pixabay.jpg'
			}} >
			<Input
				label={__('Search', 'pixmagix')}
				value={search}
				onChange={value => onChange('search', value)} />
			<Select
				label={__('Type', 'pixmagix')}
				options={types}
				value={type}
				onChange={value => onChange('type', value)} />
			<Select
				label={__('Orientation', 'pixmagix')}
				options={orientations}
				value={orientation}
				onChange={value => onChange('orientation', value)} />
			<Select
				label={__('Category', 'pixmagix')}
				options={categories}
				value={category}
				onChange={value => onChange('category', value)} />
			<ColorPalette.Dropdown
				label={__('Color', 'pixmagix')}
				options={colors}
				color={color}
				onChange={value => onChange('color', value)} />
		</InlineControls>
	);

};

export default FiltersPixabay;
