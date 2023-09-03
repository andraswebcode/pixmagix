import {
	useRef,
	useState,
	useEffect
} from 'react';
import {
	Widget,
	Loader
} from 'elements';
import {
	self_url
} from 'editor-globals';
import {
	omit,
	find as _find
} from 'lodash';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import FiltersWSFonts from './filters-wsfonts.jsx';
import FiltersGFonts from './filters-gfonts.jsx';
import ContentWSFonts from './content-wsfonts.jsx';
import ContentGFonts from './content-gfonts.jsx';
import {
	REST_PATH
} from './../utils/constants.js';
import {
	addQueryArgs,
	addToRouter
} from './../utils/utils.js';

const Content = ({
	items,
	gFonts,
	wsFonts,
	maxPages,
	hasGFontsKey,
	sendNotice,
	...filters
}) => {

	const didMount = useRef(false);
	const [_filters, setFilters] = useState(filters);
	const [_items, setItems] = useState(items);
	const [_gFonts, setGFonts] = useState(gFonts);
	const [_wsFonts, setWSFonts] = useState(wsFonts);
	const [_maxPages, setMaxPages] = useState(maxPages);
	const [_hasGFontsKey, setHasGFontsKey] = useState(hasGFontsKey);
	const [text, setText] = useState('');
	const [size, setSize] = useState(40);
	const [loading, setLoading] = useState(false);
	const onFilterChange = (key, value) => {
		setLoading(true);
		const newFilters = value ? {
			..._filters,
			[key]:value
		} : omit(_filters, key);
		if (key !== 'page'){
			newFilters.page = 1;
		}
		setFilters(newFilters);
	};
	const onSelectWSFont = item => {
		const newItems = _find(_wsFonts, {
			family:item.family}) ? _wsFonts.filter(i => item.family !== i.family) : _wsFonts.concat([item]);
		setWSFonts(newItems.map(item => ({
			...item,
			collection:'websafe'
		})));
	};
	const onSelectGFont = item => {
		const newItems = _find(_gFonts, {
			family:item.family
		}) ? _gFonts.filter(i => item.family !== i.family) : _gFonts.concat([item]);
		setGFonts(newItems.map(item => ({
			...item,
			collection:'gfonts'
		})));
	};

	useEffect(() => {

		if (didMount.current){
			apiFetch({
				path:addQueryArgs(_filters, REST_PATH + 'fonts')
			}).then(response => {
				console.log(response);
				setItems(response.items);
				setMaxPages(response.maxPages);
				setLoading(false);
				addToRouter(_filters, self_url);
			}).catch(error => {
				console.error(error);
				setLoading(false);
			});
		} else {
			didMount.current = true;
		}

	},[
		_filters,
		_hasGFontsKey
	]);

	return (
		<div className='pixmagix-content'>
			<Widget
				tabs={[{
					name:'websafe',
					label:__('Web Safe Fonts', 'pixmagix'),
					content:(
						<FiltersWSFonts
							selected={_wsFonts}
							onAdd={onSelectWSFont} />
					)
				},{
					name:'gfonts',
					label:__('Google Fonts', 'pixmagix'),
					content:(
						<FiltersGFonts
							{..._filters}
							onChange={onFilterChange} />
					)
				}]}
				initShow={_filters.collection}
				onChange={({name}) => onFilterChange('collection', name)} />
			{(_filters.collection === 'gfonts') ? (
				<ContentGFonts
					items={_items}
					selected={_gFonts}
					hasKey={_hasGFontsKey}
					maxPages={_maxPages}
					text={text}
					size={size}
					setText={setText}
					setSize={setSize}
					onChange={onFilterChange}
					onSelect={onSelectGFont}
					onSort={setGFonts}
					onContinue={() => setHasGFontsKey(true)}
					sendNotice={sendNotice}
					{..._filters} />
			) : (_filters.collection === 'websafe') ? (
				<ContentWSFonts
					selected={_wsFonts}
					text={text}
					setText={setText}
					onSelect={onSelectWSFont}
					onSort={setWSFonts}
					sendNotice={sendNotice} />
			) : null}
			<Loader show={loading} />
		</div>
	);

};

export default Content;
