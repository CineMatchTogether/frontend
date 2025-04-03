export const $UserDto = {
	properties: {
		id: {
	type: 'string',
	format: 'uuid',
},
		username: {
	type: 'string',
},
		email: {
	type: 'string',
},
		roles: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;