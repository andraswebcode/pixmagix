import {
	useState
} from 'react';

import Icon from './icon.jsx';

const AccordionItem = ({
	name,
	label,
	show,
	content,
	onChange
}) => (
	<div className='pixmagix-accordion'>
		<div
			className='pixmagix-accordion__header pixmagix-button'
			onClick={() => onChange(show ? undefined : name)} >
			<span className='pixmagix-accordion__label'>
				{label}
			</span>
			<Icon
				icon={show ? 'angle-up' : 'angle-down'} />
		</div>
		{show && (
			<div className='pixmagix-accordion__content'>
				{content}
			</div>
		)}
	</div>
);

const Accordion = ({
	items = [],
	initShow
}) => {

	const [show, setShow] = useState(initShow);

	return items.map(item => (
		<AccordionItem
			key={item.name}
			show={(show === item.name)}
			onChange={setShow}
			{...item} />
	));

};

export default Accordion;
