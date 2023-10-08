import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Icon
} from 'elements';
import {
	find as _find
} from 'lodash';

import {
	setEditor
} from './../redux/actions-editor.js';
import {
	toolbarItems
} from './../utils/lists.js';
import {
	applyFilters
} from './../../utils/hooks.js';

const SidebarLeft = ({
	activeTool,
	isSidebarLeftOpened,
	setEditor
}) => {

	const Content = _find(applyFilters('editor.toolbarItems', toolbarItems), {
		name:activeTool
	})?.component || (() => null);

	return (
		<div className='pixmagix-sidebarleft'>
			{!!activeTool && (
				<Fragment>
					{isSidebarLeftOpened && (
						<div className='pixmagix-sidebarleft__inner'>
							<Content />
						</div>
					)}
					<div
						className='pixmagix-sidebarleft__toggle'
						onClick={() => setEditor('isSidebarLeftOpened', !isSidebarLeftOpened)} >
						<Icon
							icon={isSidebarLeftOpened ? 'angle-left' : 'angle-right'} />
					</div>
				</Fragment>
			)}
		</div>
	);

};

export default connect(state => ({
	activeTool:state.editor.activeTool,
	isSidebarLeftOpened:state.editor.isSidebarLeftOpened
}),{
	setEditor
})(SidebarLeft);
