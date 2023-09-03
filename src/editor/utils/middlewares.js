const parseResponse = response => response.json ? response.json() : Promise.reject(response);

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

export const createPaginatingMiddleware = (options, next) => (
	options.withTotalPages &&
	(options.method === 'GET' || !options.method)
) ? next({
	...options,
	parse:false
}).then(paginatingMiddlewareResponse) : next(options);
