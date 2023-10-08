/**
 * 
 * @since 1.0.0
 */

const parseResponse = response => response.json ? response.json() : Promise.reject(response);

/**
 * 
 * @since 1.0.0
 */

const paginatingMiddlewareResponse = async response => {
	if (!response.json){
		return response;
	}
	const items = await parseResponse(response);
	return {
		items,
		totalPages:parseInt(response?.headers?.get('X-WP-TotalPages') || 1)
	}
};

/**
 * 
 * @since 1.2.0
 */

const arrangedMiddlewareResponse = async response => {

	const hasAdditionalDatas = !!response.items;
	const items = hasAdditionalDatas ? response.items : response;
	const newItems = items?.map(({
		id,
		title = {},
		caption,
		description,
		author,
		pixmagix_category = [],
		status,
		meta = {}
	}) => ({
		id,
		metadata:{
			title:title.rendered || '',
			caption,
			description,
			author,
			category:pixmagix_category[0] || 0,
			status
		},
		project:meta.pixmagix_project || {}
	})) || [];

	return hasAdditionalDatas ? {
		...response,
		items:newItems
	} : newItems;

};

/**
 * 
 * @since 1.0.0
 */

export const createPaginatingMiddleware = (options, next) => (
	options.withTotalPages &&
	(options.method === 'GET' || !options.method)
) ? next({
	...options,
	parse:false
}).then(paginatingMiddlewareResponse) : next(options);

/**
 * 
 * @since 1.2.0
 */

export const createArrangedMiddleware = (options, next) => options.arrangeParams ? next(options).then(arrangedMiddlewareResponse) : next(options);
