import {
	Image as FabricImage,
	util
} from 'fabric';

import Duotone from './filters/duotone.js';
import Gamma from './filters/gamma.js';
import EdgeDetect from './filters/edge-detect.js';
import Emboss from './filters/emboss.js';
import Sharpen from './filters/sharpen.js';

const newFilters = {
	Duotone,
	Gamma,
	EdgeDetect,
	Emboss,
	Sharpen
};

util.object.extend(FabricImage.filters, newFilters);

for (let filter in newFilters){
	FabricImage.filters[filter].fromObject = FabricImage.filters.BaseFilter.fromObject;
}
