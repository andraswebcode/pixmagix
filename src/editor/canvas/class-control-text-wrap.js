import ResizeControl from './class-control-resize.js';

/**
 * The text wrap control class.
 * @since 1.6.0
 * @class
 * @extends fabric.Control
 */

export default class extends ResizeControl {

	/**
	 * Action event handler of control.
	 * @since 1.6.0
	 * @param {object} eventData
	 * @param {object} transformData
	 * @param {int} x
	 * @param {int} y
	 * @return {boolean}
	 */

	actionHandler(eventData, transformData, x, y){

		const fabricObject = transformData.target;
		const currentControl = fabricObject.controls[transformData.corner];
		const pointerLocalPosition = fabricObject.toLocalPoint({x, y}, 'center', 'center');
		const {
			width,
			scaleX
		} = fabricObject;
		const newWidth = Math.abs(pointerLocalPosition.x * 2 / scaleX);
		const textToOneLine = fabricObject.text.replace(/\n/g, ' ');
		const graphemeLines = fabricObject._wrapText([textToOneLine], newWidth);
		const newText = graphemeLines.map(line => line.join('')).join('\n');

		fabricObject.width = newWidth;
		fabricObject.text = newText;

		return (width !== newWidth);

	}

}
