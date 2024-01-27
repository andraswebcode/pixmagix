import {
	useState
} from 'react';
import {
	InlineControls,
	Input,
	Button
} from 'elements';
import {
	find as _find
} from 'lodash';
import {
	__
} from 'wp-i18n';
import getHelpText from './../editor/utils/help-texts.js';

const FiltersWSFonts = ({
	selected,
	onAdd
}) => {

	const [name, setName] = useState('');
	const family = (name || '').replace(/[^A-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();

	return (
		<InlineControls>
			<Input
				label={__('Font Family Name', 'pixmagix')}
				help={getHelpText('webSafeFonts')}
				value={name}
				onChange={setName} />
			<Button
				active={!!family}
				disabled={!family}
				small
				onClick={() => {
					const item = {
						family
					};
					if (family && !_find(selected, item)){
						onAdd(item);
					}
					setName('');
				}} >
				{__('Add Font Family', 'pixmagix')}
			</Button>
		</InlineControls>
	);

};

export default FiltersWSFonts;
