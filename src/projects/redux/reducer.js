import {
	current,
	createReducer
} from '@reduxjs/toolkit';
import {
	each,
	isObject
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
	builder.addCase('SET_ITEM_META', (state, {payload}) => {
		const {
			id,
			key,
			value
		} = payload;
		let newMeta = {};
		if (isObject(key)){
			newMeta = key;
		} else {
			newMeta[key] = value;
		}
		const items = current(state.items);
		if (items?.length){
			state.items = items.map(item => (id === item.id) ? ({
				...item,
				metadata:{
					...item.metadata,
					...newMeta
				}
			}) : item);
		}
	});
});

export default getReducer;
