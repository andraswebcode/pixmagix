import {
	useRef,
	useState
} from 'react';
import {
	connect
} from 'react-redux';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	colorToString
} from './../../utils/utils.js';

const CanvasColorPicker = ({
	colorPickerCurrentColor,
	setEditor
}) => {

	const ref = useRef(null);
	const [indicatorPosition, setIndicatorPosition] = useState({
		left:-999,
		top:-999
	});
	const [indicatorColor, setIndicatorColor] = useState([0, 0, 0, 0]);
	const {
		left,
		top
	} = indicatorPosition;
	const onMouseMove = e => {
		if (!ref?.current){
			return;
		}
		// Get cursor position.
		const {
			clientX,
			clientY
		} = e;
		const {
			left,
			top
		} = ref.current.getBoundingClientRect();
		const x = clientX - left;
		const y = clientY - top;
		setIndicatorPosition({
			left:x,
			top:y
		});
		// Get color at position.
		const canvas = document.getElementById('pixmagix_canvas')?.fabric;
		if (!canvas){
			return;
		}
		const ctx = canvas.contextContainer;
		const ratio = canvas.getRetinaScaling();
		const data = ctx.getImageData(x * ratio, y * ratio, 1, 1).data;
		setIndicatorColor(Array.prototype.slice.call(data));
	};
	const onMouseUp = e => {
		setEditor('colorPickerCurrentColor', {
			id:colorPickerCurrentColor.id,
			r:indicatorColor[0],
			g:indicatorColor[1],
			b:indicatorColor[2]
		});
	};
	const onMouseLeave = () => {
		setIndicatorPosition({
			left:-999,
			top:-999
		});
	};

	return (
		<div
			ref={ref}
			className='pixmagix-canvas__colorpicker'
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseLeave} >
			<span
				className='pixmagix-canvas__colorpicker-indicator'
				style={{
					left,
					top,
					backgroundColor:colorToString(indicatorColor)
				}} />
		</div>
	);

};

export default connect(state => ({
	colorPickerCurrentColor:state.editor.colorPickerCurrentColor
}),{
	setEditor
})(CanvasColorPicker);
