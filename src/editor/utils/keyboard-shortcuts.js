import {
	__
} from 'wp-i18n';

export default [{
	title:__('Globals', 'pixmagix'),
	description:__('', 'pixmagix'),
	items:[{
		combination:'Shift + Alt + N',
		description:__('Open New Project', 'pixmagix')
	},{
		combination:'Ctrl + S',
		description:__('Save Project', 'pixmagix')
	},{
		combination:'Ctrl + Z',
		description:__('Undo', 'pixmagix')
	},{
		combination:'Ctrl + Shift + Z',
		description:__('Redo', 'pixmagix')
	}]
},{
	title:__('Toolbar', 'pixmagix'),
	description:__('', 'pixmagix'),
	items:[{
		combination:'I',
		description:__('Add Image', 'pixmagix')
	},{
		combination:'T',
		description:__('Add Text', 'pixmagix')
	},{
		combination:'E',
		description:__('Add Icon', 'pixmagix')
	},{
		combination:'Q',
		description:__('Add QR Code', 'pixmagix')
	},{
		combination:'S',
		description:__('Draw Shape', 'pixmagix')
	},{
		combination:'D',
		description:__('Free-Hand Draw', 'pixmagix')
	},{
		combination:'P',
		description:__('Draw Path', 'pixmagix')
	},{
		combination:'C',
		description:__('Crop Canvas', 'pixmagix')
	}]
},{
	title:__('Ruler Menu', 'pixmagix'),
	items:[{
		combination:'Ctrl + Shift + R',
		description:__('Toggle Rulers', 'pixmagix')
	},{
		combination:'Ctrl + Shift + C',
		description:__('Toggle Cursors', 'pixmagix')
	},{
		combination:'Ctrl + Shift + G',
		description:__('Clear Guides', 'pixmagix')
	}]
},{
	title:__('Options Menu', 'pixmagix'),
	items:[{
		combination:'Ctrl + Shift + O',
		description:__('Open Project', 'pixmagix')
	},{
		combination:'Ctrl + Shift + S',
		description:__('Save Project as', 'pixmagix')
	},{
		combination:'Ctrl + Shift + E',
		description:__('Export Image to Media', 'pixmagix')
	},{
		combination:'Ctrl + Shift + I',
		description:__('Download as Image', 'pixmagix')
	},{
		combination:'Ctrl + Shift + V',
		description:__('Download as SVG', 'pixmagix')
	},{
		combination:'Ctrl + Shift + F',
		description:__('Toggle Fullscreen Mode', 'pixmagix')
	},{
		combination:'Ctrl + Shift + K',
		description:__('Open This Modal', 'pixmagix')
	},{
		combination:'Ctrl + Shift + H',
		description:__('Open Help Modal', 'pixmagix')
	}]
},{
	title:__('Layer Actions', 'pixmagix'),
	items:[{
		combination:'Ctrl + ↑',
		description:__('Move Layer up in Stack', 'pixmagix')
	},{
		combination:'Ctrl + ↓',
		description:__('Move Layer Down in Stack', 'pixmagix')
	},{
		combination:'Ctrl + L',
		description:__('Lock/Unlock Layer', 'pixmagix')
	},{
		combination:'Ctrl + V',
		description:__('Toggle Layer is Visible', 'pixmagix')
	},{
		combination:'Ctrl + D',
		description:__('Duplicate Layer', 'pixmagix')
	},{
		combination:'Ctrl + G',
		description:__('Group/Ungroup Layers', 'pixmagix')
	},{
		combination:'Delete',
		description:__('Remove Layer', 'pixmagix')
	}]
},{
	title:__('Selection', 'pixmagix'),
	items:[{
		combination:'Ctrl',
		description:__('Multiselection', 'pixmagix')
	},{
		combination:'Escape',
		description:__('Clear Selection', 'pixmagix')
	}]
},{
	title:__('Drawing', 'pixmagix'),
	items:[{
		combination:'Enter',
		description:__('Start/Stop Drawing', 'pixmagix')
	},{
		combination:'Shift',
		description:__('Draw a Straight Line (Only When Using Pencil Brush)', 'pixmagix')
	},{
		combination:'Ctrl',
		description:__('Kepp Aspect Ratio While Drawing Shape', 'pixmagix')
	}]
}];
