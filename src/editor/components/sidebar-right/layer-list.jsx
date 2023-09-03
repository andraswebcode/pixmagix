import {
	connect
} from 'react-redux';
import {
	Widget
} from 'elements';
import {
	__
} from 'wp-i18n';

import LayerItem from './layer-item.jsx';
import LayerActions from './layer-actions.jsx';

const LayerList = ({
	layerIds = []
}) => (
	<Widget
		label={__('Layers', 'pixmagix')} >
		<ul className='pixmagix-sidebarright__layerlist'>
			{layerIds.length ? layerIds.map(id => (
				<LayerItem
					key={id}
					id={id} />
			)) : null}
		</ul>
		<LayerActions />
	</Widget>
);

export default connect(state => ({
	layerIds:state.data.present.layerIds
}))(LayerList);
