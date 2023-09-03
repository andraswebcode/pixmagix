import {
	createRoot
} from 'react-dom/client';

import Wrapper from './settings/wrapper.jsx';

/**
 *
 * @since 1.1.0
 */

const Settings = props => (
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
		<Settings {...params} />
	);
};

export {
	Settings,
	initialize
};
