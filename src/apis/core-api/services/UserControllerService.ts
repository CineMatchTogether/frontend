
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataAddWatchedMovie = {
                requestBody: number
            }
export type TDataGetWatchHistoryByUserId = {
                userId: string
            }

export class UserControllerService {

	/**
	 * Get user watch history
	 * @returns number OK
	 * @throws ApiError
	 */
	public static getWatchHistory(): CancelablePromise<Array<number>> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/user/watch-history',
		});
	}

	/**
	 * Add movie to watch history
	 * @returns number OK
	 * @throws ApiError
	 */
	public static addWatchedMovie(data: TDataAddWatchedMovie): CancelablePromise<number> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/user/watch-history',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Get user watch history by userId
	 * @returns number OK
	 * @throws ApiError
	 */
	public static getWatchHistoryByUserId(data: TDataGetWatchHistoryByUserId): CancelablePromise<Array<number>> {
		const {
userId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/user/{userId}/watch-history',
			path: {
				userId
			},
		});
	}

}