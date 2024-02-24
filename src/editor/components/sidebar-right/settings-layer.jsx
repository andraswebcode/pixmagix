import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Widget
} from 'elements';

import {
	shapeTypes
} from './../../utils/lists.js';

const SettingsLayer = ({
	activeLayers,
	layer = {}
}) => {

	if (!activeLayers.length){
		return null;
	}

	if (activeLayers.length > 1){
		return null;
	}

	const {
		type
	} = layer;
	const tabs = shapeTypes[type]?.settings.map?.(({
		component,
		...tab
	}) => {
		const Tab = component;
		return {
			...tab,
			content:(
				<Tab />
			)
		}
	});

	return (
		<Widget
			key={layer.type}
			tabs={tabs} />
	);

};

export default connect(state => {

	const {
		layers
	} = state.data.present;
	const {
		activeLayers
	} = state.editor;

	return {
		activeLayers,
		layer:state.data.present.layers[activeLayers[0]]
	};

})(SettingsLayer);
