import {
	connect
} from 'react-redux';
import {
	Button
} from 'elements';
import cn from 'classnames';

import {
	toolbarItems
} from './../../utils/lists.js';
import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	applyFilters
} from './../../../utils/hooks.js';

const Item = ({
	name,
	label,
	icon,
	active,
	onClick
}) => (
	<li className={cn('pixmagix-toolbar__item', {
		[`pixmagix-toolbar__item-${name}`]:name
	})} >
		<Button
			label={label}
			icon={{
				icon,
				fixedWidth:true,
				size:'lg'
			}}
			active={active}
			onClick={onClick} />
	</li>
);

const Tools = ({
	activeTool,
	setEditor
}) => (
	<ul className='pixmagix-toolbar__list'>
		{applyFilters('editor.toolbarItems', toolbarItems).map(item => (
			<Item
				key={item.name}
				active={item.name === activeTool}
				onClick={() => setEditor({
					activeTool:(item.name === activeTool) ? '' : item.name,
					isSidebarLeftOpened:true,
					isDrawingMode:false
				})}
				{...item} />
		))}
	</ul>
);

export default connect(state => ({
	activeTool:state.editor.activeTool
}),{
	setEditor
})(Tools);
