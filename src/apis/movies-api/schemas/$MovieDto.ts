export const $MovieDto = {
	properties: {
		id: {
	type: 'number',
	format: 'int64',
},
		name: {
	type: 'string',
},
		description: {
	type: 'string',
},
		shortDescription: {
	type: 'string',
},
		year: {
	type: 'number',
	format: 'int32',
},
		kpRating: {
	type: 'number',
	format: 'double',
},
		imdbRating: {
	type: 'number',
	format: 'double',
},
		movieLength: {
	type: 'number',
	format: 'int32',
},
		posterUrl: {
	type: 'string',
},
		logoUrl: {
	type: 'string',
},
		genres: {
	type: 'array',
	contains: {
		type: 'GenreDto',
	},
},
		countries: {
	type: 'array',
	contains: {
		type: 'CountryDto',
	},
},
		persons: {
	type: 'array',
	contains: {
		type: 'PersonDto',
	},
},
	},
} as const;