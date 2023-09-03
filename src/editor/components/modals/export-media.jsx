import {
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Button,
	Modal,
	Loader,
	Row,
	Column,
	Widget,
	Input,
	Textarea,
	RadioButtons,
	Range
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
	REST_PATH
} from './../../utils/constants.js';
import getHelpText from './../../utils/help-texts.js';

const ExportMedia = ({
	imageDataURL,
	fileFormat,
	fileQuality,
	setEditor,
	sendNotice
}) => {

	const [filename, setFilename] = useState('');
	const [title, setTitle] = useState('');
	const [alt, setAlt] = useState('');
	const [caption, setCaption] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const exportImage = () => {

		const data = {
			imageDataURL,
			filename:filename.replace(/\s/g, '-').toLowerCase(),
			extension:(fileFormat === 'jpeg') ? 'jpg' : 'png',
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
				if (response.media){
					setEditor({
						mediaId:response.media.id,
						mediaUrl:response.media.url
					});
				}
				sendNotice(
					__('Image Exported Successfully', 'pixmagix'),
					'success'
				);
			});
		}).catch(error => {
			console.log(error);
			batch(() => {
				setLoading(false);
				sendNotice(
					__('', 'pixmagix'),
					'error'
				);
			});
		});

	};

	return (
		<Modal
			title={__('Export Image to Media Library', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={exportImage} >
					{__('Export', 'pixmagix')}
				</Button>
			)} >
			<Row>
				<Column>
					<figure>
						<img src={imageDataURL} />
					</figure>
				</Column>
				<Column>
					<Widget>
						<Input
							label={__('File Name', 'pixmagix')}
							value={filename}
							onChange={setFilename} />
						<RadioButtons
							label={__('File Type', 'pixmagix')}
							options={[{
								label:'PNG',
								value:'png'
							},{
								label:'JPEG',
								value:'jpeg'
							}]}
							value={fileFormat}
							onChange={value => setEditor('fileFormat', value)} />
						{(fileFormat === 'jpeg') && (
							<Range
								label={__('Quality', 'pixmagix')}
								help={getHelpText('jpgQuality')}
								value={fileQuality}
								onChange={value => setEditor('fileQuality', value)}
								min={0.01}
								max={1}
								step={0.01} />
						)}
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
	imageDataURL:state.editor.imageDataURL,
	fileFormat:state.editor.fileFormat,
	fileQuality:state.editor.fileQuality
}),{
	setEditor,
	sendNotice
})(ExportMedia);
