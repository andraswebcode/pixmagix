import {
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Row,
	Column,
	Widget,
	Input,
	Textarea,
	Loader
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	setEditor,
	sendNotice
} from './../../redux/actions.js';
import {
	clamp
} from './../../../utils/utils.js';
import {
	EXPORT_REST_PATH
} from './../../utils/constants.js';

const ExportMedia = ({
	activeItemURL,
	activeItemIndex,
	samples,
	hasPrev,
	hasNext,
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
			src:activeItemURL,
			filename:filename.replace(/\s/g, '-').toLowerCase(),
			title,
			alt,
			caption,
			description
		};

		setLoading(true);

		apiFetch({
			path:EXPORT_REST_PATH,
			method:'POST',
			data
		}).then(() => {
			batch(() => {
				sendNotice(
					__('Image Exported Successfully', 'pixmagix'),
					'success'
				);
				setLoading(false);
			});
		}).catch(({message}) => {
			batch(() => {
				sendNotice(
					message,
					'error'
				);
				setLoading(false);
			});
		});

	};

	return (
		<Modal
			title={__('Export Image to Media Library', 'pixmagix')}
			onClose={() => setEditor({
				activeModal:'',
				activeItemURL:''
			})}
			actions={(
				<Button
					active
					onClick={exportImage} >
					{__('Export', 'pixmagix')}
				</Button>
			)}
			navigation={(samples.length > 1) && {
				prev:{
					disabled:!hasPrev,
					onClick:() => {
						const newIndex = clamp(activeItemIndex - 1, 0, samples.length - 1);
						setEditor({
							activeItemURL:samples[newIndex]?.src || activeItemURL,
							activeItemIndex:newIndex
						});
					}
				},
				next:{
					disabled:!hasNext,
					onClick:() => {
						const newIndex = clamp(activeItemIndex + 1, 0, samples.length - 1);
						setEditor({
							activeItemURL:samples[newIndex]?.src || activeItemURL,
							activeItemIndex:newIndex
						});
					}
				}
			}} >
			<Row>
				<Column>
					<figure>
						<img src={activeItemURL} />
					</figure>
				</Column>
				<Column>
					<Widget>
						<Input
							label={__('File Name', 'pixmagix')}
							value={filename}
							onChange={setFilename} />
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

export default connect(state => {

	const {
		activeItemURL,
		activeItemIndex,
		samples = []
	} = state;
	const hasPrev = (activeItemIndex !== 0);
	const hasNext = (activeItemIndex < samples.length - 1);

	return {
		activeItemURL,
		activeItemIndex,
		samples,
		hasPrev,
		hasNext
	};

},{
	setEditor,
	sendNotice
})(ExportMedia);
