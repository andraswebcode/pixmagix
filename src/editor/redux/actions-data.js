import {
	ActionCreators
} from 'redux-undo';

/**
 * Set any data.
 * @since 1.0.0
 * @param {string|object} key
 * @param {mixed} value
 * @return {object}
 */

export const setData = (key, value) => ({
	type:'SET_DATA',
	payload:{
		key,
		value
	}
});

/**
 * Add new layer, and set other datas at the same time.
 * This special action is nedded when we add new image,
 * and resize canvas at the same time,
 * for undo/redo to don't put two object to stack.
 * @since 1.0.0
 * @param {object} data Datas to add with forEach.
 * @param {object|array} layer New layer, or an array of new layers to add.
 * @return {object}
 */

export const setDatasWithAddLayer = (data, layer) => ({
    type:'SET_DATAS_WITH_ADD_LAYER',
    payload:{
        data,
        layer
    }
});

/**
 * Resize canvas, and move all layers to its new position.
 * This special action is also needed for undo/redo.
 * @since 1.0.0
 * @param {number} width
 * @param {number} height
 * @param {number} left
 * @param {number} top
 * @return {object}
 */

export const cropCanvas = (width, height, left, top) => ({
    type:'CROP_CANVAS',
    payload:{
        width,
        height,
        left,
        top
    }
});

/**
 * Update one, or more properties of an existing layer, or layers.
 * @since 1.0.0
 * @param {string|object} id
 * @param {string|object} key
 * @param {mixed} value
 * @return {object}
 */

export const setLayerProps = (id, key, value) => ({
    type:'SET_LAYER_PROPS',
    payload:{
        id,
        key,
        value
    }
});

/**
 * Add new layer.
 * @since 1.0.0
 * @param {object|array} layer
 * @return {object}
 */

export const addLayer = layer => ({
    type:'ADD_LAYER',
    payload:layer
});

/**
 * Remove existing layer.
 * @since 1.0.0
 * @param {string|array} id
 * @return {object}
 */

export const removeLayer = id => ({
    type:'REMOVE_LAYER',
    payload:{
        id
    }
});

/**
 * Replace layers.
 * @since 1.0.0
 * @param {object|array} newLayer
 * @param {string|array} oldLayerId
 * @return {object}
 */

export const replaceLayer = (newLayer, oldLayerId) => ({
    type:'REPLACE_LAYER',
    payload:{
        newLayer,
        oldLayerId
    }
});

/**
 *
 * @since 1.0.0
 * @return {object}
 */

export const undo = () => ActionCreators.undo();

/**
 *
 * @since 1.0.0
 * @return {object}
 */

export const redo = () => ActionCreators.redo();

/**
 *
 * @since 1.0.0
 * @return {object}
 */

export const clearHistory = () => ActionCreators.clearHistory();
