import type { PageMetadata } from './PageMetadata';
import type { PersonDto } from './PersonDto';

export type PagedModelPersonDto = {
	content?: Array<PersonDto>;
	page?: PageMetadata;
};

