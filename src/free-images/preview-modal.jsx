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
	Select,
	Textarea,
	Loader
} from 'elements';
import {
	new_url
} from 'editor-globals';
import {
	__,
	sprintf
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	REST_PATH
} from './../utils/constants.js';
import {
	addQueryArgs
} from './../utils/utils.js';

const PreviewModal = ({
	author,
	title = '',
	preview,
	sizes = [],
	canEdit,
	hasPrev,
	hasNext,
	onNavigate,
	onClose
}) => {

	const [size, setSize] = useState('');
	const [filename, setFilename] = useState('');
	const [_title, setTitle] = useState('');
	const [alt, setAlt] = useState('');
	const [caption, setCaption] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const onSave = edit => {
		const data = {
			src:(size || preview)?.replace(/&#038;/g, '&'),
			filename:filename || title.replace(/\s/g, '-').replace(/[^A-z\-]/g, ''),
			title:_title,
			alt,
			caption,
			description
		};
		setLoading(true);
		apiFetch({
			path:REST_PATH + 'free_images/',
			method:'POST',
			data
		}).then(response => {
			console.log(response);
			if (edit){
				window.location.replace(addQueryArgs({
					image:response.mediaId
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
			title={sprintf(
				__('%s by %s', 'pixmagix'),
				title,
				author
			)}
			actions={canEdit ? (
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
			) : (
				<Button
					onClick={() => onSave()} >
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
			}}
			onClose={onClose} >
			<Row>
				<Column>
					<figure>
						<img src={(size || preview)?.replace(/&#038;/g, '&')} />
					</figure>
				</Column>
				<Column>
					<Widget>
						<Input
							label={__('File Name', 'pixmagix')}
							placeholder={title.replace(/\s/g, '-').replace(/[^A-z\-]/g, '')}
							value={filename}
							onChange={setFilename} />
						<Select
							label={__('Image Size', 'pixmagix')}
							options={sizes}
							value={size}
							onChange={setSize} />
						<Input
							label={__('Title', 'pixmagix')}
							value={_title}
							onChange={setTitle} />
						<Textarea
							label={__('Alternative Text', 'pixmagix')}
							value={alt}
							onChange={setAlt} />
						<Textarea
							label={__('Caption', 'pixmagix')}
							value={caption}
							onChange={setCaption} />
						<Textarea
							label={__('Description', 'pixmagix')}
							value={description}
							onChange={setDescription} />
					</Widget>
				</Column>
			</Row>
			<Loader show={loading} />
		</Modal>
	);

};

export default PreviewModal;
