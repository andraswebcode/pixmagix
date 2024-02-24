import {
	connect
} from 'react-redux';

import {
	modals
} from './../utils/lists.js';
import {
	applyFilters
} from './../../utils/hooks.js';

const Modals = ({
	activeModal
}) => {

	const _modals = applyFilters('editor.modals', modals, activeModal);
	const ActiveModal = _modals[activeModal];

	return ActiveModal ? <ActiveModal /> : null;

};

export default connect(state => ({
	activeModal:state.editor.activeModal
}))(Modals);
