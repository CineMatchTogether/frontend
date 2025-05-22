import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks";
import { getUserWatchHistory } from "../../../store/moveisProcess/selectors";
import { RecommendationsService } from "../../../apis/recommendation-api";
import { MovieControllerService, MovieDto } from "../../../apis/movies-api";
import { MovieList } from "../MovieList/MovieList";
import { Spinner } from "@chakra-ui/react";
import { useColors } from "../../../hooks/useColors";

export const RecMovieList = () => {
  const historyMovies = useAppSelector(getUserWatchHistory);

  const [movies, setMovies] = useState<MovieDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { mainColor } = useColors();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const movieRec = await RecommendationsService.postRecommendGroup({
          body: {
            watched_movies: [
              historyMovies
                .flatMap((m) => m.id)
                .filter((id) => id != null),
            ],
            top_n: 10,
          },
        });

        const fetches = movieRec.recommendations.map((m) => {
          if (!m.title) return null;

          return MovieControllerService.getOne1({
            id: m.movieId,
          });
        });

        const responses = await Promise.all(fetches.filter(Boolean));

        const recommendedMovies = responses
          .filter((m) => m !== null);

        setMovies(recommendedMovies);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return isLoading ? (
    <Spinner size="xl" borderWidth="7px" color={mainColor} />
  ) : (
    <MovieList movies={movies} />
  );
};
