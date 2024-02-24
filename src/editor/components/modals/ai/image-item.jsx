import {
	useRef,
	useState,
	useEffect
} from 'react';
import {
	connect
} from 'react-redux';
import {
	GridItem,
	Loader
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	toFixed
} from './../../../utils/utils.js';
import {
	setEditor
} from './../../../redux/actions-editor.js';

const ImageItem = ({
	src,
	aiImageOptions,
	isAIImageGenerating,
	setEditor
}) => {

	const ref = useRef(null);
	const [height, setHeight] = useState(0);
	const {
		generator = 'openai',
		opSize = '1024x1024',
		sdSize = '1024x1024',
		stiSize = 512
	} = aiImageOptions || {};

	useEffect(() => {
		const width = ref?.current?.clientWidth;
		const size = (generator === 'openai') ? opSize : sdSize;
		if (!width || !size){
			return;
		}
		const [w, h] = (generator === 'clipdrop') ? [stiSize, stiSize] : size.split('x').map(toFixed);
		const asp = w / h;
		setHeight(width / asp);
	}, [aiImageOptions]);

	return (
		<GridItem
			ref={ref}
			style={{
				height
			}}
			src={src}
			title={__('Import This Image', 'pixmagix')}
			isEmpty={(!isAIImageGenerating && !src)}
			caption={(!isAIImageGenerating && !src) ? __('No Image', 'pixmagix') : ''}
			actions={(!isAIImageGenerating && src) ? [] : undefined}
			onClick={e => {
				e.preventDefault();
				setEditor({
					selectedMedia:{
						source_url:src,
						activeActionName:'ai'
					},
					activeModal:''
				});
			}} >
			{isAIImageGenerating && (
				<Loader show />
			)}
		</GridItem>
	);

};

export default connect((state, {index}) => {

	const {
		aiImageOptions,
		isAIImageGenerating,
		aiImageSamples
	} = state.editor;
	const sample = aiImageSamples?.[index] || {};

	return {
		aiImageOptions,
		isAIImageGenerating,
		...sample
	};

},{
	setEditor
})(ImageItem);
