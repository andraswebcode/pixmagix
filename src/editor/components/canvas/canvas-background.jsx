import {
	connect
} from 'react-redux';

const CanvasBackground = ({
	canvasWidth,
	canvasHeight,
	canvasElementWidth,
	canvasElementHeight,
	canvasZoom,
	canvasPanX,
	canvasPanY
}) => {

	const style = {
		width:canvasWidth * canvasZoom,
		height:canvasHeight * canvasZoom,
		left:(canvasElementWidth / 2) - (canvasWidth / 2 * canvasZoom) + canvasPanX,
		top:(canvasElementHeight / 2) - (canvasHeight / 2 * canvasZoom) + canvasPanY,
		backgroundSize:canvasZoom * 20
	};

	return (
		<div
			className='pixmagix-canvas__background'
			style={style} />
	);

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasElementWidth:state.editor.canvasElementWidth,
	canvasElementHeight:state.editor.canvasElementHeight,
	canvasZoom:state.editor.canvasZoom,
	canvasPanX:state.editor.canvasPanX,
	canvasPanY:state.editor.canvasPanY
}))(CanvasBackground);
