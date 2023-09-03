import {
	createReducer,
	current
} from '@reduxjs/toolkit';
import {
	each,
	isObject,
	cloneDeep,
	find as _find
} from 'lodash';

import getInitialStateEditor from './initial-state-editor.js';

/**
 * 
 * @since 1.0.0
 * @param {number} id
 * @param {string} title
 * @param {number} author
 * @param {number} mediaId
 * @param {string} mediaUrl
 * @param {string} revisionUrl
 */

const getReducerEditor = (id, title, author, mediaId, mediaUrl, revisionUrl) => createReducer(getInitialStateEditor(id, title, author, mediaId, mediaUrl, revisionUrl), builder => {
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
		if (payload.id){
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
});

export default getReducerEditor;
