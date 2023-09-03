import {
	useRef,
	useState
} from 'react';
import cn from 'classnames';

const BeforeAfterSlider = ({
	className,
	src1,
	src2,
	caption1,
	caption2
}) => {

	const ref = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState(50);
	const onMouseDown = e => {
		e.preventDefault();
		setIsDragging(true);
	};
	const onMouseMove = e => {
		if (!isDragging || !ref.current){
			return;
		}
		const {
			left,
			width
		} = ref.current.getBoundingClientRect();
		const offset = e.clientX - left;
		setPosition((offset / width) * 100);
	};
	const onMouseUp = () => setIsDragging(false);

	return (
		<div
			ref={ref}
			className={cn('pixmagix-baslider', className)}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp} >
			<figure className='pixmagix-baslider__src1'>
				<img src={src1} />
				{!!caption1 && (
					<figcaption className='pixmagix-baslider__caption1'>
						{caption1}
					</figcaption>
				)}
			</figure>
			<figure
				className='pixmagix-baslider__src2'
				style={{
					left:`${position}%`
				}} >
				<img
					src={src2}
					style={{
						left:`-${position}%`
					}} />
					{!!caption2 && (
					<figcaption className='pixmagix-baslider__caption2'>
						{caption2}
					</figcaption>
				)}
			</figure>
			<div
				className='pixmagix-baslider__delimiter'
				style={{
					left:`${position}%`
				}} />
		</div>
	);

};

export default BeforeAfterSlider;
