import { useCallback, useEffect, useState } from "react";
import {
  MovieControllerService,
  MovieDto,
  PagedModelMovieDto,
} from "../../../apis/movies-api";
import { Box, Input, Spinner, VStack, Text } from "@chakra-ui/react";
import { MovieList } from "../MovieList/MovieList";
import { useColors } from "../../../hooks/useColors";
import { MovieCardType } from "../MovieCard/const";

const customDebounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, wait);
  };
};

export const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<MovieDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { mainColor } = useColors();

  const fetchMovies = useCallback(async (name: string) => {
    if (!name.trim()) {
      setMovies([]);
      return;
    }

    setIsLoading(true);

    try {
      const response: PagedModelMovieDto =
        await MovieControllerService.getList1({
          nameContains: name,
          sort: ["kpRating,desc", "imdbRating,desc"],
        });
      setMovies(response.content || []);
    } catch (err) {
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedFetchMovies = useCallback(
    customDebounce((name: string) => {
      fetchMovies(name);
    }, 500),
    [fetchMovies]
  );

  useEffect(() => {
    debouncedFetchMovies(searchTerm);
  }, [searchTerm, debouncedFetchMovies]);

  return (
    <VStack w="full" p={4}>
      <Box w="full" maxW="600px">
        <Input
          placeholder="Найти фильм..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="lg"
        />
      </Box>

      {isLoading && <Spinner size="xl" color={mainColor} />}
      {!isLoading && movies.length === 0 && searchTerm && (
        <Text> No movies found.</Text>
      )}

      <Box w="full">
        <MovieList movies={movies} movieCardType={MovieCardType.Added} />
      </Box>
    </VStack>
  );
};
