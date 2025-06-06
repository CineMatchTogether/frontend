import type { ApiRequestOptions } from './ApiRequestOptions';
import type { TConfig, TResult } from './types';
const apiUrl: string = import.meta.env.VITE_CORE_API_URL;

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
	BASE: string;
	CREDENTIALS: 'include' | 'omit' | 'same-origin';
	ENCODE_PATH?: ((path: string) => string) | undefined;
	HEADERS?: Headers | Resolver<Headers> | undefined;
	PASSWORD?: string | Resolver<string> | undefined;
	RESULT?: TResult;
	TOKEN?: string | Resolver<string> | undefined;
	USERNAME?: string | Resolver<string> | undefined;
	VERSION: string;
	WITH_CREDENTIALS: boolean;
};

export const OpenAPI: OpenAPIConfig = {
	BASE: `${apiUrl}`,
	CREDENTIALS: 'include',
	ENCODE_PATH: undefined,
	HEADERS: undefined,
	PASSWORD: undefined,
	RESULT: 'body',
	TOKEN: undefined,
	USERNAME: undefined,
	VERSION: '0',
	WITH_CREDENTIALS: true,
};

export const mergeOpenApiConfig = <T extends TResult>(config: OpenAPIConfig, overrides: TConfig<T>) => {
	const merged = { ...config };
	Object.entries(overrides)
		.filter(([key]) => key.startsWith('_'))
		.forEach(([key, value]) => {
			const k = key.slice(1).toLocaleUpperCase() as keyof typeof merged;
			if (merged.hasOwnProperty(k)) {
				// @ts-ignore
				merged[k] = value;
			}
		});
	return merged;
};