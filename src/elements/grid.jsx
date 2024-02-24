import {
	forwardRef
} from 'react';
import cn from 'classnames';

import Button from './button.jsx';
import ButtonGroup from './button-group.jsx';

const Grid = ({
	className,
	columns,
	children
}) => (
	<ul className={cn('pixmagix-grid', className, {
		[`pixmagix-grid__cols-${columns}`]:columns
	})}>
		{children}
	</ul>
);

const Item = ({
	className,
	style,
	title,
	caption,
	isEmpty,
	actions,
	href = '#',
	src,
	selected,
	children,
	onClick
}, ref) => isEmpty ? (
	<li
		ref={ref}
		className='pixmagix-grid__item pixmagix-grid__item-empty'
		style={style} >
		<div className='pixmagix-grid__item-inner'>
			<div className='pixmagix-grid__item-figure'>
				<p>
					{caption}
				</p>
			</div>
		</div>
	</li>
) : (
	<li
		ref={ref}
		className={cn('pixmagix-grid__item', className, {
			active:selected
		})}
		style={style} >
		{!!(actions?.length) && (
			<ButtonGroup className='pixmagix-grid__actions'>
				{actions.map(action => action ? (
					<Button
						key={action.name}
						{...action}
						small />
				) : null)}
			</ButtonGroup>
		)}
		<a
			className={cn('pixmagix-grid__item-inner', className)}
			title={title}
			href={href}
			onClick={onClick} >
			{children ? (
				<div className='pixmagix-grid__item-figure'>
					{children}
					{!!caption && (
						<span className='pixmagix-grid__item-caption'>
							{caption}
						</span>
					)}
				</div>
			) : (
				<figure className='pixmagix-grid__item-figure'>
					<img src={src} />
					{!!caption && (
						<figcaption className='pixmagix-grid__item-caption'>
							{caption}
						</figcaption>
					)}
				</figure>
			)}
		</a>
	</li>
);

const GridItem = forwardRef(Item);

export {
	Grid,
	GridItem
};
