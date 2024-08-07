import {
	createRoot
} from 'react-dom/client';
import {
	createStore
} from 'redux';
import {
	Provider,
	connect,
	batch
} from 'react-redux';
import apiFetch from 'wp-api-fetch';

import Wrapper from './projects/components/wrapper.jsx';
import * as actions from './projects/redux/actions.js';
import * as hooks from './utils/hooks.js';
import getReducer from './projects/redux/reducer.js';
import {
	createPaginatingMiddleware,
	createArrangedMiddleware
} from './editor/utils/middlewares.js';

apiFetch.use(createPaginatingMiddleware);
apiFetch.use(createArrangedMiddleware);

/**
 *
 * @since 1.2.0
 * @param {object} params
 */

const ProjectsList = params => {

	const store = createStore(getReducer(params));

	return (
		<Provider store={store}>
			<Wrapper />
		</Provider>
	);

};

/**
 * 
 * @since 1.0.0
 * @param {object} params
 */

const initialize = params => {
	const container = document.getElementById('pixmagix');
	const root = createRoot(container);
	root.render(
		<ProjectsList {...params} />
	);
};

const data = {
	batch,
	connect,
	...actions
};

export {
	ProjectsList,
	initialize,
	hooks,
	data
};
