import {
	Fragment,
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Widget,
	Button,
	Range,
	Input,
	InputGroup,
	Select
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	cropAspectRatios
} from './../../utils/lists.js';
import {
	getCropShapeSize
} from './../../utils/utils.js';
import {
	MIN_CROP_SCALE,
	MAX_CROP_SCALE
} from './../../utils/constants.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	cropCanvas
} from './../../redux/actions-data.js';

const CropCanvas = ({
	cropAspectRatio,
	cropScale,
	cropPanX,
	cropPanY,
	canvasWidth,
	canvasHeight,
	setEditor,
	cropCanvas
}) => {

	const size = getCropShapeSize(canvasWidth, canvasHeight, cropAspectRatio, cropScale);

	return (
		<Fragment>
			<Widget
				label={__('Crop Canvas', 'pixmagix')} >
				<Select
					label={__('Aspect Ratio', 'pixmagix')}
					value={cropAspectRatio}
					options={cropAspectRatios}
					onChange={value => setEditor('cropAspectRatio', value)} />
				<Range
					label={__('Scale', 'pixmagix')}
					value={cropScale}
					onChange={value => setEditor('cropScale', value)}
					min={MIN_CROP_SCALE}
					max={MAX_CROP_SCALE}
					step={0.01} />
				<InputGroup>
					<Input
						type='number'
						label={__('Width', 'pixmagix')}
						value={size.x}
						onChange={value => {}} />
					<Input
						type='number'
						label={__('Height', 'pixmagix')}
						value={size.y}
						onChange={value => {}} />
				</InputGroup>
				<InputGroup>
					<Input
						type='number'
						label={__('Pan X', 'pixmagix')}
						value={cropPanX}
						onChange={value => setEditor('cropPanX', value)} />
					<Input
						type='number'
						label={__('Pan Y', 'pixmagix')}
						value={cropPanY}
						onChange={value => setEditor('cropPanY', value)} />
				</InputGroup>
				<Button
					block
					active
					onClick={() => {
						batch(() => {
							cropCanvas(size.x, size.y, canvasWidth / 2 + cropPanX, canvasHeight / 2 + cropPanY);
							setEditor({
								cropScale:1,
								cropPanX:0,
								cropPanY:0
							});
						});
					}} >
					{__('Crop', 'pixmagix')}
				</Button>
			</Widget>
		</Fragment>
	);

};

export default connect(state => ({
	cropAspectRatio:state.editor.cropAspectRatio,
	cropScale:state.editor.cropScale,
	cropPanX:state.editor.cropPanX,
	cropPanY:state.editor.cropPanY,
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight
}),{
	setEditor,
	cropCanvas
})(CropCanvas);
