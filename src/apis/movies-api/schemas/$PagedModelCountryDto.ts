export const $PagedModelCountryDto = {
	properties: {
		content: {
	type: 'array',
	contains: {
		type: 'CountryDto',
	},
},
		page: {
	type: 'PageMetadata',
},
	},
} as const;