
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataFetchMoviesAsync = {
                endPage: number
startPage: number
            }

export class KinoPoiskApiControllerService {

	/**
	 * @returns string OK
	 * @throws ApiError
	 */
	public static fetchMoviesAsync(data: TDataFetchMoviesAsync): CancelablePromise<string> {
		const {
endPage,
startPage,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/kinopoisk/fetchpages',
			query: {
				startPage, endPage
			},
		});
	}

}