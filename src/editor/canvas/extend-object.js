import {
	Object as FabricObject,
	Gradient,
	util
} from 'fabric';
import {
	isUndefined
} from 'lodash';

import {
	BORDER_COLOR,
	BORDER_DASH_ARRAY,
	BORDER_OPACITY_WHEN_MOVING,
	CORNER_SIZE
} from './../utils/constants.js';
import {
	createUniqueId,
	createLayerObject
} from './../utils/utils.js';
import {
	shapeTypes
} from './../utils/lists.js';
import ControlSwitchControl from './class-control-switch.js';

const _toObject = FabricObject.prototype.toObject;
const __set = FabricObject.prototype._set;
const _getSvgStyles = FabricObject.prototype.getSvgStyles;

/**
 * 
 * @since 1.0.0
 */

util.object.extend(FabricObject.prototype, {

	/**
	 * Name of layer inside editor.
	 * @since 1.0.0
	 * @var {string}
	 */

	name:'',

	/**
	 * 
	 * @since 1.0.0
	 * @var {string}
	 */

	originX:'center',

	/**
	 * 
	 * @since 1.0.0
	 * @var {string}
	 */

	originY:'center',

	/**
	 * 
	 * @since 1.0.0
	 */

	borderColor:BORDER_COLOR,

	/**
	 * 
	 * @since 1.0.0
	 */

	borderDashArray:BORDER_DASH_ARRAY,

	/**
	 * 
	 * @since 1.0.0
	 */

	borderOpacityWhenMoving:BORDER_OPACITY_WHEN_MOVING,

	/**
	 * 
	 * @since 1.0.0
	 */

	cornerSize:CORNER_SIZE,

	/**
	 * 
	 * @since 1.0.0
	 */

	cornerStyle:'circle',

	/**
	 * 
	 * @since 1.0.0
	 */

	transparentCorners:false,

	/**
	 * 
	 * @since 1.0.0
	 */

	cornerColor:BORDER_COLOR,

	/**
	 * For separating the default transform controls (created by fabric.js developers),
	 * from our modify controls, so that we can easily switch between these.
	 * @since 1.6.0
	 */

	transformControls:FabricObject.prototype.controls,

	/**
	 * Hold the modify controls. (E.g.: path controls, image crop controls, etc.)
	 * @since 1.6.0
	 */

	modifyControls:{},

	/**
	 * Holds the control switch control class.
	 * @since 1.6.0
	 */

	controlSwitchControl:null,

	/**
	 *
	 * @since 1.6.0
	 */

	hasModifyControls:false,

	/**
	 *
	 * @since 1.6.0
	 */

	modifyControlsIsActive:false,

	/**
	 * Constructor.
	 * @since 1.0.0
	 * @param {object} options
	 */

	initialize(options){
		if (options){
			this.setOptions(options);
		}
		if (!this.id || ('' + this.id).indexOf('pixmagix') !== 0){
			this.id = createUniqueId();
		}
		if (!this.name){
			this.name = shapeTypes[this.type]?.label || '';
		}
		if (!this.selectable){
			this.hoverCursor = 'default';
		}
		this.controlSwitchControl = new ControlSwitchControl({
			icon:this.modifyIcon
		});
		this.createModifyControls();
		this.switchControls();
	},

	/**
	 *
	 * @since 1.6.0
	 */

	createModifyControls(){},

	/**
	 *
	 * @since 1.6.0
	 * @param {boolean|undefined} transformControls
	 */

	switchControls(transformControls){

		if (!this.hasModifyControls){
			return;
		}

		const isModify = !isUndefined(transformControls) ? !transformControls : this.modifyControlsIsActive;

		this.controls = {
			...(isModify ? this.modifyControls : this.transformControls),
			csc:this.controlSwitchControl
		};

		this.modifyControlsIsActive = transformControls || !this.modifyControlsIsActive;
		this.objectCaching = this.modifyControlsIsActive;
		this.hasBorders = this.modifyControlsIsActive;
		this.lockMovementX = !this.modifyControlsIsActive;
		this.lockMovementY = !this.modifyControlsIsActive;
		this.hoverCursor = !this.modifyControlsIsActive ? 'default' : null;
		this.canvas?.requestRenderAll();

	},

	/**
	 * Extends Object.prototype.toObject()
	 * @since 1.0.0
	 * @param {array} propertiesToInclude
	 * @return {object}
	 */

	toObject(propertiesToInclude = []){
		const object = _toObject.call(this, ['id', 'name', 'selectable'].concat(propertiesToInclude));
		if (!this.clipPath){
			object.clipPath = null;
		}
		return object;
	},

	/**
	 * Extends Object.prototype.getSvgStyles()
	 * @since 1.1.0
	 * @param {array} skipShadow
	 * @return {string}
	 */

	getSvgStyles(skipShadow){
		const styles = _getSvgStyles.call(this, skipShadow);
		return styles.replace(/SVGID_/g, '');
	},

	/**
	 *
	 * @since 1.1.0
	 * @return {string}
	 */

	getSvgFilter(){
		const {
			id
		} = this.shadow || {};
		return id ? `filter:url(#${id});` : '';
	},

	/**
	 *
	 * @since 1.1.0
	 * @param {string} key
	 * @param {mixed} value
	 */

	_set(key, value){
		__set.call(this, key, value);
		if ((key === 'fill' || key === 'stroke') && value?.type){
			if (value.type === 'linear' || value.type === 'radial'){
				this[key] = new Gradient(value);
			}
		} else if (key === 'clipPath'){
			this.clipPath = value ? createLayerObject(value, true) : null;
		}
		return this;
	}

});
