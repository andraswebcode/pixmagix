import {
	__
} from 'wp-i18n';

/**
 * 
 * @since 1.0.0
 * @return {array}
 */

export default ({
	layerIds,
	canvasBackground,
	mediaId,
	revisionURL,
	fullScreen,
	setEditor
}) => [{
	name:'open-project',
	label:__('Open', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'open-project')
	}
},{
	name:'save-as',
	label:__('Save as', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'save-as');
	},
	disabled:() => (!layerIds?.length && !canvasBackground)
},{
	name:'divider'
},{
	name:'export',
	label:__('Export to Media', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'export-media');
	},
	disabled:() => (!layerIds?.length && !canvasBackground)
},{
	name:'replace',
	label:__('Replace Media', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'replace-media');
	},
	disabled:() => !mediaId
},{
	name:'restore',
	label:__('Restore Media', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'restore-media');
	},
	disabled:() => !revisionURL
},{
	name:'divider'
},{
	name:'download-image',
	label:__('Download as Image', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'download-image');
	},
	disabled:() => (!layerIds?.length && !canvasBackground)
},{
	name:'download-svg',
	label:__('Download as SVG', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'download-svg');
	},
	disabled:() => (!layerIds?.length && !canvasBackground)
},{
	name:'divider'
},{
	name:'fullscreen',
	label:__('Fullscreen Mode', 'pixmagix'),
	onClick:() => {
		setEditor('fullScreen', !fullScreen);
	}
},{
	name:'divider'
},{
	name:'keyboard-shortcuts',
	label:__('Keyboard Shortcuts', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'keyboard-shortcuts');
	}
},{
	name:'help',
	label:__('Help', 'pixmagix'),
	onClick:() => {
		setEditor('activeModal', 'help');
	}
}];
