
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataGetRecommendGroup = {
                body: {
group_watched?: Array<Array<string>>;
top_n?: number;
}
            }

export class RecommendationsService {

	/**
	 * Групповая рекомендация фильмов
	 * @returns any Список рекомендованных фильмов
	 * @throws ApiError
	 */
	public static getRecommendGroup(data: TDataGetRecommendGroup): CancelablePromise<Array<{
genres?: string;
movieId?: number;
title?: string;
}>> {
		const {
body,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/recommend/group',
			body: body,
		});
	}

}