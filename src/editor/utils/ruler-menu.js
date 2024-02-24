import {
	__
} from 'wp-i18n';

/**
 * 
 * @since 1.0.0
 * @return {array}
 */

export default ({
	showRulers,
	showRulerCursors,
	snapObjects,
	lockGuides,
	guides,
	setEditor
}) => [{
	name:'show-rulers',
	label:showRulers ? __('Hide Rulers', 'pixmagix') : __('Show Rulers', 'pixmagix'),
	onClick:() => setEditor('showRulers', !showRulers)
},{
	name:'show-cursors',
	label:showRulerCursors ? __('Hide Cursors', 'pixmagix') : __('Show Cursors', 'pixmagix'),
	onClick:() => setEditor('showRulerCursors', !showRulerCursors),
	disabled:() => !showRulers
}/*,{
	name:'snap-objects',
	label:snapObjects ? __('Turn Off Objects Snapping', 'pixmagix') : __('Snap Objects', 'pixmagix'),
	onClick:() => setEditor('snapObjects', !snapObjects)
}*/,{
	name:'add-guides',
	label:__('Add Guides', 'pixmagix'),
	onClick:() => setEditor('activeModal', 'add-guides'),
	disabled:() => !showRulers
},{
	name:'lock-guides',
	label:lockGuides ? __('Unlock Guides', 'pixmagix') : __('Lock Guides', 'pixmagix'),
	onClick:() => setEditor('lockGuides', !lockGuides),
	disabled:() => !showRulers
},{
	name:'clear-guides',
	label:__('Clear Guides', 'pixmagix'),
	onClick:() => setEditor({
		guides:[],
		lockGuides:false
	}),
	disabled:() => !guides?.length
}];
