import {
	project_categories
} from 'editor-globals';

/**
 * 
 * @since 1.2.0
 * @param {object} initialState
 * @return {object}
 */

const getInitialState = initialState => {

	return {
		// Query params.
		page:1,
		maxPages:1,
		search:'',
		category:0,
		status:'',
		date:'',
		author:0,
		// Globals
		previewId:0,
		activeModal:'',
		categoryList:project_categories || [],
		loading:false,
		// Items.
		items:[],
		// Initial state.
		...initialState
	};

};

export default getInitialState;
