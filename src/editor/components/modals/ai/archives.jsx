import {
	Fragment,
	useState,
	useEffect
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	InlineControls,
	Input,
	Select,
	Grid,
	GridItem,
	Pagination,
	Loader
} from 'elements';
import {
	archive_dates,
	users
} from 'editor-globals';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	ARCHIVES_REST_PATH
} from './../../../../image-generator/utils/constants.js';
import {
	addQueryArgs
} from './../../../utils/utils.js';
import {
	setEditor,
	sendNotice
} from './../../../redux/actions-editor.js';

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
					const project = meta?.pixmagix_ai_arch_project || {};
					return {
						id,
						caption,
						thumbnail:project.samples?.[0]?.src,
						project
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
					const project = meta?.pixmagix_ai_arch_project || {};
					return {
						id,
						caption,
						thumbnail:project.samples?.[0]?.src,
						project
					};
				}));
				setMaxPages(totalPages);
				setLoading(false);
			});
		});

	}, [search, date, author, page]);

	return (
		<Fragment>
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
					project
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
							const {
								generator,
								prompts,
								samples,
								samplesCount,
								...options
							} = project;
							const newOptions = {
								generator,
								prompt:prompts?.[0]?.text || '',
								samplesCount
							};
							let key, _key, _prefix;
							for (key in options){
								_key = key.charAt(0).toUpperCase() + key.slice(1); // First letter to upper case.
								_prefix = (generator === 'dall-e') ? 'op' : 'sd';
								newOptions[_prefix + _key] = options[key];
							}
							setEditor({
								aiImageOptions:newOptions,
								aiImageSamples:samples,
								showAIImageArchive:false
							});
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
		</Fragment>
	);

};

export default connect(state => ({}),{
	setEditor,
	sendNotice
})(Archives);
