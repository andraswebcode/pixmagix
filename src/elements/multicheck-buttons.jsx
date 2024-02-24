import cn from 'classnames';

import Icon from './icon.jsx';
import Button from './button.jsx';
import ButtonGroup from './button-group.jsx';

const MulticheckButtons = ({
	label,
	items = []
}) => (
	<div className='pixmagix-multicheck-buttons-wrapper'>
		{!!label && (
			<span className='pixmagix-label'>
				{label}
			</span>
		)}
		<ButtonGroup className='pixmagix-multicheck-buttons'>
			{items.map((item, i) => (
				<Button
					key={i}
					label={item.label}
					icon={item.icon}
					active={item.value}
					small
					onClick={() => item.onChange(!item.value)} />
			))}
		</ButtonGroup>
	</div>
);

export default MulticheckButtons;
