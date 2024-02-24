import {
	Modal,
	Button,
	ButtonGroup
} from 'elements';
import {
	batch,
	connect
} from 'react-redux';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	setEditor,
	sendNotice
} from './../../redux/actions-editor.js';
import Archives from './ai/archives.jsx';
import Generator from './ai/generator.jsx';
import {
	createPrompt
} from './../../../image-generator/utils/utils.js';
import {
	GENERATE_REST_PATH
} from './../../../image-generator/utils/constants.js';

const ImageGenerator = ({
	aiImageOptions,
	showAIImageArchive,
	setEditor,
	sendNotice
}) => {

	const {
		generator = 'openai',
		prompt,
		samplesCount = 1,
		opModel = 'dall-e-3',
		opSize,
		opStyle,
		opQuality,
		sdModel,
		sdSize,
		sdStyle,
		sdCfgScale,
		sdSteps
	} = aiImageOptions || {};
	const onGenerate = () => {

		setEditor('isAIImageGenerating', true);

		const prompts = [createPrompt({
			text:prompt
		})];
		const data = (generator === 'openai') ? {
			generator,
			prompts,
			samplesCount,
			size:opSize,
			model:opModel,
			quality:opQuality,
			style:opStyle
		} : {
			generator,
			prompts,
			samplesCount,
			style:sdStyle,
			model:sdModel,
			size:sdSize,
			cfgScale:sdCfgScale,
			steps:sdSteps
		};

		apiFetch({
			path:GENERATE_REST_PATH,
			method:'POST',
			data
		}).then(({
			samples
		}) => {
			setEditor({
				aiImageSamples:samples,
				isAIImageGenerating:false
			});
		}).catch(({message}) => {
			batch(() => {
				setEditor('isAIImageGenerating', false);
				sendNotice(
					message,
					'error'
				);
			});
		});

	};

	return (
		<Modal
			title={__('Generate Image With AI', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={showAIImageArchive ? (
				<Button
					onClick={() => setEditor('showAIImageArchive', false)} >
					{__('Back to Generator', 'pixmagix')}
				</Button>
			) : (
				<ButtonGroup>
					<Button
						onClick={() => setEditor('showAIImageArchive', true)} >
						{__('Archive', 'pixmagix')}
					</Button>
					<Button
						active
						onClick={onGenerate} >
						{__('Generate', 'pixmagix')}
					</Button>
				</ButtonGroup>
			)} >
			{showAIImageArchive ? (
				<Archives />
			) : (
				<Generator />
			)}
		</Modal>
	);

};

export default connect(state => ({
	aiImageOptions:state.editor.aiImageOptions,
	showAIImageArchive:state.editor.showAIImageArchive
}),{
	setEditor,
	sendNotice
})(ImageGenerator);
