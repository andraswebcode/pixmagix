import {
	useState,
	useRef
} from 'react';
import {
	__
} from 'wp-i18n';

import Input from './input.jsx';
import InputGroup from './input-group.jsx';
import Range from './range.jsx';
import ColorPicker from './color-picker.jsx';
import Icon from './icon.jsx';
import {
	clamp
} from './utils.js';

const ShadowPicker = ({
	label,
	value,
	onChange,
	maxOffset = 100
}) => {

	const ref = useRef(null);
	const {
		offsetX = 0,
		offsetY = 0,
		blur = 0,
		color = '#000000'
	} = value || {};
	const [grab, setGrab] = useState(false);
	const [lightPosition, setLightPosition] = useState({
		x:50,
		y:50
	});
	const [offset, setOffset] = useState({
		x:- (2 * maxOffset * lightPosition.x - maxOffset),
		y:- (2 * maxOffset * lightPosition.y - maxOffset)
	});

	return (
		<div className='pixmagix-shadow-picker-wrapper'>
			{!!label && (
				<div className='pixmagix-label-wrapper'>
					<span className='pixmagix-label'>
						{label}
					</span>
				</div>
			)}
			<div className='pixmagix-shadow-picker'>
				<div className='pixmagix-label-wrapper'>
					<span className='pixmagix-label'>
						{__('Offset', 'pixmagix')}
					</span>
				</div>
				<InputGroup>
					<Input
						label={__('X', 'pixmagix')}
						type='number'
						value={offsetX}
						onChange={value => onChange((value === 0 && offsetY === 0 && blur === 0) ? null : {
							offsetX:value,
							offsetY,
							blur,
							color
						})}
						min={-maxOffset}
						max={maxOffset} />
					<Input
						label={__('Y', 'pixmagix')}
						type='number'
						value={offsetY}
						onChange={value => onChange((value === 0 && offsetX === 0 && blur === 0) ? null : {
							offsetX,
							offsetY:value,
							blur,
							color
						})}
						min={-maxOffset}
						max={maxOffset} />
				</InputGroup>
				<div
					ref={ref}
					className='pixmagix-shadow-picker__offset'
					onMouseDown={e => setGrab(true)}
					onMouseMove={e => {
						e.stopPropagation();
						if (!grab){
							return;
						}
						const rect = ref.current.getBoundingClientRect();
						const x = e.nativeEvent.clientX - rect.left;
						const y = e.nativeEvent.clientY - rect.top;
						const width = ref.current.clientWidth;
						const height = ref.current.clientHeight;
						const prcX = (x / width);
						const prcY = (y / height);
						const offsetX = - (2 * maxOffset * prcX - maxOffset);
						const offsetY = - (2 * maxOffset * prcY - maxOffset);
						setLightPosition({
							x:clamp(prcX * 100, 0, 100),
							y:clamp(prcY * 100, 0, 100)
						});
						setOffset({
							x:Math.round(clamp(offsetX, - maxOffset, maxOffset)),
							y:Math.round(clamp(offsetY, - maxOffset, maxOffset))
						});
					}}
					onMouseUp={e => {
						const rect = ref.current.getBoundingClientRect();
						const x = e.nativeEvent.clientX - rect.left;
						const y = e.nativeEvent.clientY - rect.top;
						const width = ref.current.clientWidth;
						const height = ref.current.clientHeight;
						const prcX = (x / width);
						const prcY = (y / height);
						const offsetX = - (2 * maxOffset * prcX - maxOffset);
						const offsetY = - (2 * maxOffset * prcY - maxOffset);
						const oX = Math.round(clamp(offsetX, - maxOffset, maxOffset));
						const oY = Math.round(clamp(offsetY, - maxOffset, maxOffset));
						setGrab(false);
						onChange((oX === 0 && oY === 0 && blur === 0) ? null : {
							offsetX:oX,
							offsetY:oY,
							blur,
							color
						});
					}} >
					<div
						className='pixmagix-shadow-picker__preview'
						style={{
							boxShadow:`${offset.x}px ${offset.y}px ${blur}px ${color}`
						}} />
					<span
						className='pixmagix-shadow-picker__handle'
						style={{
							left:`${lightPosition.x}%`,
							top:`${lightPosition.y}%`
						}} >
						<Icon icon='lightbulb' />
					</span>
				</div>
				<Range
					label={__('Blur', 'pixmagix')}
					value={blur}
					onChange={value => onChange((offsetX === 0 && offsetY === 0 && value === 0) ? null : {
						offsetX,
						offsetY,
						blur:value,
						color
					})}
					min={0}
					max={100} />
				<ColorPicker
					label={__('Color', 'pixmagix')}
					color={color}
					onChange={color => onChange({
						offsetX,
						offsetY,
						blur,
						color
					})} />
			</div>
		</div>
	);

};

export default ShadowPicker;
