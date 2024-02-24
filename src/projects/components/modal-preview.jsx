import {
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Row,
	Column,
	Widget,
	Input,
	Textarea,
	RadioButtons,
	Loader
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	new_url
} from 'editor-globals';
import {
	findIndex
} from 'lodash';

import {
	setEditor,
	sendNotice,
	setItemMeta
} from './../redux/actions.js';
import {
	clamp,
	addQueryArgs
} from './../../utils/utils.js';
import {
	PROJECTS_REST_PATH
} from './../../utils/constants.js';
import CategoryManager from './category-manager.jsx';

const Preview = ({
	id,
	title,
	description,
	status,
	caption,
	category,
	preview,
	hasPrev,
	hasNext,
	index,
	items,
	setEditor,
	sendNotice,
	setItemMeta
}) => {

	const [loading, setLoading] = useState(false);
	const onSave = () => {

		if (!id){
			return;
		}

		const data = {
			title,
			content:description,
			status,
			pixmagix_category:category ? [category] : []
		};

		setLoading(true);

		apiFetch({
			path:PROJECTS_REST_PATH + id,
			method:'POST',
			data
		}).then(response => {
			const {
				title,
				caption
			} = response;
			batch(() => {
				setLoading(false);
				setItemMeta(id, {
					title:title.rendered,
					caption
				});
				sendNotice(
					__('Project Saved Successfully', 'pixmagix'),
					'success'
				);
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
	const onNavigate = dir => {
		const i = clamp((dir === 'prev') ? index - 1 : index + 1, 0, items.length - 1);
		if (items[i]){
			setEditor('previewId', items[i].id);
		}
	};

	return (
		<Modal
			title={caption}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={onSave} >
					{__('Save', 'pixmagix')}
				</Button>
			)}
			navigation={{
				prev:{
					disabled:!hasPrev,
					onClick:() => onNavigate('prev')
				},
				next:{
					disabled:!hasNext,
					onClick:() => onNavigate('next')
				}
			}} >
			<Row>
				<Column>
					<figure>
						<a
							href={addQueryArgs({id}, new_url)}
							title={__('Open in Editor', 'pixmagix')} >
							<img src={addQueryArgs({
								r:Math.ceil(Math.random() * 1000)
							}, preview)} />
						</a>
					</figure>
				</Column>
				<Column>
					<Widget>
						<Input
							label={__('Title', 'pixmagix')}
							value={title}
							onChange={value => setItemMeta(id, 'title', value)} />
						<Textarea
							label={__('Description', 'pixmagix')}
							value={description}
							onChange={value => setItemMeta(id, 'description', value)} />
						<RadioButtons
							label={__('Status', 'pixmagix')}
							options={[{
								label:__('Publish', 'pixmagix'),
								value:'publish'
							},{
								label:__('Private', 'pixmagix'),
								value:'private'
							}]}
							value={status}
							onChange={value => setItemMeta(id, 'status', value)} />
						<CategoryManager />
					</Widget>
				</Column>
			</Row>
			<Loader show={loading} />
		</Modal>
	);

};

export default connect(({
	items,
	previewId
}) => {

	const index = findIndex(items, {
		id:previewId
	});
	const activeItem = items[index] || {};

	return {
		...activeItem.metadata,
		id:activeItem.id,
		preview:activeItem.project?.preview,
		hasPrev:(index > 0),
		hasNext:(index < items.length - 1),
		index,
		items
	};

},{
	setEditor,
	sendNotice,
	setItemMeta
})(Preview);
