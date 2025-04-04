import type { GenreDto } from '../models/GenreDto';
import type { PagedModelGenreDto } from '../models/PagedModelGenreDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataGetList2 = {
                /**
 * Zero-based page index (0..N)
 */
page?: number
/**
 * The size of the page to be returned
 */
size?: number
/**
 * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
 */
sort?: Array<string>
            }
export type TDataCreate2 = {
                requestBody: GenreDto
            }
export type TDataDeleteMany2 = {
                ids: Array<number>
            }
export type TDataGetOne2 = {
                id: number
            }
export type TDataDelete2 = {
                id: number
            }
export type TDataPatch2 = {
                id: number
requestBody: GenreDto
            }
export type TDataGetMany2 = {
                ids: Array<number>
            }

export class GenreControllerService {

	/**
	 * @returns PagedModelGenreDto OK
	 * @throws ApiError
	 */
	public static getList2(data: TDataGetList2 = {}): CancelablePromise<PagedModelGenreDto> {
		const {
page = 0,
size = 20,
sort,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/genres',
			query: {
				page, size, sort
			},
		});
	}

	/**
	 * @returns GenreDto OK
	 * @throws ApiError
	 */
	public static create2(data: TDataCreate2): CancelablePromise<GenreDto> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/genres',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns any OK
	 * @throws ApiError
	 */
	public static deleteMany2(data: TDataDeleteMany2): CancelablePromise<any> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/genres',
			query: {
				ids
			},
		});
	}

	/**
	 * @returns GenreDto OK
	 * @throws ApiError
	 */
	public static getOne2(data: TDataGetOne2): CancelablePromise<GenreDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/genres/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns GenreDto OK
	 * @throws ApiError
	 */
	public static delete2(data: TDataDelete2): CancelablePromise<GenreDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/genres/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns GenreDto OK
	 * @throws ApiError
	 */
	public static patch2(data: TDataPatch2): CancelablePromise<GenreDto> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/genres/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns GenreDto OK
	 * @throws ApiError
	 */
	public static getMany2(data: TDataGetMany2): CancelablePromise<Array<GenreDto>> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/genres/by-ids',
			query: {
				ids
			},
		});
	}

}