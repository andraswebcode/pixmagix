import {
	useEffect,
	useState
} from 'react';
import {
	connect,
	batch
} from 'react-redux';
import {
	Modal,
	Button,
	Loader,
	Grid,
	GridItem,
	Pagination,
	InlineControls,
	Input,
	Select
} from 'elements';
import {
	media_dates
} from 'editor-globals';
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
	IMAGES_REST_PATH
} from './../../utils/constants.js';

const ImportMedia = ({
	selectedMedia,
	setEditor
}) => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);
	const [search, setSearch] = useState('');
	const [date, setDate] = useState('');
	const [selected, setSelected] = useState(selectedMedia);

	useEffect(() => {

		const query = {
			page,
			per_page:12,
			media_type:'image'
		};

		if (search){
			query.search = search;
		}

		if (date){
			query.yearmonth = date;
		}

		apiFetch({
			path:addQueryArgs(query, IMAGES_REST_PATH),
			withTotalPages:true
		}).then(({
			items,
			totalPages
		}) => {
			batch(() => {
				setItems(items);
				setMaxPages(totalPages);
				setLoading(false);
			});
		});

	}, [search, date, page]);

	return (
		<Modal
			title={__('Import Image From Media Library', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={() => setEditor({
						activeModal:'',
						selectedMedia:{
							...selectedMedia,
							...selected,
							activeActionName:'media'
						}
					})} >
					{__('Import', 'pixmagix')}
				</Button>
			)} >
			<InlineControls>
				<Input
					label={__('Search', 'pixmagix')}
					value={search}
					onChange={value => {
						batch(() => {
							setSearch(value);
							setPage(1);
							setLoading(true);
						});
					}} />
				<Select
					label={__('Date', 'pixmagix')}
					value={date}
					options={media_dates}
					onChange={value => {
						batch(() => {
							setDate(value);
							setPage(1);
							setLoading(true);
						});
					}} />
			</InlineControls>
			<Pagination
				page={page}
				maxPages={maxPages}
				onChange={page => {
					batch(() => {
						setPage(page);
						setLoading(true);
					});
				}} />
			<Grid>
				{(items.length === 0) ? (
					<GridItem
						isEmpty
						caption={__('No Items Found', 'pixmagix')} />
				) : items.map(media => {
					const {
						id,
						title,
						media_type,
						media_details,
						source_url
					} = media;
					return (
						<GridItem
							key={id}
							title={__('Select Image', 'pixmagix')}
							caption={title?.rendered}
							src={media_details.sizes?.thumbnail?.source_url || source_url}
							selected={(selected?.id === id)}
							onClick={e => {
								e.preventDefault();
								setSelected(media);
							}} />
					);
				})}
			</Grid>
			<Pagination
				page={page}
				maxPages={maxPages}
				onChange={page => {
					batch(() => {
						setPage(page);
						setLoading(true);
					});
				}} />
			<Loader show={loading} />
		</Modal>
	);

};

export default connect(state => ({
	selectedMedia:state.editor.selectedMedia
}),{
	setEditor
})(ImportMedia);
