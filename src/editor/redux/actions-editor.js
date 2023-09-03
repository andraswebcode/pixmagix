/**
 *
 * @since 1.0.0
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
 * @since 1.0.0
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
 * @since 1.0.0
 * @param {string} id
 * @param {string} orientation
 * @param {number} position
 * @return {object}
 */

export const createGuide = (id, orientation, position) => ({
	type:'CREATE_GUIDE',
	payload:{
		id,
		orientation,
		position
	}
});

/**
 *
 * @since 1.0.0
 * @param {string} id
 * @param {number} position
 * @return {object}
 */

export const updateGuide = (id, position) => ({
	type:'UPDATE_GUIDE',
	payload:{
		id,
		position
	}
});
