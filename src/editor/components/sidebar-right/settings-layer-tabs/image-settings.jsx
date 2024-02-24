import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Input,
	InputGroup,
	LibrarySelect
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setLayerProps
} from './../../../redux/actions-data.js';
import {
	createLayerObject
} from './../../../utils/utils.js';
import {
	EDITOR_COLOR
} from './../../../utils/constants.js';
import shapes from './../../../utils/shapes.js';

const ImageSettings = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		width,
		height,
		originalWidth,
		originalHeight,
		clipPath
	} = layer;

	return (
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
						}
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
						}
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
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(ImageSettings);
