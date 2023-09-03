import {
	useMemo
} from 'react';
import {
	connect
} from 'react-redux';

const RulerCursor = ({
	orientation,
	rulerCursorPosition
}) => {

	const style = (orientation === 'horizontal') ? {
		left:rulerCursorPosition.x
	} : {
		top:rulerCursorPosition.y
	};

	return (
		<span
			className='pixmagix-canvas__ruler-cursor'
			style={style} />
	);

};

export default connect(state => ({
	rulerCursorPosition:state.editor.rulerCursorPosition
}))(RulerCursor);
