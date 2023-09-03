import {
	createReducer
} from '@reduxjs/toolkit';
import {
	isObject,
	isArray,
	each,
	omit,
	filter,
	includes
} from 'lodash';

import getInitialStateData from './initial-state-data.js';

/**
 * 
 * @since 1.0.0
 * @param {object} project
 * @param {string} mediaUrl
 * @param {number} mediaWidth
 * @param {number} mediaHeight
 */

const getReducerData = (project, mediaUrl, mediaWidth, mediaHeight) => createReducer(getInitialStateData(project, mediaUrl, mediaWidth, mediaHeight), builder => {
	builder.addCase('SET_DATA', (state, {payload}) => {
		if (isObject(payload.key)){
			each(payload.key, (v, k) => {
				state[k] = v;
			});
		} else {
			state[payload.key] = payload.value;
		}
	});
	builder.addCase('SET_DATAS_WITH_ADD_LAYER', (state, {payload}) => {
		const {
			data,
			layer
		} = payload;
		// Set data.
		each(data, (v, k) => {
			state[k] = v;
		});
		// Add layer.
		if (isArray(layer)){
			each(layer, item => {
				if (item.id && !state.layers[item.id]){
					state.layers[item.id] = item;
					state.layerIds.push(item.id);
				}
			});
		} else {
			if (layer.id && !state.layers[layer.id]){
				state.layers[layer.id] = layer;
				state.layerIds.push(layer.id);
			}
		}
	});
	builder.addCase('CROP_CANVAS', (state, {payload}) => {
		const {
			width,
			height,
			left,
			top
		} = payload;
		state.canvasWidth = width;
		state.canvasHeight = height;
		each(state.layerIds, id => {
			if (!state.layers[id]){
				return;
			}
			state.layers[id].left = state.layers[id].left - left + width / 2;
			state.layers[id].top = state.layers[id].top - top + height / 2;
		});
	});
	builder.addCase('SET_LAYER_PROPS', (state, {payload}) => {
		if (isObject(payload.id)){
			each(payload.id, (props, id) => {
				if (state.layers[id]){
					each(props, (v, k) => {
						state.layers[id][k] = v;
					});
				}
			});
		} else {
			if (state.layers[payload.id]){
				if (isObject(payload.key)){
					each(payload.key, (v, k) => {
						state.layers[payload.id][k] = v;
					});
				} else {
					state.layers[payload.id][payload.key] = payload.value;
				}
			}
		}
	});
	builder.addCase('ADD_LAYER', (state, {payload}) => {
		if (isArray(payload)){
			payload.forEach(layer => {
				if (layer?.id && !state.layers[layer.id]){
					state.layers[layer.id] = layer;
					state.layerIds.push(layer.id);
				}
			});
		} else {
			if (payload?.id && !state.layers[payload.id]){
				state.layers[payload.id] = payload;
				state.layerIds.push(payload.id);
			}
		}
	});
	builder.addCase('REMOVE_LAYER', (state, {payload}) => {
		const ids = isArray(payload.id) ? payload.id : [payload.id];
		state.layers = omit(state.layers, ids);
		state.layerIds = filter(state.layerIds, id => !includes(ids, id));
	});
	builder.addCase('REPLACE_LAYER', (state, {payload}) => {
		// remove old layers
		const oldIds = isArray(payload.oldLayerId) ? payload.oldLayerId : [payload.oldLayerId];
		state.layers = omit(state.layers, oldIds);
		state.layerIds = filter(state.layerIds, id => !includes(oldIds, id));
		// add new layers
		if (isArray(payload.newLayer)){
			each(payload.newLayer, layer => {
				const newId = layer?.id;
				if (!state.layers[newId]){
					state.layers[newId] = layer;
					state.layerIds.push(newId);
				}
			});
		} else {
			const newId = payload.newLayer?.id;
			if (!state.layers[newId]){
				state.layers[newId] = payload.newLayer;
				state.layerIds.push(newId);
			}
		}
	});
});

export default getReducerData;
