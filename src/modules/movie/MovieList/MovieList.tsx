import { Box, Flex } from "@chakra-ui/react";
import { MovieDto } from "../../../apis/movies-api";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieCardType } from "../MovieCard/const";

interface MovieListProps {
  movies: MovieDto[];
  movieCardType?: MovieCardType;
}

export const MovieList = ({ movies, movieCardType}: MovieListProps) => {
  return (
    <Box h="100%" overflowY="auto" scrollbar="hidden">
      <Flex
        align="start"
        direction="row"
        wrap="wrap"
        gap={6}
        p={4}
        justify="center"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id || movie.name} movie={movie} movieCardType={movieCardType} />
        ))}
      </Flex>
    </Box>
  );
};
