import {
	connect
} from 'react-redux';
import {
	Pagination,
	Loader
} from 'elements';
import {
	isString
} from 'lodash';

import Filters from './filters.jsx';
import List from './list.jsx';
import {
	setEditor
} from './../redux/actions.js';

const Content = ({
	page,
	maxPages,
	items = [],
	loading,
	setEditor
}) => {

	const isPageOverflowed = (items.length === 1 && isString(items[0]));

	return (
		<div className='pixmagix-content'>
			<Filters />
			{!isPageOverflowed && (
				<Pagination
					page={page}
					maxPages={maxPages}
					onChange={page => setEditor({
						page,
						loading:true
					})} />
			)}
			<List />
			{!isPageOverflowed && (
				<Pagination
					page={page}
					maxPages={maxPages}
					onChange={page => setEditor({
						page,
						loading:true
					})} />
			)}
			<Loader show={loading} />
		</div>
	);

};

export default connect(state => ({
	page:state.page,
	maxPages:state.maxPages,
	items:state.items,
	loading:state.loading
}),{
	setEditor
})(Content);
