import Popup from 'reactjs-popup';
import {
	__
} from 'wp-i18n';

import Icon from './icon.jsx';
import Button from './button.jsx';

const Help = ({
	text,
	link
}) => text ? (
	<Popup
		className='pixmagix-help'
		position='top center'
		arrow={true}
		keepTooltipInside={true}
		trigger={() => (
			<Icon
				className='pixmagix-help'
				title={__('Info', 'pixmagix')}
				icon='circle-info'
				size='xs' />
		)}
		contentStyle={{
			zIndex:99999
		}}
		overlayStyle={{
			background:'transparent'
		}} >
		<p>
			{text}
		</p>
		{!!link && (
			<Button
				active
				small
				href={link}
				target='_blank' >
				{__('Read More', 'pixmagix')}
			</Button>
		)}
	</Popup>
) : null;

export default Help;
