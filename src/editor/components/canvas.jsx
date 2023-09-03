import {
	Fragment,
	useState,
	useRef,
	useEffect
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	find as _find
} from 'lodash';

import RulerMenu from './canvas/ruler-menu.jsx';
import Ruler from './canvas/ruler.jsx';
import Guide from './canvas/guide.jsx';
import CanvasBackground from './canvas/canvas-background.jsx';
import FabricCanvas from './canvas/fabric-canvas.jsx';
import CanvasPan from './canvas/canvas-pan.jsx';
import CanvasCrop from './canvas/canvas-crop.jsx';
import Footer from './footer.jsx';
import {
	clamp,
	toFixed,
	createUniqueId,
	pixelToAbsolutePosition
} from './../utils/utils.js'
import {
	RULER_SIZE,
	CANVAS_MIN_ZOOM,
	CANVAS_MAX_ZOOM
} from './../utils/constants.js';
import {
	setEditor,
	createGuide,
	updateGuide
} from './../redux/actions-editor.js';

const Canvas = ({
	canvasMode,
	activeTool,
	showRulers,
	guides = [],
	canvasWidth,
	canvasHeight,
	canvasElementWidth,
	canvasElementHeight,
	canvasPanX,
	canvasPanY,
	canvasZoom,
	cropScale,
	setEditor,
	createGuide,
	updateGuide
}) => {

	const ref = useRef(null);
	const [draggedGuideId, setDraggedGuideId] = useState('');
	const _getPosition = (e, orientation) => {
		if (!ref?.current){
			return 0;
		}
		const {
			left,
			top
		} = ref.current.getBoundingClientRect();
		const isVertical = (orientation === 'vertical');
		const point = (isVertical ? e.clientX - left : e.clientY - top) - RULER_SIZE;
		const pos = pixelToAbsolutePosition(point, {
			x:canvasWidth,
			y:canvasHeight
		}, {
			x:canvasElementWidth,
			y:canvasElementHeight
		}, {
			x:canvasPanX,
			y:canvasPanY
		}, canvasZoom);
		return Math.round(isVertical ? pos.x : pos.y);
	};
	const onMouseDown = e => {
		if (!ref?.current){
			return;
		}
		const {
			rulerOrientation,
			guideOrientation,
			guideId
		} = e.target.dataset;
		if (rulerOrientation || guideOrientation){
			e.preventDefault();
		}
		if (rulerOrientation){
			batch(() => {
				const id = createUniqueId();
				const pos = _getPosition(e, rulerOrientation);
				createGuide(id, rulerOrientation, pos);
				setDraggedGuideId(id);
			});

		} else if (guideOrientation && guideId){
			setDraggedGuideId(guideId);
		}
	};
	const onMouseMove = e => {
		if (!draggedGuideId){
			return;
		}
		const guideOrientation = _find(guides, {
			id:draggedGuideId
		})?.orientation;
		const pos = _getPosition(e, guideOrientation);
		updateGuide(draggedGuideId, pos);
	};
	const onMouseUp = e => {
		setDraggedGuideId('');
	};

	useEffect(() => {
		const onWheel = e => {
			e.preventDefault();
			const newZoom = clamp(canvasZoom * 0.999 ** e.deltaY, CANVAS_MIN_ZOOM / 100, CANVAS_MAX_ZOOM / 100);
			setEditor('canvasZoom', toFixed(newZoom));
		};
		ref?.current?.addEventListener('wheel', onWheel);
		return () => {
			ref?.current?.removeEventListener('wheel', onWheel);
		}
	});

	return (
		<div
			ref={ref}
			className='pixmagix-canvas'
			style={{
				paddingTop:showRulers ? RULER_SIZE : 0,
				paddingLeft:showRulers ? RULER_SIZE : 0
			}}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp} >
			<RulerMenu />
			{showRulers && (
				<Fragment>
					<Ruler orientation='horizontal' />
					<Ruler orientation='vertical' />
					{guides.map(guide => (
						<Guide
							key={guide.id}
							{...guide} />
					))}
				</Fragment>
			)}
			<div className='pixmagix-canvas__wrapper'>
				<CanvasBackground />
				<FabricCanvas />
				{(activeTool === 'crop') && (
					<CanvasCrop key={cropScale} />
				)}
				{(canvasMode === 'hand') && (
					<CanvasPan />
				)}
			</div>
			<Footer />
		</div>
	);

};

export default connect(state => ({
	canvasMode:state.editor.canvasMode,
	activeTool:state.editor.activeTool,
	showRulers:state.editor.showRulers,
	guides:state.editor.guides,
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasElementWidth:state.editor.canvasElementWidth,
	canvasElementHeight:state.editor.canvasElementHeight,
	canvasPanX:state.editor.canvasPanX,
	canvasPanY:state.editor.canvasPanY,
	canvasZoom:state.editor.canvasZoom,
	cropScale:state.editor.cropScale
}),{
	setEditor,
	createGuide,
	updateGuide
})(Canvas);
