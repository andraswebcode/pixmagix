import {
	__
} from 'wp-i18n';

import {
	getSizeLabel
} from './utils.js';

// Modals

import Archives from './../components/modals/archives.jsx';
import ExportMedia from './../components/modals/export-media.jsx';
import DownloadImage from './../components/modals/download-image.jsx';

/**
 * 
 * @since 1.2.0
 * @var {array}
 */

export const stabilityAIImageModels = [{
	label:__('Stable Diffusion XL 1.0', 'pixmagix'),
	value:'stable-diffusion-xl-1024-v1-0'
},{
	label:__('Stable Diffusion XL 0.9', 'pixmagix'),
	value:'stable-diffusion-xl-1024-v0-9'
},{
	label:__('Stable Diffusion XL 0.8', 'pixmagix'),
	value:'stable-diffusion-xl-beta-v2-2-2'
},{
	label:__('Stable Diffusion 2.1', 'pixmagix'),
	value:'stable-diffusion-512-v2-1'
}];

/**
 * 
 * @since 1.4.0
 * @var {array}
 */

export const openAIImageModels = [{
	label:__('DALL-E 2', 'pixmagix'),
	value:'dall-e-2'
},{
	label:__('DALL-E 3', 'pixmagix'),
	value:'dall-e-3'
}]

/**
 * 
 * @since 1.2.0
 * @var {array}
 */

export const stabilityAIStyles = [{
	label:__('3D Model', 'pixmagix'),
	value:'3d-model'
},{
	label:__('Analog Film', 'pixmagix'),
	value:'analog-film'
},{
	label:__('Anime', 'pixmagix'),
	value:'anime'
},{
	label:__('Cinematic', 'pixmagix'),
	value:'cinematic'
},{
	label:__('Comic Book', 'pixmagix'),
	value:'comic-book'
},{
	label:__('Digital Art', 'pixmagix'),
	value:'digital-art'
},{
	label:__('Enhance', 'pixmagix'),
	value:'enhance'
},{
	label:__('Fantasy Art', 'pixmagix'),
	value:'fantasy-art'
},{
	label:__('Isometric', 'pixmagix'),
	value:'isometric'
},{
	label:__('Line Art', 'pixmagix'),
	value:'line-art'
},{
	label:__('Low Poly', 'pixmagix'),
	value:'low-poly'
},{
	label:__('Modeling Compound', 'pixmagix'),
	value:'modeling-compound'
},{
	label:__('Neon Punk', 'pixmagix'),
	value:'neon-punk'
},{
	label:__('Origami', 'pixmagix'),
	value:'origami'
},{
	label:__('Photographic', 'pixmagix'),
	value:'photographic'
},{
	label:__('Pixel Art', 'pixmagix'),
	value:'pixel-art'
},{
	label:__('Tile Texture', 'pixmagix'),
	value:'tile-texture'
}];

/**
 * 
 * @since 1.4.0
 * @var {array}
 */

export const openAIStyles = [{
	label:__('Vivid', 'pixmagix'),
	value:'vivid'
},{
	label:__('Natural', 'pixmagix'),
	value:'natural'
}];

/**
 * 
 * @since 1.2.0
 * @var {object}
 */

export const stabilityAISizes = {
	'stable-diffusion-512-v2-1':[{
		label:getSizeLabel('square', '1:1', '512x512'),
		value:'512x512'
	},{
		label:getSizeLabel('landscape', '5:4', '640x512'),
		value:'640x512'
	},{
		label:getSizeLabel('landscape', '4:3', '683x512'),
		value:'683x512'
	},{
		label:getSizeLabel('landscape', '3:2', '768x512'),
		value:'768x512'
	},{
		label:getSizeLabel('landscape', '7:4', '896x512'),
		value:'896x512'
	},{
		label:getSizeLabel('landscape', '16:9', '910x512'),
		value:'910x512'
	},{
		label:getSizeLabel('landscape', '1.85:1', '947x512'),
		value:'947x512'
	},{
		label:getSizeLabel('landscape', '2:1', '1024x512'),
		value:'1024x512'
	},{
		label:'',
		value:''
	}],
	'stable-diffusion-xl-beta-v2-2-2':[{
		label:getSizeLabel('square', '1:1', '1024x1024'),
		value:'1024x1024'
	},{
		label:getSizeLabel('landscape', '5:4', '1152x896'),
		value:'1152x896'
	},{
		label:getSizeLabel('landscape', '3:2', '1216x832'),
		value:'1216x832'
	},{
		label:getSizeLabel('landscape', '16:9', '1344x768'),
		value:'1344x768'
	},{
		label:getSizeLabel('landscape', '21:9', '1536x640'),
		value:'1536x640'
	},{
		label:getSizeLabel('portrait', '9:21', '640x1536'),
		value:'640x1536'
	},{
		label:getSizeLabel('portrait', '9:16', '768x1344'),
		value:'768x1344'
	},{
		label:getSizeLabel('portrait', '2:3', '832x1216'),
		value:'832x1216'
	},{
		label:getSizeLabel('portrait', '4:5', '896x1152'),
		value:'896x1152'
	}],
	'stable-diffusion-xl-1024-v0-9':[{
		label:getSizeLabel('square', '1:1', '1024x1024'),
		value:'1024x1024'
	},{
		label:getSizeLabel('landscape', '5:4', '1152x896'),
		value:'1152x896'
	},{
		label:getSizeLabel('landscape', '3:2', '1216x832'),
		value:'1216x832'
	},{
		label:getSizeLabel('landscape', '16:9', '1344x768'),
		value:'1344x768'
	},{
		label:getSizeLabel('landscape', '21:9', '1536x640'),
		value:'1536x640'
	},{
		label:getSizeLabel('portrait', '9:21', '640x1536'),
		value:'640x1536'
	},{
		label:getSizeLabel('portrait', '9:16', '768x1344'),
		value:'768x1344'
	},{
		label:getSizeLabel('portrait', '2:3', '832x1216'),
		value:'832x1216'
	},{
		label:getSizeLabel('portrait', '4:5', '896x1152'),
		value:'896x1152'
	}],
	'stable-diffusion-xl-1024-v1-0':[{
		label:getSizeLabel('square', '1:1', '1024x1024'),
		value:'1024x1024'
	},{
		label:getSizeLabel('landscape', '5:4', '1152x896'),
		value:'1152x896'
	},{
		label:getSizeLabel('landscape', '3:2', '1216x832'),
		value:'1216x832'
	},{
		label:getSizeLabel('landscape', '16:9', '1344x768'),
		value:'1344x768'
	},{
		label:getSizeLabel('landscape', '21:9', '1536x640'),
		value:'1536x640'
	},{
		label:getSizeLabel('portrait', '9:21', '640x1536'),
		value:'640x1536'
	},{
		label:getSizeLabel('portrait', '9:16', '768x1344'),
		value:'768x1344'
	},{
		label:getSizeLabel('portrait', '2:3', '832x1216'),
		value:'832x1216'
	},{
		label:getSizeLabel('portrait', '4:5', '896x1152'),
		value:'896x1152'
	}]
};

/**
 * 
 * @since 1.3.0
 * @var {object}
 */

export const openAISizes = {
	'dall-e-2':[{
		label:getSizeLabel('square', '1:1', '1024x1024'),
		value:'1024x1024'
	},{
		label:getSizeLabel('square', '1:1', '512x512'),
		value:'512x512'
	},{
		label:getSizeLabel('square', '1:1', '256x256'),
		value:'256x256'
	}],
	'dall-e-3':[{
		label:getSizeLabel('square', '1:1', '1024x1024'),
		value:'1024x1024'
	},{
		label:getSizeLabel('landscape', '16:9', '1792x1024'),
		value:'1792x1024'
	},{
		label:getSizeLabel('portrait', '9:16', '1024x1792'),
		value:'1024x1792'
	}]
};

/**
 * 
 * @since 1.4.0
 * @var {array}
 */

export const openAIQualities = [{
	label:__('Standard', 'pixmagix'),
	value:'standard'
},{
	label:__('HD', 'pixmagix'),
	value:'hd'
}];

/**
 * 
 * @since 1.3.0
 * @var {array}
 */

export const generators = [{
	name:'openai',
	label:__('OpenAI', 'pixmagix')
},{
	name:'stability',
	label:__('Stability AI', 'pixmagix')
}];

/**
 * 
 * @since 1.2.0
 * @var {object}
 */

export const modals = {
	'archives':Archives,
	'export-media':ExportMedia,
	'download-image':DownloadImage
};
