import {
	batch,
	connect
} from 'react-redux';
import {
	GridItem
} from 'elements';
import {
	new_url
} from 'editor-globals';
import {
	find as _find
} from 'lodash';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	addQueryArgs
} from './../../utils/utils.js';
import {
	PROJECTS_REST_PATH
} from './../../utils/constants.js';
import {
	setEditor,
	sendNotice
} from './../redux/actions.js';

const Item = ({
	id,
	metadata = {},
	project = {},
	page,
	items,
	setEditor,
	sendNotice
}) => {

	const onDuplicate = () => {

		if (!id){
			return;
		}

		const {
			metadata = {},
			project
		} = _find(items, {id}) || {};

		if (!project){
			return;
		}

		setEditor('loading', true);

		apiFetch({
			path:PROJECTS_REST_PATH,
			method:'POST',
			data:{
				title:metadata.title,
				status:'publish',
				meta:{
					pixmagix_project:project
				}
			}
		}).then(({
			id,
			title = {},
			caption,
			description,
			author,
			pixmagix_category = [],
			status,
			meta = {}
		}) => {
			setEditor({
				loading:false,
				items:[{
					id,
					metadata:{
						title:title.rendered || '',
						caption,
						description,
						author,
						category:pixmagix_category[0] || 0,
						status
					},
					project:meta.pixmagix_project
				}].concat(items.slice(0, 11))
			});
		}).catch(({message}) => {
			sendNotice(
				message,
				'error'
			);
		});

	};
	const onDelete = () => {

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

		setEditor('loading', true);

		apiFetch({
			path:addQueryArgs(query, PROJECTS_REST_PATH + id),
			method:'DELETE',
			arrangeParams:true
		}).then(response => {
			setEditor({
				loading:false,
				items:response.items
			});
		}).catch(({message}) => {
			batch(() => {
				setEditor('loading', false);
				sendNotice(
					message,
					'error'
				);
			});
		});

	};

	return (
		<GridItem
			caption={metadata.caption}
			href={addQueryArgs({id}, new_url)}
			src={addQueryArgs({
				r:Math.ceil(Math.random() * 1000)
			}, project.thumbnail || '')}
			actions={[{
				name:'quickedit',
				label:__('Quick Edit', 'pixmagix'),
				icon:'file-pen',
				onClick:() => setEditor({
					previewId:id,
					activeModal:'preview'
				})
			},{
				name:'download',
				label:__('Download', 'pixmagix'),
				icon:'download',
				onClick:() => setEditor({
					previewId:id,
					activeModal:'download'
				})
			},{
				name:'duplicate',
				label:__('Duplicate', 'pixmagix'),
				icon:'copy',
				onClick:onDuplicate
			},{
				name:'delete',
				label:__('Delete', 'pixmagix'),
				icon:'trash-can',
				onClick:onDelete
			}]} />
	);

};

export default connect(state => ({
	page:state.page,
	items:state.items
}), {
	setEditor,
	sendNotice
})(Item);
