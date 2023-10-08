import {
	connect
} from 'react-redux';
import {
	InlineControls,
	Input,
	Select
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	users,
	project_dates
} from 'editor-globals';

import {
	setEditor
} from './../redux/actions.js';

const Filters = ({
	search,
	category,
	status,
	date,
	author,
	categoryList,
	setEditor
}) => (
	<InlineControls>
		<Input
			label={__('Search', 'pixmagix')}
			value={search}
			onChange={value => setEditor({
				page:1,
				loading:true,
				search:value
			})} />
		<Select
			label={__('Category', 'pixmagix')}
			value={category}
			options={categoryList}
			onChange={value => setEditor({
				page:1,
				loading:true,
				category:value
			})} />
		<Select
			label={__('Status', 'pixmagix')}
			value={status}
			options={[{
				label:__('All', 'pixmagix'),
				value:'any'
			},{
				label:__('Publish', 'pixmagix'),
				value:'publish'
			},{
				label:__('Private', 'pixmagix'),
				value:'private'
			}]}
			onChange={value => setEditor({
				page:1,
				loading:true,
				status:value
			})} />
		<Select
			label={__('Date', 'pixmagix')}
			value={date}
			options={project_dates}
			onChange={value => setEditor({
				page:1,
				loading:true,
				date:value
			})} />
		<Select
			label={__('Author', 'pixmagix')}
			value={author}
			options={users}
			onChange={value => setEditor({
				page:1,
				loading:true,
				author:value
			})} />
	</InlineControls>
);

export default connect(state => ({
	search:state.search,
	category:state.category,
	status:state.status,
	date:state.date,
	author:state.author,
	categoryList:state.categoryList
}),{
	setEditor
})(Filters);
