import {
	Fragment,
	useEffect,
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Row,
	Column,
	Pagination,
	Grid,
	GridItem,
	Widget,
	Repeater,
	InlineControls,
	Input,
	Range,
	Select,
	Loader
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	find as _find,
	findIndex
} from 'lodash';
import {
	arrayMoveImmutable
} from 'array-move';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	REST_PATH
} from './../../utils/constants.js';
import {
	loadGFont,
	addQueryArgs
} from './../../utils/utils.js';
import {
	gFontFilters
} from './../../utils/lists.js';

const FontManager = ({
	fontList,
	setEditor
}) => {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);
	const [websafe, setWebsafe] = useState('');
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');
	const [language, setLanguage] = useState('');
	const [variant, setVariant] = useState('');
	const [preview, setPreview] = useState('');
	const [fontSize, setFontSize] = useState(40);
	const [activeTab, setActiveTab] = useState('gfonts');

	useEffect(() => {

		const query = {
			collection:'gfonts',
			page,
			per_page:12
		};

		if (search){
			query.search = search;
		}

		if (category){
			query.category = category;
		}

		if (language){
			query.language = language;
		}

		if (variant){
			query.variant = variant;
		}

		apiFetch({
			path:addQueryArgs(query, REST_PATH + 'fonts')
		}).then(({
			items,
			maxPages
		}) => {
			batch(() => {
				setItems(items);
				setMaxPages(maxPages);
				setLoading(false);
			});
		});

	}, [search, category, language, variant, page]);

	return (
		<Modal
			title={__('Font Manager', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={() => setEditor('activeModal', '')} >
					{__('Done', 'pixmagix')}
				</Button>
			)} >
			<Row>
				<Column width={9}>
					<Widget
						tabs={[{
							name:'gfonts',
							label:__('Google Fonts', 'pixmagix'),
							content:(
								<InlineControls>
									<Input
										label={__('Search', 'pixmagix')}
										value={search}
										onChange={value => {
											batch(() => {
												setSearch(value);
												setPage(1);
												setLoading(true);
											});
										}} />
									<Select
										label={__('Category', 'pixmagix')}
										options={gFontFilters.categories}
										value={category}
										onChange={value => {
											batch(() => {
												setCategory(value);
												setPage(1);
												setLoading(true);
											});
										}} />
									<Select
										label={__('Language', 'pixmagix')}
										options={gFontFilters.languages}
										value={language}
										onChange={value => {
											batch(() => {
												setLanguage(value);
												setPage(1);
												setLoading(true);
											});
										}} />
									<Select
										label={__('Variant', 'pixmagix')}
										options={gFontFilters.variants}
										value={variant}
										onChange={value => {
											batch(() => {
												setVariant(value);
												setPage(1);
												setLoading(true);
											});
										}} />
								</InlineControls>
							)
						},{
							name:'websafe',
							label:__('Custom Fonts', 'pixmagix'),
							content:(
								<InlineControls>
									<Input
										label={__('Font Family Name', 'pixmagix')}
										placeholder={__('', 'pixmagix')}
										value={websafe}
										onChange={setWebsafe} />
									<Button
										active
										small
										onClick={() => {
											const selected = _find(fontList, {family:websafe});
											if (!selected){
												const newList = fontList.concat([{
													family:websafe,
													collection:'websafe'
												}]);
												setEditor('fontList', newList);
											}
										}} >
										{__('Add to List', 'pixmagix')}
									</Button>
								</InlineControls>
							)
						}]}
						onChange={({name}) => setActiveTab(name)} />
					{(activeTab === 'gfonts') && (
						<Fragment>
							<Pagination
								page={page}
								maxPages={maxPages}
								onChange={page => {
									batch(() => {
										setPage(page);
										setLoading(true);
									});
								}} />
							<Grid columns={3}>
								{items?.length ? items.map(({
									family,
									collection
								}) => {
									loadGFont(family);
									const selected = _find(fontList, {family});
									return (
										<GridItem
											key={family}
											className='pixmagix-fonts__preview'
											title={__('Add to List', 'pixmagix')}
											caption={family}
											selected={selected}
											onClick={e => {
												e.preventDefault();
												const newList = selected ? fontList.filter(i => family !== i.family) : fontList.concat([{
													family,
													collection:'gfonts'
												}]);
												setEditor('fontList', newList);
											}} >
											<p
												style={{
													fontFamily:family,
													fontSize
												}} >
												{preview || __('PixMagix', 'pixmagix')}
											</p>
										</GridItem>
									);
								}) : (
									<GridItem
										isEmpty
										caption={__('No Items Found', 'pixmagix')} />
								)}
							</Grid>
							<Pagination
								page={page}
								maxPages={maxPages}
								onChange={page => {
									batch(() => {
										setPage(page);
										setLoading(true);
									});
								}} />
						</Fragment>
					)}
				</Column>
				<Column width={3}>
					<Widget
						tabs={[{
							name:'list',
							label:__('Font List', 'pixmagix'),
							content:(
								<Fragment>
									<Repeater
										className='pixmagix-fonts__list'
										emptyText={__('No Fonts Selected', 'pixmagix')}
										items={fontList.map(({
											family
										}) => {
											const index = findIndex(fontList, {family});
											return {
												name:family,
												label:family,
												onMove:dir => {
													const newList = arrayMoveImmutable(fontList, index, (dir === 'up') ? index - 1 : index + 1);
													setEditor('fontList', newList);
												},
												onRemove:() => {
													const newList = fontList.filter(i => family !== i.family);
													setEditor('fontList', newList);
												},
												controls:[{
													name:'preview',
													type:'raw',
													content:(
														<p
															style={{
																fontFamily:family
															}} >
															{preview || __('PixMagix', 'pixmagix')}
														</p>
													)
												}]
											};
										})} />
								</Fragment>
							)
						},{
							name:'preview',
							label:__('Preview Settings', 'pixmagix'),
							content:(
								<Fragment>
									<Input
										label={__('Sample Text', 'pixmagix')}
										placeholder={__('PixMagix', 'pixmagix')}
										value={preview}
										onChange={setPreview} />
									<Range
										label={__('Font Size', 'pixmagix')}
										value={fontSize}
										onChange={setFontSize}
										min={10}
										max={100}
										step={1} />
								</Fragment>
							)
						}]} />
				</Column>
			</Row>
			<Loader show={loading} />
		</Modal>
	);

};

export default connect(state => ({
	fontList:state.editor.fontList
}),{
	setEditor
})(FontManager);
