import type { MovieDto } from './MovieDto';
import type { PageMetadata } from './PageMetadata';

export type PagedModelMovieDto = {
	content?: Array<MovieDto>;
	page?: PageMetadata;
};

