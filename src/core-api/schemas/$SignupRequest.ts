export const $SignupRequest = {
	properties: {
		username: {
	type: 'string',
	isRequired: true,
	maxLength: 20,
	minLength: 3,
},
		email: {
	type: 'string',
	isRequired: true,
},
		password: {
	type: 'string',
	isRequired: true,
	maxLength: 2147483647,
	minLength: 6,
},
		roles: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;