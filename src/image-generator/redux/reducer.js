import {
	current,
	createReducer
} from '@reduxjs/toolkit';
import {
	each,
	isObject,
	filter,
	cloneDeep,
	find as _find
} from 'lodash';

import getInitialState from './initial-state.js';

/**
 * 
 * @since 1.2.0
 * @param {object} initialState
 */

const getReducer = initialState => createReducer(getInitialState(initialState), builder => {
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
	builder.addCase('ADD_PROMPT', (state, {payload}) => {
		if (!state.prompts){
			state.prompts = [];
		}
		if (payload.id){
			state.prompts.push(payload);
		}
	});
	builder.addCase('SET_PROMPT', (state, {payload}) => {
		const prompts = cloneDeep(current(state.prompts));
		const prompt = _find(prompts, {
			id:payload.id
		});
		if (prompt){
			prompt[payload.key] = payload.value;
		}
		state.prompts = prompts;
	});
	builder.addCase('REMOVE_PROMPT', (state, {payload}) => {
		state.prompts = filter(state.prompts, ({id}) => (id !== payload.id));
	});
});

export default getReducer;
