export const $PagedModelPersonDto = {
	properties: {
		content: {
	type: 'array',
	contains: {
		type: 'PersonDto',
	},
},
		page: {
	type: 'PageMetadata',
},
	},
} as const;