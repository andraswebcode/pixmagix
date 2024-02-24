/**
 *
 * @since 1.2.0
 * @param {string|object} key
 * @param {mixed} value
 * @return {object}
 */

export const setEditor = (key, value) => ({
	type:'SET_EDITOR',
	payload:{
		key,
		value
	}
});

/**
 *
 * @since 1.2.0
 * @param {string} message
 * @param {string} type
 * @return {object}
 */

export const sendNotice = (message, type) => ({
	type:'SEND_NOTICE',
	payload:{
		message,
		type
	}
});

/**
 *
 * @since 1.2.0
 * @param {object} prompt
 * @return {object}
 */

export const addPrompt = prompt => ({
	type:'ADD_PROMPT',
	payload:prompt
});

/**
 *
 * @since 1.2.0
 * @param {string} id
 * @param {string} key
 * @param {string|number} value
 * @return {object}
 */

export const setPrompt = (id, key, value) => ({
	type:'SET_PROMPT',
	payload:{
		id,
		key,
		value
	}
});

/**
 *
 * @since 1.2.0
 * @param {string} id
 * @return {object}
 */

export const removePrompt = id => ({
	type:'REMOVE_PROMPT',
	payload:{
		id
	}
});
