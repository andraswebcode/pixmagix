import {
	connect
} from 'react-redux';
import {
	Button,
	Dropdown
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setEditor
} from './../../redux/actions-editor.js';
import getRulerMenuItems from './../../utils/ruler-menu.js';

const RulerMenu = props => {

	return (
		<Dropdown
			trigger={() => (
				<Button
					className='pixmagix-canvas__rulermenu'
					label={__('Ruler', 'pixmagix')}
					icon='ruler'
					small />
			)}
			items={getRulerMenuItems(props)} />
	);

};

export default connect(state => ({
	showRulers:state.editor.showRulers,
	showRulerCursors:state.editor.showRulerCursors,
	snapObjects:state.editor.snapObjects,
	snapToGrid:state.editor.snapToGrid,
	guides:state.editor.guides,
	lockGuides:state.editor.lockGuides
}),{
	setEditor
})(RulerMenu);
