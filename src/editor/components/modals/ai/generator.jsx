import {
	connect
} from 'react-redux';
import {
	Row,
	Column,
	Grid,
	Widget
} from 'elements';
import {
	ai_platforms
} from 'editor-globals';
import {
	__
} from 'wp-i18n';
import {
	times,
	includes
} from 'lodash';

import SettingsDalle from './settings-dalle.jsx';
import SettingsSD from './settings-sd.jsx';
import SettingsSTI from './settings-sti.jsx';
import ImageItem from './image-item.jsx';
import Generating from './../../../../image-generator/components/sidebar/generating.jsx';
import {
	setEditor
} from './../../../redux/actions-editor.js';

const Generator = ({
	aiImageOptions,
	isAIImageGenerating,
	setEditor
}) => {

	const {
		generator = 'openai',
		samplesCount = 1,
		opModel
	} = aiImageOptions || {};
	const tabs = [{
		name:'openai',
		label:__('DALL-E', 'pixmagix'),
		content:<SettingsDalle />
	},{
		name:'stabilityai',
		label:__('Stable Diffusion', 'pixmagix'),
		content:<SettingsSD />
	},{
		name:'clipdrop',
		label:__('Sketch to Image', 'pixmagix'),
		content:<SettingsSTI />
	}].filter(({name}) => includes(ai_platforms, name));

	return (
		<Row>
			<Column className='pixmagix-imagelist'>
				<Grid columns={Math.min(samplesCount, 2)}>
					{times(samplesCount, i => (
						<ImageItem
							key={i}
							index={i} />
					))}
				</Grid>
			</Column>
			<Column>
				{isAIImageGenerating ? (
					<Generating />
				) : (
					<Widget
						tabs={tabs}
						initShow={generator}
						onChange={({name}) => setEditor({
							aiImageOptions:{
								...aiImageOptions,
								generator:name,
								samplesCount:((name === 'openai' && opModel === 'dall-e-3') || name === 'clipdrop') ? 1 : samplesCount
							},
							aiImageSamples:null
						})} />
				)}
			</Column>
		</Row>
	);

};

export default connect(state => ({
	aiImageOptions:state.editor.aiImageOptions,
	isAIImageGenerating:state.editor.isAIImageGenerating
}),{
	setEditor
})(Generator);
