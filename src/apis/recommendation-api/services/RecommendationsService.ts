import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataPostRecommendGroup = {
  body: {
    top_n?: number;
    watched_movies: Array<Array<number>>;
    weights?: {
      content_based?: number;
      item_based?: number;
      user_based?: number;
    };
  };
};

export type FilmsResponse = {
	count: number;
	recommendations: Array<{movieId: number, title: string}>;
}

export class RecommendationsService {
  /**
   * @returns any List of recommended movies
   * @throws ApiError
   */
  public static postRecommendGroup(
    data: TDataPostRecommendGroup
  ): CancelablePromise<FilmsResponse> {
    const { body } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/recommend/group",
      body: body,
      errors: {
        400: `Validation error`,
        500: `Internal server error`,
      },
    });
  }
}
