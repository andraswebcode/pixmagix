import {
	connect
} from 'react-redux';
import {
	times
} from 'lodash';
import cn from 'classnames';

import RulerCursor from './ruler-cursor.jsx';

const Ruler = ({
	orientation,
	canvasWidth,
	canvasHeight,
	canvasZoom,
	canvasPanX,
	canvasPanY,
	canvasElementWidth,
	canvasElementHeight,
	showRulerCursors,
	activeTool,
	canvasMode
}) => {

	const pixels = orientation === 'horizontal' ? canvasWidth : canvasHeight;
	const ratio = 100;
	const time = Math.round(pixels / ratio) + 2;
	const notches = times(time, n => (n - 1) * ratio);
	const style = {};
	const notchStyle = {};

	if (orientation === 'horizontal'){
		style.left = (canvasElementWidth / 2) - (canvasWidth / 2 * canvasZoom) + canvasPanX - (canvasZoom * ratio);
		notchStyle.width = canvasZoom * ratio;
	} else {
		style.top = (canvasElementHeight / 2) - (canvasHeight / 2 * canvasZoom) + canvasPanY - (canvasZoom * ratio);
		notchStyle.height = canvasZoom * ratio;
	}

	return (
		<div
			className={cn('pixmagix-canvas__ruler', {
				[`pixmagix-canvas__ruler-${orientation}`]:orientation
			})}
			data-ruler-orientation={orientation} >
			<div
				className='pixmagix-canvas__ruler-inner'
				style={style} >
				{showRulerCursors && (canvasMode === 'select') && (activeTool !== 'crop') && (
					<RulerCursor orientation={orientation} />
				)}
				{notches.map(number => {
					const t = canvasZoom > 0.5 ? 9 : 1;
					const subNotches = times(t, n => n + 1);
					return (
						<span
							key={number}
							className='pixmagix-canvas__ruler-notch'
							style={notchStyle} >
							<span className='pixmagix-canvas__ruler-number'>
								{number}
							</span>
							{canvasZoom > 0.2 && subNotches.map(n => (
								<span
									key={n}
									className={`pixmagix-canvas__ruler-subnotch-${t === 1 ? '50' : '10'}`} >
								</span>
							))}
						</span>
					);
				})}
			</div>
		</div>
	);

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasZoom:state.editor.canvasZoom,
	canvasPanX:state.editor.canvasPanX,
	canvasPanY:state.editor.canvasPanY,
	canvasElementWidth:state.editor.canvasElementWidth,
	canvasElementHeight:state.editor.canvasElementHeight,
	showRulerCursors:state.editor.showRulerCursors,
	activeTool:state.editor.activeTool,
	canvasMode:state.editor.canvasMode
}))(Ruler);
