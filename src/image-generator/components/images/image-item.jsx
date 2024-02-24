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
	editor_url
} from 'editor-globals';
import {
	__
} from 'wp-i18n';

import {
	toFixed,
	addQueryArgs
} from './../../../utils/utils.js';
import {
	setEditor
} from './../../redux/actions.js';

const ImageItem = ({
	index,
	src,
	size,
	isGenerating,
	isSidebarOpened,
	setEditor
}) => {

	const ref = useRef(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const width = ref?.current?.clientWidth;
		if (!width || !size){
			return;
		}
		const [w, h] = size.split('x').map(toFixed);
		const asp = w / h;
		setHeight(width / asp);
	}, [
		size,
		isSidebarOpened
	]);

	return (
		<GridItem
			ref={ref}
			style={{
				height
			}}
			src={src}
			isEmpty={(!isGenerating && !src)}
			caption={(!isGenerating && !src) ? __('No Image', 'pixmagix') : ''}
			actions={(!isGenerating && src) ? [{
				name:'edit-image',
				label:__('Open Image in Editor', 'pixmagix'),
				icon:'pen-to-square',
				href:addQueryArgs({
					image:src
				}, editor_url)
			},{
				name:'export-media',
				label:__('Export Image to Media Library', 'pixmagix'),
				icon:'file-export',
				onClick:() => setEditor({
					activeModal:'export-media',
					activeItemURL:src,
					activeItemIndex:index
				})
			},{
				name:'download-image',
				label:__('Download Image', 'pixmagix'),
				icon:'download',
				onClick:() => setEditor({
					activeModal:'download-image',
					activeItemURL:src,
					activeItemIndex:index
				})
			}] : undefined}
			onClick={e => {
				e.preventDefault();
			}} >
			{isGenerating && (
				<Loader show />
			)}
		</GridItem>
	);

};

export default connect((state, {index}) => {

	const {
		size,
		samples,
		isGenerating,
		isSidebarOpened
	} = state;
	const sample = samples[index] || {};

	return {
		size,
		isGenerating,
		isSidebarOpened,
		...sample
	};

},{
	setEditor
})(ImageItem);
