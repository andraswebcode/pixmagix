import {
	reduce,
	findIndex
} from 'lodash';
import {
	arrayMoveImmutable
} from 'array-move';
import {
	__,
	_n
} from 'wp-i18n';

import {
	toFixed,
	createUniqueId,
	createLayerObject,
	qrDecompose
} from './utils.js';

/**
 * 
 * @since 1.0.0
 * @return {array}
 */

export default ({
	layers,
	layerIds,
	activeLayers,
	setData,
	addLayer,
	removeLayer,
	replaceLayer,
	setLayerProps
}) => {

	const firstLayer = layers[activeLayers[0]];
	const isOneGroupSelected = (activeLayers.length === 1 && firstLayer?.type === 'group');
	const is1stVisible = !!(firstLayer?.visible);
	const is1stLocked = !(firstLayer?.selectable);

	return [{
		name:'move-up',
		label:__('Move Layer up', 'pixmagix'),
		icon:'angle-up',
		disabled:() => (activeLayers?.length !== 1 || findIndex(layerIds, id => (id === firstLayer?.id)) === 0),
		onClick:() => {
			const index = findIndex(layerIds, id => (id === firstLayer?.id));
			const newList = arrayMoveImmutable(layerIds, index, index - 1);
			setData('layerIds', newList);
		}
	},{
		name:'move-down',
		label:__('Move Layer Down', 'pixmagix'),
		icon:'angle-down',
		disabled:() => (activeLayers?.length !== 1 || findIndex(layerIds, id => (id === firstLayer?.id)) === layerIds.length - 1),
		onClick:() => {
			const index = findIndex(layerIds, id => (id === firstLayer?.id));
			const newList = arrayMoveImmutable(layerIds, index, index + 1);
			setData('layerIds', newList);
		}
	},{
		name:'lock',
		label:is1stLocked ? _n('Unlock Layer', 'Unlock Layers', activeLayers.length, 'pixmagix') : _n('Lock Layer', 'Lock Layers', activeLayers.length, 'pixmagix'),
		icon:!is1stLocked || !activeLayers?.length ? 'lock' : 'lock-open',
		disabled:() => !(activeLayers?.length),
		onClick:() => setLayerProps(reduce(activeLayers, (memo, id) => {
			memo[id] = {
				selectable:is1stLocked
			};
			return memo;
		}, {}))
	},{
		name:'visible',
		label:is1stVisible ? _n('Set Layer to Hidden', 'Set Layers to Hidden', activeLayers.length, 'pixmagix') : _n('Set Layer to Visible', 'Set Layers to Visible', activeLayers.length, 'pixmagix'),
		icon:is1stVisible ? 'eye-slash' : 'eye',
		disabled:() => !(activeLayers?.length),
		onClick:() => setLayerProps(reduce(activeLayers, (memo, id) => {
			memo[id] = {
				visible:!is1stVisible
			};
			return memo;
		}, {}))
	},{
		name:'duplicate',
		label:_n('Dubplicate Layer', 'Dubplicate Layers', activeLayers.length, 'pixmagix'),
		icon:'copy',
		disabled:() => !(activeLayers?.length),
		onClick:() => {
			const newLayers = activeLayers.map(id => ({
				...layers[id],
				id:createUniqueId()
			}));
			addLayer(newLayers);
		}
	},{
		name:'group',
		label:isOneGroupSelected ? __('Ungroup Layers', 'pixmagix') : __('Group Layers', 'pixmagix'),
		icon:isOneGroupSelected ? 'object-ungroup' : 'object-group',
		disabled:() => (activeLayers?.length <= 1 && layers[activeLayers[0]]?.type !== 'group'),
		onClick:() => {
			if (isOneGroupSelected){
				const group = createLayerObject(firstLayer, true);
				const newLayers = group._objects.map(obj => {
					const {
						translateX,
						translateY,
						scaleX,
						scaleY,
						skewX,
						skewY,
						angle
					} = qrDecompose(obj.calcTransformMatrix());
					return createLayerObject({
						...obj.toObject(),
						left:toFixed(translateX),
						top:toFixed(translateY),
						scaleX:toFixed(scaleX),
						scaleY:toFixed(scaleY),
						skewX:toFixed(skewX),
						skewY:toFixed(skewY),
						angle:toFixed(angle)
					});
				});
				replaceLayer(newLayers, firstLayer.id);
			} else {
				const group = createLayerObject({
					type:'group',
					objects:activeLayers.map(id => layers[id])
				});
				replaceLayer(group, activeLayers);
			}
		}
	},{
		name:'remove',
		label:_n('Remove Layer', 'Remove Layers', activeLayers.length, 'pixmagix'),
		icon:'xmark',
		disabled:() => !(activeLayers?.length),
		onClick:() => removeLayer(activeLayers)
	}];

};
