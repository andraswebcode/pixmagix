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
	Input
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	setEditor
} from './../../redux/actions.js';
import {
	clamp,
	getDownloadAnchor
} from './../../../utils/utils.js';

const DownloadImage = ({
	activeItemURL,
	activeItemIndex,
	samples,
	hasPrev,
	hasNext,
	setEditor
}) => {

	const [filename, setFilename] = useState('');
	const downloadImage = () => {
		getDownloadAnchor(activeItemURL, filename || 'pixmagix', 'png').click();
	};

	return (
		<Modal
			title={__('Download Image', 'pixmagix')}
			onClose={() => setEditor({
				activeModal:'',
				activeItemURL:''
			})}
			actions={(
				<Button
					active
					onClick={downloadImage} >
					{__('Download', 'pixmagix')}
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
					</Widget>
				</Column>
			</Row>
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
	setEditor
})(DownloadImage);
