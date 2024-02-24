import {
	connect
} from 'react-redux';
import {
	Button,
	ButtonGroup,
	Dropdown
} from 'elements';
import {
	__,
	sprintf
} from 'wp-i18n';
import {
	find as _find
} from 'lodash';
import {
	new_url
} from 'editor-globals';

import {
	setEditor
} from './../redux/actions.js';
import {
	generators
} from './../utils/lists.js';

const Header = ({
	generator,
	setEditor
}) => (
	<div className='pixmagix-header'>
		<div className='pixmagix-header__title'>
			<h1>
				{sprintf(
					__('PixMagix - Image Generator - (%s)', 'pixmagix'),
					_find(generators, {
						name:generator
					})?.label || ''
				)}
			</h1>
		</div>
		<ButtonGroup>
			<Button
				label={__('New', 'pixmagix')}
				icon='plus'
				href={new_url} />
			<Button
				label={__('Archive', 'pixmagix')}
				icon='box-archive'
				onClick={() => setEditor('activeModal', 'archives')} />
			<Dropdown
				position='bottom right'
				trigger={() => (
					<Button
						label={__('Generator', 'pixmagix')}
						icon='server' />
				)}
				items={generators.map(({
					name,
					label
				}) => ({
					name,
					label,
					onClick:() => setEditor('generator', name)
				}))} />
		</ButtonGroup>
	</div>
);

export default connect(state => ({
	generator:state.generator
}), {
	setEditor
})(Header);
