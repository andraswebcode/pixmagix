import {
	useState
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Row,
	Column,
	Widget,
	Input,
	InputGroup,
	Select
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	getDownloadAnchor
} from './../../utils/utils.js';
import {
	preserveAspectRatios
} from './../../utils/lists.js';
import getHelpText from './../../utils/help-texts.js';

const DownloadSVG = ({
	projectName,
	svgString,
	svgWidth,
	svgHeight,
	preserveAspectRatio,
	canvasWidth,
	canvasHeight,
	setEditor
}) => {

	const [filename, setFilename] = useState('');
	const downloadSVG = () => {
		const _filename = filename || projectName || 'pixmagix';
		const base64SVG = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
		getDownloadAnchor(base64SVG, _filename, 'svg').click();
	};

	return (
		<Modal
			title={__('Download SVG', 'pixmagix')}
			onClose={() => setEditor('activeModal', '')}
			actions={(
				<Button
					active
					onClick={downloadSVG} >
					{__('Download', 'pixmagix')}
				</Button>
			)} >
			<Row>
				<Column>
					<figure dangerouslySetInnerHTML={{__html:svgString}} />
				</Column>
				<Column>
					<Widget>
						<Input
							label={__('File Name', 'pixmagix')}
							value={filename}
							onChange={setFilename} />
						<InputGroup>
							<Input
								type='number'
								label={__('Width', 'pixmagix')}
								placeholder={canvasWidth}
								value={svgWidth || canvasWidth}
								onChange={value => setEditor('svgWidth', value)}
								min={0}
								max={4000} />
							<Input
								type='number'
								label={__('Height', 'pixmagix')}
								placeholder={canvasHeight}
								value={svgHeight || canvasHeight}
								onChange={value => setEditor('svgHeight', value)}
								min={0}
								max={4000} />
						</InputGroup>
						<Select
							label={__('Preserve Aspect Ratio', 'pixmagix')}
							help={getHelpText('par')}
							options={[{
								label:__('Default', 'pixmagix'),
								value:''
							}].concat(preserveAspectRatios.map(value => ({
								label:value,
								value
							})))}
							value={preserveAspectRatio}
							onChange={value => setEditor('preserveAspectRatio', value)} />
					</Widget>
				</Column>
			</Row>
		</Modal>
	);

};

export default connect(state => ({
	projectName:state.editor.projectName,
	svgString:state.editor.svgString,
	svgWidth:state.editor.svgWidth,
	svgHeight:state.editor.svgHeight,
	preserveAspectRatio:state.editor.preserveAspectRatio,
	canvasWidth:state.data.present.canvasWidth,
	canvasHeight:state.data.present.canvasHeight
}),{
	setEditor
})(DownloadSVG);
