import {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	isEqual
} from 'lodash';
import apiFetch from 'wp-api-fetch';
import {
	projects_url
} from 'editor-globals';

import {
	clamp,
	addQueryArgs,
	addToRouter
} from './../../utils/utils.js';
import {
	PROJECTS_REST_PATH
} from './../../utils/constants.js';
import{
	setEditor,
	sendNotice
} from './../redux/actions.js';

class Globals extends Component {

	/**
	 * Constructor.
	 * @since 1.2.0
	 */

	constructor(){
		super(...arguments);
	}

	/**
	 *
	 * @since 1.2.0
	 */

	componentDidMount(){}

	/**
	 *
	 * @since 1.2.0
	 */

	componentWillUnmount(){}

	/**
	 * 
	 * @since 1.2.0
	 * @param {object} nextProps
	 */

	shouldComponentUpdate(nextProps){

		const {
			page,
			search,
			category,
			status,
			date,
			author,
			setEditor,
			sendNotice
		} = nextProps;
		const query = {
			page,
			per_page:12
		};
		if (search){
			query.search = search;
		}
		if (category){
			query.pixmagix_category = category;
		}
		if (status){
			query.status = status;
		}
		if (date){
			query.yearmonth = date;
		}
		if (author){
			query.author = author;
		}

		if (!isEqual(nextProps, this.props)){
			apiFetch({
				path:addQueryArgs(query, PROJECTS_REST_PATH),
				withTotalPages:true,
				arrangeParams:true
			}).then(response => {
				console.log(response)
				const {
					items,
					totalPages
				} = response;
				setEditor({
					items,
					maxPages:totalPages,
					loading:false
				});
				const args = {
					p:page
				};
				if (search){
					args.s = search;
				}
				if (category){
					args.c = category;
				}
				if (status){
					args.st = status;
				}
				if (date){
					args.d = date;
				}
				if (author){
					args.a = author;
				}
				addToRouter(args, projects_url);
			}).catch(({message}) => {
				sendNotice(
					message,
					'error'
				);
			});
		}

		return false;

	}

	/**
	 * 
	 * @since 1.2.0
	 */

	render(){
		return null;
	}

}

export default connect(state => {

	const output = {};
	const props = [
		'page',
		'search',
		'category',
		'status',
		'date',
		'author'
	];

	props.forEach(prop => {
		output[prop] = state[prop];
	});

	return output;

},{
	setEditor,
	sendNotice
})(Globals);
