import type { PagedModelPersonDto } from '../models/PagedModelPersonDto';
import type { PersonDto } from '../models/PersonDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataGetList = {
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
export type TDataCreate = {
                requestBody: PersonDto
            }
export type TDataDeleteMany = {
                ids: Array<number>
            }
export type TDataGetOne = {
                id: number
            }
export type TDataDelete = {
                id: number
            }
export type TDataPatch = {
                id: number
requestBody: PersonDto
            }
export type TDataGetMany = {
                ids: Array<number>
            }

export class PersonControllerService {

	/**
	 * @returns PagedModelPersonDto OK
	 * @throws ApiError
	 */
	public static getList(data: TDataGetList = {}): CancelablePromise<PagedModelPersonDto> {
		const {
page = 0,
size = 20,
sort,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/people',
			query: {
				page, size, sort
			},
		});
	}

	/**
	 * @returns PersonDto OK
	 * @throws ApiError
	 */
	public static create(data: TDataCreate): CancelablePromise<PersonDto> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/people',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns any OK
	 * @throws ApiError
	 */
	public static deleteMany(data: TDataDeleteMany): CancelablePromise<any> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/people',
			query: {
				ids
			},
		});
	}

	/**
	 * @returns PersonDto OK
	 * @throws ApiError
	 */
	public static getOne(data: TDataGetOne): CancelablePromise<PersonDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/people/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns PersonDto OK
	 * @throws ApiError
	 */
	public static delete(data: TDataDelete): CancelablePromise<PersonDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/people/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns PersonDto OK
	 * @throws ApiError
	 */
	public static patch(data: TDataPatch): CancelablePromise<PersonDto> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/people/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns PersonDto OK
	 * @throws ApiError
	 */
	public static getMany(data: TDataGetMany): CancelablePromise<Array<PersonDto>> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/people/by-ids',
			query: {
				ids
			},
		});
	}

}