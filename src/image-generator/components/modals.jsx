import {
	connect
} from 'react-redux';

import {
	modals
} from './../utils/lists.js';

const Modals = ({
	activeModal
}) => {

	const ActiveModal = modals[activeModal];

	return ActiveModal ? <ActiveModal /> : null;

};

export default connect(state => ({
	activeModal:state.activeModal
}))(Modals);
