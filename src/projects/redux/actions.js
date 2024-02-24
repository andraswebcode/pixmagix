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
 * Update one, or more properties of an existing item.
 * @since 1.2.0
 * @param {number} id
 * @param {string|object} key
 * @param {mixed} value
 * @return {object}
 */

export const setItemMeta = (id, key, value) => ({
    type:'SET_ITEM_META',
    payload:{
        id,
        key,
        value
    }
});
