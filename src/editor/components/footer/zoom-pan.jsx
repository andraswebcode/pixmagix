import {
	connect
} from 'react-redux';
import {
	ButtonGroup,
	RadioButtons,
	Range,
	Button
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	CANVAS_MIN_ZOOM,
	CANVAS_MAX_ZOOM
} from './../../utils/constants.js';
import {
	getFitZoom
} from './../../utils/utils.js';

const ZoomPan = ({
	canvasMode,
	canvasZoom,
	canvasWidth,
	canvasHeight,
	canvasElementWidth,
	canvasElementHeight,
	setEditor
}) => (
	<ButtonGroup className='pixmagix-footer__zoompan'>
		<RadioButtons
			options={[{
				label:__('Select Mode', 'pixmagix'),
				value:'select',
				icon:'arrow-pointer'
			},{
				label:__('Hand Mode', 'pixmagix'),
				value:'hand',
				icon:'hand'
			}]}
			value={canvasMode}
			onChange={value => setEditor('canvasMode', value)} />
		<Range
			value={canvasZoom * 100}
			onChange={value => setEditor('canvasZoom', value / 100)}
			min={CANVAS_MIN_ZOOM}
			max={CANVAS_MAX_ZOOM}
			step={1}
			debounce={100} />
		<Button
			label={__('Fit Canvas to Screen', 'pixmagix')}
			icon='square-plus'
			small
			onClick={() => setEditor({
				canvasZoom:getFitZoom(canvasWidth, canvasHeight, canvasElementWidth, canvasElementHeight),
				canvasPanX:0,
				canvasPanY:0
			})} />
	</ButtonGroup>
);

export default connect(state => ({
	canvasMode:state.editor.canvasMode,
	canvasZoom:state.editor.canvasZoom,
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	canvasElementWidth:state.editor.canvasElementWidth,
	canvasElementHeight:state.editor.canvasElementHeight
}),{
	setEditor
})(ZoomPan);
