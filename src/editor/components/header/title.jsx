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

const Title = ({
	fullScreen
}) => (
	<div className='pixmagix-header__title'>
		{fullScreen && (
			<Button
				label={__('Back to Dashboard', 'pixmagix')}
				icon='right-to-bracket'
				onClick={() => {
					window.location.replace(projects_url);
				}} />
		)}
		<h1>
			{__('PixMagix', 'pixmagix')}
		</h1>
	</div>
);

export default connect(state => ({
	fullScreen:state.editor.fullScreen
}))(Title);
