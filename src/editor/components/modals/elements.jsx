import {
	useEffect,
	useState
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
	Input,
	Select,
	Pagination,
	InlineControls,
	Loader,
	SVG
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	addQueryArgs
} from './../../utils/utils.js';
import {
	elementCategories
} from './../../utils/lists.js';
import {
	REST_PATH
} from './../../utils/constants.js';

const Elements = ({
	elementFilters = {},
	setEditor
}) => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [maxPages, setMaxPages] = useState(1);
	const {
		page,
		collection,
		search,
		category,
		orientation
	} = elementFilters;
	const filterTabs = [{
		name:'icons',
		label:__('Icons', 'pixmagix'),
		content:(
			<InlineControls>
				<Input
					label={__('Search', 'pixmagix')}
					value={search}
					onChange={value => {
						batch(() => {
							setEditor('elementFilters', {
								...elementFilters,
								page:1,
								search:value
							});
							setLoading(true);
						});
					}} />
			</InlineControls>
		)
	},{
		name:'shapes',
		label:__('Shapes', 'pixmagix'),
		content:(
			<InlineControls>
				<Input
					label={__('Search', 'pixmagix')}
					value={search}
					onChange={value => {
						batch(() => {
							setEditor('elementFilters', {
								...elementFilters,
								page:1,
								search:value
							});
							setLoading(true);
						});
					}} />
				<Select
					label={__('Category', 'pixmagix')}
					value={category}
					options={elementCategories.shapes}
					onChange={value => {
						batch(() => {
							setEditor('elementFilters', {
								...elementFilters,
								page:1,
								category:value
							});
							setLoading(true);
						});
					}} />
				<Select
					label={__('Orientation', 'pixmagix')}
					value={orientation}
					options={[{
						label:__('Any Orientation', 'pixmagix'),
						value:''
					},{
						label:__('Landscape', 'pixmagix'),
						value:'landscape'
					},{
						label:__('Portrait', 'pixmagix'),
						value:'portrait'
					},{
						label:__('Square', 'pixmagix'),
						value:'square'
					}]}
					onChange={value => {
						batch(() => {
							setEditor('elementFilters', {
								...elementFilters,
								page:1,
								orientation:value
							});
							setLoading(true);
						});
					}} />
			</InlineControls>
		)
	}];

	useEffect(() => {

		const query = {
			collection,
			page
		};

		if (search){
			query.search = search;
		}

		if (category){
			query.category = category;
		}

		if (orientation){
			query.orientation = orientation;
		}

		apiFetch({
			path:addQueryArgs(query, REST_PATH + 'elements')
		}).then(({
			items,
			maxPages
		}) => {
			batch(() => {
				setItems(items);
				setMaxPages(maxPages);
				setLoading(false);
			});
		}).catch(error => {
			console.error(error);
		});

	}, [elementFilters]);

	return (
		<Modal
			title={__('Import Element', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')} >
			<Widget
				tabs={filterTabs}
				initShow={elementFilters.collection}
				onChange={({name}) => {
					batch(() => {
						setEditor('elementFilters', {
							...elementFilters,
							page:1,
							collection:name
						});
						setLoading(true);
					});
				}} />
			<Pagination
				page={page}
				maxPages={maxPages}
				onChange={page => {
					batch(() => {
						setEditor('elementFilters', {
							...elementFilters,
							page
						});
						setLoading(true);
					});
				}} />
			<Grid>
				{(items.length === 0) ? (
					<GridItem
						isEmpty
						caption={__('No Items Found', 'pixmagix')} />
				) : items.map(item => {
					const {
						id,
						title,
						width,
						height,
						path
					} = item;
					return (
						<GridItem
							key={id}
							title={__('Select Image', 'pixmagix')}
							caption={title}
							onClick={e => {
								e.preventDefault();
								setEditor({
									selectedElement:item,
									activeModal:''
								});
							}} >
							<SVG
								viewBox={`0 0 ${width} ${height}`}
								preserveAspectRatio='xMidYMid meet' >
								<path d={path} fill='currentColor' />
							</SVG>
						</GridItem>
					);
				})}
			</Grid>
			<Pagination
				page={page}
				maxPages={maxPages}
				onChange={page => {
					batch(() => {
						setEditor('elementFilters', {
							...elementFilters,
							page
						});
						setLoading(true);
					});
				}} />
			<Loader show={loading} />
		</Modal>
	);

};

export default connect(state => ({
	elementFilters:state.editor.elementFilters
}),{
	setEditor
})(Elements);
