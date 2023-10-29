import {
	Fragment
} from 'react';
import {
	Input,
	Checkbox
} from 'elements';
import {
	__
} from 'wp-i18n';

const ContentPerformance = ({
	thumbnail_width,
	create_previews,
	preview_width,
	onSettingChange
}) => (
	<Fragment>
		<Input
			type='number'
			label={__('Thumbnails Width', 'pixmagix')}
			value={thumbnail_width}
			onChange={value => onSettingChange('thumbnail_width', value)}
			min={100}
			max={800}
			step={1} />
		<Checkbox
			label={__('Create Preview Images', 'pixmagix')}
			checked={create_previews}
			onChange={value => onSettingChange('create_previews', value)} />
		{create_previews && (
			<Input
				type='number'
				label={__('Previews Width', 'pixmagix')}
				value={preview_width}
				onChange={value => onSettingChange('preview_width', value)}
				min={360}
				max={1920}
				step={1} />
		)}
	</Fragment>
);

export default ContentPerformance;