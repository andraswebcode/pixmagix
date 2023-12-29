import {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	new_url
} from 'editor-globals';
import {
	isFunction,
	isObject,
	find as _find
} from 'lodash';

import {
	addQueryArgs
} from './../utils/utils.js';
import {
	propsToSaveLocalStorage
} from './../utils/lists.js';
import {
	setEditor,
	sendNotice
} from './../redux/actions-editor.js';
import {
	undo,
	redo,
	setData,
	addLayer,
	removeLayer,
	replaceLayer,
	setLayerProps
} from './../redux/actions-data.js';
import getRulerMenu from './../utils/ruler-menu.js';
import getOptionsMenu from './../utils/options-menu.js';
import getLayerActions from './../utils/layer-actions.js';
import save from './../utils/save.js';
import {
	applyFilters
} from './../../utils/hooks.js';

class Globals extends Component {

	/**
	 * Constructor.
	 * @since 1.0.0
	 */

	constructor(){
		super(...arguments);
		this._onBeforeUnload = this._onBeforeUnload.bind(this);
		this._onKeyDown = this._onKeyDown.bind(this);
		if (this.props.fullScreen){
			document.body.classList.add('pixmagix-fullscreen');
		}
	}

	/**
	 *
	 * @since 1.0.0
	 */

	componentDidMount(){
		window.addEventListener('beforeunload', this._onBeforeUnload);
		window.addEventListener('keydown', this._onKeyDown);
	}

	/**
	 *
	 * @since 1.0.0
	 */

	componentWillUnmount(){
		window.removeEventListener('beforeunload', this._onBeforeUnload);
		window.removeEventListener('keydown', this._onKeyDown);
	}

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} nextProps
	 */

	shouldComponentUpdate(nextProps){

		const {
			projectId,
			fullScreen
		} = nextProps;

		if (projectId !== this.props.projectId && window.history?.pushState){
			window.history.pushState({}, '', addQueryArgs({
				id:projectId
			}, new_url));
		}

		if (fullScreen !== this.props.fullScreen){
			const fn = fullScreen ? 'add' : 'remove';
			document.body.classList[fn]('pixmagix-fullscreen');
		}

		return false;

	}

	/**
	 *
	 * @since 1.0.0
	 */

	_onBeforeUnload(e){

		if (window.localStorage){
			const editor = {};
			propsToSaveLocalStorage.forEach(prop => {
				editor[prop] = this.props[prop];
			});
			window.localStorage.setItem('pixmagixEditor', JSON.stringify(editor));
		}

	}

	/**
	 *
	 * @since 1.0.0
	 */

	_onKeyDown(e){

		const {
			activeTool,
			isDrawingMode,
			setEditor,
			undo,
			redo
		} = this.props;
		const hasFocusedInput = (
			document.activeElement?.tagName?.toLowerCase() === 'input' ||
			document.activeElement?.tagName?.toLowerCase() === 'textarea'
		);
		const isCtrlPressed = (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
		const isCtrlShiftPressed = (e.ctrlKey || e.metaKey) && e.shiftKey && !e.altKey;
		const isShiftAltPressed = !(e.ctrlKey || e.metaKey) && e.shiftKey && e.altKey;
		const keyMaps = applyFilters('editor.keyboardShortcuts', {
			13:{ // Enter
				fn:() => (activeTool?.indexOf('draw') >= 0) && setEditor('isDrawingMode', !isDrawingMode)
			},
			27:{ // Escape
				fn:() => setEditor('activeLayers', [])
			},
			37:{ // Arrow Left
				//
			},
			38:{ // Arrow Up
				ctrl:{
					menu:'layer',
					name:'move-up'
				}
			},
			39:{ // Arrow Right
				//
			},
			40:{ // Arrow Down
				ctrl:{
					menu:'layer',
					name:'move-down'
				}
			},
			46:{ // Delete
				fn:{
					menu:'layer',
					name:'remove'
				}
			},
			67:{ // C
				fn:{
					activeTool:'crop'
				},
				ctrlShift:{
					menu:'ruler',
					name:'show-cursors'
				}
			},
			68:{ // D
				fn:{
					activeTool:'free-hand-draw'
				},
				ctrl:{
					menu:'layer',
					name:'duplicate'
				}
			},
			69:{ // E
				fn:{
					activeTool:'icon'
				},
				ctrlShift:{
					menu:'options',
					name:'export'
				}
			},
			70:{ // F
				ctrlShift:{
					menu:'options',
					name:'fullscreen'
				}
			},
			71:{ // G
				ctrl:{
					menu:'layer',
					name:'group'
				},
				ctrlShift:{
					menu:'ruler',
					name:'clear-guides'
				}
			},
			72:{ // H
				ctrlShift:{
					menu:'options',
					name:'help'
				}
			},
			73:{ // I
				fn:{
					activeTool:'image'
				},
				ctrlShift:{
					menu:'options',
					name:'download-image'
				}
			},
			75:{ // K
				ctrlShift:{
					menu:'options',
					name:'keyboard-shortcuts'
				}
			},
			76:{ // L
				ctrl:{
					menu:'layer',
					name:'lock'
				}
			},
			78:{ // N
				shiftAlt:() => {
					window.location.replace(new_url);
				}
			},
			79:{ // O
				ctrlShift:{
					menu:'options',
					name:'open-project'
				}
			},
			80:{ // P
				fn:{
					activeTool:'draw-path'
				}
			},
			81:{ // Q
				fn:{
					activeTool:'qrcode'
				}
			},
			82:{ // R
				ctrlShift:{
					menu:'ruler',
					name:'show-rulers'
				}
			},
			83:{ // S
				fn:{
					activeTool:'draw-shape'
				},
				ctrl:() => save(this.props),
				ctrlShift:{
					menu:'options',
					name:'save-as'
				}
			},
			84:{ // T
				fn:{
					activeTool:'text'
				}
			},
			86:{ // V
				ctrl:{
					menu:'layer',
					name:'visible'
				},
				ctrlShift:{
					menu:'options',
					name:'download-svg'
				}
			},
			90:{ // Z
				ctrl:() => undo(),
				ctrlShift:() => redo()
			}
		}, this.props);

		if (keyMaps[e.keyCode] && !hasFocusedInput){
			e.preventDefault();
			// e.stopPropagation();
			// e.returnValue=false;
			const action = isCtrlPressed ? 'ctrl' : isCtrlShiftPressed ? 'ctrlShift' : isShiftAltPressed ? 'shiftAlt' : 'fn';
			const object = keyMaps[e.keyCode][action];
			if (isFunction(object)){
				object();
			} else if (isObject(object)){
				if (object.activeTool){
					setEditor({
						activeTool:(activeTool === object.activeTool) ? '' : object.activeTool,
						isSidebarLeftOpened:true,
						isDrawingMode:false
					});
				} else if (object.menu){
					const menuMaps = {
						'ruler':getRulerMenu,
						'options':getOptionsMenu,
						'layer':getLayerActions
					};
					const menu = menuMaps[object.menu]?.(this.props);
					const item = _find(menu, {
						name:object.name
					});
					if (item && !item.disabled?.()){
						item.onClick();
					}
				}
			}
		}

	}

	/**
	 * 
	 * @since 1.0.0
	 */

	render(){
		return null;
	}

}

export default connect(state => {

	const output = {
		layers:state.data.present.layers,
		layerIds:state.data.present.layerIds,
		canvasWidth:state.data.present.canvasWidth,
		canvasHeight:state.data.present.canvasHeight,
		canvasBackground:state.data.present.canvasBackground
	};
	const props = [
		'projectId',
		'projectName',
		'projectDescription',
		'projectAuthor',
		'projectCategory',
		'projectStatus',
		'thumbnail',
		'preview',
		'activeTool',
		'isDrawingMode',
		'showRulers',
		'showRulerCursors',
		'snapObjects',
		'snapToGrid',
		'guides',
		'lockGuides',
		'mediaId',
		'revisionURL',
		'fullScreen',
		'activeLayers'
	];

	props.forEach(prop => {
		output[prop] = state.editor[prop];
	});

	propsToSaveLocalStorage.forEach(prop => {
		output[prop] = state.editor[prop];
	});

	return output;

},{
	setEditor,
	sendNotice,
	undo,
	redo,
	setData,
	addLayer,
	removeLayer,
	replaceLayer,
	setLayerProps
})(Globals);
