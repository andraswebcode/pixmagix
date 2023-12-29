import {
	connect
} from 'react-redux';

import Preview from './modal-preview.jsx';
import CategoryManager from './modal-category-manager.jsx';
import Download from './modal-download.jsx';

const Modals = ({
	activeModal
}) => (activeModal === 'preview') ? (
	<Preview />
) : (activeModal === 'category-manager') ? (
	<CategoryManager />
) : (activeModal === 'download') ? (
	<Download />
) : null;

export default connect(state => ({
	activeModal:state.activeModal
}))(Modals);
