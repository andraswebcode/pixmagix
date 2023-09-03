import {
	useState,
	useEffect,
	useRef
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
	isString,
	find as _find
} from 'lodash';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	new_url,
	projects_url,
	project_dates,
	users
} from 'editor-globals';

import {
	addQueryArgs,
	addToRouter
} from './../utils/utils.js';
import {
	PROJECTS_REST_PATH
} from './../utils/constants.js';

const Content = ({
	sendNotice,
	...props
}) => {

	const didMount = useRef(false);
	const [search, setSearch] = useState(props.search || '');
	const [date, setDate] = useState(props.date || '');
	const [author, setAuthor] = useState(props.author || 0);
	const [page, setPage] = useState(props.page || 1);
	const [maxPages, setMaxPages] = useState(props.maxPages || 1);
	const [items, setItems] = useState(props.items || []);
	const [loading, setLoading] = useState(false);
	const isPageOverflowed = (items.length === 1 && isString(items[0]));
	const onDuplicate = id => {

		if (!id){
			return;
		}

		const {
			title = '',
			project
		} = _find(items, {id}) || {};

		if (!project){
			return;
		}

		setLoading(true);

		apiFetch({
			path:PROJECTS_REST_PATH,
			method:'POST',
			data:{
				title,
				status:'publish',
				meta:{
					pixmagix_project:project
				}
			}
		}).then(({
			id,
			title,
			meta
		}) => {
			setItems([{
				id,
				title:title?.rendered || '',
				project:meta?.pixmagix_project || {}
			}].concat(items.slice(0, 11)));
			setLoading(false);
		}).catch(({message}) => {
			setLoading(false);
			sendNotice({
				type:'error',
				message
			});
		});

	};
	const onDelete = id => {

		if (!id){
			return;
		}

		const ok = confirm(
			__('Do you really want to permanently delete this item?', 'pixmagix')
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
			path:addQueryArgs(query, PROJECTS_REST_PATH + id),
			method:'DELETE'
		}).then(response => {
			setLoading(false);
			setItems(response.items.map(({
				id,
				title,
				meta
			}) => ({
				id,
				title:title?.rendered || '',
				project:meta?.pixmagix_project || {}
			})));
			setMaxPages(response.max_pages);
			setPage(response.page);
		}).catch(({message}) => {
			setLoading(false);
			sendNotice({
				type:'error',
				message
			});
		});;

	};

	useEffect(() => {

		if (didMount.current){
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
				setItems(items.map(({
					id,
					caption,
					meta
				}) => ({
					id,
					caption,
					project:meta?.pixmagix_project || {}
				})));
				setMaxPages(totalPages);
				setLoading(false);
				const args = {
					p:page
				};
				if (search){
					args.s = search;
				}
				if (date){
					args.d = date;
				}
				if (author){
					args.a = author;
				}
				addToRouter(args, projects_url);
			}).catch(({message}) => {
				setLoading(false);
				sendNotice({
					type:'error',
					message
				});
			});
		} else {
			didMount.current = true;
		}

	}, [page, search, date, author]);

	return (
		<div className='pixmagix-content'>
			<InlineControls>
				<Input
					label={__('Search', 'pixmagix')}
					value={search}
					onChange={value => {
						setSearch(value);
						setPage(1);
						setLoading(true);
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
			{!isPageOverflowed && (
				<Pagination
					page={page}
					maxPages={maxPages}
					onChange={page => {
						setPage(page);
						setLoading(true);
					}} />
			)}
			<Grid>
				{(items.length === 0) ? (
					<GridItem
						isEmpty
						caption={__('No Items Found', 'pixmagix')} />
				) : isPageOverflowed ? (
					<GridItem
						isEmpty
						caption={items[0]} />
				) : items.map(({
					id,
					caption,
					project
				}) => (
					<GridItem
						key={id}
						caption={caption}
						href={addQueryArgs({id}, new_url)}
						src={addQueryArgs({
							r:Math.ceil(Math.random() * 1000)
						}, project.thumbnail || '')}
						actions={[{
							name:'duplicate',
							label:__('Duplicate', 'pixmagix'),
							icon:'copy',
							onClick:() => onDuplicate(id)
						},{
							name:'delete',
							label:__('Delete', 'pixmagix'),
							icon:'trash-can',
							onClick:() => onDelete(id)
						}]} />
				))}
			</Grid>
			{!isPageOverflowed && (
				<Pagination
					page={page}
					maxPages={maxPages}
					onChange={page => {
						setPage(page);
						setLoading(true);
					}} />
			)}
			<Loader show={loading} />
		</div>
	);

};

export default Content;
