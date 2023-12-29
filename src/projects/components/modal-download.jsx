import {
	useState
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Widget,
	Input
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	findIndex
} from 'lodash';

import {
	setEditor,
	sendNotice
} from './../redux/actions.js';
import writeZIP from './../../utils/zip-writer.js';
import {
	getDownloadAnchor
} from './../../utils/utils.js';

const Download = ({
	title,
	description,
	project,
	setEditor
}) => {

	const [name, setName] = useState('');
	const downloadProject = () => writeZIP({
		title,
		description,
		...project
	}, href => {
		const filename = name || title || 'pixmagix';
		getDownloadAnchor(href, filename, 'zip').click();
	});

	return (
		<Modal
			title={__('Download Project', 'pixmagix')}
			small
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={downloadProject} >
					{__('Download', 'pixmagix')}
				</Button>
			)} >
			<Widget>
				<Input
					label={__('Project Name', 'pixmagix')}
					placeholder={title}
					value={name}
					onChange={setName} />
			</Widget>
		</Modal>
	);

};

export default connect(({
	items,
	previewId
}) => {

	const index = findIndex(items, {
		id:previewId
	});
	const activeItem = items[index] || {};
	const {
		metadata = {},
		project = {}
	} = activeItem;
	const {
		title,
		description
	} = metadata;console.log(activeItem)

	return {
		title,
		description,
		project
	};

},{
	setEditor
})(Download);
