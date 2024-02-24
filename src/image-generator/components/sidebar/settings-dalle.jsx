import {
	Fragment
} from 'react';
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
	openAISizes,
	openAIImageModels,
	openAIQualities,
	openAIStyles
} from './../../utils/lists.js';
import {
	GENERATE_REST_PATH
} from './../../utils/constants.js';
import {
	addToRouter
} from './../../../utils/utils.js';

const SettingsDalle = ({
	prompts,
	size,
	opModel,
	opStyle,
	quality,
	samplesCount,
	setEditor,
	sendNotice
}) => {

	const onGenerate = () => {

		setEditor('isGenerating', true);

		const data = {
			generator:'dall-e',
			prompts,
			size,
			model:opModel,
			quality,
			style:opStyle,
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
				label={__('Model', 'pixmagix')}
				options={openAIImageModels}
				value={opModel}
				onChange={value => {
					const set = {
						opModel:value
					};
					// DALL-E 3 only support one sample per request.
					if (value === 'dall-e-3'){
						set.samplesCount = 1;
					}
					setEditor(set);
				}} />
			<Select
				label={__('Size', 'pixmagix')}
				options={openAISizes[opModel]}
				value={size}
				onChange={value => setEditor('size', value)} />
			{(opModel === 'dall-e-2') && (
				<Range
					label={__('Samples', 'pixmagix')}
					value={samplesCount}
					onChange={value => setEditor('samplesCount', value)}
					min={1}
					max={10}
					step={1} />
			)}
			{(opModel === 'dall-e-3') && (
				<Fragment>
					<Select
						label={__('Style', 'pixmagix')}
						options={openAIStyles}
						value={opStyle}
						onChange={value => setEditor('opStyle', value)} />
					<Select
						label={__('Quality', 'pixmagix')}
						options={openAIQualities}
						value={quality}
						onChange={value => setEditor('quality', value)} />
				</Fragment>
			)}
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
	size:state.size,
	quality:state.quality,
	opStyle:state.opStyle,
	opModel:state.opModel,
	samplesCount:state.samplesCount
}),{
	setEditor,
	sendNotice
})(SettingsDalle);
