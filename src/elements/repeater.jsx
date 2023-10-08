import {
	Fragment
} from 'react';
import {
	__
} from 'wp-i18n';
import {
	isUndefined
} from 'lodash';
import cn from 'classnames';

import Button from './button.jsx';
import ButtonGroup from './button-group.jsx';
import Input from './input.jsx';
import Textarea from './textarea.jsx';
import Range from './range.jsx';
import Checkbox from './checkbox.jsx';
import Select from './select.jsx';
import ColorPicker from './color-picker.jsx';
import InlineNotice from './inline-notice.jsx';
import Help from './help.jsx';

const RepeaterItem = ({
	label,
	controls = [],
	disabled,
	onMove,
	onRemove
}) => (
	<li
		className={cn('pixmagix-repeater__item', {
			disabled
		})} >
		<div className='pixmagix-repeater__header'>
			<span className='pixmagix-repeater__label'>
				{label}
			</span>
			<ButtonGroup>
				{!!onMove && (
					<Fragment>
						<Button
							label={__('Move up', 'pixmagix')}
							icon='angle-up'
							small
							onClick={() => onMove('up')} />
						<Button
							label={__('Move Down', 'pixmagix')}
							icon='angle-down'
							small
							onClick={() => onMove('down')} />
					</Fragment>
				)}
				{!!onRemove && (
					<Button
						label={__('Remove', 'pixmagix')}
						icon='xmark'
						small
						onClick={() => onRemove()} />
				)}
			</ButtonGroup>
		</div>
		{!!(controls?.length) && (
			<div className='pixmagix-repeater__content'>
				{controls.map(({
					name,
					type,
					value,
					defValue,
					content,
					show = true,
					...control
				}) => (type === 'input' && show) ? (
					<Input
						key={name}
						value={value || defValue}
						{...control} />
				) : (type === 'textarea') ? (
					<Textarea
						key={name}
						value={value || defValue}
						{...control} />
				) : (type === 'range' && show) ? (
					<Range
						key={name}
						value={value || defValue}
						{...control} />
				) : (type === 'color' && show) ? (
					<ColorPicker
						key={name}
						color={value || defValue}
						{...control} />
				) : (type === 'select' && show) ? (
					<Select
						key={name}
						value={value || defValue}
						{...control} />
				) : (type === 'checkbox' && show) ? (
					<Checkbox
						key={name}
						checked={isUndefined(value) ? defValue : value}
						{...control} />
				) : (type === 'notice' && show) ? (
					<InlineNotice
						key={name}
						{...control}
						show={true}
						type={control.msgType} />
				) : (type === 'button' && show) ? (
					<Button
						key={name}
						{...control} >
						{control.label}
					</Button>
				) : content)}
			</div>
		)}
	</li>
)

const Repeater = ({
	className,
	label,
	help,
	items = [],
	emptyText
}) => {

	if (!items.length && !emptyText){
		return null;
	}

	return (
		<div className={cn('pixmagix-repeater-wrapper', className)}>
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
			<ul className='pixmagix-repeater'>
				{items.length ? items.map(item => (
					<RepeaterItem
						key={item.name}
						{...item} />
				)) : emptyText ? (
					<p>
						{emptyText}
					</p>
				) : null}
			</ul>
		</div>
	);

};

export default Repeater;
