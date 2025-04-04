import type { CountryDto } from './CountryDto';
import type { GenreDto } from './GenreDto';
import type { PersonDto } from './PersonDto';

export type MovieDto = {
	id?: number;
	name?: string;
	description?: string;
	shortDescription?: string;
	year?: number;
	kpRating?: number;
	imdbRating?: number;
	movieLength?: number;
	posterUrl?: string;
	logoUrl?: string;
	genres?: Array<GenreDto>;
	countries?: Array<CountryDto>;
	persons?: Array<PersonDto>;
};

