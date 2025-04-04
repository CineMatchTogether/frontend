export const $PagedModelMovieDto = {
	properties: {
		content: {
	type: 'array',
	contains: {
		type: 'MovieDto',
	},
},
		page: {
	type: 'PageMetadata',
},
	},
} as const;