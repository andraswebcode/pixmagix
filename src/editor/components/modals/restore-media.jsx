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

const RestoreMedia = ({
	mediaId,
	imageDataURL,
	revisionURL,
	setEditor,
	sendNotice
}) => {

	if (!mediaId || !revisionURL){
		return null;
	}

	const [title, setTitle] = useState('');
	const [alt, setAlt] = useState('');
	const [caption, setCaption] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const restoreImage = () => {

		const data = {
			mediaId,
			title,
			alt,
			caption,
			description
		};

		setLoading(true);

		apiFetch({
			path:REST_PATH + 'restore_image',
			method:'POST',
			data
		}).then(response => {
			console.log(response);
			batch(() => {
				setLoading(false);
				setEditor('revisionURL', '');
				sendNotice(
					__('The Original Media Image Restored Successfully', 'pixmagix'),
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
			title={__('Restore Original Media Image', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={restoreImage} >
					{__('Restore', 'pixmagix')}
				</Button>
			)} >
			<Row>
				<Column>
					<BeforeAfterSlider
						src1={imageDataURL}
						src2={revisionURL}
						caption1={__('Edited', 'pixmagix')}
						caption2={__('Original', 'pixmagix')} />
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
	imageDataURL:state.editor.imageDataURL,
	revisionURL:state.editor.revisionURL
}),{
	setEditor,
	sendNotice
})(RestoreMedia);
