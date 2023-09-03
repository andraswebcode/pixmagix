import {
	Row,
	Column,
	Widget,
	Button,
	Input,
	Repeater
} from 'elements';
import {
	__
} from 'wp-i18n';
import apiFetch from 'wp-api-fetch';
import {
	findIndex
} from 'lodash';
import {
	arrayMoveImmutable
} from 'array-move';

import {
	REST_PATH
} from './../utils/constants.js';

const ContentWSFonts = ({
	selected = [],
	text,
	setText,
	onSelect,
	onSort,
	sendNotice
}) => {

	const onSave = () => {
		apiFetch({
			path:REST_PATH + 'settings/',
			method:'POST',
			data:{
				web_safe_fonts:selected
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

	return (
		<Row>
			<Column>
				<Widget
					label={__('Selected Fonts', 'pixmagix')} >
					<Repeater
						className='pixmagix-fonts-selected-list'
						emptyText={__('No Fonts Selected', 'pixmagix')}
						items={selected.map(item => ({
							name:item.family,
							label:item.family,
							onMove:dir => {
								const index = findIndex(selected, item);
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
						}))} />
					<Button
						active
						onClick={onSave} >
						{__('Save Fonts', 'pixmagix')}
					</Button>
				</Widget>
			</Column>
			<Column>
				<Widget
					label={__('Preview', 'pixmagix')} >
					<Input
						label={__('Sample Text', 'pixmagix')}
						placeholder={__('PixMagix', 'pixmagix')}
						value={text}
						onChange={setText} />
				</Widget>
			</Column>
		</Row>
	);

};

export default ContentWSFonts;
