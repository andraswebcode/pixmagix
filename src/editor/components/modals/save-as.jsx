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
	Widget,
	Input,
	Loader
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
	PROJECTS_REST_PATH
} from './../../utils/constants.js';

const SaveAs = ({
	projectName,
	thumbnail,
	canvasWidth,
	canvasHeight,
	canvasBackground,
	layers,
	layerIds,
	setEditor,
	sendNotice
}) => {

	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);

	return (
		<Modal
			title={__('Save Project as', 'pixmagix')}
			small
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={() => {
						if (!layerIds.length && !canvasBackground){
							sendNotice(
								__('Please create something, before you save!', 'pixmagix'),
								'warning'
							);
							return;
						}
						setLoading(true);
						apiFetch({
							path:PROJECTS_REST_PATH,
							method:'POST',
							data:{
								title:name || projectName || '',
								status:'publish',
								meta:{
									pixmagix_project:{
										canvasWidth,
										canvasHeight,
										canvasBackground,
										layers:layerIds.map(id => layers[id]),
										thumbnail
									}
								}
							}
						}).then(response => {
							batch(() => {
								setEditor('projectId', response.id);
								sendNotice(
									__('Project Saved Successfully', 'pixmagix'),
									'success'
								);
								setLoading(false);
							});
						}).catch(error => {
							console.log(error);
							batch(() => {
								sendNotice(
									__('Save Failed', 'pixmagix'),
									'error'
								);
								setLoading(false);
							});
						});
					}} >
					{__('Save', 'pixmagix')}
				</Button>
			)} >
			<Widget>
				<Input
					label={__('Project Name', 'pixmagix')}
					placeholder={projectName}
					value={name}
					onChange={setName} />
			</Widget>
			<Loader show={loading} />
		</Modal>
	);

};

export default connect(state => ({
	projectName:state.editor.projectName,
	thumbnail:state.editor.thumbnail,
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasBackground:state.data.present.canvasBackground,
	layers:state.data.present.layers,
	layerIds:state.data.present.layerIds
}),{
	setEditor,
	sendNotice
})(SaveAs);
