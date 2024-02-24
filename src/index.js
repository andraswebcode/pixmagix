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

import EditorBase from './editor/components/editor.jsx';
import getReducer from './editor/redux/reducer.js';
import * as editorActions from './editor/redux/actions-editor.js';
import * as dataActions from './editor/redux/actions-data.js';
import {
	createPaginatingMiddleware
} from './editor/utils/middlewares.js';
import * as utils from './editor/utils/utils.js';
import * as hooks from './utils/hooks.js';

import './editor/canvas/extend-fabric.js';
import './editor/canvas/extend-point.js';
import './editor/canvas/extend-filters.js';
import './editor/canvas/extend-gradient.js';
import './editor/canvas/extend-shadow.js';
import './editor/canvas/extend-object.js';
import './editor/canvas/extend-image.js';
import './editor/canvas/extend-active-selection.js';
import './editor/canvas/extend-group.js';
import './editor/canvas/extend-text.js';
import './editor/canvas/extend-path.js';
import './editor/canvas/extend-polyline.js';
import './editor/canvas/extend-rect.js';
import './editor/canvas/extend-circle.js';
import './editor/canvas/extend-ellipse.js';

apiFetch.use(createPaginatingMiddleware);

/**
 *
 * @since 1.0.0
 */

const Editor = ({
	id,
	metadata,
	project,
	media
}) => {

	const store = createStore(getReducer(id, metadata, project, media));

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

/**
 * 
 * @since 1.2.0
 * @var {object}
 */

const data = {
	batch,
	connect,
	...editorActions,
	...dataActions
};

export {
	hooks,
	data,
	utils,
	initialize,
	Editor
};
