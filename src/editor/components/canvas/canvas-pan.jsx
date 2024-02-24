import {
	useState
} from 'react';
import {
	connect
} from 'react-redux';

import {
	setEditor
} from './../../redux/actions-editor.js';

const CanvasPan = ({
	canvasZoom,
	canvasPanX,
	canvasPanY,
	setEditor
}) => {

	const [startPoint, setStartPoint] = useState(null);
	const [startPan, setStartPan] = useState(null);

	return (
		<div
			className='pixmagix-canvas__pan'
			onMouseDown={({
				clientX,
				clientY
			}) => {
				setStartPoint({
					x:clientX,
					y:clientY
				});
				setStartPan({
					x:canvasPanX,
					y:canvasPanY
				});
			}}
			onMouseMove={({
				clientX,
				clientY
			}) => {
				if (!startPoint){
					return;
				}
				const {x, y} = startPoint;
				setEditor({
					canvasPanX:startPan.x + (clientX - x),
					canvasPanY:startPan.y + (clientY - y)
				});
			}}
			onMouseUp={() => {
				setStartPoint(null);
				setStartPan(null);
			}}
			onMouseLeave={() => {
				setStartPoint(null);
				setStartPan(null);
			}} />
	);

};

export default connect(state => ({
	canvasZoom:state.editor.canvasZoom,
	canvasPanX:state.editor.canvasPanX,
	canvasPanY:state.editor.canvasPanY
}),{
	setEditor
})(CanvasPan);
