import {
	Fragment,
	useState
} from 'react';
import {
	batch,
	connect
} from 'react-redux';
import {
	Button,
	Widget,
	ImageSelect,
	Checkbox,
	Select
} from 'elements';
import {
	free_image_platforms
} from 'editor-globals';
import {
	__
} from 'wp-i18n';
import {
	map,
	isEmpty,
	find as _find
} from 'lodash';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	addLayer,
	setDatasWithAddLayer
} from './../../redux/actions-data.js';
import {
	getHiddenFileInput,
	createLayerObject
} from './../../utils/utils.js';
import {
	attachmentSizes
} from './../../utils/lists.js';
import {
	applyFilters
} from './../../../utils/hooks.js';

const AddImage = props => {

	const {
		canvasWidth,
		canvasHeight,
		selectedMedia,
		setEditor,
		addLayer,
		setDatasWithAddLayer
	} = props;
	const {
		source_url,
		media_details,
		sizes = [],
		resizeImage,
		selectedSize,
		// activeTabName = 'add-image',
		activeActionName
	} = selectedMedia || {};
	const onSelect = (src, convertToDataURL) => {
		const layer = createLayerObject({
			type:'image',
			src,
			convertToDataURL
		}, false, object => {
			batch(() => {
				if (resizeImage){
					setDatasWithAddLayer({
						canvasWidth:object.width,
						canvasHeight:object.height
					}, {
						...layer,
						src:object.src,
						width:object.width,
						height:object.height,
						originalWidth:object.width,
						originalHeight:object.height,
						left:object.width / 2,
						top:object.height / 2
					});
				} else {
					addLayer({
						...layer,
						src:object.src,
						width:object.width,
						height:object.height,
						originalWidth:object.width,
						originalHeight:object.height,
						left:canvasWidth / 2,
						top:canvasHeight / 2
					});
				}
				setEditor('selectedMedia', null);
			});
		});
	};
	const actions = applyFilters('editor.addImage.actions', [{
		name:'media',
		label:__('Import From Media', 'pixmagix'),
		tab:'add-image',
		onClick:() => setEditor('activeModal', 'import-media'),
		settings:(
			<Widget>
				<ImageSelect
					src={media_details?.sizes?.[selectedSize]?.source_url || source_url}
					controls={(
						<Fragment>
							<Checkbox
								label={__('Resize Canvas to Image Size', 'pixmagix')}
								checked={resizeImage}
								onChange={value => setEditor('selectedMedia', {
									...selectedMedia,
									resizeImage:value
								})} />
							{!isEmpty(media_details?.sizes) && (
								<Select
									label={__('Image Size', 'pixmagix')}
									value={selectedSize}
									options={map(media_details.sizes, (value, key) => ({
										label:attachmentSizes[key] || key,
										value:key
									}))}
									onChange={value => setEditor('selectedMedia', {
										...selectedMedia,
										selectedSize:value
									})} />
							)}
						</Fragment>
					)}
					onReplace={() => setEditor('activeModal', 'import-media')}
					onSelect={() => onSelect(selectedSize ? media_details.sizes[selectedSize].source_url : source_url)} />
			</Widget>
		)
	},{
		name:'free-images',
		label:__('Import Free Image', 'pixmagix'),
		tab:(free_image_platforms?.length) ? 'add-image' : '',
		onClick:() => setEditor('activeModal', 'free-images'),
		settings:(
			<Widget>
				<ImageSelect
					src={sizes[2]?.value?.replace(/&#038;/g, '&')}
					controls={(
						<Fragment>
							<Checkbox
								label={__('Resize Canvas to Image Size', 'pixmagix')}
								checked={resizeImage}
								onChange={value => setEditor('selectedMedia', {
									...selectedMedia,
									resizeImage:value
								})} />
							{!isEmpty(sizes) && (
								<Select
									label={__('Image Size', 'pixmagix')}
									value={selectedSize}
									options={sizes}
									onChange={value => setEditor('selectedMedia', {
										...selectedMedia,
										selectedSize:value
									})} />
							)}
						</Fragment>
					)}
					onReplace={() => setEditor('activeModal', 'free-images')}
					onSelect={() => onSelect(selectedSize || sizes[0]?.value, true)} />
			</Widget>
		)
	},{
		name:'upload',
		label:__('Upload From Computer', 'pixmagix'),
		tab:'add-image',
		onClick:() => getHiddenFileInput('image/png, image/jpeg, image/webp', 'readAsDataURL', src => {
			setEditor('selectedMedia', {
				...selectedMedia,
				activeActionName:'upload',
				source_url:src
			});
		}).click(),
		settings:(
			<Widget>
				<ImageSelect
					src={source_url}
					controls={(
						<Checkbox
							label={__('Resize Canvas to Image Size', 'pixmagix')}
							checked={resizeImage}
							onChange={value => setEditor('selectedMedia', {
								...selectedMedia,
								resizeImage:value
							})} />
					)}
					onReplace={() => getHiddenFileInput('image/png, image/jpeg, image/webp', 'readAsDataURL', src => {
						setEditor('selectedMedia', {
							...selectedMedia,
							source_url:src
						});
					}).click()}
					onSelect={() => onSelect(source_url)} />
			</Widget>
		)
	}], props);
	const getActionButtons = tabName => actions.map(({
		name,
		tab,
		label,
		onClick
	}) => (tab === tabName) && (
		<Button
			key={name}
			block
			active={(activeActionName === name)}
			onClick={onClick} >
			{label}
		</Button>
	)).filter(button => !!button);
	const tabs = applyFilters('editor.addImage.tabs', [{
		name:'add-image',
		label:__('Add Image', 'pixmagix')
	}]).map(tab => ({
		...tab,
		content:getActionButtons(tab.name)
	}));
	const activeAction = _find(actions, {
		name:activeActionName
	});

	return (
		<Fragment>
			<Widget
				tabs={tabs}
				onChange={({name}) => {}} />
			{!!(selectedMedia && activeAction /* && activeTabName === activeAction.tab */) && activeAction.settings}
		</Fragment>
	);

};

export default connect(state => ({
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight,
	selectedMedia:state.editor.selectedMedia
}),{
	setEditor,
	addLayer,
	setDatasWithAddLayer
})(AddImage);
