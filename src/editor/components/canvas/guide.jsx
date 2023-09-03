import {
	connect
} from 'react-redux';
import cn from 'classnames';

import {
	absolutePositionToPixel
} from './../../utils/utils.js';
import {
	RULER_SIZE
} from './../../utils/constants.js';

const Guide = ({
	id,
	orientation,
	position,
	canvasWidth,
	canvasHeight,
	canvasElementWidth,
	canvasElementHeight,
	canvasPanX,
	canvasPanY,
	canvasZoom
}) => {

	const style = {};
	const pix = absolutePositionToPixel(position, {
		x:canvasWidth,
		y:canvasHeight
	}, {
		x:canvasElementWidth,
		y:canvasElementHeight
	}, {
		x:canvasPanX,
		y:canvasPanY
	}, canvasZoom);

	if (orientation === 'vertical'){
		style.left = pix.x + RULER_SIZE;
	} else {
		style.top = pix.y + RULER_SIZE;
	}

	return (
		<div
			className={cn('pixmagix-canvas__guide', {
				[`pixmagix-canvas__guide-${orientation}`]:orientation
			})}
			data-guide-orientation={orientation}
			data-guide-id={id}
			style={style} >
			<span className='pixmagix-canvas__guide-label'>
				{position}
			</span>
		</div>
	);

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasElementWidth:state.editor.canvasElementWidth,
	canvasElementHeight:state.editor.canvasElementHeight,
	canvasPanX:state.editor.canvasPanX,
	canvasPanY:state.editor.canvasPanY,
	canvasZoom:state.editor.canvasZoom
}))(Guide);
