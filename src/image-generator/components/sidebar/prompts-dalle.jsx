import {
	connect
} from 'react-redux';
import {
	Widget,
	Textarea
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setPrompt
} from './../../redux/actions.js';

const PromptsDalle = ({
	prompts,
	setPrompt
}) => {

	const {
		id,
		text
	} = prompts[0] || {};

	return (
		<Widget
			label={__('Prompt', 'pixmagix')} >
			<Textarea
				label={__('Text', 'pixmagix')}
				value={text}
				onChange={value => setPrompt(id, 'text', value)} />
		</Widget>
	);

};

export default connect(state => ({
	prompts:state.prompts
}),{
	setPrompt
})(PromptsDalle);
