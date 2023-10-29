import {
	createElement
} from 'react';
import {
	createHooks
} from 'wp-hooks';

/**
 * 
 * @since 1.2.0
 * @const {object}
 */

export const HOOKS = createHooks();

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

export function applyFilters(hookName, ...args){
	return HOOKS.applyFilters(hookName, ...args);
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

export function addFilter(hookName, namespace, callback, priority){
	return HOOKS.addFilter(hookName, namespace, callback, priority);
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

export function doAction(hookName, ...args){
	return HOOKS.doAction(hookName, ...args);
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

export function addAction(hookName, namespace, callback, priority){
	return HOOKS.addAction(hookName, namespace, callback, priority);
}

/**
 *
 * @param {string} hookName
 * @param {object} props
 * @since 1.2.0
 */

export function doComponents(hookName, props){
	return applyFilters(hookName, null, props);
}

/**
 *
 * @param {string} hookName
 * @since 1.2.0
 */

export function addComponent(hookName, namespace, component, priority){
	return addFilter(hookName, namespace, (_defEl, props) => component ? createElement(component, props) : null, priority);
}
