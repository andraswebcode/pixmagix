import {
	useState,
	useMemo
} from 'react';
import {
	__
} from 'wp-i18n';
import {
	uniq,
	includes,
	debounce
} from 'lodash';
import cn from 'classnames';

import Input from './input.jsx';

const ItemSVG = ({
	type,
	path,
	viewBox,
	svgAttrs
}) => {

	const vb = (viewBox || '0 0 100 100').split(' ').map((n, i) => {
		const _n = parseInt(n) || 0;
		if (!svgAttrs?.strokeWidth){
			return _n;
		}
		const w = parseInt(svgAttrs.strokeWidth) || 0;
		return (i === 0 || i === 1) ? _n - (w / 2) : _n + w;
	}).join(' ');

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox={vb} >
			<g
				{...svgAttrs} >
				{(type === 'square') ? (
					<rect
						width='100'
						height='100' />
				) : (type === 'circle') ? (
					<circle
						cx='50'
						cy='50'
						r='50' />
				) : (type === 'polygon') ? (
					<polygon
						points={path} />
				) : (type === 'polyline') ? (
					<polyline
						points={path} />
				) : (type === 'path') ? (
					<path
						d={path} />
				) : null}
			</g>
		</svg>
	);

};

const ItemImage = ({
	src
}) => (
	<img
		src={src} />
);

const LibrarySelect = ({
	label,
	itemType, // 'svg', or 'image'
	svgAttrs = {}, // Svg attributes, if item type is svg, eg.: stroke-width, fill, etc.
	multiple,
	items = [],
	value,
	onChange
}) => {

	const Item = (itemType === 'svg') ? ItemSVG : ItemImage;
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const ITEMS_PER_PAGE = 24;
	const filteredItems = useMemo(() => items.filter(item => {
		return (!search || includes((item?.label || '').toLowerCase(), search.toLowerCase()));
	}).slice(0, page * ITEMS_PER_PAGE), [search, page]);
	const onScroll = useMemo(() => debounce(({target}) => {
		const {
			scrollTop,
			scrollHeight,
			offsetHeight
		} = target;
		if (scrollTop > scrollHeight - offsetHeight - 40){
			setPage(Math.min(page + 1, Math.ceil(items.length / ITEMS_PER_PAGE)));
		}
	}, 200), [page]);

	return (
		<div className='pixmagix-libraryselect-wrapper'>
			{!!label && (
				<div className='pixmagix-label-wrapper'>
					<label className='pixmagix-label'>
						{label}
					</label>
				</div>
			)}
			<div className='pixmagix-libraryselect'>
				<Input
					placeholder={__('Search...', 'pixmagix')}
					value={search}
					onChange={value => {
						setSearch(value);
						setPage(1);
					}} />
				<ul
					onScroll={onScroll}
					className='pixmagix-libraryselect__list' >
					{filteredItems.map(item => (
						<li
							key={item.name}
							className={cn('pixmagix-libraryselect__item pixmagix-button', {
								active:includes(value, item.name)
							})}
							title={item.label}
							onClick={() => {
								if (multiple){
									const hasItem = includes(value, item.name);
									const _items = hasItem ? value.filter(name => name !== item.name) : value.concat([item.name]);
									onChange(_items);
									return;
								}
								onChange(item);
							}} >
							<Item
								svgAttrs={svgAttrs}
								{...item} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);

};

export default LibrarySelect;
