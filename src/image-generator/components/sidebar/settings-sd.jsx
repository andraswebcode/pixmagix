import {
	batch,
	connect
} from 'react-redux';
import {
	Widget,
	Select,
	Range,
	Button
} from 'elements';
import {
	new_url
} from 'editor-globals';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	setEditor,
	sendNotice
} from './../../redux/actions.js';
import {
	stabilityAIStyles,
	stabilityAIImageModels,
	stabilityAISizes
} from './../../utils/lists.js';
import {
	GENERATE_REST_PATH
} from './../../utils/constants.js';
import {
	addToRouter
} from './../../../utils/utils.js';

const SettingsSD = ({
	prompts,
	sdStyle,
	sdModel,
	size,
	samplesCount,
	cfgScale,
	steps,
	setEditor,
	sendNotice
}) => {

	const onGenerate = () => {

		setEditor('isGenerating', true);

		const data = {
			generator:'stable-diffusion',
			prompts,
			style:sdStyle,
			model:sdModel,
			size,
			cfgScale,
			steps,
			samplesCount
		};

		apiFetch({
			path:GENERATE_REST_PATH,
			method:'POST',
			data
		}).then(({
			samples,
			archive
		}) => {
			setEditor({
				samples,
				isGenerating:false
			});
			addToRouter({
				archive
			}, new_url);
		}).catch(({message}) => {
			batch(() => {
				setEditor({
					isGenerating:false
				});
				sendNotice(
					message,
					'error'
				);
			});
		});

	};

	return (
		<Widget
			label={__('Settings', 'pixmagix')} >
			<Select
				label={__('Style', 'pixmagix')}
				options={stabilityAIStyles}
				value={sdStyle}
				onChange={value => setEditor('sdStyle', value)} />
			<Select
				label={__('Model', 'pixmagix')}
				options={stabilityAIImageModels}
				value={sdModel}
				onChange={value => setEditor('sdModel', value)} />
			<Select
				label={__('Size', 'pixmagix')}
				options={stabilityAISizes[sdModel]}
				value={size}
				onChange={value => setEditor('size', value)} />
			<Range
				label={__('CFG Scale', 'pixmagix')}
				value={cfgScale}
				onChange={value => setEditor('cfgScale', value)}
				min={0}
				max={35}
				step={1} />
			<Range
				label={__('Steps', 'pixmagix')}
				value={steps}
				onChange={value => setEditor('steps', value)}
				min={10}
				max={150}
				step={1} />
			<Range
				label={__('Samples', 'pixmagix')}
				value={samplesCount}
				onChange={value => setEditor('samplesCount', value)}
				min={1}
				max={10}
				step={1} />
			<Button
				block
				active
				onClick={onGenerate} >
				{__('Generate', 'pixmagix')}
			</Button>
		</Widget>
	);

};

export default connect(state => ({
	prompts:state.prompts,
	sdStyle:state.sdStyle,
	sdModel:state.sdModel,
	size:state.size,
	samplesCount:state.samplesCount,
	cfgScale:state.cfgScale,
	steps:state.steps
}),{
	setEditor,
	sendNotice
})(SettingsSD);
