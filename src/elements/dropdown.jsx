import Popup from 'reactjs-popup';
import cn from 'classnames';

const Dropdown = ({
	position = 'bottom left',
	trigger,
	items,
	children
}) => (
	<Popup
		className='pixmagix-dropdown'
		position={position}
		arrow={false}
		trigger={trigger}
		contentStyle={{
			zIndex:99999
		}}
		overlayStyle={{
			background:'transparent'
		}} >
		{items ? (
			<ul className='pixmagix-dropdown__list'>
				{items.map((item, i) => (item.name === 'divider') ? (
					<li
						key={i}
						className='pixmagix-dropdown__item pixmagix-divider' >
						<hr />
					</li>
				) : (
					<li
						key={item.name}
						className={cn('pixmagix-dropdown__item', {
							disabled:item?.disabled?.()
						})}
						onClick={item?.disabled?.() ? undefined : item.onClick} >
						{item.label}
					</li>
				))}
			</ul>
		) : children}
	</Popup>
);

export default Dropdown;
