import type { MovieDto } from '../models/MovieDto';
import type { PagedModelMovieDto } from '../models/PagedModelMovieDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataGetList1 = {
                genresNameContains?: string
kpRatingGte?: number
kpRatingLte?: number
nameContains?: string
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
yearGte?: number
yearLte?: number
            }
export type TDataCreate1 = {
                requestBody: MovieDto
            }
export type TDataDeleteMany1 = {
                ids: Array<number>
            }
export type TDataGetOne1 = {
                id: number
            }
export type TDataDelete1 = {
                id: number
            }
export type TDataPatch1 = {
                id: number
requestBody: MovieDto
            }
export type TDataGetMany1 = {
                ids: Array<number>
            }

export class MovieControllerService {

	/**
	 * @returns PagedModelMovieDto OK
	 * @throws ApiError
	 */
	public static getList1(data: TDataGetList1 = {}): CancelablePromise<PagedModelMovieDto> {
		const {
genresNameContains,
kpRatingGte,
kpRatingLte,
nameContains,
page = 0,
size = 20,
sort,
yearGte,
yearLte,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/movies',
			query: {
				genresNameContains, nameContains, yearGte, yearLte, kpRatingGte, kpRatingLte, page, size, sort
			},
		});
	}

	/**
	 * @returns MovieDto OK
	 * @throws ApiError
	 */
	public static create1(data: TDataCreate1): CancelablePromise<MovieDto> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/movies',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns any OK
	 * @throws ApiError
	 */
	public static deleteMany1(data: TDataDeleteMany1): CancelablePromise<any> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/movies',
			query: {
				ids
			},
		});
	}

	/**
	 * @returns MovieDto OK
	 * @throws ApiError
	 */
	public static getOne1(data: TDataGetOne1): CancelablePromise<MovieDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/movies/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns MovieDto OK
	 * @throws ApiError
	 */
	public static delete1(data: TDataDelete1): CancelablePromise<MovieDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/movies/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns MovieDto OK
	 * @throws ApiError
	 */
	public static patch1(data: TDataPatch1): CancelablePromise<MovieDto> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/movies/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns MovieDto OK
	 * @throws ApiError
	 */
	public static getMany1(data: TDataGetMany1): CancelablePromise<Array<MovieDto>> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/movies/by-ids',
			query: {
				ids
			},
		});
	}

}