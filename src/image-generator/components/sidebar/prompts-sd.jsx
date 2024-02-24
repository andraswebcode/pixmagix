import {
	connect
} from 'react-redux';
import {
	Widget,
	Repeater,
	Button
} from 'elements';
import {
	__,
	sprintf
} from 'wp-i18n';

import {
	addPrompt,
	setPrompt,
	removePrompt
} from './../../redux/actions.js';
import {
	createSample,
	createPrompt
} from './../../utils/utils.js';

const PromptsSD = ({
	prompts,
	addPrompt,
	setPrompt,
	removePrompt
}) => {

	const items = prompts.map(({
		id,
		text,
		weight
	}, i) => ({
		name:id,
		label:sprintf(
			__('Prompt %s', 'pixmagix'),
			'#' + (i + 1)
		),
		onRemove:i ? () => removePrompt(id) : undefined,
		controls:[{
			name:'prompt',
			type:'textarea',
			label:__('Text', 'pixmagix'),
			value:text,
			onChange:value => setPrompt(id, 'text', value)
		},{
			name:'weight',
			type:'range',
			label:__('Weight', 'pixmagix'),
			value:weight,
			onChange:value => setPrompt(id, 'weight', value),
			min:-1,
			max:1,
			step:0.01
		}]
	}));

	return (
		<Widget
			label={__('Prompts', 'pixmagix')} >
			<Repeater
				items={items} />
			<Button
				block
				onClick={() => addPrompt(createPrompt())} >
				{__('Add Prompt', 'pixmagix')}
			</Button>
		</Widget>
	);

};

export default connect(state => ({
	prompts:state.prompts
}),{
	addPrompt,
	setPrompt,
	removePrompt
})(PromptsSD);
