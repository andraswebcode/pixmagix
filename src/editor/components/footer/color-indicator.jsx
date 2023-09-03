import {
	connect
} from 'react-redux';
import {
	__
} from 'wp-i18n';

const ColorIndicator = ({
	pencilColor,
	fillColor
}) => (
	<div className='pixmagix-footer__colorindicator'>
		<span
			className='pixmagix-footer__colorindicator-pen'
			title={__('Stroke Color', 'pixmagix')} >
			<span
				style={{
					backgroundColor:pencilColor
				}} />
		</span>
		<span
			className='pixmagix-footer__colorindicator-fill'
			title={__('Fill Color', 'pixmagix')} >
			<span
				style={{
					backgroundColor:fillColor
				}} />
		</span>
	</div>
);

export default connect(state => ({
	pencilColor:state.editor.pencilColor,
	fillColor:state.editor.fillColor
}))(ColorIndicator);
