import {
	Fragment
} from 'react';
import PromptsSD from './prompts-sd.jsx';
import SettingsSD from './settings-sd.jsx';

const SidebarSD = () => (
	<Fragment>
		<PromptsSD />
		<SettingsSD />
	</Fragment>
);

export default SidebarSD;
