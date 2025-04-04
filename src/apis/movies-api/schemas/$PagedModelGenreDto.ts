export const $PagedModelGenreDto = {
	properties: {
		content: {
	type: 'array',
	contains: {
		type: 'GenreDto',
	},
},
		page: {
	type: 'PageMetadata',
},
	},
} as const;