import {
	createRoot
} from 'react-dom/client';
import apiFetch from 'wp-api-fetch';

import Wrapper from './projects/wrapper.jsx';
import {
	createPaginatingMiddleware
} from './editor/utils/middlewares.js';

apiFetch.use(createPaginatingMiddleware);

/**
 *
 * @since 1.0.0
 */

const ProjectsList = props => (
	<Wrapper {...props} />
);

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

export {
	ProjectsList,
	initialize
};
