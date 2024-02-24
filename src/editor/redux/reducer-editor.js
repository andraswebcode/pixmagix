import {
	createReducer,
	current
} from '@reduxjs/toolkit';
import {
	each,
	isObject,
	isArray,
	cloneDeep,
	find as _find,
	filter,
	includes
} from 'lodash';

import getInitialStateEditor from './initial-state-editor.js';

/**
 * 
 * @since 1.0.0
 * @param {number} id
 * @param {object} metadata
 * @param {number} mediaId
 * @param {string} mediaUrl
 * @param {string} revisionUrl
 */

const getReducerEditor = (id, metadata, mediaId, mediaUrl, revisionUrl) => createReducer(getInitialStateEditor(id, metadata, mediaId, mediaUrl, revisionUrl), builder => {
	builder.addCase('SET_EDITOR', (state, {payload}) => {
		if (isObject(payload.key)){
			each(payload.key, (v, k) => {
				state[k] = v;
			});
		} else {
			state[payload.key] = payload.value;
		}
	});
	builder.addCase('SEND_NOTICE', (state, {payload}) => {
		state.notification = payload;
	});
	builder.addCase('CREATE_GUIDE', (state, {payload}) => {
		if (!state.guides){
			state.guides = [];
		}
		if (isArray(payload.id)){
			state.guides.push(...payload.id);
		} else {
			state.guides.push({
				id:payload.id,
				orientation:payload.orientation,
				position:payload.position || 0
			});
		}
	});
	builder.addCase('UPDATE_GUIDE', (state, {payload}) => {
		const guides = cloneDeep(current(state.guides));
		const guide = _find(guides, {
			id:payload.id
		});
		if (guide){
			guide.position = payload.position;
		}
		state.guides = guides;
	});
	builder.addCase('REMOVE_GUIDE', (state, {payload}) => {
		const guides = cloneDeep(current(state.guides));
		const ids = isArray(payload.id) ? payload.id : [payload.id];
		state.guides = filter(state.guides, ({id}) => !includes(ids, id));
	});
});

export default getReducerEditor;
