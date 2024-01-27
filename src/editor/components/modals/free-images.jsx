import {
	useState,
	useEffect
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Widget,
	Grid,
	GridItem,
	Pagination,
	Loader
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	omit,
	includes
} from 'lodash';
import {
	free_image_platforms
} from 'editor-globals';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	addQueryArgs
} from './../../utils/utils.js';
import {
	REST_PATH
} from './../../utils/constants.js';
import FiltersPixabay from './../../../free-images/filters-pixabay.jsx';
import FiltersPexels from './../../../free-images/filters-pexels.jsx';
import FiltersUnsplash from './../../../free-images/filters-unsplash.jsx';

const FreeImages = ({
	selectedMedia,
	setEditor
}) => {

	const [filters, setFilters] = useState({
		platform:free_image_platforms[0]
	});
	const [items, setItems] = useState([]);
	const [maxPages, setMaxPages] = useState(1);
	const [selected, setSelected] = useState(selectedMedia);
	const [loading, setLoading] = useState(true);
	const onFiltersChange = (key, value) => {
		setLoading(true);
		const newFilters = value ? {
			...filters,
			[key]:value
		} : omit(filters, key);
		if (key !== 'page'){
			newFilters.page = 1;
		}
		setFilters(newFilters);
	};
	const filterTabs = [{
		name:'pixabay',
		label:__('Pixabay', 'pixmagix'),
		content:(
			<FiltersPixabay
				{...filters}
				hasKey={true}
				onChange={onFiltersChange} />
		)
	},{
		name:'pexels',
		label:__('Pexels', 'pixmagix'),
		content:(
			<FiltersPexels
				{...filters}
				hasKey={true}
				onChange={onFiltersChange} />
		)
	},{
		name:'unsplash',
		label:__('Unsplash', 'pixmagix'),
		content:(
			<FiltersUnsplash
				{...filters}
				hasKey={true}
				onChange={onFiltersChange} />
		)
	}].filter(({name}) => includes(free_image_platforms, name));

	useEffect(() => {

		apiFetch({
			path:addQueryArgs(filters, REST_PATH + 'free_images/')
		}).then(response => {
			batch(() => {
				setItems(response.items);
				setMaxPages(response.maxPages);
				setLoading(false);
			});
		});

	},[filters]);

	return (
		<Modal
			title={__('Import Royalty Free Image', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={() => setEditor({
						activeModal:'',
						selectedMedia:{
							...selectedMedia,
							...selected,
							activeActionName:'free-images'
						}
					})} >
					{__('Import', 'pixmagix')}
				</Button>
			)} >
			<Widget
				tabs={filterTabs}
				onChange={({name}) => onFiltersChange('platform', name)} />
			<Pagination
				page={filters.page}
				maxPages={maxPages}
				onChange={page => onFiltersChange('page', page)} />
			<Grid>
				{(items.length === 0) ? (
					<GridItem
						isEmpty
						caption={__('No Items Found', 'pixmagix')} />
				) : items.map(item => (
					<GridItem
						key={item.id}
						caption={item.title}
						src={item.thumbnail?.replace(/&#038;/g, '&')}
						selected={(selected?.id === item.id)}
						onClick={e => {
							e.preventDefault();
							setSelected(item);
						}} />
				))}
			</Grid>
			<Pagination
				page={filters.page}
				maxPages={maxPages}
				onChange={page => onFiltersChange('page', page)} />
			<Loader show={loading} />
		</Modal>
	);

};

export default connect(state => ({
	selectedMedia:state.editor.selectedMedia
}),{
	setEditor
})(FreeImages);
