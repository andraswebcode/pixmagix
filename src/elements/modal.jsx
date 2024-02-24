import Popup from 'reactjs-popup';
import cn from 'classnames';
import {
	__
} from 'wp-i18n';

import Button from './button.jsx';
import ButtonGroup from './button-group.jsx';

const Modal = ({
	title,
	small,
	middle,
	onClose,
	children,
	actions,
	navigation
}) => (
	<Popup 
		open
		onClose={onClose}
		nested={true} // Necessary for help popup to be able to click the read more button.
		overlayStyle={{
			zIndex:99999,
			background:'rgba(0, 0, 0, 0.8)'
		}} >
		<div className={cn('pixmagix-modal', 'pixmagix', {
			small,
			middle
		})}>
			{!!title && (
				<div className='pixmagix-modal__header'>
					<h2 className='pixmagix-modal__title'>
						{title}
					</h2>
					{navigation ? (
						<ButtonGroup>
							<Button
								label={__('Previous', 'pixmagix')}
								icon='angle-left'
								small
								disabled={navigation.prev?.disabled}
								onClick={navigation.prev?.onClick} />
							<Button
								label={__('Next', 'pixmagix')}
								icon='angle-right'
								small
								disabled={navigation.next?.disabled}
								onClick={navigation.next?.onClick} />
							<Button
								label={__('Close Modal', 'pixmagix')}
								icon='times'
								small
								onClick={onClose} />
						</ButtonGroup>
					) : (
						<Button
							label={__('Close Modal', 'pixmagix')}
							icon='times'
							small
							onClick={onClose} />
					)}
				</div>
			)}
			<div className='pixmagix-modal__inner'>
				{children}
			</div>
			{!!actions && (
				<ButtonGroup className='pixmagix-modal__actions'>
					{actions}
				</ButtonGroup>
			)}
		</div>
	</Popup>
);

export default Modal;
