import {
	useRef,
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import{
	times
} from 'lodash';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	clamp,
	toFixed,
	getCropCSSClipPath,
	getCropShapeSize,
	absolutePositionToPixel,
	pixelToAbsolutePosition
} from './../../utils/utils.js';
import {
	MIN_CROP_SCALE,
	MAX_CROP_SCALE
} from './../../utils/constants.js';

const CanvasCrop = ({
	canvasWidth,
	canvasHeight,
	cropAspectRatio,
	cropScale,
	cropPanX,
	cropPanY,
	canvasElementWidth,
	canvasElementHeight,
	canvasZoom,
	canvasPanX,
	canvasPanY,
	setEditor
}) => {

	const ref = useRef(null);
	const [activeControl, setActiveControl] = useState('');
	const [start, setStart] = useState(null);
	const [oSize, setOSize] = useState(null); // O means original.
	const [cSize, setCSize] = useState(null); // C means current.
	const [oPan, setOPan] = useState(null);
	const [cPan, setCPan] = useState(null);
	const size = getCropShapeSize(canvasWidth, canvasHeight, cropAspectRatio, cropScale, canvasZoom);
	const position = absolutePositionToPixel({
		x:canvasWidth / 2 + cropPanX,
		y:canvasHeight / 2 + cropPanY
	},{
		x:canvasWidth,
		y:canvasHeight
	},{
		x:canvasElementWidth,
		y:canvasElementHeight
	},{
		x:canvasPanX,
		y:canvasPanY
	}, canvasZoom);
	const clipPath = getCropCSSClipPath(cSize || size, cPan || position, {
		x:canvasElementWidth,
		y:canvasElementHeight
	});
	const controls = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br'];
	const onMouseDown = e => {
		e.preventDefault();
		if (!ref?.current || !e.target?.dataset?.control){
			return;
		}
		const {
			width,
			height
		} = ref.current.getBoundingClientRect();
		const {
			left,
			top
		} = getComputedStyle(ref.current);
		const {
			control
		} = e.target.dataset;
		batch(() => {
			setActiveControl(control);
			setStart({
				x:e.clientX,
				y:e.clientY
			});
			if (control === 'pan'){
				setOPan({
					x:toFixed(left),
					y:toFixed(top)
				});
			} else {
				setOSize({
					x:width,
					y:height
				});
			}
		});
	};
	const onMouseMove = e => {
		if (start){
			let dist, distX, distY;
			switch (activeControl){
				case 'tl':
				distX = e.clientX - start.x;
				distY = e.clientY - start.y;
				setCSize(getCropShapeSize(oSize.x - distX * 2, oSize.y - distY * 2, cropAspectRatio));
				break;
				case 'tm':
				dist = e.clientY - start.y;
				setCSize(getCropShapeSize(Infinity, oSize.y - dist * 2, cropAspectRatio));
				break;
				case 'tr':
				distX = e.clientX - start.x;
				distY = e.clientY - start.y;
				setCSize(getCropShapeSize(oSize.x + distX * 2, oSize.y - distY * 2, cropAspectRatio));
				break;
				case 'ml':
				dist = e.clientX - start.x;
				setCSize(getCropShapeSize(oSize.x - dist * 2, Infinity, cropAspectRatio));
				break;
				case 'mr':
				dist = e.clientX - start.x;
				setCSize(getCropShapeSize(oSize.x + dist * 2, Infinity, cropAspectRatio));
				break;
				case 'bl':
				distX = e.clientX - start.x;
				distY = e.clientY - start.y;
				setCSize(getCropShapeSize(oSize.x - distX * 2, oSize.y + distY * 2, cropAspectRatio));
				break;
				case 'bm':
				dist = e.clientY - start.y;
				setCSize(getCropShapeSize(Infinity, oSize.y + dist * 2, cropAspectRatio));
				break;
				case 'br':
				distX = e.clientX - start.x;
				distY = e.clientY - start.y;
				setCSize(getCropShapeSize(oSize.x + distX * 2, oSize.y + distY * 2, cropAspectRatio));
				break;
				case 'pan':
				distX = e.clientX - start.x;
				distY = e.clientY - start.y;
				setCPan({
					x:oPan.x + distX,
					y:oPan.y + distY
				});
				break;
				default:
				break;
			}
		}
	};
	const onMouseUp = () => {
		batch(() => {
			if (activeControl === 'pan' && cPan){
				setEditor({
					cropPanX:cropPanX + (cPan.x - oPan.x) / canvasZoom,
					cropPanY:cropPanY + (cPan.y - oPan.y) / canvasZoom
				});
			} else {
				const scale = cSize?.x / oSize?.x;
				if (scale){
					setEditor('cropScale', clamp(scale * cropScale, MIN_CROP_SCALE, MAX_CROP_SCALE));
				}
			}
			setActiveControl('');
			setStart(null);
			setOSize(null);
			setCSize(null);
			setOPan(null);
			setCPan(null);
		});
	};

	return (
		<div
			className='pixmagix-canvas__crop'
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp} >
			<div
				className='pixmagix-canvas__crop-background'
				style={{
					clipPath
				}} />
			<div
				ref={ref}
				className='pixmagix-canvas__crop-rect'
				data-control='pan'
				style={{
					width:cSize ? cSize.x : size.x,
					height:cSize ? cSize.y : size.y,
					left:cPan ? cPan.x : position.x,
					top:cPan ? cPan.y : position.y
				}} >
				{times(4, i => (
					<span
						key={i}
						className={`pixmagix-canvas__crop-guide pixmagix-canvas__crop-guide-${i}`} />
				))}
				{controls.map(name => (
					<span
						key={name}
						className={`pixmagix-canvas__crop-control pixmagix-canvas__crop-control-${name}`}
						data-control={name} />
				))}
			</div>
		</div>
	);

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	cropAspectRatio:state.editor.cropAspectRatio,
	cropScale:state.editor.cropScale,
	cropPanX:state.editor.cropPanX,
	cropPanY:state.editor.cropPanY,
	canvasElementWidth:state.editor.canvasElementWidth,
	canvasElementHeight:state.editor.canvasElementHeight,
	canvasZoom:state.editor.canvasZoom,
	canvasPanX:state.editor.canvasPanX,
	canvasPanY:state.editor.canvasPanY
}),{
	setEditor
})(CanvasCrop);
