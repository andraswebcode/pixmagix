import {
	Widget
} from 'elements';
import {
	self_url
} from 'editor-globals';
import {
	__
} from 'wp-i18n';

import ContentApiKeys from './content-api-keys.jsx';
import ContentUsers from './content-users.jsx';
import ContentPerformance from './content-performance.jsx';
import {
	addToRouter
} from './../utils/utils.js';
import {
	applyFilters
} from './../utils/hooks.js';

const Content = props => {

	const tabs = applyFilters('settings.tabs', [{
		name:'apikeys',
		label:__('API Keys', 'pixmagix'),
		content:(
			<ContentApiKeys {...props} />
		)
	},{
		name:'users',
		label:__('Users', 'pixmagix'),
		content:(
			<ContentUsers {...props} />
		)
	},{
		name:'performance',
		label:__('Performance', 'pixmagix'),
		content:(
			<ContentPerformance {...props} />
		)
	}], props);

	return (
		<div className='pixmagix-content'>
			<Widget
				tabs={tabs}
				initShow={props.tab}
				onChange={({name}) => addToRouter({tab:name}, self_url)} />
		</div>
	);

};

export default Content;
