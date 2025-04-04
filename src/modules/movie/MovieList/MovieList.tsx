import { Box, Flex } from "@chakra-ui/react";
import { MovieDto } from "../../../apis/movies-api";
import { MovieCard } from "../MovieCard/MovieCard";

interface MovieListProps {
  movies: MovieDto[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <Box maxH="100%" overflowY="auto" scrollbar="hidden">
      <Flex
        align="start"
        direction="row"
        wrap="wrap"
        gap={6}
        p={4}
        justify="center"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id || movie.name} movie={movie} />
        ))}
      </Flex>
    </Box>
  );
};
