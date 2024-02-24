import {
	Widget,
	InlineNotice
} from 'elements';
import {
	__
} from 'wp-i18n';

const Generating = () => (
	<Widget>
		<InlineNotice
			message={__('Images are being created. This may take a while. Please be patient.', 'pixmagix')}
			show={true} />
	</Widget>
);

export default Generating;
