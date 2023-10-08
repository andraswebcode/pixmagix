import {
	createRoot
} from 'react-dom/client';

import Wrapper from './fonts/wrapper.jsx';
import * as hooks from './utils/hooks.js';

/**
 *
 * @since 1.1.0
 */

const Fonts = props => (
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
		<Fonts {...params} />
	);
};

export {
	Fonts,
	initialize,
	hooks
};
