import {
	Fragment
} from 'react';
import {
	Input
} from 'elements';
import {
	__
} from 'wp-i18n';

const ContentGeneral = ({
	thumbnail_width,
	preview_width,
	onSettingChange
}) => {

	return (
		<Fragment>
			<Input
				type='number'
				label={__('Thumbnails Width', 'pixmagix')}
				value={thumbnail_width}
				onChange={value => onSettingChange('thumbnail_width', value)}
				min={100}
				max={800}
				step={1} />
			<Input
				type='number'
				label={__('Previews Width', 'pixmagix')}
				value={preview_width}
				onChange={value => onSettingChange('preview_width', value)}
				min={360}
				max={1920}
				step={1} />
		</Fragment>
	);

};

export default ContentGeneral;
