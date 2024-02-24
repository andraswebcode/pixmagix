import {
	connect
} from 'react-redux';
import {
	Grid,
	GridItem
} from 'elements';
import {
	isString
} from 'lodash';
import {
	__
} from 'wp-i18n';

import Item from './item.jsx';

const List = ({
	items = []
}) => (
	<Grid>
		{(items.length === 0) ? (
			<GridItem
				isEmpty
				caption={__('No Items Found', 'pixmagix')} />
		) : (items.length === 1 && isString(items[0])) ? (
			<GridItem
				isEmpty
				caption={items[0]} />
		) : items.map(item => (
			<Item
				key={item.id}
				{...item} />
		))}
	</Grid>
);

export default connect(state => ({
	items:state.items
}))(List);
