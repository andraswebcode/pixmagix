import {
	useRef,
	useState,
	useEffect,
	useMemo
} from 'react';
import {
	Grid,
	GridItem,
	InlineControls,
	Pagination,
	Loader,
	Input,
	Select
} from 'elements';
import {
	self_url
} from 'editor-globals';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	omit,
	findIndex
} from 'lodash';

import PreviewModal from './preview-modal.jsx';
import {
	clamp,
	addQueryArgs,
	addToRouter
} from './../utils/utils.js';
import {
	REST_PATH
} from './../utils/constants.js';
import {
	categories,
	aspects
} from './lists.js';

const Content = ({
	items,
	maxPages,
	...filters
}) => {

	const didMount = useRef(false);
	const [_filters, setFilters] = useState(filters);
	const [_maxPages, setMaxPages] = useState(maxPages || 1);
	const [_items, setItems] = useState(items || []);
	const [activeItem, setActiveItem] = useState(null);
	const [loading, setLoading] = useState(false);
	const activeItemIndex = useMemo(() => {
		return findIndex(_items, activeItem);
	},[
		_items,
		activeItem
	]);
	const onFilterChange = (key, value) => {
		setLoading(true);
		const newFilters = value ? {
			..._filters,
			[key]:value
		} : omit(_filters, key);
		if (key !== 'page'){
			newFilters.page = 1;
		}
		setFilters(newFilters);
	};
	const onNavigate = dir => {
		const i = clamp((dir === 'prev') ? activeItemIndex - 1 : activeItemIndex + 1, 0, _items.length - 1);
		setActiveItem(_items[i]);
	};

	useEffect(() => {
		if (didMount.current){
			apiFetch({
				path:addQueryArgs(_filters, REST_PATH + 'templates/')
			}).then(response => {
				console.log(response);
				setItems(response.items);
				setMaxPages(response.maxPages);
				setLoading(false);
				addToRouter(_filters, self_url);
			}).catch(error => {
				console.error(error);
			});
		} else {
			didMount.current = true;
		}
	},[_filters]);

	return (
		<div className='pixmagix-content'>
			<InlineControls>
				<Input
					label={__('Search', 'pixmagix')}
					value={_filters.search}
					onChange={value => onFilterChange('search', value)} />{/*}
				<Select
					label={__('Category', 'pixmagix')}
					value={_filters.category}
					options={categories}
					onChange={value => onFilterChange('category', value)} />
				<Select
					label={__('Aspect Ratio', 'pixmagix')}
					value={_filters.aspect}
					options={aspects}
					onChange={value => onFilterChange('aspect', value)} />{*/}
			</InlineControls>
			<Pagination
				page={_filters.page}
				maxPages={_maxPages}
				onChange={page => onFilterChange('page', page)} />
			<Grid>
				{(_items?.length) ? _items.map(item => (
					<GridItem
						key={item.id}
						caption={item.title}
						src={item.thumbnail}
						onClick={e => {
							e.preventDefault();
							setActiveItem(item);
						}} />
				)) : (
					<GridItem
						isEmpty
						caption={__('No Items Found', 'pixmagix')} />
				)}
			</Grid>
			<Pagination
				page={_filters.page}
				maxPages={_maxPages}
				onChange={page => onFilterChange('page', page)} />
			{!!activeItem && (
				<PreviewModal
					{...activeItem}
					hasPrev={activeItemIndex > 0}
					hasNext={activeItemIndex < _items.length - 1}
					onNavigate={onNavigate}
					onClose={() => setActiveItem(null)} />
			)}
			<Loader show={loading} />
		</div>
	);

};

export default Content;
