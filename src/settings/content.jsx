import {
	Widget
} from 'elements';
import {
	self_url
} from 'editor-globals';
import {
	__
} from 'wp-i18n';

import ContentGeneral from './content-general.jsx';
import ContentApiKeys from './content-api-keys.jsx';
import ContentUsers from './content-users.jsx';
import {
	addToRouter
} from './../utils/utils.js';

const Content = props => {

	const tabs = [{
		name:'general',
		label:__('General Settings', 'pixmagix'),
		content:(
			<ContentGeneral {...props} />
		)
	},{
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
	}];

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
