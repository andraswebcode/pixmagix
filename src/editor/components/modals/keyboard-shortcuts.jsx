import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Modal,
	Button
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setEditor
} from './../../redux/actions-editor.js';
import list from './../../utils/keyboard-shortcuts.js';

const KeyboardShortcuts = ({
	setEditor
}) => {

	return (
		<Modal
			title={__('Keyboard Shortcuts', 'pixmagix')}
			middle
			onClose={() => setEditor('activeModal', '')} >
			{list.map(({
				title,
				description,
				items
			}, i) => (
				<Fragment key={i} >
					<h2 className='pixmagix-kbsc__title'>
						{title}
					</h2>
					<p className='pixmagix-kbsc__description'>
						{description}
					</p>
					<ul className='pixmagix-kbsc__list'>
						{items.map(({
							description,
							combination
						}, i) => (
							<li className='pixmagix-kbsc__item'>
								<span>
									{description}
								</span>
								<kbd>
									{combination}
								</kbd>
							</li>
						))}
					</ul>
				</Fragment>
			))}
		</Modal>
	);

};

export default connect(state => ({}),{
	setEditor
})(KeyboardShortcuts);
