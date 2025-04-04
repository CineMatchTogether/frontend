import type { CountryDto } from '../models/CountryDto';
import type { PagedModelCountryDto } from '../models/PagedModelCountryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataGetList3 = {
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
export type TDataCreate3 = {
                requestBody: CountryDto
            }
export type TDataDeleteMany3 = {
                ids: Array<number>
            }
export type TDataGetOne3 = {
                id: number
            }
export type TDataDelete3 = {
                id: number
            }
export type TDataPatch3 = {
                id: number
requestBody: CountryDto
            }
export type TDataGetMany3 = {
                ids: Array<number>
            }

export class CountryControllerService {

	/**
	 * @returns PagedModelCountryDto OK
	 * @throws ApiError
	 */
	public static getList3(data: TDataGetList3 = {}): CancelablePromise<PagedModelCountryDto> {
		const {
page = 0,
size = 20,
sort,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/countries',
			query: {
				page, size, sort
			},
		});
	}

	/**
	 * @returns CountryDto OK
	 * @throws ApiError
	 */
	public static create3(data: TDataCreate3): CancelablePromise<CountryDto> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/countries',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns any OK
	 * @throws ApiError
	 */
	public static deleteMany3(data: TDataDeleteMany3): CancelablePromise<any> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/countries',
			query: {
				ids
			},
		});
	}

	/**
	 * @returns CountryDto OK
	 * @throws ApiError
	 */
	public static getOne3(data: TDataGetOne3): CancelablePromise<CountryDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/countries/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns CountryDto OK
	 * @throws ApiError
	 */
	public static delete3(data: TDataDelete3): CancelablePromise<CountryDto> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/countries/{id}',
			path: {
				id
			},
		});
	}

	/**
	 * @returns CountryDto OK
	 * @throws ApiError
	 */
	public static patch3(data: TDataPatch3): CancelablePromise<CountryDto> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/countries/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns CountryDto OK
	 * @throws ApiError
	 */
	public static getMany3(data: TDataGetMany3): CancelablePromise<Array<CountryDto>> {
		const {
ids,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/countries/by-ids',
			query: {
				ids
			},
		});
	}

}