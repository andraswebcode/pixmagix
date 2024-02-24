import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Textarea,
	Select,
	Range,
	Button
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	isString
} from 'lodash';

import {
	openAIImageModels,
	openAISizes,
	openAIStyles,
	openAIQualities
} from './../../../../image-generator/utils/lists.js';
import {
	setEditor
} from './../../../redux/actions-editor.js';

const SettingsDalle = ({
	aiImageOptions,
	setEditor
}) => {

	const {
		prompt,
		opModel = 'dall-e-3',
		samplesCount = 1,
		opStyle,
		opSize = '1024x1024',
		opQuality
	} = aiImageOptions || {};
	const setOption = (key, value) => {
		const options = isString(key) ? {
			[key]:value
		} : key;
		setEditor({
			aiImageOptions:{
				...aiImageOptions,
				...options
			},
			aiImageSamples:null
		});
	};

	return (
		<Fragment>
			<Textarea
				label={__('Prompt', 'pixmagix')}
				value={prompt}
				onChange={value => setOption('prompt', value)} />
			<Select
				label={__('Model', 'pixmagix')}
				options={openAIImageModels}
				value={opModel}
				onChange={value => {
					const set = {
						opModel:value,
						opSize:'1024x1024'
					};
					// DALL-E 3 only support one sample per request.
					if (value === 'dall-e-3'){
						set.samplesCount = 1;
					}
					setOption(set);
				}} />
			<Select
				label={__('Size', 'pixmagix')}
				options={openAISizes[opModel]}
				value={opSize}
				onChange={value => setOption('opSize', value)} />
			{(opModel === 'dall-e-2') && (
				<Range
					label={__('Samples', 'pixmagix')}
					value={samplesCount}
					onChange={value => setOption('samplesCount', value)}
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
						onChange={value => setOption('opStyle', value)} />
					<Select
						label={__('Quality', 'pixmagix')}
						options={openAIQualities}
						value={opQuality}
						onChange={value => setOption('opQuality', value)} />
				</Fragment>
			)}
		</Fragment>
	);

};

export default connect(state => ({
	aiImageOptions:state.editor.aiImageOptions
}),{
	setEditor
})(SettingsDalle);
