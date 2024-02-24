import {
	DEFAULT_CANVAS_WIDTH,
	DEFAULT_CANVAS_HEIGHT
} from './../utils/constants.js';
import {
	createLayerObject
} from './../utils/utils.js';

/**
 * 
 * @since 1.0.0
 * @param {object} project
 * @param {string} mediaUrl
 * @param {number} mediaWidth
 * @param {number} mediaHeight
 * @return {object}
 */

const getInitialStateData = ({
	canvasWidth = DEFAULT_CANVAS_WIDTH,
	canvasHeight = DEFAULT_CANVAS_HEIGHT,
	canvasBackground,
	layers = []
}, mediaUrl, mediaWidth, mediaHeight) => {

	if (mediaUrl){
		const object = createLayerObject({
			type:'image',
			src:mediaUrl,
			left:mediaWidth / 2,
			top:mediaHeight / 2
		});
		return {
			canvasWidth:mediaWidth || DEFAULT_CANVAS_WIDTH,
			canvasHeight:mediaHeight || DEFAULT_CANVAS_HEIGHT,
			layers:{
				[object.id]:object
			},
			layerIds:[object.id]
		};
	}

	const layerIds = layers.map(layer => layer.id);
	const layersById = layers.reduce((memo, layer) => {
		memo[layer.id] = layer;
		// @since 1.6.0
		// For backward compability.
		if (layer.type === 'image'){
			if (!layer.originalWidth){
				memo[layer.id].originalWidth = layer.width;
			}
			if (!layer.originalHeight){
				memo[layer.id].originalHeight = layer.height;
			}
		}
		return memo;
	}, {});

	return {
		canvasWidth,
		canvasHeight,
		canvasBackground,
		layers:layersById,
		layerIds
	};

};

export default getInitialStateData;
