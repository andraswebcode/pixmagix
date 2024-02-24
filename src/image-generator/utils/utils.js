import {
	random
} from 'lodash';
import {
	sprintf,
	__
} from 'wp-i18n';

import {
    createUniqueId
} from './../../utils/utils.js';

/**
 *
 * @param {object} options
 * @return {object}
 * @since 1.2.0
 */

export function createSample(options = {}){
	return {
		...options,
		id:createUniqueId()
	};
}

/**
 * Create prompt object to add to the list.
 * @param {object} options
 * @return {object}
 * @since 1.2.0
 */

export function createPrompt(options = {}){
	const {
		text,
		weight = 1
	} = options;
	return {
		id:createUniqueId(),
		text,
		weight
	};
}

/**
 * 
 * @since 1.2.0
 * @param {string} name
 * @param {string} aspect
 * @param {string} size
 * @return {string}
 */

export function getSizeLabel(name, aspect, size){

	if (!name){
		return '';
	}

	const texts = {
		square:__('%s - Square (%s)', 'pixmagix'),
		landscape:__('%s - Landscape (%s)', 'pixmagix'),
		portrait:__('%s - Portrait (%s)', 'pixmagix')
	};

	return sprintf(texts[name], aspect, size);

}
