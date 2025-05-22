import { Center, Spinner } from "@chakra-ui/react";
import { MovieList } from "../../modules/movie/MovieList/MovieList";
import { useColors } from "../../hooks/useColors";
import { getUserWatchHistory } from "../../store/moveisProcess/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getIsUserWatchHistoryLoading } from "../../store/moveisProcess/selectors";
import { fetchUserWatchHistory } from "../../store/moveisProcess/moviesActions";
import { useEffect } from "react";

const HistoryPage = () => {
  const { mainColor } = useColors();
  const movies = useAppSelector(getUserWatchHistory);
  const isMoviesLoading = useAppSelector(getIsUserWatchHistoryLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserWatchHistory());
  }, []);

  return <Center h="100%">
  {isMoviesLoading ? (
    <Spinner size="xl" borderWidth="7px" color={mainColor} />
  ) : (
    <MovieList movies={movies} />
  )}
</Center>;
};

export { HistoryPage };