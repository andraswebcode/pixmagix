import {
	__
} from 'wp-i18n';

// Toolbar components.

import AddImage from './../components/sidebar-left/add-image.jsx';
import AddText from './../components/sidebar-left/add-text.jsx';
import AddElement from './../components/sidebar-left/add-element.jsx';
import AddQRCode from './../components/sidebar-left/add-qrcode.jsx';
import DrawShape from './../components/sidebar-left/draw-shape.jsx';
import FreeHandDraw from './../components/sidebar-left/free-hand-draw.jsx';
import DrawPath from './../components/sidebar-left/draw-path.jsx';
import CropCanvas from './../components/sidebar-left/crop-canvas.jsx';

// Modals.

import AddGuides from './../components/modals/add-guides.jsx';
import FontManager from './../components/modals/font-manager.jsx';
import CategoryManager from './../components/modals/category-manager.jsx';
import ImportMedia from './../components/modals/import-media.jsx';
import OpenProject from './../components/modals/open-project.jsx';
import SaveAs from './../components/modals/save-as.jsx';
import ExportMedia from './../components/modals/export-media.jsx';
import ReplaceMedia from './../components/modals/replace-media.jsx';
import RestoreMedia from './../components/modals/restore-media.jsx';
import DownloadImage from './../components/modals/download-image.jsx';
import DownloadSVG from './../components/modals/download-svg.jsx';
import KeyboardShortcuts from './../components/modals/keyboard-shortcuts.jsx';
import Help from './../components/modals/help.jsx';

/**
 * 
 * @since 1.0.0
 * @var {array}
 */

export const toolbarItems = [{
	name:'image',
	label:__('Add Image', 'pixmagix'),
	icon:'image',
	component:AddImage
},{
	name:'text',
	label:__('Add Text', 'pixmagix'),
	icon:'font',
	component:AddText
},{
	name:'element',
	label:__('Add Element', 'pixmagix'),
	icon:'icons',
	component:AddElement
},{
	name:'qrcode',
	label:__('Add QR Code', 'pixmagix'),
	icon:'qrcode',
	component:AddQRCode
},{
	name:'draw-shape',
	label:__('Draw Shape', 'pixmagix'),
	icon:'shapes',
	component:DrawShape
},{
	name:'free-hand-draw',
	label:__('Free Hand Draw', 'pixmagix'),
	icon:'pen',
	component:FreeHandDraw
},{
	name:'draw-path',
	label:__('Draw Path', 'pixmagix'),
	icon:'pen-nib',
	component:DrawPath
},{
	name:'crop',
	label:__('Crop Canvas', 'pixmagix'),
	icon:'crop',
	component:CropCanvas
}];

/**
 *
 * @since 1.0.0
 * @var {object}
 */

export const shapeTypes = {
	'rect':{
		label:__('Rectangle', 'pixmagix'),
		icon:'square'
	},
	'circle':{
		label:__('Circle', 'pixmagix'),
		icon:'circle'
	},
	'ellipse':{
		label:__('Ellipse', 'pixmagix'),
		icon:'circle'
	},
	'line':{
		label:__('Line', 'pixmagix'),
		icon:'star'
	},
	'path':{
		label:__('Path', 'pixmagix'),
		icon:'star'
	},
	'polyline':{
		label:__('Polyline', 'pixmagix'),
		icon:'star'
	},
	'polygon':{
		label:__('Polygon', 'pixmagix'),
		icon:'star'
	},
	'text':{
		label:__('Text', 'pixmagix'),
		icon:'font'
	},
	'i-text':{
		label:__('Text', 'pixmagix'),
		icon:'font'
	},
	'image':{
		label:__('Image', 'pixmagix'),
		icon:'image'
	},
	'qrcode':{
		label:__('QR Code', 'pixmagix'),
		icon:'qrcode'
	},
	'group':{
		label:__('Group', 'pixmagix'),
		icon:'layer-group'
	}
};

/**
 *
 * @since 1.0.0
 * @var {array}
 */

export const blendingModes = [{
	label:__('Default', 'pixmagix'),
	value:'source-over'
},{
	label:__('Source In', 'pixmagix'),
	value:'source-in'
},{
	label:__('Source Out', 'pixmagix'),
	value:'source-out'
},{
	label:__('Source Atop', 'pixmagix'),
	value:'source-atop'
},{
	label:__('Destination Over', 'pixmagix'),
	value:'destination-over'
},{
	label:__('Destination In', 'pixmagix'),
	value:'destination-in'
},{
	label:__('Destination Out', 'pixmagix'),
	value:'destination-out'
},{
	label:__('Destination Atop', 'pixmagix'),
	value:'destination-atop'
},{
	label:__('Lighter', 'pixmagix'),
	value:'lighter'
},{
	label:__('Copy', 'pixmagix'),
	value:'copy'
},{
	label:__('XOR', 'pixmagix'),
	value:'xor'
},{
	label:__('Multiply', 'pixmagix'),
	value:'multiply'
},{
	label:__('Screen', 'pixmagix'),
	value:'screen'
},{
	label:__('Overlay', 'pixmagix'),
	value:'overlay'
},{
	label:__('Darken', 'pixmagix'),
	value:'darken'
},{
	label:__('Lighten', 'pixmagix'),
	value:'lighten'
},{
	label:__('Color Dodge', 'pixmagix'),
	value:'color-dodge'
},{
	label:__('Color Burn', 'pixmagix'),
	value:'color-burn'
},{
	label:__('Hard Light', 'pixmagix'),
	value:'hard-light'
},{
	label:__('Soft Light', 'pixmagix'),
	value:'soft-light'
},{
	label:__('Difference', 'pixmagix'),
	value:'difference'
},{
	label:__('Exclusion', 'pixmagix'),
	value:'exclusion'
},{
	label:__('Hue', 'pixmagix'),
	value:'hue'
},{
	label:__('Saturation', 'pixmagix'),
	value:'saturation'
},{
	label:__('Color', 'pixmagix'),
	value:'color'
},{
	label:__('Luminosity', 'pixmagix'),
	value:'luminosity'
}];

/**
 *
 * @since 1.1.0
 * @var {array}
 */

export const preserveAspectRatios = [
	'none',
	'xMinYMin meet',
	'xMinYMin slice',
	'xMidYMin meet',
	'xMidYMin slice',
	'xMaxYMin meet',
	'xMaxYMin slice',
	'xMinYMid meet',
	'xMinYMid slice',
	'xMidYMid meet',
	'xMidYMid slice',
	'xMaxYMid meet',
	'xMaxYMid slice',
	'xMinYMax meet',
	'xMinYMax slice',
	'xMidYMax meet',
	'xMidYMax slice',
	'xMaxYMax meet',
	'xMaxYMax slice'
];

/**
 *
 * @since 1.0.0
 * @var {array}
 */

export const cropAspectRatios = [{
	label:__('Original', 'pixmagix'),
	value:'?:?'
},{
	label:__('Square', 'pixmagix'),
	value:'1:1'
},{
	label:__('16:10 - Landscape', 'pixmagix'),
	value:'16:10'
},{
	label:__('16:9 - Landscape', 'pixmagix'),
	value:'16:9'
},{
	label:__('4:3 - Landscape', 'pixmagix'),
	value:'4:3'
},{
	label:__('3:2 - Landscape', 'pixmagix'),
	value:'3:2'
},{
	label:__('10:16 - Portrait', 'pixmagix'),
	value:'10:16'
},{
	label:__('9:16 - Portrait', 'pixmagix'),
	value:'9:16'
},{
	label:__('3:4 - Portrait', 'pixmagix'),
	value:'3:4'
},{
	label:__('2:3 - Portrait', 'pixmagix'),
	value:'2:3'
}];

/**
 *
 * @since 1.5.0
 * @var {array}
 */

export const guidePresets = [{
	name:'2-cols',
	label:__('2 Columns', 'pixmagix'),
	type:'path',
	path:'',
	values:{
		rows:1,
		columns:2,
		gapX:0,
		gapY:18,
		marginX:0,
		marginY:28
	}
},{
	name:'3-cols',
	label:__('3 Columns', 'pixmagix'),
	type:'path',
	path:'',
	values:{
		rows:1,
		columns:3,
		gapX:0,
		gapY:18,
		marginX:0,
		marginY:28
	}
},{
	name:'4-cols',
	label:__('4 Columns', 'pixmagix'),
	type:'path',
	path:'',
	values:{
		rows:1,
		columns:4,
		gapX:0,
		gapY:18,
		marginX:0,
		marginY:28
	}
},{
	name:'2x2',
	label:__('2x2', 'pixmagix'),
	type:'path',
	path:'',
	values:{
		rows:2,
		columns:2,
		gapX:18,
		gapY:18,
		marginX:28,
		marginY:28
	}
},{
	name:'3x3',
	label:__('3x3', 'pixmagix'),
	type:'path',
	path:'',
	values:{
		rows:3,
		columns:3,
		gapX:18,
		gapY:18,
		marginX:28,
		marginY:28
	}
},{
	name:'4x4',
	label:__('4x4', 'pixmagix'),
	type:'path',
	path:'',
	values:{
		rows:4,
		columns:4,
		gapX:18,
		gapY:18,
		marginX:28,
		marginY:28
	}
}];

/**
 *
 * @since 1.0.0
 * @var {array}
 */

export const imageFilters = [{
	name:'Grayscale',
	label:__('Grayscale', 'pixmagix'),
	controls:[{
		type:'select',
		name:'mode',
		label:__('Mode', 'pixmagix'),
		default:'average',
		options:[{
			value:'average',
			label:__('Average', 'pixmagix')
		},{
			value:'lightness',
			label:__('Lightness', 'pixmagix')
		},{
			value:'luminosity',
			label:__('Luminosity', 'pixmagix')
		}]
	}]
},{
	name:'Invert',
	label:__('Invert', 'pixmagix'),
	controls:[]
},{
	name:'Sepia',
	label:__('Sepia', 'pixmagix'),
	controls:[]
},{
	name:'BlackWhite',
	label:__('Black/White', 'pixmagix'),
	controls:[]
},{
	name:'Brownie',
	label:__('Brownie', 'pixmagix'),
	controls:[]
},{
	name:'Vintage',
	label:__('Vintage', 'pixmagix'),
	controls:[]
},{
	name:'Kodachrome',
	label:__('Kodachrome', 'pixmagix'),
	controls:[]
},{
	name:'Technicolor',
	label:__('Technicolor', 'pixmagix'),
	controls:[]
},{
	name:'Polaroid',
	label:__('Polaroid', 'pixmagix'),
	controls:[]
},{
	name:'RemoveColor',
	label:__('Remove Color', 'pixmagix'),
	controls:[{
		type:'color',
		name:'color',
		label:__('Color', 'pixmagix'),
		disableAlpha:true,
		default:'#FFFFFF'
	},{
		type:'range',
		name:'distance',
		label:__('Distance', 'pixmagix'),
		default:0.5,
		min:0,
		max:1,
		step:0.01
	}]
},{
	name:'Brightness',
	label:__('Brightness', 'pixmagix'),
	controls:[{
		type:'range',
		name:'brightness',
		label:__('Brightness', 'pixmagix'),
		default:0.4,
		min:-1,
		max:1,
		step:0.01
	}]
},{
	name:'Gamma',
	label:__('Gamma', 'pixmagix'),
	controls:[{
		type:'range',
		name:'red',
		label:__('Red', 'pixmagix'),
		default:2,
		min:0.2,
		max:4.2,
		step:0.01
	},{
		type:'range',
		name:'green',
		label:__('Green', 'pixmagix'),
		default:2,
		min:0.2,
		max:4.2,
		step:0.01
	},{
		type:'range',
		name:'blue',
		label:__('Blue', 'pixmagix'),
		default:2,
		min:0.2,
		max:4.2,
		step:0.01
	}]
},{
	name:'Contrast',
	label:__('Contrast', 'pixmagix'),
	controls:[{
		type:'range',
		name:'contrast',
		label:__('Contrast', 'pixmagix'),
		default:0.5,
		min:-1,
		max:1,
		step:0.01
	}]
},{
	name:'Saturation',
	label:__('Saturation', 'pixmagix'),
	controls:[{
		type:'range',
		name:'saturation',
		label:__('Saturation', 'pixmagix'),
		default:0.5,
		min:-1,
		max:1,
		step:0.01
	}]
},{
	name:'Vibrance',
	label:__('Vibrance', 'pixmagix'),
	controls:[{
		type:'range',
		name:'vibrance',
		label:__('Vibrance', 'pixmagix'),
		default:0.5,
		min:-1,
		max:1,
		step:0.01
	}]
},{
	name:'HueRotation',
	label:__('Hue Rotation', 'pixmagix'),
	controls:[{
		type:'range',
		name:'rotation',
		label:__('Rotation', 'pixmagix'),
		default:1.5,
		min:-2,
		max:2,
		step:0.01
	}]
},{
	name:'Noise',
	label:__('Noise', 'pixmagix'),
	controls:[{
		type:'range',
		name:'noise',
		label:__('Noise', 'pixmagix'),
		default:40,
		min:0,
		max:1000,
		step:1
	}]
},{
	name:'Pixelate',
	label:__('Pixelate', 'pixmagix'),
	controls:[{
		type:'range',
		name:'blocksize',
		label:__('Block Size', 'pixmagix'),
		default:5,
		min:2,
		max:20,
		step:1
	}]
},{
	name:'Blur',
	label:__('Blur', 'pixmagix'),
	controls:[{
		type:'range',
		name:'blur',
		label:__('Blur', 'pixmagix'),
		default:0.2,
		min:0,
		max:1,
		step:0.01
	}]
},{
	name:'Sharpen',
	label:__('Sharpen', 'pixmagix'),
	controls:[]
},{
	name:'Emboss',
	label:__('Emboss', 'pixmagix'),
	controls:[{
		type:'checkbox',
		name:'opaque',
		label:__('Opaque', 'pixmagix'),
		default:true
	}]
},{
	name:'BlendColor',
	label:__('Blend Color', 'pixmagix'),
	controls:[{
		type:'select',
		name:'mode',
		label:__('Mode', 'pixmagix'),
		default:'add',
		options:[{
			value:'add',
			label:__('Add', 'pixmagix')
		},{
			value:'diff',
			label:__('Diff', 'pixmagix')
		},{
			value:'subtract',
			label:__('Subtract', 'pixmagix')
		},{
			value:'multiply',
			label:__('Multiply', 'pixmagix')
		},{
			value:'screen',
			label:__('Screen', 'pixmagix')
		},{
			value:'lighten',
			label:__('Lighten', 'pixmagix')
		},{
			value:'darken',
			label:__('Darken', 'pixmagix')
		},{
			value:'overlay',
			label:__('Overlay', 'pixmagix')
		},{
			value:'exclusion',
			label:__('Exclusion', 'pixmagix')
		},{
			value:'tint',
			label:__('Tint', 'pixmagix')
		}]
	},{
		type:'color',
		name:'color',
		label:__('Color', 'pixmagix'),
		disableAlpha:true,
		default:'#008800',
	},{
		type:'range',
		name:'alpha',
		label:__('Alpha', 'pixmagix'),
		default:1,
		min:0,
		max:1,
		step:0.01
	}]
},{
	name:'Duotone',
	label:__('Duotone', 'pixmagix'),
	controls:[{
		type:'color',
		name:'color1',
		label:__('Color Dark', 'pixmagix'),
		disableAlpha:true,
		default:'#000044',
	},{
		type:'color',
		name:'color2',
		label:__('Color Light', 'pixmagix'),
		disableAlpha:true,
		default:'#FF8A8A',
	}]
}];

/**
 *
 * @since 1.5.0
 * @var {object}
 */

export const gFontFilters = {
	categories:[{
		label:__('All Categories', 'pixmagix'),
		value:''
	},{
		label:__('Serif', 'pixmagix'),
		value:'serif'
	},{
		label:__('Sans Serif', 'pixmagix'),
		value:'sans-serif'
	},{
		label:__('Display', 'pixmagix'),
		value:'display'
	},{
		label:__('Handwriting', 'pixmagix'),
		value:'handwriting'
	},{
		label:__('Monospace', 'pixmagix'),
		value:'monospace'
	}],
	languages:[{
		label:__('All Languages', 'pixmagix'),
		value:''
	},{
		label:__('Arabic', 'pixmagix'),
		value:'arabic'
	},{
		label:__('Bengali', 'pixmagix'),
		value:'bengali'
	},{
		label:__('Chinese (Hong Kong)', 'pixmagix'),
		value:'chinese-hongkong'
	},{
		label:__('Chinese (Simplified)', 'pixmagix'),
		value:'chinese-simplified'
	},{
		label:__('Chinese (Traditional)', 'pixmagix'),
		value:'chinese-traditional'
	},{
		label:__('Cyrillic', 'pixmagix'),
		value:'cyrillic'
	},{
		label:__('Cyrillic Extended', 'pixmagix'),
		value:'cyrillic-ext'
	},{
		label:__('Devanagari', 'pixmagix'),
		value:'devanagari'
	},{
		label:__('Greek', 'pixmagix'),
		value:'greek'
	},{
		label:__('Greek Extended', 'pixmagix'),
		value:'greek-ext'
	},{
		label:__('Gujarati', 'pixmagix'),
		value:'gujarati'
	},{
		label:__('Gurmukhi', 'pixmagix'),
		value:'gurmukhi'
	},{
		label:__('Hebrew', 'pixmagix'),
		value:'hebrew'
	},{
		label:__('Japanese', 'pixmagix'),
		value:'japanese'
	},{
		label:__('Khmer', 'pixmagix'),
		value:'khmer'
	},{
		label:__('Korean', 'pixmagix'),
		value:'korean'
	},{
		label:__('Latin', 'pixmagix'),
		value:'latin'
	},{
		label:__('Latin Extended', 'pixmagix'),
		value:'latin-ext'
	},{
		label:__('Malayalam', 'pixmagix'),
		value:'malayalam'
	},{
		label:__('Myanmar', 'pixmagix'),
		value:'myanmar'
	},{
		label:__('Oriya', 'pixmagix'),
		value:'oriya'
	},{
		label:__('Sinhala', 'pixmagix'),
		value:'sinhala'
	},{
		label:__('Tamil', 'pixmagix'),
		value:'tamil'
	},{
		label:__('Telugu', 'pixmagix'),
		value:'telugu'
	},{
		label:__('Thai', 'pixmagix'),
		value:'thai'
	},{
		label:__('Tibetian', 'pixmagix'),
		value:'tibetian'
	},{
		label:__('Vietnamese', 'pixmagix'),
		value:'vietnamese'
	}],
	variants:[{
		label:__('All Variants', 'pixmagix'),
		value:''
	},{
		label:__('Thin 100', 'pixmagix'),
		value:'100'
	},{
		label:__('Thin 100 Italic', 'pixmagix'),
		value:'100italic'
	},{
		label:__('Light 300', 'pixmagix'),
		value:'300'
	},{
		label:__('Light 300 Italic', 'pixmagix'),
		value:'300italic'
	},{
		label:__('Regular 400', 'pixmagix'),
		value:'regular'
	},{
		label:__('Regular 400 Italic', 'pixmagix'),
		value:'italic'
	},{
		label:__('Medium 500', 'pixmagix'),
		value:'500'
	},{
		label:__('Medium 500 Italic', 'pixmagix'),
		value:'500italic'
	},{
		label:__('Bold 700', 'pixmagix'),
		value:'700'
	},{
		label:__('Bold 700 Italic', 'pixmagix'),
		value:'700italic'
	},{
		label:__('Black 900', 'pixmagix'),
		value:'900'
	},{
		label:__('Black 900 Italic', 'pixmagix'),
		value:'900italic'
	}]
};

/**
 *
 * @since 1.0.0
 * @var {object}
 */

export const modals = {
	'add-guides':AddGuides,
	'font-manager':FontManager,
	'category-manager':CategoryManager,
	'import-media':ImportMedia,
	'open-project':OpenProject,
	'save-as':SaveAs,
	'export-media':ExportMedia,
	'replace-media':ReplaceMedia,
	'restore-media':RestoreMedia,
	'download-image':DownloadImage,
	'download-svg':DownloadSVG,
	'keyboard-shortcuts':KeyboardShortcuts,
	'help':Help
};

/**
 *
 * @since 1.0.0
 * @var {object}
 */

export const attachmentSizes = {
	'thumbnail':__('Thumbnail', 'pixmagix'),
	'medium':__('Medium', 'pixmagix'),
	'medium_large':__('Medium Large', 'pixmagix'),
	'full':__('Full', 'pixmagix')
};

/**
 *
 * @since 1.0.0
 * @var {array}
 */

export const propsToSaveLocalStorage = [
	'fullScreen',
	'fileFormat',
	'fileQuality',
	'fileDPI',
	'fileScale',
	'preserveAspectRatio',
	'snapToGrid',
	'snapObjects',
	'gridSize',
	'showRulers',
	'showRulerCursors',
	'cropAspectRatio',
	'pencilType',
	'pencilWidth',
	'pencilDecimate',
	'pencilDensity',
	'pencilDotWidth',
	'pencilDotWidthVariance',
	'pencilRandomOpacity',
	'pencilColor',
	'pencilShadow',
	'fillColor',
	'drawnShape',
	'pathType',
	'newText',
	'fontFamily',
	'fontSize',
	'fontStyle',
	'fontWeight',
	'textAlign',
	'lineHeight',
	'charSpacing',
	'underline',
	'fontList',
	'qrCodeText',
	'qrCodeSize',
	'qrCodePadding',
	'qrCodeECL'
];
