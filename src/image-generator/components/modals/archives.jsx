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
	InlineControls,
	Input,
	Select,
	Pagination,
	Grid,
	GridItem,
	Loader
} from 'elements';
import {
	new_url,
	archive_dates,
	users
} from 'editor-globals';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	setEditor,
	sendNotice
} from './../../redux/actions.js';
import {
	addQueryArgs
} from './../../../utils/utils.js';
import {
	ARCHIVES_REST_PATH
} from './../../utils/constants.js';
import {
	addToRouter
} from './../../../utils/utils.js';

const Archives = ({
	setEditor,
	sendNotice
}) => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState('');
	const [date, setDate] = useState('');
	const [author, setAuthor] = useState('');
	const [page, setPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);
	const onDelete = id => {

		if (!id){
			return;
		}

		const ok = confirm(
			__('Do you really want to permanently delete this archive with its all ai generated images?', 'pixmagix')
		);

		if (!ok){
			return;
		}

		const query = {
			force:true,
			page
		};

		setLoading(true);

		apiFetch({
			path:addQueryArgs(query, ARCHIVES_REST_PATH + id),
			method:'DELETE'
		}).then(({
			items,
			page,
			max_pages
		}) => {
			batch(() => {
				setLoading(false);
				setItems(items.map(({
					id,
					caption,
					meta
				}) => {
					const newState = meta?.pixmagix_ai_arch_project || {};
					return {
						id,
						caption,
						thumbnail:newState.samples?.[0]?.src,
						newState
					};
				}));
				setMaxPages(max_pages);
				setPage(page);
			});
		}).catch(({message}) => {
			batch(() => {
				setLoading(false);
				sendNotice(
					message,
					'error'
				);
			});
		});

	};

	useEffect(() => {

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
			path:addQueryArgs(query, ARCHIVES_REST_PATH),
			withTotalPages:true
		}).then(response => {
			console.log(response);
			const {
				items,
				totalPages
			} = response;
			batch(() => {
				setItems(items.map(({
					id,
					caption,
					meta
				}) => {
					const newState = meta?.pixmagix_ai_arch_project || {};
					return {
						id,
						caption,
						thumbnail:newState.samples?.[0]?.src,
						newState
					};
				}));
				setMaxPages(totalPages);
				setLoading(false);
			});
		});

	}, [search, date, author, page]);

	return (
		<Modal
			title={__('Archives', 'pixmagix')}
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
						});
					}} />
				<Select
					label={__('Date', 'pixmagix')}
					value={date}
					options={archive_dates}
					onChange={value => {
						batch(() => {
							setDate(value);
							setPage(1);
							setLoading(true);
						});
					}} />
				<Select
					label={__('Author', 'pixmagix')}
					value={author}
					options={users}
					onChange={value => {
						batch(() => {
							setAuthor(value);
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
				) : items.map(({
					id,
					caption,
					thumbnail,
					newState
				}) => (
					<GridItem
						key={id}
						caption={caption}
						src={thumbnail}
						actions={[{
							name:'delete',
							label:__('Delete Archive', 'pixmagix'),
							icon:'trash-can',
							onClick:() => onDelete(id)
						}]}
						onClick={e => {
							e.preventDefault();
							setEditor({
								...newState,
								activeModal:''
							});
							addToRouter({
								archive:id
							}, new_url);
						}} />
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

export default connect(null, {
	setEditor,
	sendNotice
})(Archives);
