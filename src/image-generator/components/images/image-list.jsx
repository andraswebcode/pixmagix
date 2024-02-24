import {
	connect
} from 'react-redux';
import {
	Grid
} from 'elements';
import {
	times
} from 'lodash';

import ImageItem from './image-item.jsx';

const ImageList = ({
	samplesCount
}) => (
	<Grid columns={2}>
		{times(samplesCount, i => (
			<ImageItem
				key={i}
				index={i} />
		))}
	</Grid>
);

export default connect(state => ({
	samplesCount:state.samplesCount
}))(ImageList);
