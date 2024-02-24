import {
	useState,
	Fragment
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Button,
	ButtonGroup,
	Input,
	Select
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	find as _find
} from 'lodash';

import {
	setEditor,
	sendNotice,
	setItemMeta
} from './../redux/actions.js';
import {
	CATEGORIES_REST_PATH
} from './../../utils/constants.js';

const CategoryManager = ({
	previewId,
	category,
	categoryList,
	setEditor,
	sendNotice,
	setItemMeta
}) => {

	const [addNewCat, setAddNewCat] = useState(false);
	const [catName, setCatName] = useState('');
	const onCreateCat = () => {

		if (!catName){
			sendNotice(
				__('Enter a Category Name', 'pixmagix'),
				'warning'
			);
			return;
		}

		apiFetch({
			path:CATEGORIES_REST_PATH,
			method:'POST',
			data:{
				name:catName
			}
		}).then(({
			id
		}) => {
			batch(() => {
				setAddNewCat(false);
				setEditor({
					categoryList:categoryList.concat([{
						label:catName,
						value:id
					}])
				});
				setItemMeta(previewId, 'category', id);
				sendNotice(
					__('Category Created Successfully', 'pixmagix'),
					'success'
				);
			});
		}).catch(({message}) => {
			sendNotice(
				message,
				'error'
			);
		});

	};

	return addNewCat ? (
		<Fragment>
			<Input
				label={__('New Category Name', 'pixmagix')}
				value={catName}
				onChange={setCatName} />
			<ButtonGroup>
				<Button
					active
					small
					onClick={onCreateCat} >
					{__('Create', 'pixmagix')}
				</Button>
				<Button
					small
					onClick={() => setAddNewCat(false)} >
					{__('Cancel', 'pixmagix')}
				</Button>
			</ButtonGroup>
		</Fragment>
	) : (
		<Fragment>
			<Select
				label={__('Category', 'pixmagix')}
				options={categoryList}
				value={category}
				onChange={value => setItemMeta(previewId, 'category', value)} />
			<ButtonGroup>
				<Button
					small
					onClick={() => setAddNewCat(true)} >
					{__('Add New Category', 'pixmagix')}
				</Button>
				<Button
					small
					onClick={() => setEditor('activeModal', 'category-manager')} >
					{__('Manage Categories', 'pixmagix')}
				</Button>
			</ButtonGroup>
		</Fragment>
	);

};

export default connect(({
	items,
	previewId,
	categoryList
}) => {

	const category = _find(items, {
		id:previewId
	})?.metadata?.category || 0;

	return {
		previewId,
		category,
		categoryList
	};

},{
	setEditor,
	sendNotice,
	setItemMeta
})(CategoryManager);
