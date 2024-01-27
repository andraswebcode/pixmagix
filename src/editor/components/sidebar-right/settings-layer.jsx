import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	find as _find,
	findIndex
} from 'lodash';
import {
	arrayMoveImmutable
} from 'array-move';
import {
	Button,
	Widget,
	Input,
	InputGroup,
	Range,
	Select,
	FontPicker,
	Textarea,
	ColorPicker,
	ColorStyleControl,
	ShadowPicker,
	LibrarySelect,
	Repeater,
	MulticheckButtons,
	StrokeDashArrayControl,
	RadioButtons
} from 'elements';
import {
	images_folder
} from 'editor-globals';
import {
	__
} from 'wp-i18n';

import {
	isSVGElement,
	createLayerObject
} from './../../utils/utils.js';
import {
	imageFilters,
	blendingModes
} from './../../utils/lists.js';
import {
	PENCIL_MIN_WIDTH,
	PENCIL_MAX_WIDTH,
	QRCODE_MIN_SIZE,
	QRCODE_MAX_SIZE,
	MIN_FONT_SIZE,
	MAX_FONT_SIZE,
	EDITOR_COLOR
} from './../../utils/constants.js';
import {
	setLayerProps
} from './../../redux/actions-data.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import getHelpText from './../../utils/help-texts.js';
import shapes from './../../utils/shapes.js';

const _imageFilters = imageFilters.map(item => ({
	name:item.name,
	label:item.label,
	src:(images_folder || '') + 'filter-' + item.name.toLowerCase() + '.jpg'
}));

const SettingsLayer = ({
	layer = {},
	activeLayers,
	fontList,
	setLayerProps,
	setEditor
}) => {

	if (!activeLayers?.length){
		return null;
	}

	const {
		id,
		type,
		left,
		top,
		scaleX,
		scaleY,
		skewX,
		skewY,
		angle,
		width,
		height,
		originalWidth,
		originalHeight,
		radius,
		rx,
		stroke,
		strokeWidth,
		strokeDashArray,
		strokeDashOffset,
		fill,
		shadow,
		opacity,
		globalCompositeOperation,
		// Image
		filters,
		clipPath,
		// Text
		text,
		fontSize,
		fontFamily,
		fontStyle,
		fontWeight,
		textAlign,
		lineHeight,
		charSpacing,
		underline,
		// QR Code
		size,
		qrPadding,
		ecl
	} = layer;
	const onTransform = property => value => {

		if (activeLayers.length === 1){
			setLayerProps(id, property, value);
		} else {
			// multiselection
		}

	};

	const tabs = [{
		name:'transform',
		label:__('Transform', 'pixmagix'),
		icon:'sliders',
		content:(
			<Fragment>
				<InputGroup>
					<Input
						type='number'
						label={__('Translate X', 'pixmagix')}
						value={left}
						onChange={onTransform('left')}
						min={-4000}
						max={4000} />
					<Input
						type='number'
						label={__('Translate Y', 'pixmagix')}
						value={top}
						onChange={onTransform('top')}
						min={-4000}
						max={4000} />
				</InputGroup>
				<InputGroup>
					<Input
						type='number'
						label={__('Scale X', 'pixmagix')}
						value={scaleX}
						onChange={onTransform('scaleX')}
						min={0.01}
						max={10}
						step={0.01} />
					<Input
						type='number'
						label={__('Scale Y', 'pixmagix')}
						value={scaleY}
						onChange={onTransform('scaleY')}
						min={0.01}
						max={10}
						step={0.01} />
				</InputGroup>
				<InputGroup>
					<Input
						type='number'
						label={__('Skew X', 'pixmagix')}
						value={skewX}
						onChange={onTransform('skewX')}
						min={-100}
						max={100} />
					<Input
						type='number'
						label={__('Skew Y', 'pixmagix')}
						value={skewY}
						onChange={onTransform('skewY')}
						min={-100}
						max={100} />
				</InputGroup>
				<Input
					type='number'
					label={__('Angle', 'pixmagix')}
					value={angle}
					onChange={onTransform('angle')}
					min={-360}
					max={360} />
			</Fragment>
		)
	}];

	if (activeLayers.length > 1){
		return (
			<Widget tabs={tabs} />
		);
	}

	switch (type){
		case 'rect':
		tabs.push({
			name:'dimensions',
			label:__('Dimensions', 'pixmagix'),
			icon:'square',
			content:(
				<Fragment>
					<InputGroup>
						<Input
							type='number'
							label={__('Width', 'pixmagix')}
							value={width}
							onChange={value => setLayerProps(id, 'width', value)} />
						<Input
							type='number'
							label={__('Height', 'pixmagix')}
							value={height}
							onChange={value => setLayerProps(id, 'height', value)} />
					</InputGroup>
					<Input
						type='number'
						label={__('Corner Radius', 'pixmagix')}
						value={rx}
						onChange={value => setLayerProps(id, {
							rx:value,
							ry:value
						})} />
				</Fragment>
			)
		});
		break;
		case 'circle':
		tabs.push({
			name:'dimensions',
			label:__('Dimensions', 'pixmagix'),
			icon:'circle',
			content:(
				<Fragment>
					<Input
						type='number'
						label={__('Radius', 'pixmagix')}
						value={radius}
						onChange={value => setLayerProps(id, 'radius', value)} />
				</Fragment>
			)
		});
		break;
		case 'ellipse':
		tabs.push({
			name:'dimensions',
			label:__('Dimensions', 'pixmagix'),
			icon:'circle',
			content:(
				<Fragment>
					<InputGroup>
						<Input
							type='number'
							label={__('Width', 'pixmagix')}
							value={width}
							onChange={value => setLayerProps(id, {
								width:value,
								rx:value / 2
							})} />
						<Input
							type='number'
							label={__('Height', 'pixmagix')}
							value={height}
							onChange={value => setLayerProps(id, {
								height:value,
								ry:value / 2
							})} />
					</InputGroup>
				</Fragment>
			)
		});
		break;
		case 'path':
		break;
		case 'polygon':
		break;
		case 'polyline':
		break;
		case 'text':
		case 'i-text':
		tabs.push({
			name:'font',
			label:__('Font', 'pixmagix'),
			icon:'font',
			content:(
				<Fragment>
					<Textarea
						label={__('Text', 'pixmagix')}
						value={text}
						onChange={value => setLayerProps(id, 'text', value)} />
					<Range
						label={__('Font Size', 'pixmagix')}
						value={fontSize}
						onChange={value => setLayerProps(id, 'fontSize', value)}
						min={MIN_FONT_SIZE}
						max={MAX_FONT_SIZE}
						step={1} />
					<Range
						label={__('Line Height', 'pixmagix')}
						help={getHelpText('lineHeight')}
						value={lineHeight}
						onChange={value => setLayerProps(id, 'lineHeight', value)}
						min={0.01}
						max={4}
						step={0.01} />
					<Range
						label={__('Character Spacing', 'pixmagix')}
						value={charSpacing}
						onChange={value => setLayerProps(id, 'charSpacing', value)}
						min={0}
						max={MAX_FONT_SIZE}
						step={1} />
					<FontPicker
						label={__('Font Family', 'pixmagix')}
						help={getHelpText('fontFamily')}
						options={fontList}
						value={fontFamily}
						onChange={value => setLayerProps(id, {
							fontFamily:value,
							fontCollection:_find(fontList, {family:value})?.collection || 'websafe'
						})}
						onAdd={() => setEditor('activeModal', 'font-manager')} />
					<MulticheckButtons
						label={__('Text Style', 'pixmagix')}
						items={[{
							label:__('Bold', 'pixmagix'),
							icon:'bold',
							value:fontWeight === 'bold',
							onChange:value => {
								const weight = value ? 'bold' : 'normal';
								setLayerProps(id, 'fontWeight', weight);
							}
						},{
							label:__('Italic', 'pixmagix'),
							icon:'italic',
							value:fontStyle === 'italic',
							onChange:value => {
								const style = value ? 'italic' : 'normal';
								setLayerProps(id, 'fontStyle', style);
							}
						},{
							label:__('Underline', 'pixmagix'),
							icon:'underline',
							value:underline,
							onChange:value => setLayerProps(id, 'underline', value)
						}]} />
					<RadioButtons
						label={__('Text Align', 'pixmagix')}
						options={[{
							label:__('Left', 'pixmagix'),
							icon:'align-left',
							value:'left'
						},{
							label:__('Center', 'pixmagix'),
							icon:'align-center',
							value:'center'
						},{
							label:__('Right', 'pixmagix'),
							icon:'align-right',
							value:'right'
						},{
							label:__('Justify', 'pixmagix'),
							icon:'align-justify',
							value:'justify'
						}]}
						value={textAlign}
						onChange={value => setLayerProps(id, 'textAlign', value)} />
				</Fragment>
			)
		});
		break;
		case 'qrcode':
		tabs.push({
			name:'settings',
			label:__('QR Code Settings', 'pixmagix'),
			icon:'qrcode',
			content:(
				<Fragment>
					<Input
						label={__('Text', 'pixmagix')}
						placeholder={__('Write Text Here...', 'pixmagix')}
						value={text}
						onChange={value => setLayerProps(id, 'text', value)} />
					<Range
						label={__('Size', 'pixmagix')}
						value={size}
						onChange={value => setLayerProps(id, 'size', value)}
						min={QRCODE_MIN_SIZE}
						max={QRCODE_MAX_SIZE}
						step={1} />
					<Range
						label={__('Padding', 'pixmagix')}
						value={qrPadding}
						onChange={value => setLayerProps(id, 'qrPadding', value)}
						min={0}
						max={20}
						step={1} />
					<Select
						label={__('Error Correction Level', 'pixmagix')}
						help={getHelpText('ecl')}
						options={[{
							label:'L',
							value:'L'
						},{
							label:'M',
							value:'M'
						},{
							label:'Q',
							value:'Q'
						},{
							label:'H',
							value:'H'
						}]}
						value={ecl}
						onChange={value => setLayerProps(id, 'ecl', value)} />
				</Fragment>
			)
		},{
			name:'color',
			label:__('Color', 'pixmagix'),
			icon:'paintbrush',
			content:(
				<Fragment key='c'>
					<ColorPicker
						label={__('Color', 'pixmagix')}
						color={stroke}
						onChange={color => setLayerProps(id, 'stroke', color)} />
				</Fragment>
			)
		},{
			name:'background',
			label:__('Background', 'pixmagix'),
			icon:'fill',
			content:(
				<Fragment key='b'>
					<ColorPicker
						label={__('Background', 'pixmagix')}
						color={fill}
						onChange={color => setLayerProps(id, 'fill', color)} />
				</Fragment>
			)
		});
		break;
		case 'image':
		tabs.push({
			name:'image',
			label:__('Image', 'pixmagix'),
			icon:'image',
			content:(
				<Fragment>
					<InputGroup>
						<Input
							type='number'
							label={__('Width', 'pixmagix')}
							value={width}
							onChange={value => {
								const newProps = {
									width:value,
									cropX:(originalWidth - value) / 2
								};
								if (clipPath){
									const newClipPath = {
										...clipPath,
										scaleX:value / 100
									};
									newProps.clipPath = newClipPath;
								}console.log(newProps)
								setLayerProps(id, newProps);
							}}
							min={1}
							max={originalWidth}
							step={1} />
						<Input
							type='number'
							label={__('Height', 'pixmagix')}
							value={height}
							onChange={value => {
								const newProps = {
									height:value,
									cropY:(originalHeight - value) / 2
								};
								if (clipPath){
									const newClipPath = {
										...clipPath,
										scaleY:value / 100
									};
									newProps.clipPath = newClipPath;
								}console.log(newProps)
								setLayerProps(id, newProps);
							}}
							min={1}
							max={originalHeight}
							step={1} />
					</InputGroup>
					<LibrarySelect
						label={__('Clip Path', 'pixmagix')}
						itemType='svg'
						svgAttrs={{
							fill:'none',
							stroke:EDITOR_COLOR,
							strokeWidth:8
						}}
						items={shapes}
						value={clipPath?.name || 'square'}
						onChange={({
							name,
							type,
							path
						}) => {
							if (!type || type === 'square'){
								return setLayerProps(id, 'clipPath', null);
							}
							const obj = {
								type,
								name,
								left:0,
								top:0,
								scaleX:width / 100,
								scaleY:height / 100
							};
							if (type === 'circle'){
								obj.radius = 50;
							} else if (type === 'polygon'){
								obj.points = path;
							} else {
								obj.path = path;
							}
							const cp = createLayerObject(obj);
							setLayerProps(id, 'clipPath', cp);
						}} />
				</Fragment>
			)
		},{
			name:'filters',
			label:__('Filters', 'pixmagix'),
			icon:'filter',
			content:(
				<Fragment>
					<LibrarySelect
						label={__('Add Filters', 'pixmagix')}
						itemType='image'
						items={_imageFilters}
						multiple
						value={filters.map(filter => filter.type)}
						onChange={value => {
							const filters = value.map(name => {
								const options = _find(imageFilters, {name});
								if (!options){
									return;
								}
								const output = {
									type:options.name
								};
								options.controls?.forEach(control => {
									output[control.name] = control.default
								});
								return output;

							}).filter(item => !!item);
							setLayerProps(id, 'filters', filters);
						}} />
					<Repeater
						label={__('Filters', 'pixmagix')}
						items={filters.map(filter => {
							const options = _find(imageFilters, {name:filter.type});
							const index = findIndex(filters, {
								type:filter.type
							});
							const controls = (options.controls || []).map(control => {
								return {
									...control,
									value:filter[control.name],
									defValue:control.default,
									onChange:value => {
										const newList = filters.slice();
										if (index >= 0){
											newList[index] = {
												...newList[index],
												[control.name]:value
											};
										}
										setLayerProps(id, 'filters', newList);
									}
								};
							});
							return {
								...options,
								onMove:dir => {
									const newList = arrayMoveImmutable(filters, index, (dir === 'up') ? index - 1 : index + 1);
									setLayerProps(id, 'filters', newList);
								},
								onRemove:() => {
									const newList = filters.filter(({type}) => (type !== filter.type));
									setLayerProps(id, 'filters', newList);
								},
								controls
							};
						})} />
				</Fragment>
			)
		});
		break;
		default:
		break;
	}

	if (isSVGElement(type)){
		tabs.push({
			name:'stroke',
			label:__('Stroke', 'pixmagix'),
			icon:'paintbrush',
			content:(
				<Fragment>
					<Range
						label={__('Stroke Width', 'pixmagix')}
						help={getHelpText('strokeWidth')}
						value={strokeWidth}
						onChange={value => setLayerProps(id, 'strokeWidth', value)}
						min={PENCIL_MIN_WIDTH}
						max={PENCIL_MAX_WIDTH}
						step={1} />
					<ColorPicker
						label={__('Stroke Color', 'pixmagix')}
						color={stroke}
						onChange={color => setLayerProps(id, 'stroke', color)} />
					<StrokeDashArrayControl
						label={__('Stroke Dash Array', 'pixmagix')}
						help={getHelpText('sda')}
						value={strokeDashArray}
						onChange={value => setLayerProps(id, 'strokeDashArray', value)} />
					<Range
						label={__('Stroke Dash Offset', 'pixmagix')}
						help={getHelpText('sdo')}
						value={strokeDashOffset}
						onChange={value => setLayerProps(id, 'strokeDashOffset', value)}
						min={PENCIL_MIN_WIDTH}
						max={PENCIL_MAX_WIDTH}
						step={1} />
				</Fragment>
			)
		},{
			name:'fill',
			label:__('Fill', 'pixmagix'),
			icon:'fill',
			content:(
				<ColorStyleControl
					labels={{
						style:__('Fill Style', 'pixmagix'),
						color:__('Fill Color', 'pixmagix'),
						gradient:__('Fill Gradient', 'pixmagix')
					}}
					value={fill}
					onChange={value => setLayerProps(id, 'fill', value)} />
			)
		});
	}

	tabs.push({
		name:'shadow',
		label:__('Shadow', 'pixmagix'),
		icon:'circle-half-stroke',
		content:(
			<Fragment>
				<ShadowPicker
					value={shadow}
					onChange={value => setLayerProps(id, 'shadow', value)} />
			</Fragment>
		)
	},{
		name:'blending',
		label:__('Blending', 'pixmagix'),
		icon:'blender',
		content:(
			<Fragment>
				<Range
					label={__('Opacity', 'pixmagix')}
					value={opacity}
					onChange={value => setLayerProps(id, 'opacity', value)}
					min={0}
					max={1}
					step={0.01} />
				<Select
					label={__('Blending Mode', 'pixmagix')}
					help={getHelpText('blendingMode')}
					options={blendingModes}
					value={globalCompositeOperation}
					onChange={value => setLayerProps(id, 'globalCompositeOperation', value)} />
			</Fragment>
		)
	});

	return (
		<Widget tabs={tabs} />
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]],
	activeLayers:state.editor.activeLayers,
	fontList:state.editor.fontList
}),{
	setLayerProps,
	setEditor
})(SettingsLayer);
