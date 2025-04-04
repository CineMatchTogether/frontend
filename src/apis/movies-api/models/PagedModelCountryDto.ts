import type { CountryDto } from './CountryDto';
import type { PageMetadata } from './PageMetadata';

export type PagedModelCountryDto = {
	content?: Array<CountryDto>;
	page?: PageMetadata;
};

