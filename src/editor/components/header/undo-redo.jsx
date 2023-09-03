import {
	connect
} from 'react-redux';
import {
	Button,
	ButtonGroup
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	undo,
	redo
} from './../../redux/actions-data.js';

const UndoRedo = ({
	hasUndo,
	hasRedo,
	undo,
	redo
}) => (
	<ButtonGroup className='pixmagix-header__undoredo'>
		<Button
			label={__('Undo', 'pixmagix')}
			icon='rotate-left'
			disabled={!hasUndo}
			onClick={() => undo()} />
		<Button
			label={__('Redo', 'pixmagix')}
			icon='rotate-right'
			disabled={!hasRedo}
			onClick={() => redo()} />
	</ButtonGroup>
);

export default connect(state => ({
	hasUndo:!!(state.data.past?.length),
	hasRedo:!!(state.data.future?.length)
}),{
	undo,
	redo
})(UndoRedo);
