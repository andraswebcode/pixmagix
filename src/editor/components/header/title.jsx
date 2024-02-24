import {
	connect
} from 'react-redux';
import {
	__
} from 'wp-i18n';
import {
	Button
} from 'elements';
import {
	projects_url
} from 'editor-globals';

import {
	applyFilters
} from './../../../utils/hooks.js';

const Title = props => applyFilters('editor.title', (
	<div className='pixmagix-header__title'>
		{props.fullScreen && (
			<Button
				label={__('Back to Dashboard', 'pixmagix')}
				icon='right-to-bracket'
				href={projects_url} />
		)}
		<h1>
			{__('PixMagix', 'pixmagix')}
		</h1>
	</div>
), props);

export default connect(state => ({
	fullScreen:state.editor.fullScreen
}))(Title);
