import {
	useState,
	useEffect,
	useMemo
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	ColorPicker
} from 'elements';
import {
	uniqueId,
	isUndefined
} from 'lodash';

import {
	setEditor
} from './../redux/actions-editor.js';
import {
	colorToString
} from './../utils/utils.js';

const ColorPickerAdvanced = ({
	color,
	colorPickerCurrentColor,
	onChange,
	setEditor,
	...props
}) => {

	const id = useMemo(() => uniqueId(), []);
	const isId = (colorPickerCurrentColor?.id === id);
	const cpIsEmpty = isUndefined(colorPickerCurrentColor?.r);
	const cpccToString = colorToString(colorPickerCurrentColor);
	const newProps = {
		...props,
		color:cpIsEmpty ? color : cpccToString,
		onChange
	};

	useEffect(() => {
		return () => {
			setEditor('colorPickerCurrentColor', null);
		}
	}, []);

	useEffect(() => {
		if (!cpIsEmpty && isId){
			batch(() => {
				onChange(cpccToString);
				setEditor('colorPickerCurrentColor', null);
			});
		}
	}, [
		colorPickerCurrentColor
	]);

	return (
		<ColorPicker
			key={cpccToString}
			{...newProps}
			enableCanvasPicker={true}
			canvasPickerIsActive={isId}
			onPickStart={() => setEditor('colorPickerCurrentColor', colorPickerCurrentColor ? null : {id})} />
	);

};

export default connect(state => ({
	colorPickerCurrentColor:state.editor.colorPickerCurrentColor
}),{
	setEditor
})(ColorPickerAdvanced);
