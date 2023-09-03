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

import EditorBase from './editor/components/editor.jsx';
import getReducer from './editor/redux/reducer.js';
import {
	createPaginatingMiddleware
} from './editor/utils/middlewares.js';

import './editor/canvas/extend-fabric.js';
import './editor/canvas/extend-point.js';
import './editor/canvas/extend-filters.js';
import './editor/canvas/extend-gradient.js';
import './editor/canvas/extend-shadow.js';
import './editor/canvas/extend-object.js';
import './editor/canvas/extend-image.js';
import './editor/canvas/extend-group.js';
import './editor/canvas/extend-text.js';
import './editor/canvas/extend-path.js';
import './editor/canvas/extend-polyline.js';

apiFetch.use(createPaginatingMiddleware);

/**
 *
 * @since 1.0.0
 */

const Editor = ({
	id,
	title,
	author,
	project,
	media
}) => {

	const store = createStore(getReducer(id, title, author, project, media));

	return (
		<Provider store={store}>
			<EditorBase />
		</Provider>
	);

};

/**
 * Initialize editor.
 * @since 1.0.0
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
