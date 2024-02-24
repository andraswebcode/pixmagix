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
	stabilityAIStyles,
	stabilityAIImageModels,
	stabilityAISizes
} from './../../../../image-generator/utils/lists.js';
import {
	setEditor
} from './../../../redux/actions-editor.js';

const SettingsSD = ({
	aiImageOptions,
	setEditor
}) => {

	const {
		prompt,
		sdModel = 'stable-diffusion-xl-1024-v1-0',
		samplesCount = 1,
		sdStyle,
		sdSize = '1024x1024',
		sdCfgScale = 7,
		sdSteps = 40
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
				label={__('Style', 'pixmagix')}
				options={stabilityAIStyles}
				value={sdStyle}
				onChange={value => setOption('sdStyle', value)} />
			<Select
				label={__('Model', 'pixmagix')}
				options={stabilityAIImageModels}
				value={sdModel}
				onChange={value => setOption('sdModel', value)} />
			<Select
				label={__('Size', 'pixmagix')}
				options={stabilityAISizes[sdModel]}
				value={sdSize}
				onChange={value => setOption('sdSize', value)} />
			<Range
				label={__('CFG Scale', 'pixmagix')}
				value={sdCfgScale}
				onChange={value => setOption('sdCfgScale', value)}
				min={0}
				max={35}
				step={1} />
			<Range
				label={__('Steps', 'pixmagix')}
				value={sdSteps}
				onChange={value => setOption('sdSteps', value)}
				min={10}
				max={150}
				step={1} />
			<Range
				label={__('Samples', 'pixmagix')}
				value={samplesCount}
				onChange={value => setOption('samplesCount', value)}
				min={1}
				max={10}
				step={1} />
		</Fragment>
	);

};

export default connect(state => ({
	aiImageOptions:state.editor.aiImageOptions
}),{
	setEditor
})(SettingsSD);
