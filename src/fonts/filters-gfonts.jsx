import {
	InlineControls,
	Input,
	Select
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	categories,
	languages,
	variants
} from './lists-gfonts.js';

const FiltersGFonts = ({
	search,
	category,
	language,
	variant,
	onChange
}) => {

	return (
		<InlineControls>
			<Input
				label={__('Search', 'pixmagix')}
				value={search}
				onChange={value => onChange('search', value)} />
			<Select
				label={__('Category', 'pixmagix')}
				options={categories}
				value={category}
				onChange={value => onChange('category', value)} />
			<Select
				label={__('Language', 'pixmagix')}
				options={languages}
				value={language}
				onChange={value => onChange('language', value)} />
			<Select
				label={__('Variant', 'pixmagix')}
				options={variants}
				value={variant}
				onChange={value => onChange('variant', value)} />
		</InlineControls>
	);

};

export default FiltersGFonts;
