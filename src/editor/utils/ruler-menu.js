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
	snapToGrid,
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
},{
	name:'clear-guides',
	label:__('Clear Guides', 'pixmagix'),
	onClick:() => setEditor('guides', []),
	disabled:() => !guides?.length
}/*,{
	name:'snap-objects',
	label:snapObjects ? __('Turn Off Objects Snapping', 'pixmagix') : __('Snap Objects', 'pixmagix'),
	onClick:() => setEditor('snapObjects', !snapObjects)
},{
	name:'snap-grid',
	label:snapToGrid ? __('Turn Off Snap to Grid', 'pixmagix') : __('Snap to Grid', 'pixmagix'),
	onClick:() => setEditor('snapToGrid', !snapToGrid)
}*/];
