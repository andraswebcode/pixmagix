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
	__
} from 'wp-i18n';
import {
	map,
	isEmpty
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

const AddImage = ({
	canvasWidth,
	canvasHeight,
	selectedMedia,
	setEditor,
	addLayer,
	setDatasWithAddLayer
}) => {

	const {
		comeFrom,
		source_url,
		media_details
	} = selectedMedia || {};
	const [resize, setResize] = useState(false);
	const [size, setSize] = useState('');
	const onUpload = () => {
		getHiddenFileInput('image/png, image/jpeg', 'readAsDataURL', src => {
			setEditor('selectedMedia', {
				comeFrom:'upload',
				source_url:src
			});
		}).click();
	};

	return (
		<Fragment>
			<Widget
				label={__('Add Image', 'pixmagix')} >
				<Button
					active
					block
					onClick={() => setEditor('activeModal', 'import-media')} >
					{__('Import From Media', 'pixmagix')}
				</Button>
				<Button
					active
					block
					onClick={onUpload} >
					{__('Upload From Computer', 'pixmagix')}
				</Button>
			</Widget>
			{!!selectedMedia && (
				<Widget
					label={__('Selected Image', 'pixmagix')} >
					<ImageSelect
						src={media_details?.sizes?.[size]?.source_url || source_url}
						controls={(comeFrom === 'upload') ? (
							<Checkbox
								label={__('Resize Canvas to Image Size', 'pixmagix')}
								checked={resize}
								onChange={setResize} />
						) : (
							<Fragment>
								<Checkbox
									label={__('Resize Canvas to Image Size', 'pixmagix')}
									checked={resize}
									onChange={setResize} />
								{!isEmpty(media_details?.sizes) && (
									<Select
										label={__('Image Size', 'pixmagix')}
										value={size}
										options={map(media_details.sizes, (value, key) => ({
											label:attachmentSizes[key] || key,
											value:key
										}))}
										onChange={setSize} />
								)}
							</Fragment>
						)}
						onReplace={() => {
							if (comeFrom === 'upload'){
								onUpload();
							} else {
								setEditor('activeModal', 'import-media');
							}
						}}
						onSelect={() => {
							const layer = createLayerObject({
								type:'image',
								src:size ? media_details.sizes[size].source_url : source_url
							}, false, object => {
								batch(() => {
									if (resize){
										setDatasWithAddLayer({
											canvasWidth:object.width,
											canvasHeight:object.height
										}, {
											...layer,
											width:object.width,
											height:object.height,
											left:object.width / 2,
											top:object.height / 2
										});
									} else {
										addLayer({
											...layer,
											width:object.width,
											height:object.height,
											left:canvasWidth / 2,
											top:canvasHeight / 2
										});
									}
									setEditor('selectedMedia', null);
								});
							});
						}} />
				</Widget>
			)}
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
