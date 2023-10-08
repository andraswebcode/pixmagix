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
	Repeater,
	Loader
} from 'elements';
import {
	find as _find,
	cloneDeep
} from 'lodash';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	setEditor,
	sendNotice
} from './../redux/actions.js';
import {
	addQueryArgs
} from './../../utils/utils.js';
import {
	CATEGORIES_REST_PATH
} from './../../utils/constants.js';

const CategoryManager = ({
	categoryList,
	setEditor,
	sendNotice
}) => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const onSave = (id, name) => {

		if (!name){
			sendNotice(
				__('Please enter a name, before you save!', 'pixmagix'),
				'warning'
			);
			return;
		}

		setLoading(true);

		apiFetch({
			path:CATEGORIES_REST_PATH + (id || ''),
			method:'POST',
			data:{
				name:_find(items, {id})?.name || ''
			}
		}).then(response => {
			const {
				name,
				id
			} = response;
			batch(() => {
				setLoading(false);
				setEditor('categoryList', categoryList.concat([{
					label:name,
					value:id
				}]));
				sendNotice(
					__('Category Saved Successfully', 'pixmagix'),
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
	const onRemove = id => {

		if (!id){
			setItems(items.filter(item => !!item.id));
			return;
		}

		const ok = confirm(
			__('Do you really want to permanently delete this category?', 'pixmagix')
		);

		const query = {
			force:true
		};

		if (!ok){
			return;
		}

		setLoading(true);

		apiFetch({
			path:addQueryArgs(query, CATEGORIES_REST_PATH + id),
			method:'DELETE'
		}).then(response => {
			batch(() => {
				setLoading(false);
				setEditor('categoryList', categoryList.filter(({value}) => (value !== id)));
				sendNotice(
					__('Category Deleted Successfully', 'pixmagix'),
					'success'
				);
				setItems(items.filter(item => (item.id !== id)));
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
			per_page:-1,
			hide_empty:false
		};

		apiFetch({
			path:addQueryArgs(query, CATEGORIES_REST_PATH)
		}).then(response => {
			batch(() => {
				setItems(response);
				setLoading(false);
			});
		}).catch(console.error);

	}, []);

	return (
		<Modal
			title={__('Categories', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			middle >
			<Repeater
				items={items.map(({
					id,
					name,
					caption
				}) => ({
					name:id,
					label:caption,
					onRemove:() => onRemove(id),
					controls:[{
						name:'name',
						type:'input',
						label:__('Name', 'pixmagix'),
						value:name,
						onChange:value => {
							const newItems = cloneDeep(items);
							const item = _find(newItems, {id});
							item.name = value;
							setItems(newItems);
						}
					},{
						name:'save',
						type:'button',
						label:__('Save', 'pixmagix'),
						small:true,
						active:true,
						onClick:() => onSave(id, name)
					}]
				}))} />
			<Button
				onClick={() => {
					const newItem = [{
						id:0,
						name:'',
						caption:__('New Category', 'pixmagix')
					}];
					setItems(newItem.concat(items));
				}} >
				{__('Add New Category', 'pixmagix')}
			</Button>
			<Loader show={loading} />
		</Modal>
	);

};

export default connect(state => ({
	categoryList:state.categoryList
}), {
	setEditor,
	sendNotice
})(CategoryManager);
