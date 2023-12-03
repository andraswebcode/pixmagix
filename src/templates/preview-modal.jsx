import {
	useState
} from 'react';
import {
	Modal,
	Button,
	ButtonGroup,
	Row,
	Column,
	Widget,
	Input,
	Loader
} from 'elements';
import {
	new_url
} from 'editor-globals';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	REST_PATH
} from './../utils/constants.js';
import {
	addQueryArgs
} from './../utils/utils.js';

const PreviewModal = ({
	title,
	preview,
	hasPrev,
	hasNext,
	onNavigate,
	onClose,
	...item
}) => {

	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);
	const onSave = edit => {
		setLoading(true);
		apiFetch({
			path:REST_PATH + 'templates/',
			method:'POST',
			data:{
				...item,
				title,
				preview
			}
		}).then(response => {
			console.log(response);
			if (edit && response.id){
				window.location.replace(addQueryArgs({
					id:response.id
				}, new_url));
			} else {
				setLoading(false);
			}
		}).catch(error => {
			console.error(error);
		});
	};

	return (
		<Modal
			title={title}
			actions={(
				<ButtonGroup>
					<Button
						active
						onClick={() => onSave(true)} >
						{__('Save And Edit', 'pixmagix')}
					</Button>
					<Button
						onClick={() => onSave()} >
						{__('Just Save', 'pixmagix')}
					</Button>
				</ButtonGroup>
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
			}}
			onClose={onClose} >
			<Row>
				<Column>
					<figure>
						<img src={preview} />
					</figure>
				</Column>
				<Column>
					<Widget>
						<Input
							label={__('Project Name', 'pixmagix')}
							placeholder={title}
							value={name}
							onChange={setName} />
					</Widget>
				</Column>
			</Row>
			<Loader show={loading} />
		</Modal>
	);

};

export default PreviewModal;
