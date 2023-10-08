import {
	connect
} from 'react-redux';

import Preview from './modal-preview.jsx';
import CategoryManager from './modal-category-manager.jsx';

const Modals = ({
	activeModal
}) => (activeModal === 'preview') ? (
	<Preview />
) : (activeModal === 'category-manager') ? (
	<CategoryManager />
) : null;

export default connect(state => ({
	activeModal:state.activeModal
}))(Modals);
