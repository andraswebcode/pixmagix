import {
	useMemo
} from 'react';
import {
	connect
} from 'react-redux';
import {
	__
} from 'wp-i18n';
import Select from 'react-select';
import {
	find as _find
} from 'lodash';
import {
	Button,
	Help,
	selectStyles
} from 'elements';

import {
	loadGFont
} from './../utils/utils.js';
import {
	setEditor
} from './../redux/actions-editor.js';

const FontPickerAdvanced = ({
	label,
	help,
	value,
	fontList = [],
	onChange,
	setEditor
}) => {

	const selected = useMemo(() => (_find(fontList, {family:value}) || {}), [fontList, value]);

	return (
		<div className='pixmagix-font-picker-wrapper'>
			{!!label && (
				<div className='pixmagix-label-wrapper'>
					<span className='pixmagix-label'>
						{label}
					</span>
					{!!help && (
						<Help {...help} />
					)}
				</div>
			)}
			<div className='pixmagix-font-picker'>
				<Select
					className='pixmagix-input'
					placeholder={value || selected.family || label}
					styles={{
						...selectStyles,
						menu:provided => ({
							...provided,
							backgroundColor:'#354147',
							minWidth:163
						}),
						placeholder:provided => ({
							...provided,
							fontFamily:selected.family,
							overflow:'hidden',
							whiteSpace:'nowrap',
							textOverflow:'ellipsis'
						}),
						option:(provided, {isSelected, isFocused, data}) => ({
							...provided,
							padding:'2px 12px',
							backgroundColor:(isSelected || isFocused) ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
							fontFamily:data.value
						})
					}}
					options={fontList.map(({
						family,
						collection
					}) => {
						if (collection === 'gfonts'){
							loadGFont(family);
						}
						return {
							label:family,
							value:family,
							collection
						};
					})}
					value={value}
					onChange={option => onChange(option.value, option.collection)} />
				<Button
					label={__('Additional Fonts', 'pixmagix')}
					icon='font'
					small
					onClick={() => setEditor('activeModal', 'font-manager')} />
			</div>
		</div>
	);

};

export default connect(state => ({
	fontList:state.editor.fontList
}),{
	setEditor
})(FontPickerAdvanced);
