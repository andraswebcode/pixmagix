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
	setEditor,
	sendNotice
} from './../../redux/actions-editor.js';
import {
	CATEGORIES_REST_PATH
} from './../../utils/constants.js';

const CategoryManager = ({
	projectCategory,
	categoryList,
	setEditor,
	sendNotice
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
					}]),
					projectCategory:id
				});
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
				value={projectCategory}
				onChange={value => setEditor('projectCategory', value)} />
			<Button
				small
				block
				onClick={() => setAddNewCat(true)} >
				{__('Add New Category', 'pixmagix')}
			</Button>
			<Button
				small
				block
				onClick={() => setEditor('activeModal', 'category-manager')} >
				{__('Manage Categories', 'pixmagix')}
			</Button>
		</Fragment>
	);

};

export default connect(state => ({
	projectCategory:state.editor.projectCategory,
	categoryList:state.editor.categoryList
}),{
	setEditor,
	sendNotice
})(CategoryManager);
