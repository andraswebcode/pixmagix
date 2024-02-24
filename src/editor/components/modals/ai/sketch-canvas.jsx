import {
	useRef,
	useState,
	useEffect
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Button,
	ButtonGroup
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	debounce
} from 'lodash';

import {
	setEditor
} from './../../../redux/actions-editor.js';
import Canvas from './../../../canvas/class-sketch-canvas.js';

const SketchCanvas = ({
	aiImageOptions,
	setEditor
}) => {

	const ref = useRef(null);
	const canvas = useRef(null);
	const [activeTool, setActiveTool] = useState('pen');
	const [canUndo, setCanUndo] = useState(false);
	const [canRedo, setCanRedo] = useState(false);

	useEffect(() => {

		const {
			clientWidth
		} = ref?.current.parentElement || {};
		canvas.current = new Canvas('pixmagix_sketch_canvas', {
			width:clientWidth * 0.5,
			height:clientWidth * 0.5
		});
		canvas.current.freeDrawingBrush.width = 5; window._scanvas = canvas.current;

		if (aiImageOptions.sketch){
			canvas.current.loadFromJSON(aiImageOptions.sketch);
		}

		canvas.current.on('object:added', debounce(() => {
			batch(() => {
				setEditor('aiImageOptions', {
					...aiImageOptions,
					sketch:canvas.current.toObject()
				});
				setCanUndo(canvas.current.canUndo());
				setCanRedo(canvas.current.canRedo());
			});
		}, 40));

		return () => {
			canvas.current.dispose();
		};

	}, []);

	useEffect(() => {

		if (!canvas?.current){
			return;
		}

		const isPen = (activeTool === 'pen');

		canvas.current.freeDrawingBrush.width = isPen ? 5 : 20;
		canvas.current.freeDrawingBrush.color = isPen ? '#000000' : '#FFFFFF';

	}, [activeTool]);

	return (
		<div
			ref={ref}
			className='pixmagix-sketch-canvas__wrapper' >
			<canvas
				id='pixmagix_sketch_canvas' />
			<ButtonGroup>
				<Button
					label={__('Pencil', 'pixmagix')}
					icon='pen'
					small
					active={(activeTool === 'pen')}
					onClick={() => setActiveTool('pen')} />
				<Button
					label={__('Eraser', 'pixmagix')}
					icon='eraser'
					small
					active={(activeTool === 'eraser')}
					onClick={() => setActiveTool('eraser')} />
				<Button
					label={__('Undo', 'pixmagix')}
					icon='rotate-left'
					small
					disabled={!canUndo}
					onClick={() => canvas?.current?.undo()} />
				<Button
					label={__('Redo', 'pixmagix')}
					icon='rotate-right'
					small
					disabled={!canRedo}
					onClick={() => canvas?.current?.redo()} />
			</ButtonGroup>
		</div>
	);

};

export default connect(state => ({
	aiImageOptions:state.editor.aiImageOptions
}),{
	setEditor
})(SketchCanvas);
