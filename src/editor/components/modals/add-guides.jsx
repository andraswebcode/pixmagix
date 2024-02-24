import {
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Widget,
	LibrarySelect,
	Input,
	InputGroup,
	Checkbox
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	find as _find,
	times,
	each
} from 'lodash';

import {
	createGuide,
	setEditor
} from './../../redux/actions-editor.js';
import {
	guidePresets
} from './../../utils/lists.js';
import {
	createUniqueId
} from './../../utils/utils.js';
import {
	EDITOR_COLOR
} from './../../utils/constants.js';

const AddGuides = ({
	canvasWidth,
	canvasHeight,
	createGuide,
	lockGuides,
	setEditor
}) => {

	const [values, setValues] = useState({
		rows:1,
		columns:1,
		gapX:0,
		gapY:0,
		marginX:0,
		marginY:0
	});
	const {
		rows,
		columns,
		gapX,
		gapY,
		marginX,
		marginY
	} = values;
	const onAddGuides = () => {

		const guides = [];
		const width = canvasWidth - (2 * marginY);
		const height = canvasHeight - (2 * marginX);
		const rowPositions = times(rows - 1, i => (height / rows * (i + 1)));
		const columnPositions = times(columns - 1, i => (width / columns * (i + 1)));

		each(rowPositions, position => {
			if (marginX){
				guides.push({
					id:createUniqueId(),
					position:marginX,
					orientation:'horizontal'
				},{
					id:createUniqueId(),
					position:canvasHeight - marginX,
					orientation:'horizontal'
				});
			}
			if (gapX){
				guides.push({
					id:createUniqueId(),
					position:position - (gapX / 2) + marginX,
					orientation:'horizontal'
				},{
					id:createUniqueId(),
					position:position + (gapX / 2) + marginX,
					orientation:'horizontal'
				});
			} else {
				guides.push({
					id:createUniqueId(),
					position:position + marginX,
					orientation:'horizontal'
				});
			}
		});

		each(columnPositions, position => {
			if (marginY){
				guides.push({
					id:createUniqueId(),
					position:marginY,
					orientation:'vertical'
				},{
					id:createUniqueId(),
					position:canvasWidth - marginY,
					orientation:'vertical'
				});
			}
			if (gapY){
				guides.push({
					id:createUniqueId(),
					position:position - (gapY / 2) + marginY,
					orientation:'vertical'
				},{
					id:createUniqueId(),
					position:position + (gapY / 2) + marginY,
					orientation:'vertical'
				});
			} else {
				guides.push({
					id:createUniqueId(),
					position:position + marginY,
					orientation:'vertical'
				});
			}
		});

		batch(() => {
			setEditor({
				activeModal:'',
				guides:[]
			});
			createGuide(guides);
		});

	};

	return (
		<Modal
			title={__('Add Guides', 'pixmagix')}
			small
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={onAddGuides} >
					{__('Add Guides', 'pixmagix')}
				</Button>
			)} >
			<Widget>
				<LibrarySelect
					label={__('Presets', 'pixmagix')}
					itemType='svg'
					svgAttrs={{
						fill:'none',
						stroke:EDITOR_COLOR,
						strokeWidth:4
					}}
					allowSearch={false}
					items={guidePresets}
					value={_find(guidePresets, {values})?.name}
					onChange={({values}) => setValues(values || {})} />
			</Widget>
			<Widget>
				<InputGroup>
					<Input
						type='number'
						label={__('Rows', 'pixmagix')}
						min={1}
						max={12}
						step={1}
						value={rows}
						onChange={value => setValues({
							...values,
							rows:value
						})} />
					<Input
						type='number'
						label={__('Columns', 'pixmagix')}
						min={1}
						max={12}
						step={1}
						value={columns}
						onChange={value => setValues({
							...values,
							columns:value
						})} />
				</InputGroup>
				<InputGroup>
					<Input
						type='number'
						label={__('Row Gaps', 'pixmagix')}
						min={0}
						value={gapX}
						onChange={value => setValues({
							...values,
							gapX:value
						})} />
					<Input
						type='number'
						label={__('Column Gaps', 'pixmagix')}
						min={0}
						value={gapY}
						onChange={value => setValues({
							...values,
							gapY:value
						})} />
				</InputGroup>
				<InputGroup>
					<Input
						type='number'
						label={__('Row Margin', 'pixmagix')}
						min={0}
						value={marginX}
						onChange={value => setValues({
							...values,
							marginX:value
						})} />
					<Input
						type='number'
						label={__('Column Margin', 'pixmagix')}
						min={0}
						value={marginY}
						onChange={value => setValues({
							...values,
							marginY:value
						})} />
				</InputGroup>
				<Checkbox
					label={__('Lock Guides', 'pixmagix')}
					checked={lockGuides}
					onChange={value => setEditor('lockGuides', value)} />
			</Widget>
		</Modal>
	);

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	lockGuides:state.editor.lockGuides
}),{
	createGuide,
	setEditor
})(AddGuides);
