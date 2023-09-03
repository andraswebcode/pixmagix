import {
	connect
} from 'react-redux';
import {
	Button,
	ButtonGroup,
	Input
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	includes,
	uniq
} from 'lodash';

import {
	shapeTypes
} from './../../utils/lists.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	setLayerProps
} from './../../redux/actions-data.js';

const LayerItem = ({
	id,
	type,
	name,
	activeLayers,
	setEditor,
	setLayerProps
}) => {

	const shapeType = shapeTypes[type] || {};

	return (
		<li className='pixmagix-sidebarright__layeritem'>
			<ButtonGroup className='pixmagix-sidebarright__layeritem-inner'>
				<Button
					label={__('Select Layer', 'pixmagix')}
					icon={shapeType.icon}
					small
					active={includes(activeLayers, id)}
					onClick={({
						ctrlKey,
						metaKey
					}) => {
						let newIds = includes(activeLayers, id) ? [] : [id];
						if (activeLayers.length > 1){
							newIds = [id];
						}
						if (ctrlKey || metaKey){
							newIds = includes(activeLayers, id) ? activeLayers.filter(_id => (_id !== id)) : uniq(activeLayers.concat([id]));
						}
						setEditor({
							activeLayers:newIds,
							isDrawingMode:false
						});
					}} />
				<Input
					placeholder={__('Layer Name...', 'pixmagix')}
					value={name || shapeType.label}
					onChange={value => setLayerProps(id, 'name', value)} />
			</ButtonGroup>
		</li>
	);

}

export default connect((state, {id}) => ({
	...(state.data.present.layers[id] || {}),
	activeLayers:state.editor.activeLayers
}),{
	setEditor,
	setLayerProps
})(LayerItem);
