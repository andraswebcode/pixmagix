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
	Loader,
	Grid,
	GridItem,
	Pagination,
	InlineControls,
	Input,
	Select
} from 'elements';
import {
	new_url,
	project_dates,
	users
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
	PROJECTS_REST_PATH
} from './../../utils/constants.js';

const OpenProject = ({
	setEditor
}) => {

	let isMounting = false;
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);
	const [search, setSearch] = useState('');
	const [date, setDate] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {

		isMounting = true;
		const query = {
			page,
			per_page:12
		};

		if (search){
			query.search = search;
		}

		if (date){
			query.yearmonth = date;
		}

		if (author){
			query.author = author;
		}

		apiFetch({
			path:addQueryArgs(query, PROJECTS_REST_PATH),
			withTotalPages:true
		}).then(response => {
			const {
				items,
				totalPages
			} = response;
			if (isMounting){
				batch(() => {
					setItems(items.map(({
						id,
						caption,
						meta
					}) => ({
						id,
						caption,
						thumbnail:meta?.pixmagix_project?.thumbnail || ''
					})));
					setMaxPages(totalPages);
					setLoading(false);
				});
			}
		});

		return () => {
			isMounting = false;
		}

	}, [search, date, author, page]);

	return (
		<Modal
			title={__('Open Project', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')} >
			<InlineControls>
				<Input
					label={__('Search', 'pixmagix')}
					value={search}
					onChange={value => {
						batch(() => {
							setSearch(value);
							setPage(1);
							setLoading(true);
						})
					}} />
				<Select
					label={__('Date', 'pixmagix')}
					value={date}
					options={project_dates}
					onChange={value => {
						setDate(value);
						setPage(1);
						setLoading(true);
					}} />
				<Select
					label={__('Author', 'pixmagix')}
					value={author}
					options={users}
					onChange={value => {
						setAuthor(value);
						setPage(1);
						setLoading(true);
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
				) : items.map(({
					id,
					caption,
					thumbnail
				}) => (
					<GridItem
						key={id}
						caption={caption}
						href={addQueryArgs({id}, new_url)}
						src={addQueryArgs({
							r:Math.ceil(Math.random() * 1000)
						}, thumbnail)} />
				))}
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

export default connect(state => ({}),{
	setEditor
})(OpenProject);
