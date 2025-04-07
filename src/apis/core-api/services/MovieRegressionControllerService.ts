
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataPredict = {
                title: string
            }

export class MovieRegressionControllerService {

	/**
	 * Predict movie rating
	 * @returns string OK
	 * @throws ApiError
	 */
	public static predict(data: TDataPredict): CancelablePromise<string> {
		const {
title,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/predict/rating',
			query: {
				title
			},
		});
	}

}