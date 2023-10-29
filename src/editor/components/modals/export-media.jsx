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
	ImageResizer,
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
	canvasWidth,
	canvasHeight,
	imageDataURL,
	fileFormat,
	fileQuality,
	fileDPI,
	fileScale,
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
			extension:(fileFormat === 'jpeg') ? 'jpg' : fileFormat,
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
						<h2>
							{__('Image', 'pixmagix')}
						</h2>
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
							},{
								label:'WEBP',
								value:'webp'
							}]}
							value={fileFormat}
							onChange={value => setEditor('fileFormat', value)} />
						{(fileFormat !== 'png') && (
							<Range
								label={__('Quality', 'pixmagix')}
								help={getHelpText('jpgQuality')}
								value={fileQuality}
								onChange={value => setEditor('fileQuality', value)}
								min={0.01}
								max={1}
								step={0.01} />
						)}
						{(fileFormat !== 'webp') && (
							<Range
								label={__('DPI', 'pixmagix')}
								help={getHelpText('dpi')}
								value={fileDPI}
								onChange={value => setEditor('fileDPI', value)}
								min={60}
								max={2400}
								step={1} />
						)}
						<ImageResizer
							value={fileScale}
							originalWidth={canvasWidth}
							originalHeight={canvasHeight}
							onChange={value => setEditor('fileScale', value)} />
						<h2>
							{__('Metadata', 'pixmagix')}
						</h2>
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
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	imageDataURL:state.editor.imageDataURL,
	fileFormat:state.editor.fileFormat,
	fileQuality:state.editor.fileQuality,
	fileDPI:state.editor.fileDPI,
	fileScale:state.editor.fileScale
}),{
	setEditor,
	sendNotice
})(ExportMedia);
