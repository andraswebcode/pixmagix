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
import {
	addToRouter
} from './../utils/utils.js';

const Content = props => (
	<div className='pixmagix-content'>
		<Widget
			tabs={[{
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
			}]}
			initShow={props.tab}
			onChange={({name}) => addToRouter({tab:name}, self_url)} />
	</div>
);

export default Content;
