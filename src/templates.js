import {
	createRoot
} from 'react-dom/client';

import Wrapper from './templates/wrapper.jsx';

/**
 *
 * @since 1.1.0
 */

const Templates = props => (
	<Wrapper {...props} />
);

/**
 * 
 * @since 1.1.0
 * @param {object} params
 */

const initialize = params => {
	const container = document.getElementById('pixmagix');
	const root = createRoot(container);
	root.render(
		<Templates {...params} />
	);
};

export {
	Templates,
	initialize
};
