import {
	useRef,
	useState,
	useEffect,
	useMemo
} from 'react';
import {
	Widget,
	Grid,
	GridItem,
	Pagination,
	Loader
} from 'elements';
import {
	self_url
} from 'editor-globals';
import {
	omit,
	findIndex,
	capitalize
} from 'lodash';
import {
	__,
	sprintf
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import FiltersPixabay from './filters-pixabay.jsx';
import FiltersPexels from './filters-pexels.jsx';
import FiltersUnsplash from './filters-unsplash.jsx';
import PreviewModal from './preview-modal.jsx';
import {
	REST_PATH
} from './../utils/constants.js';
import {
	clamp,
	addQueryArgs,
	addToRouter
} from './../utils/utils.js';

const Content = ({
	hasPixabayKey,
	hasPexelsKey,
	hasUnsplashKey,
	items = [],
	maxPages,
	canEdit,
	...filters
}) => {

	const didMount = useRef(false);
	const [_hasPixabayKey, setHasPixabayKey] = useState(hasPixabayKey);
	const [_hasPexelsKey, setHasPexelsKey] = useState(hasPexelsKey);
	const [_hasUnsplashKey, setHasUnsplashKey] = useState(hasUnsplashKey);
	const [_filters, setFilters] = useState(filters);
	const [_items, setItems] = useState(items);
	const [_maxPages, setMaxPages] = useState(maxPages);
	const [activeItem, setActiveItem] = useState(null);
	const [loading, setLoading] = useState(false);
	const hasNotApiKey = useMemo(() => {
		if (_filters.service === 'pixabay'){
			return !_hasPixabayKey;
		} else if (_filters.service === 'pexels'){
			return !_hasPexelsKey;
		} else if (_filters.service === 'unsplash'){
			return !_hasUnsplashKey;
		}
		return false;
	},[
		_filters,
		_hasPixabayKey,
		_hasPexelsKey,
		_hasUnsplashKey
	]);
	const activeItemIndex = useMemo(() => {
		return findIndex(_items, activeItem);
	},[
		_items,
		activeItem
	]);
	const onFiltersChange = (key, value) => {
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
				path:addQueryArgs(_filters, REST_PATH + 'free_images/')
			}).then(response => {
				console.log(response);
				setItems(response.items);
				setMaxPages(response.maxPages);
				setLoading(false);
				addToRouter(_filters, self_url);
			}).catch(error => {
				console.error(error);
				if (error.code === 'authorization_failed'){
					setItems([]);
					setMaxPages(0);
					setLoading(false);
					addToRouter(_filters, self_url);
				}
			});
		} else {
			didMount.current = true;
		}

	},[
		_filters,
		_hasPixabayKey,
		_hasPexelsKey,
		_hasUnsplashKey
	]);

	return (
		<div className='pixmagix-content'>
			<Widget
				tabs={[{
					name:'pixabay',
					label:__('Pixabay', 'pixmagix'),
					content:(
						<FiltersPixabay
							{..._filters}
							hasKey={_hasPixabayKey}
							onChange={onFiltersChange}
							onContinue={() => {
								setLoading(true);
								setHasPixabayKey(true);
							}} />
					)
				},{
					name:'pexels',
					label:__('Pexels', 'pixmagix'),
					content:(
						<FiltersPexels
							{..._filters}
							hasKey={_hasPexelsKey}
							onChange={onFiltersChange}
							onContinue={() => {
								setLoading(true);
								setHasPexelsKey(true);
							}} />
					)
				},{
					name:'unsplash',
					label:__('Unsplash', 'pixmagix'),
					content:(
						<FiltersUnsplash
							{..._filters}
							hasKey={_hasUnsplashKey}
							onChange={onFiltersChange}
							onContinue={() => {
								setLoading(true);
								setHasUnsplashKey(true);
							}} />
					)
				}]}
				initShow={_filters.service}
				onChange={({name}) => onFiltersChange('service', name)} />
			<Pagination
				page={_filters.page}
				maxPages={_maxPages}
				onChange={page => onFiltersChange('page', page)} />
			<Grid>
				{hasNotApiKey ? (
					<GridItem
						isEmpty
						caption={sprintf(
							__('To access free images from %s, please enter a valid API key in the input field above and click the "Continue" button.', 'pixmagix'),
							capitalize(_filters.service)
						)} />
				) : _items.length ? _items.map(item => (
					<GridItem
						key={item.id}
						caption={item.title}
						src={item.thumbnail?.replace(/&#038;/g, '&')} // We have to replace html entity to char, because we use esc_url on php.
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
				onChange={page => onFiltersChange('page', page)} />
			{!!activeItem && (
				<PreviewModal
					key={activeItem.id}
					{...activeItem}
					canEdit={canEdit}
					hasPrev={activeItemIndex > 0}
					hasNext={activeItemIndex < items.length - 1}
					onNavigate={onNavigate}
					onClose={() => setActiveItem(null)} />
			)}
			<Loader show={loading} />
		</div>
	);

};

export default Content;
