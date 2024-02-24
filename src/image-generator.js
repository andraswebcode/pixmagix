import {
	createRoot
} from 'react-dom/client';
import {
	createStore
} from 'redux';
import {
	Provider
} from 'react-redux';
import apiFetch from 'wp-api-fetch';

import EditorBase from './image-generator/components/editor.jsx';
import getReducer from './image-generator/redux/reducer.js';
import {
	createPaginatingMiddleware
} from './editor/utils/middlewares.js';

apiFetch.use(createPaginatingMiddleware);

/**
 *
 * @since 1.2.0
 * @param {object} params
 */

const Editor = params => {

	const store = createStore(getReducer(params));

	return (
		<Provider store={store}>
			<EditorBase />
		</Provider>
	);

};

/**
 * 
 * @since 1.2.0
 * @param {object} params
 */

const initialize = params => {
	const container = document.getElementById('pixmagix');
	const root = createRoot(container);
	root.render(
		<Editor {...params} />
	);
};

export {
	initialize,
	Editor
};
