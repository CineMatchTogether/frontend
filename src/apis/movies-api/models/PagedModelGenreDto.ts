import type { GenreDto } from './GenreDto';
import type { PageMetadata } from './PageMetadata';

export type PagedModelGenreDto = {
	content?: Array<GenreDto>;
	page?: PageMetadata;
};

