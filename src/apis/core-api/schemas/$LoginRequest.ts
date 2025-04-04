export const $LoginRequest = {
	properties: {
		username: {
	type: 'string',
	isRequired: true,
},
		password: {
	type: 'string',
	isRequired: true,
},
	},
} as const;