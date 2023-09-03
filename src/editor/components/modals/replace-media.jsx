import {
	useState,
	useEffect
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Button,
	Modal,
	BeforeAfterSlider,
	Loader,
	Row,
	Column,
	Widget,
	Input,
	Textarea
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
	REST_PATH,
	IMAGES_REST_PATH
} from './../../utils/constants.js';

const ReplaceMedia = ({
	mediaId,
	mediaUrl,
	imageDataURL,
	setEditor,
	sendNotice
}) => {

	if (!mediaId){
		return null;
	}

	const [title, setTitle] = useState('');
	const [alt, setAlt] = useState('');
	const [caption, setCaption] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const replaceImage = () => {

		const data = {
			mediaId,
			imageDataURL,
			title,
			alt,
			caption,
			description
		};

		setLoading(true);

		apiFetch({
			path:REST_PATH + 'export_image',
			method:'POST',
			data
		}).then(response => {
			console.log(response);
			batch(() => {
				setLoading(false);
				setEditor('revisionURL', response.revision_url);
				sendNotice(
					__('Media Image Replaced Successfully', 'pixmagix'),
					'success'
				);
			});
		}).catch(error => {
			console.log(error);
			batch(() => {
				setLoading(false);
				sendNotice(
					error.message,
					'error'
				);
			});
		});

	};

	useEffect(() => {

		apiFetch({
			path:IMAGES_REST_PATH + mediaId
		}).then(({
			title,
			alt_text,
			caption,
			description
		}) => {
			batch(() => {
				setTitle(title.rendered);
				setAlt(alt_text);
				setCaption(caption.rendered);
				setDescription(description.rendered);
			});
		});

	}, []);

	return (
		<Modal
			title={__('Replace Media Image', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={replaceImage} >
					{__('Replace', 'pixmagix')}
				</Button>
			)} >
			<Row>
				<Column>
					<BeforeAfterSlider
						src1={mediaUrl}
						src2={imageDataURL}
						caption1={__('Original', 'pixmagix')}
						caption2={__('New', 'pixmagix')} />
				</Column>
				<Column>
					<Widget>
						<Input
							label={__('Title', 'pixmagix')}
							value={title}
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

export default connect(state => ({
	mediaId:state.editor.mediaId,
	mediaUrl:state.editor.mediaUrl,
	imageDataURL:state.editor.imageDataURL
}),{
	setEditor,
	sendNotice
})(ReplaceMedia);
