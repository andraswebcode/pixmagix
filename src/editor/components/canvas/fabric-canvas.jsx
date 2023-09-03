import {
	Component,
	createRef
} from 'react';
import {
	connect,
	batch
} from 'react-redux';
import {
	Rect,
	util
} from 'fabric';
import {
	throttle,
	debounce,
	difference,
	reduce,
	map,
	isEqual
} from 'lodash';

import Canvas from './../../canvas/class-canvas.js';
import {
	PencilBrush,
	CircleBrush,
	SprayBrush
} from './../../canvas/class-brushes.js';
import ShapeBrush from './../../canvas/class-brush-shape.js';
import PathBrush from './../../canvas/class-brush-path.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	addLayer,
	setLayerProps
} from './../../redux/actions-data.js';
import {
	isAround,
	toFixed,
	getFitZoom,
	createLayerObject
} from './../../utils/utils.js';
import {
	PREVIEW_IMAGE_MAX_WIDTH,
	TARGET_FIND_TOLERANCE
} from './../../utils/constants.js';

class FabricCanvas extends Component {

	/**
	 * 
	 * @since 1.0.0
	 */

	constructor(){
		super(...arguments);
		this._containerRef = createRef();
		this._updateThumbnail = debounce(this._updateThumbnail.bind(this), 800);
		this._updateCanvasElementSize = this._updateCanvasElementSize.bind(this);
		this._createImageDataURL = debounce(this._createImageDataURL.bind(this), 40);
		this._createSVGString = debounce(this._createSVGString.bind(this), 40);
		this._pickCursorPosition = throttle(this._pickCursorPosition.bind(this), 40);
		this._onPathCreated = this._onPathCreated.bind(this);
		this._onObjectSelection = this._onObjectSelection.bind(this);
		this._onObjectModified = this._onObjectModified.bind(this);
		this._onObjectMoving = this._onObjectMoving.bind(this);
		this._onTextChanged = debounce(this._onTextChanged.bind(this), 400);
	}

	/**
	 * 
	 * @since 1.0.0
	 */

	componentDidMount(){

		const {
			canvasWidth,
			canvasHeight,
			canvasBackground,
			layerIds,
			layers,
			setEditor
		} = this.props;
		const {
			width,
			height
		} = this._getCanvasElementSize();

		this._fabricCanvas = new Canvas('pixmagix_canvas'); window._fabricCanvas = this._fabricCanvas;
		this._fabricCanvas.loadFromJSON({
			backgroundColor:canvasBackground,
			clipPath:new Rect({
				top:0,
				left:0,
				width:canvasWidth,
				height:canvasHeight,
				originX:'left',
				originY:'top'
			}),
			objects:layerIds.map(id => layers[id])
		});

		setEditor({
			canvasElementWidth:width,
			canvasElementHeight:height,
			canvasZoom:getFitZoom(canvasWidth, canvasHeight, width, height)
		});

		// Set up events.
		this._fabricCanvas.on('mouse:move', this._pickCursorPosition);
		this._fabricCanvas.on('path:created', this._onPathCreated);
		this._fabricCanvas.on('selection:created', this._onObjectSelection);
		this._fabricCanvas.on('selection:updated', this._onObjectSelection);
		this._fabricCanvas.on('selection:cleared', this._onObjectSelection);
		this._fabricCanvas.on('object:modified', this._onObjectModified);
		this._fabricCanvas.on('object:moving', this._onObjectMoving);
		this._fabricCanvas.on('text:changed', this._onTextChanged);

		window.addEventListener('resize', this._updateCanvasElementSize);
		document.getElementById('collapse-menu')?.addEventListener('click', this._updateCanvasElementSize);

	}

	/**
	 * 
	 * @since 1.0.0
	 */

	componentWillUnmount(){
		this._fabricCanvas?.dispose();
		window.removeEventListener('click', this._updateCanvasElementSize);
		document.getElementById('collapse-menu')?.removeEventListener('click', this._updateCanvasElementSize);
	}

	/**
	 * 
	 * @since 1.0.0
	 */

	shouldComponentUpdate(nextProps, nextState){

		const {
			isSaving,
			fullScreen,
			layerIds,
			layers,
			fileFormat,
			fileQuality,
			canvasElementWidth,
			canvasElementHeight,
			canvasWidth,
			canvasHeight,
			canvasBackground,
			canvasZoom,
			canvasPanX,
			canvasPanY,
			activeTool,
			activeLayers,
			activeModal,
			isSidebarLeftOpened,
			isSidebarRightOpened,
			showRulers,
			snapToGrid,
			gridSize,
			isDrawingMode,
			pathType,
			drawnShape,
			pencilType,
			pencilColor,
			pencilWidth,
			pencilShadow,
			pencilDecimate,
			pencilDensity,
			pencilDotWidth,
			pencilDotWidthVariance,
			pencilRandomOpacity,
			fillColor,
			preserveAspectRatio,
			svgWidth,
			svgHeight,
			setEditor
		} = nextProps;console.log(nextProps);
		const canvas = this._fabricCanvas;

		// Update project dimensions.
		if (canvasWidth !== this.props.canvasWidth || canvasHeight !== this.props.canvasHeight){
			canvas.clipPath.set({
				width:canvasWidth,
				height:canvasHeight
			});
		}

		// Set canvas dimensions.
		if (canvasElementWidth !== this.props.canvasElementWidth){
			canvas.setWidth(canvasElementWidth);
		}
		if (canvasElementHeight !== this.props.canvasElementHeight){
			canvas.setHeight(canvasElementHeight);
		}

		// Set background.
		if (!isEqual(canvasBackground, this.props.canvasBackground)){
			canvas.setBackgroundColor(canvasBackground);
		}

		// Set zoom, and pan.
		if (
			canvasZoom !== this.props.canvasZoom ||
			canvasPanX !== this.props.canvasPanX ||
			canvasPanY !== this.props.canvasPanY ||
			canvasElementWidth !== this.props.canvasElementWidth || 
			canvasElementHeight !== this.props.canvasElementHeight ||
			canvasWidth !== this.props.canvasWidth ||
			canvasHeight !== this.props.canvasHeight
		){
			const panX = (canvasElementWidth / 2) - (canvasWidth / 2 * canvasZoom) + canvasPanX;
			const panY = (canvasElementHeight / 2) - (canvasHeight / 2 * canvasZoom) + canvasPanY;
			canvas.setViewportTransform([canvasZoom, 0, 0, canvasZoom, panX, panY]);
		}

		// Set up drawing mode.
		canvas.isDrawingMode = isDrawingMode;
		// this.__freeDrawingPathAdded = !(isDrawingMode && activeTool === 'draw-path');
		if (isDrawingMode){
			if (activeTool === 'free-hand-draw'){
				canvas.freeDrawingBrush = new ((pencilType === 'circle') ? CircleBrush : (pencilType === 'spray') ? SprayBrush : PencilBrush)(canvas, {
					color:pencilColor,
					width:pencilWidth,
					shadow:pencilShadow,
					decimate:pencilDecimate,
					density:pencilDensity,
					dotWidth:pencilDotWidth,
					dotWidthVariance:pencilDotWidthVariance,
					randomOpacity:pencilRandomOpacity
				});
			} else if (activeTool === 'draw-shape'){
				canvas.freeDrawingBrush = new ShapeBrush(canvas, {
					name:drawnShape,
					color:pencilColor,
					width:pencilWidth,
					shadow:pencilShadow,
					fill:fillColor,
					gridSize:snapToGrid ? gridSize : 1
				});
			} else if (activeTool === 'draw-path'){
				const options = {
					type:pathType,
					color:pencilColor,
					width:pencilWidth,
					shadow:pencilShadow
				};
				if (canvas.freeDrawingBrush instanceof PathBrush && canvas.freeDrawingBrush.setOptions){
					canvas.freeDrawingBrush.setOptions(options);
				} else {
					canvas.freeDrawingBrush = new PathBrush(canvas, options);
				}
			}
		}

		if (
			((isDrawingMode !== this.props.isDrawingMode && !isDrawingMode) || pathType !== this.props.pathType) &&
			canvas.freeDrawingBrush instanceof PathBrush &&
			canvas.freeDrawingBrush.finalizeAndAddPath
		){
			canvas.freeDrawingBrush.finalizeAndAddPath();
		}

		// Update active layers.
		if (!isEqual(activeLayers, this.props.activeLayers)){
			canvas.setActiveObjectsByIds(activeLayers);
		}

		// Update layers list.
		if (layerIds.length !== this.props.layerIds.length){
			// Add layers.
			const addedLayers = difference(layerIds, this.props.layerIds);
			let newLayerId;
			addedLayers.forEach(id => {
				if (!layers[id] || canvas.getObjectById(id)){
					return;
				}
				canvas.add(createLayerObject(layers[id], true));
				newLayerId = id;
			});
			newLayerId && canvas.setActiveObject(canvas.getObjectById(newLayerId));
			// Remove layers.
			const removedLayers = difference(this.props.layerIds, layerIds);
			removedLayers.forEach(id => {
				const object = canvas.getObjectById(id);
				if (object){
					canvas.remove(object);
				}
			});
			// canvas.discardActiveObject();
		} else { // Just sort layers.
			if (!isEqual(layerIds, this.props.layerIds)){
				canvas.sortObjectsByIds(layerIds);
			}
		}

		// Update layers' props.
		if (!isEqual(layers, this.props.layers)){
			this._updateFabricObjectProps(map(layers));
		}

		// Update thumbnail.
		if (!isEqual(layers, this.props.layers) || !isEqual(canvasBackground, this.props.canvasBackground)){
			this._updateThumbnail();
		}

		canvas.requestRenderAll();

		// Create image data url to export.
		if (
			fileFormat !== this.props.fileFormat ||
			fileQuality !== this.props.fileQuality ||
			(
				activeModal !== this.props.activeModal &&
				(
					activeModal === 'export-media' ||
					activeModal === 'replace-media' ||
					activeModal === 'restore-media' ||
					activeModal === 'download-image'
				)
			)
		){
			this._createImageDataURL();
		}

		// Create SVG string to export.
		if (
			(activeModal !== this.props.activeModal && activeModal === 'download-svg') ||
			preserveAspectRatio !== this.props.preserveAspectRatio ||
			svgWidth !== this.props.svgWidth ||
			svgHeight !== this.props.svgHeight
		){
			this._createSVGString();
		}

		return (
			activeTool !== this.props.activeTool ||
			isSidebarLeftOpened !== this.props.isSidebarLeftOpened ||
			isSidebarRightOpened !== this.props.isSidebarRightOpened ||
			showRulers !== this.props.showRulers ||
			fullScreen !== this.props.fullScreen
		);

	}

	/**
	 *
	 * @since 1.0.0
	 */

	componentDidUpdate(prevProps, prevState){
		this._updateCanvasElementSize();
	}

	/**
	 * Returns the html5 canvas element dimensions.
	 * @since 1.0.0
	 * @access private
	 */

	_getCanvasElementSize(){

		const container = this._containerRef.current;
		const parent = container.parentElement;

		container.style.display = 'none';

		const {
			clientWidth,
			clientHeight
		} = parent;

		container.style.display = 'block';

		return {
			width:clientWidth,
			height:clientHeight
		};

	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {array} nextLayers
	 */

	_updateFabricObjectProps(nextLayers = []){

		const {
			layers
		} = this.props;
		const canvas = this._fabricCanvas;

		nextLayers.forEach(props => {
			const id = props.id;
			const layer = layers[id];
			if (isEqual(layer, props) || !layer){
				return;
			}
			const changedProps = reduce(props, (memo, value, key) => {
				if (!isEqual(value, layer[key])){
					memo[key] = value;
				}
				return memo;
			}, {});
			const object = canvas.getObjectById(id);
			object && object.set(changedProps);
		});

	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 */

	_updateCanvasElementSize(){
		const {
			width,
			height
		} = this._getCanvasElementSize();
		this.props.setEditor({
			canvasElementWidth:width,
			canvasElementHeight:height
		});
	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 */

	_updateThumbnail(){
		const {
			canvasWidth,
			canvasHeight,
			setEditor
		} = this.props;
		const canvas = this._fabricCanvas;
		const vpt = canvas.viewportTransform.slice();
		// console.time('updatePreviewURL');
		canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
		const dataURL = canvas.toDataURL({
			format:'jpeg',
			quality:1,
			top:0,
			left:0,
			width:canvasWidth,
			height:canvasHeight,
			multiplier:PREVIEW_IMAGE_MAX_WIDTH / canvasWidth
		});
		canvas.setViewportTransform(vpt);
		setEditor('thumbnail', dataURL);
		// console.timeEnd('updatePreviewURL');
	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 */

	_createImageDataURL(){
		const {
			canvasWidth,
			canvasHeight,
			fileFormat,
			fileQuality,
			setEditor
		} = this.props;
		const canvas = this._fabricCanvas;
		const vpt = canvas.viewportTransform.slice();
		const clipPath = canvas.clipPath;
		// console.time('createImageDataURL');
		canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
		canvas.clipPath = null;
		const dataURL = canvas.toDataURL({
			format:fileFormat,
			quality:fileQuality,
			top:0,
			left:0,
			width:canvasWidth,
			height:canvasHeight,
			multiplier:1
		});
		canvas.setViewportTransform(vpt);
		canvas.clipPath = clipPath;
		setEditor('imageDataURL', dataURL);
		// console.timeEnd('createImageDataURL');
	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 */

	_createSVGString(){
		const {
			canvasWidth,
			canvasHeight,
			preserveAspectRatio,
			svgWidth,
			svgHeight,
			setEditor
		} = this.props;
		const svgString = this._fabricCanvas?.toSVG({
			width:svgWidth || canvasWidth,
			height:svgHeight || canvasHeight,
			viewBox:{
				width:canvasWidth,
				height:canvasHeight
			},
			preserveAspectRatio
		});
		setEditor('svgString', svgString);
	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} options
	 */

	_pickCursorPosition({absolutePointer}){

		const {
			canvasZoom,
			canvasMode,
			showRulers,
			showRulerCursors,
			setEditor
		}= this.props;
		const {x, y} = absolutePointer;

		if (showRulers && showRulerCursors && canvasMode === 'select'){
			setEditor('rulerCursorPosition', {
				x: canvasZoom * (x + 100),
				y: canvasZoom * (y + 100)
			});
		}

	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} options
	 */

	_onPathCreated({path}){
		this.props.addLayer(path.toJSON());
	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} options
	 */

	_onObjectSelection(){

		const {
			setEditor
		} = this.props;
		const activeLayers = this._fabricCanvas.getActiveObjects().map(obj => obj.id);

		setEditor('activeLayers', activeLayers);

	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} options
	 */

	_onObjectModified({target, action}){

		const {
			setLayerProps
		} = this.props;

		if (target?.type === 'activeSelection'){
			const layersProps = reduce(target._objects, (memo, object) => {
				const matrix = object.calcTransformMatrix();
				const {
					angle,
					scaleX,
					scaleY,
					skewX,
					skewY,
					translateX,
					translateY
				} = util.qrDecompose(matrix);
				memo[object.id] = {
					left:toFixed(translateX),
					top:toFixed(translateY),
					scaleX:toFixed(scaleX),
					scaleY:toFixed(scaleY),
					skewX:toFixed(skewX),
					skewY:toFixed(skewY),
					angle:toFixed(angle)
				};
				return memo;
			}, {});
			setLayerProps(layersProps);
			return;
		}

		const {
			left,
			top,
			scaleX,
			scaleY,
			skewX,
			skewY,
			angle
		} = target;
		const newProps = {
			left:toFixed(left),
			top:toFixed(top),
			scaleX:toFixed(scaleX),
			scaleY:toFixed(scaleY),
			skewX:toFixed(skewX),
			skewY:toFixed(skewY),
			angle:toFixed(angle)
		};

		setLayerProps(target.id, newProps);

	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} options
	 */

	_onObjectMoving({target}){

		const {
			guides = [],
			canvasZoom
		} = this.props;

		if (!guides.length){
			return;
		}

		const distance = TARGET_FIND_TOLERANCE / canvasZoom;
		const {
			width,
			height
		} = target.getBoundingRect(true);
		const w2 = width / 2;
		const h2 = height / 2;
		let {
			left,
			top
		} = target;

		guides.forEach(({
			orientation,
			position
		}) => {
			if (orientation === 'vertical'){
				left = isAround(left, position, distance) ? position :
					isAround(left - w2, position, distance) ? position + w2 :
					isAround(left + w2, position, distance) ? position - w2 :
					left;
			} else {
				top = isAround(top, position, distance) ? position :
					isAround(top - h2, position, distance) ? position + h2 :
					isAround(top + h2, position, distance) ? position - h2 :
					top;
			}
		});

		target.set({
			left,
			top
		});

	}

	/**
	 *
	 * @since 1.0.0
	 * @access private
	 * @param {object} options
	 */

	_onTextChanged({target}){

		const {
			setLayerProps
		} = this.props;
		const {
			text,
			width,
			height
		} = target;

		setLayerProps(target.id, {
			text,
			width,
			height
		});

	}

	/**
	 * 
	 * @since 1.0.0
	 */

	render(){

		return (
			<div
				ref={this._containerRef}
				className='pixmagix-canvas__container' >
				<canvas
					id='pixmagix_canvas' />
			</div>
		);

	}

}

export default connect(state => ({
	isSaving:state.editor.isSaving,
	fullScreen:state.editor.fullScreen,
	fileFormat:state.editor.fileFormat,
	fileQuality:state.editor.fileQuality,
	layers:state.data.present.layers,
	layerIds:state.data.present.layerIds,
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasBackground:state.data.present.canvasBackground,
	canvasElementWidth:state.editor.canvasElementWidth,
	canvasElementHeight:state.editor.canvasElementHeight,
	canvasZoom:state.editor.canvasZoom,
	canvasPanX:state.editor.canvasPanX,
	canvasPanY:state.editor.canvasPanY,
	canvasMode:state.editor.canvasMode,
	activeTool:state.editor.activeTool,
	activeLayers:state.editor.activeLayers,
	activeModal:state.editor.activeModal,
	isSidebarLeftOpened:state.editor.isSidebarLeftOpened,
	isSidebarRightOpened:state.editor.isSidebarRightOpened,
	showRulers:state.editor.showRulers,
	showRulerCursors:state.editor.showRulerCursors,
	gridSize:state.editor.gridSize,
	snapToGrid:state.editor.snapToGrid,
	snapObjects:state.editor.snapObjects,
	isDrawingMode:state.editor.isDrawingMode,
	pathType:state.editor.pathType,
	drawnShape:state.editor.drawnShape,
	pencilType:state.editor.pencilType,
	pencilColor:state.editor.pencilColor,
	pencilWidth:state.editor.pencilWidth,
	pencilShadow:state.editor.pencilShadow,
	pencilDecimate:state.editor.pencilDecimate,
	pencilDensity:state.editor.pencilDensity,
	pencilDotWidth:state.editor.pencilDotWidth,
	pencilDotWidthVariance:state.editor.pencilDotWidthVariance,
	pencilRandomOpacity:state.editor.pencilRandomOpacity,
	fillColor:state.editor.fillColor,
	guides:state.editor.guides,
	preserveAspectRatio:state.editor.preserveAspectRatio,
	svgWidth:state.editor.svgWidth,
	svgHeight:state.editor.svgHeight
}),{
	setEditor,
	addLayer,
	setLayerProps
})(FabricCanvas);
