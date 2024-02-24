import {
	connect,
	batch
} from 'react-redux';
import {
	Button,
	ButtonGroup
} from 'elements';

import {
	setData,
	addLayer,
	removeLayer,
	replaceLayer,
	setLayerProps
} from './../../redux/actions-data.js';
import getLayerActions from './../../utils/layer-actions.js';

const LayerActions = props => {

	return (
		<ButtonGroup className='pixmagix-sidebarright__layeractions'>
			{getLayerActions(props).map(({
				name,
				label,
				icon,
				disabled,
				onClick
			}) => (
				<Button
					key={name}
					label={label}
					icon={icon}
					small
					disabled={disabled?.() ? true : undefined}
					onClick={onClick} />
			))}
		</ButtonGroup>
	);

};

export default connect(state => ({
	layers:state.data.present.layers,
	layerIds:state.data.present.layerIds,
	activeLayers:state.editor.activeLayers
}),{
	setData,
	addLayer,
	removeLayer,
	replaceLayer,
	setLayerProps
})(LayerActions);
