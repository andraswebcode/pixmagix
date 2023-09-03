import {
	useState
} from 'react';
import {
	Row,
	Column,
	Grid,
	GridItem,
	Pagination,
	Widget,
	Button,
	Input,
	Range,
	Repeater
} from 'elements';
import {
	find as _find,
	findIndex
} from 'lodash';
import {
	arrayMoveImmutable
} from 'array-move';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';

import {
	loadGFont
} from './../utils/utils.js';
import {
	REST_PATH
} from './../utils/constants.js';
import getHelpText from './../editor/utils/help-texts.js';

const ContentGFonts = ({
	items = [],
	selected = [],
	hasKey,
	page,
	text,
	size,
	maxPages,
	onChange,
	onSelect,
	onSort,
	onContinue,
	setText,
	setSize,
	sendNotice
}) => {

	const [apiKey, setApiKey] = useState('');
	const onSave = () => {
		apiFetch({
			path:REST_PATH + 'settings/',
			method:'POST',
			data:{
				google_fonts:selected
			}
		}).then(({settings_success}) => {
			if (settings_success){
				sendNotice({
					type:'success',
					message:__('Settings Saved Successfully', 'pixmagix')
				});
			} else {
				sendNotice({
					type:'warning',
					message:__('No Changes Detected', 'pixmagix')
				});
			}
		}).catch(({message}) => {
			sendNotice({
				type:'error',
				message
			});
		});
	};
	const onSetApiKey = () => {
		apiFetch({
			path:REST_PATH + 'settings/',
			method:'POST',
			data:{
				gfonts_api_key:apiKey
			}
		}).then(response => {
			console.log(response);
			onContinue?.();
		}).catch(error => {
			console.error(error);
		});
	};

	return (
		<Row>
			<Column width={9}>
				<Pagination
					page={page}
					maxPages={maxPages}
					onChange={page => onChange('page', page)} />
				<Grid columns={3}>
					{items.length ? items.map(item => {
						loadGFont(item.family);
						return (
							<GridItem
								key={item.family}
								className='pixmagix-fonts-preview'
								title={__('Add to List', 'pixmagix')}
								caption={item.family}
								selected={_find(selected, {family:item.family})}
								onClick={e => {
									e.preventDefault();
									onSelect(item);
								}} >
								<p
									style={{
										fontFamily:item.family,
										fontSize:size
									}} >
									{text || __('PixMagix', 'pixmagix')}
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
					onChange={page => onChange('page', page)} />
			</Column>
			<Column width={3}>
				{!hasKey && (
					<Widget
						label={__('API Key', 'pixmagix')} >
						<Input
							label={__('API Key', 'pixmagix')}
							help={getHelpText('gfontsApiKey')}
							value={apiKey}
							onChange={setApiKey} />
						<Button
							active={!!apiKey}
							disabled={!apiKey}
							onClick={onSetApiKey} >
							{__('Continue', 'pixmagix')}
						</Button>
					</Widget>
				)}
				<Widget
					label={__('Preview', 'pixmagix')} >
					<Input
						label={__('Sample Text', 'pixmagix')}
						placeholder={__('PixMagix', 'pixmagix')}
						value={text}
						onChange={setText} />
					<Range
						label={__('Font Size', 'pixmagix')}
						value={size}
						onChange={setSize}
						min={10}
						max={100}
						step={1} />
				</Widget>
				<Widget
					label={__('Selected Fonts', 'pixmagix')} >
					<Repeater
						className='pixmagix-fonts-selected-list'
						emptyText={__('No Fonts Selected', 'pixmagix')}
						items={selected?.map(item => {
							loadGFont(item.family);
							const index = findIndex(selected, item);
							return {
								name:item.family,
								label:item.family,
								onMove:dir => {
									const newList = arrayMoveImmutable(selected, index, (dir === 'up') ? index - 1 : index + 1);
									onSort(newList);
								},
								onRemove:() => onSelect(item),
								controls:[{
									name:'preview',
									type:'raw',
									content:(
										<p
											style={{
												fontFamily:item.family
											}} >
											{text || __('PixMagix', 'pixmagix')}
										</p>
									)
								}]
							};
						})} />
					<Button
						active
						onClick={onSave} >
						{__('Save Fonts', 'pixmagix')}
					</Button>
				</Widget>
			</Column>
		</Row>
	);

};

export default ContentGFonts;
