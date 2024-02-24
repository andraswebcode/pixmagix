import {
	connect
} from 'react-redux';
import {
	Button,
	ButtonGroup
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	new_url
} from 'editor-globals';
import apiFetch from 'wp-api-fetch';

import {
	PROJECTS_REST_PATH
} from './../../utils/constants.js';
import {
	getHiddenFileInput
} from './../../utils/utils.js';
import {
	setEditor,
	sendNotice
} from './../redux/actions.js';
import parseZIP from './../../utils/zip-parser.js';

const Header = ({
	items,
	setEditor,
	sendNotice
}) => {

	const saveProject = ({
		title,
		description,
		width,
		height,
		background,
		layers,
		preview,
		thumbnail
	}) => {

		setEditor('loading', true);

		apiFetch({
			path:PROJECTS_REST_PATH,
			method:'POST',
			data:{
				title,
				description,
				status:'publish',
				meta:{
					pixmagix_project:{
						canvasWidth:width,
						canvasHeight:height,
						canvasBackground:background,
						preview,
						thumbnail,
						layers
					}
				}
			}
		}).then(({
			id,
			title = {},
			caption,
			description,
			author,
			pixmagix_category = [],
			status,
			meta = {}
		}) => {
			setEditor({
				loading:false,
				items:[{
					id,
					metadata:{
						title:title.rendered || '',
						caption,
						description,
						author,
						category:pixmagix_category[0] || 0,
						status
					},
					project:meta.pixmagix_project
				}].concat(items.slice(0, 11))
			});
		}).catch(({message}) => {
			sendNotice(
				message,
				'error'
			);
		});

	};
	const onUpload = () => {
		getHiddenFileInput('.zip', 'readAsArrayBuffer', buffer => parseZIP(buffer, saveProject)).click();
	};

	return (
		<div className='pixmagix-header'>
			<div className='pixmagix-header__title'>
				<h1>
					{__('PixMagix - Projects', 'pixmagix')}
				</h1>
			</div>
			<ButtonGroup>
				<Button
					onClick={onUpload} >
					{__('Upload', 'pixmagix')}
				</Button>
				<Button
					active
					href={new_url} >
					{__('Add New', 'pixmagix')}
				</Button>
			</ButtonGroup>
		</div>
	);

};

export default connect(state => ({
	items:state.items
}),{
	setEditor,
	sendNotice
})(Header);
