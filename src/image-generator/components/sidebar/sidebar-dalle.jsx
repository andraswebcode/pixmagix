import {
	Fragment
} from 'react';
import PromptsDalle from './prompts-dalle.jsx';
import SettingsDalle from './settings-dalle.jsx';

const SidebarDalle = () => (
	<Fragment>
		<PromptsDalle />
		<SettingsDalle />
	</Fragment>
);

export default SidebarDalle;
