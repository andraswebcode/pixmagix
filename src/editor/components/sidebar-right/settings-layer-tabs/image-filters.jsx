import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	LibrarySelect,
	Repeater
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	find as _find,
	findIndex
} from 'lodash';
import {
	images_folder
} from 'editor-globals';

import {
	setLayerProps
} from './../../../redux/actions-data.js';
import {
	imageFilters
} from './../../../utils/lists.js';

const ImageFilters = ({
	layer = {},
	setLayerProps
}) => {

	const {
		id,
		filters,
		clipPath
	} = layer;

	return (
		<Fragment>
			<LibrarySelect
				label={__('Add Filters', 'pixmagix')}
				itemType='image'
				items={imageFilters.map(item => ({
					name:item.name,
					label:item.label,
					src:(images_folder || '') + 'filter-' + item.name.toLowerCase() + '.jpg'
				}))}
				multiple
				value={filters.map(filter => filter.type)}
				onChange={value => {
					const filters = value.map(name => {
						const options = _find(imageFilters, {name});
						if (!options){
							return;
						}
						const output = {
							type:options.name
						};
						options.controls?.forEach(control => {
							output[control.name] = control.default
						});
						return output;
					}).filter(item => !!item);
					setLayerProps(id, 'filters', filters);
				}} />
			<Repeater
				label={__('Filters', 'pixmagix')}
				items={filters.map(filter => {
					const options = _find(imageFilters, {name:filter.type});
					const index = findIndex(filters, {
						type:filter.type
					});
					const controls = (options.controls || []).map(control => {
						return {
							...control,
							value:filter[control.name],
							defValue:control.default,
							onChange:value => {
								const newList = filters.slice();
								if (index >= 0){
									newList[index] = {
										...newList[index],
										[control.name]:value
									};
								}
								setLayerProps(id, 'filters', newList);
							}
						};
					});
					return {
						...options,
						onMove:dir => {
							const newList = arrayMoveImmutable(filters, index, (dir === 'up') ? index - 1 : index + 1);
							setLayerProps(id, 'filters', newList);
						},
						onRemove:() => {
							const newList = filters.filter(({type}) => (type !== filter.type));
							setLayerProps(id, 'filters', newList);
						},
						controls
					};
				})} />
		</Fragment>
	);

};

export default connect(state => ({
	layer:state.data.present.layers[state.editor.activeLayers[0]]
}),{
	setLayerProps
})(ImageFilters);
