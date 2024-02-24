import {
	Fragment,
	useState,
	useMemo
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Accordion,
	Button,
	Textarea,
	Select,
	InlineNotice
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	REST_PATH
} from './../../../utils/constants.js';
import {
	createMask
} from './../../../utils/utils.js';
import {
	setEditor,
	sendNotice
} from './../../../redux/actions-editor.js';
import {
	setLayerProps
} from './../../../redux/actions-data.js';

const AITools = ({
	activeLayers,
	layerIds = [],
	layers,
	setEditor,
	sendNotice,
	setLayerProps
}) => {

	const masks = useMemo(() => {
		return layerIds.map(id => {
			const layer = layers[id];
			if (layer?.type === 'path' && layer.visible){
				return {
					label:layer.name,
					value:id
				};
			}
		}).filter(item => !!item);
	}, [layerIds, layers]);
	const [prompt, setPrompt] = useState('');
	const [maskId, setMaskId] = useState(masks[0]?.value || '');
	const noMasks = !masks?.length;
	const onModify = modifier => {

		const activeLayer = layers[activeLayers[0]];

		if (!activeLayer || activeLayer.type !== 'image'){
			return;
		}

		const {
			id,
			src
		} = activeLayer;
		const mask = createMask(activeLayer, layers[maskId]);
		const data = {
			modifier,
			prompt,
			src,
			mask
		};

		batch(() => {
			setEditor('loadingImages', [id]);
			setLayerProps(maskId, 'visible', false);
		});

		apiFetch({
			path:REST_PATH + 'modify_image/',
			method:'POST',
			data
		}).then(response => {
			console.log(response);
			batch(() => {
				setLayerProps(id, 'src', response.src);
				setEditor('loadingImages', []);
			});
		}).catch(({message}) => {
			batch(() => {
				setEditor('loadingImages', []);
				setLayerProps(maskId, 'visible', true);
				sendNotice(
					message,
					'error'
				);
			});
		});

	};
	const aiTools = [{
		name:'remove-background',
		label:__('Remove Background', 'pixmagix'),
		content:(
			<Button
				active
				small
				block
				onClick={() => onModify('remove-background')} >
				{__('Remove Background', 'pixmagix')}
			</Button>
		)
	},{
		name:'replace-background',
		label:__('Replace Background', 'pixmagix'),
		content:(
			<Fragment>
				<Textarea
					label={__('Prompt', 'pixmagix')}
					value={prompt}
					onChange={setPrompt} />
				<Button
					active
					small
					block
					onClick={() => onModify('replace-background')} >
					{__('Replace Background', 'pixmagix')}
				</Button>
			</Fragment>
		)
	},{
		name:'remove-text',
		label:__('Remove Text', 'pixmagix'),
		content:(
			<Button
				active
				small
				block
				onClick={() => onModify('remove-text')} >
				{__('Remove Text', 'pixmagix')}
			</Button>
		)
	},{
		name:'cleanup',
		label:__('Cleanup', 'pixmagix'),
		content:(
			<Fragment>
				<Select
					label={__('Mode', 'pixmagix')}
					options={[{
						label:__('Fast', 'pixmagix'),
						value:'fast'
					},{
						label:__('Quality', 'pixmagix'),
						value:'quality'
					}]} />
				<Select
					label={__('Mask', 'pixmagix')}
					options={masks}
					value={maskId}
					onChange={setMaskId} />
				<InlineNotice
					type='warning'
					message={__('Draw a Mask!', 'pixmagix')}
					show={noMasks} />
				<Button
					active={!noMasks}
					disabled={noMasks}
					small
					block
					onClick={() => onModify('cleanup')} >
					{__('Cleanup', 'pixmagix')}
				</Button>
			</Fragment>
		)
	},{
		name:'text-inpainting',
		label:__('Text Inpainting', 'pixmagix'),
		content:(
			<Fragment>
				<Textarea
					label={__('Prompt', 'pixmagix')}
					value={prompt}
					onChange={setPrompt} />
				<Select
					label={__('Mask', 'pixmagix')}
					options={masks}
					value={maskId}
					onChange={setMaskId} />
				<InlineNotice
					type='warning'
					message={__('Draw a Mask!', 'pixmagix')}
					show={noMasks} />
				<Button
					active={!noMasks}
					disabled={noMasks}
					small
					block
					onClick={() => onModify('text-inpainting')} >
					{__('Inpaint', 'pixmagix')}
				</Button>
			</Fragment>
		)
	}];

	return (
		<Accordion
			items={aiTools} />
	);

};

export default connect(state => ({
	activeLayers:state.editor.activeLayers,
	layerIds:state.data.present.layerIds,
	layers:state.data.present.layers
}),{
	setEditor,
	sendNotice,
	setLayerProps
})(AITools);
