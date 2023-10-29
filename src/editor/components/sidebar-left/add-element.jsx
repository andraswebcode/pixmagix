import {
	Fragment,
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Input,
	Widget,
	Button,
	Range,
	ColorPicker,
	ShadowPicker,
	LibrarySelect,
	ImageSelect,
	Checkbox
} from 'elements';
import {
	fa_icons
} from 'editor-globals';
import {
	__
} from 'wp-i18n';

import {
	EDITOR_COLOR,
	PENCIL_MIN_WIDTH,
	PENCIL_MAX_WIDTH
} from './../../utils/constants.js';
import {
	setEditor,
	sendNotice
} from './../../redux/actions-editor.js';
import {
	addLayer,
	setLayerProps,
	setDatasWithAddLayer
} from './../../redux/actions-data.js';
import {
	createLayerObject,
	getHiddenFileInput,
	loadSVGFromString
} from './../../utils/utils.js';
import getHelpText from './../../utils/help-texts.js';

const AddElement = ({
	pencilWidth,
	pencilColor,
	pencilShadow,
	fillColor,
	canvasWidth,
	canvasHeight,
	layer,
	setEditor,
	sendNotice,
	addLayer,
	setLayerProps,
	setDatasWithAddLayer
}) => {

	const [showSettings, setShowSettings] = useState(true);
	const [svgSource, setSvgSource] = useState('');
	const [group, setGroup] = useState(false);
	const [resize, setResize] = useState(false);
	const onChange = (editorState, property) => value => {
		batch(() => {
			setEditor(editorState, value);
			if (layer && (layer.type === 'path' || layer.type === 'polygon' || layer.type === 'polyline')){
				setLayerProps(layer.id, property, value);
			}
		});
	};

	return (
		<Fragment>
			<Widget
				tabs={[{
					name:'fa-icons',
					label:__('Font Awesome Icons', 'pixmagix'),
					icon:'font-awesome',
					content:(
						<Fragment>
							<LibrarySelect
								itemType='svg'
								svgAttrs={{
									fill:EDITOR_COLOR,
									strokeWidth:0
								}}
								items={fa_icons}
								onChange={({path, label}) => {
									const object = createLayerObject({
										type:'path',
										name:label,
										path,
										left:canvasWidth / 2,
										top:canvasHeight / 2,
										strokeWidth:pencilWidth,
										stroke:pencilColor,
										fill:fillColor,
										shadow:pencilShadow
									});
									addLayer(object);
								}} />
						</Fragment>
					)
				},{
					name:'upload',
					label:__('Upload Custom SVG', 'pixmagix'),
					icon:'upload',
					content:(
						<Fragment>
							<Button
								block
								active
								onClick={() => {
									getHiddenFileInput('image/svg+xml', 'readAsText', setSvgSource).click();
								}} >
								{__('Upload From Computer', 'pixmagix')}
							</Button>
						</Fragment>
					)
				}]}
				onChange={tab => {
					setShowSettings(tab.name === 'fa-icons');
					if (tab.name !== 'upload'){
						setSvgSource('');
					}
				}} />
				{!!svgSource && (
					<Widget
						label={__('Selected SVG', 'pixmagix')} >
						<ImageSelect
							type='svg'
							src={svgSource}
							controls={(
								<Fragment>
									<Checkbox
										label={__('Import SVG as One Layer', 'pixmagix')}
										checked={group}
										onChange={setGroup} />
									<Checkbox
										label={__('Resize Canvas to SVG Size', 'pixmagix')}
										checked={resize}
										onChange={setResize} />
								</Fragment>
							)}
							onReplace={() => {
								getHiddenFileInput('image/svg+xml', 'readAsText', setSvgSource).click();
							}}
							onSelect={() => loadSVGFromString(svgSource, (objects, options) => {
								const layers = (group && objects.length > 1) ? createLayerObject({
									type:'group',
									objects
								}) : objects.map(obj => createLayerObject(obj));
								if (resize){
									setDatasWithAddLayer({
										canvasWidth:options.width,
										canvasHeight:options.height
									}, layers);
								} else {
									addLayer(layers);
								}
								setSvgSource('');
							},() => {
								sendNotice(
									__('SVG Parsing Failed', 'pixmagix'),
									'error'
								);
							})} />
					</Widget>
				)}
				{showSettings && (
					<Widget
						tabs={[{
							name:'stroke',
							label:__('Stroke', 'pixmagix'),
							icon:'paintbrush',
							content:(
								<Fragment>
									<Range
										label={__('Stroke Width', 'pixmagix')}
										help={getHelpText('strokeWidth')}
										value={pencilWidth}
										onChange={onChange('pencilWidth', 'strokeWidth')}
										min={PENCIL_MIN_WIDTH}
										max={PENCIL_MAX_WIDTH}
										step={1} />
									<ColorPicker
										label={__('Stroke Color', 'pixmagix')}
										color={pencilColor}
										onChange={onChange('pencilColor', 'stroke')} />
								</Fragment>
							)
						},{
							name:'fill',
							label:__('Fill', 'pixmagix'),
							icon:'fill',
							content:(
								<Fragment>
									<ColorPicker
										label={__('Fill Color', 'pixmagix')}
										color={fillColor}
										onChange={onChange('fillColor', 'fill')} />
								</Fragment>
							)
						},{
							name:'shadow',
							label:__('Shadow', 'pixmagix'),
							icon:'circle-half-stroke',
							content:(
								<Fragment>
									<ShadowPicker
										value={pencilShadow}
										onChange={onChange('pencilShadow', 'shadow')} />
								</Fragment>
							)
						}]} />
				)}
		</Fragment>
	);

};

export default connect(state => {

	const activeLayer = state.editor.activeLayers[0];
	const layer = activeLayer ? state.data.present.layers[activeLayer] : null;

	return {
		pencilWidth:state.editor.pencilWidth,
		pencilColor:state.editor.pencilColor,
		pencilShadow:state.editor.pencilShadow,
		fillColor:state.editor.fillColor,
		layer,
		canvasWidth:state.data.present.canvasWidth,
		canvasHeight:state.data.present.canvasHeight
	};

},{
	setEditor,
	sendNotice,
	addLayer,
	setLayerProps,
	setDatasWithAddLayer
})(AddElement);
