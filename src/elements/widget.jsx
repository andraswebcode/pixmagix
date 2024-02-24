import {
	useState
} from 'react';
import {
	findIndex
} from 'lodash';
import cn from 'classnames';

import Icon from './icon.jsx';

const Widget = ({
	label,
	tabs,
	children,
	initShow,
	onChange
}) => {

	const [show, setShow] = useState(initShow || tabs?.[0]?.name);
	const index = findIndex(tabs, {
		name:show
	});

	return  tabs ? (
		<div className='pixmagix-widget'>
			<div className='pixmagix-widget__label'>
				{tabs.map(tab => (
					<span
						key={tab.name}
						className={cn({
							passive:show !== tab.name
						})}
						title={tab.icon ? tab.label : undefined}
						onClick={() => {
							setShow(tab.name);
							onChange?.(tab);
						}} >
						{tab.icon ? (
							<Icon icon={tab.icon} />
						) : tab.label}
					</span>
				))}
			</div>
			<div className={cn('pixmagix-widget__content', {
				[`pixmagix-widget__content-${show}`]:show
			})}>
				{tabs[index]?.content}
			</div>
		</div>
	) : (
		<div className='pixmagix-widget'>
			{!!label && (
				<div className='pixmagix-widget__label'>
					<span>
						{label}
					</span>
				</div>
			)}
			<div className='pixmagix-widget__content'>
				{children}
			</div>
		</div>
	);

};

export default Widget;
