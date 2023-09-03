import {
	connect
} from 'react-redux';
import {
	Icon
} from 'elements';

import {
	setEditor
} from './../redux/actions-editor.js';

import SettingsProject from './sidebar-right/settings-project.jsx';
import LayerList from './sidebar-right/layer-list.jsx';
import SettingsLayer from './sidebar-right/settings-layer.jsx';

const SidebarRight = ({
	isSidebarRightOpened,
	setEditor
}) => (
	<div className='pixmagix-sidebarright'>
		<div
			className='pixmagix-sidebarright__toggle'
			onClick={() => setEditor('isSidebarRightOpened', !isSidebarRightOpened)} >
			<Icon
				icon={isSidebarRightOpened ? 'angle-right' : 'angle-left'} />
		</div>
		{isSidebarRightOpened && (
			<div className='pixmagix-sidebarright__inner'>
				<SettingsProject />
				<LayerList />
				<SettingsLayer />
			</div>
		)}
	</div>
);

export default connect(state => ({
	isSidebarRightOpened:state.editor.isSidebarRightOpened
}),{
	setEditor
})(SidebarRight);
