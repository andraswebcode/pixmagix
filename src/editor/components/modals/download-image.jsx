import {
	useState
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Row,
	Column,
	Widget,
	Input,
	RadioButtons,
	Range
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	getDownloadAnchor
} from './../../utils/utils.js';
import getHelpText from './../../utils/help-texts.js';

const DownloadImage = ({
	projectName,
	imageDataURL,
	fileFormat,
	fileQuality,
	setEditor
}) => {

	const [filename, setFilename] = useState('');
	const downloadImage = () => {
		const _filename = filename || projectName || 'pixmagix';
		const _extension = (fileFormat === 'jpeg') ? 'jpg' : 'png';
		getDownloadAnchor(imageDataURL, _filename, _extension).click();
	};

	return (
		<Modal
			title={__('Download Image', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={downloadImage} >
					{__('Download', 'pixmagix')}
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
					</Widget>
				</Column>
			</Row>
		</Modal>
	);

};

export default connect(state => ({
	projectName:state.editor.projectName,
	imageDataURL:state.editor.imageDataURL,
	fileFormat:state.editor.fileFormat,
	fileQuality:state.editor.fileQuality
}),{
	setEditor
})(DownloadImage);
