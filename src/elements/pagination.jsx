import {
	__
} from 'wp-i18n';

import Button from './button.jsx';
import ButtonGroup from './button-group.jsx';
import Input from './input.jsx';

const Pagination = ({
	page,
	onChange,
	maxPages = 2
}) => (maxPages > 1) ? (
	<div className='pixmagix-pagination'>
		<ButtonGroup>
			<Button
				label={__('Previous Page', 'pixmagixembrant')}
				icon='angle-left'
				small
				disabled={page === 1}
				onClick={() => onChange(Math.max(page - 1, 1))} />
			<Input
				type='number'
				value={page}
				onChange={value => onChange(value)}
				min={1}
				max={maxPages}
				step={1} />
			<Button
				label={__('Next Page', 'pixmagixembrant')}
				icon='angle-right'
				small
				disabled={page === maxPages}
				onClick={() => onChange(Math.min(page + 1, maxPages))} />
		</ButtonGroup>
	</div>
) : null;

export default Pagination;
