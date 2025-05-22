import { Box, Center, Spinner, Tabs } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getIsUserWatchHistoryLoading,
  getUserWatchHistory,
} from "../../store/moveisProcess/selectors";
import { MovieList } from "../../modules/movie/MovieList/MovieList";
import { useEffect } from "react";
import { fetchUserWatchHistory } from "../../store/moveisProcess/moviesActions";
import { useColors } from "../../hooks/useColors";
import { LuBrainCircuit, LuSquarePlus, LuUser } from "react-icons/lu";
import { RecMovieList } from "../../modules/movie/RecMovieList/RecMovieList";
import './style.css';
import { MovieSearch } from "../../modules/movie/MovieSearch/MovieSearch";

export const MainPage = () => {
  const movies = useAppSelector(getUserWatchHistory);
  const isMoviesLoading = useAppSelector(getIsUserWatchHistoryLoading);
  const dispatch = useAppDispatch();

  const { mainColor, subAltColor, bgColor, textColor } = useColors();

  useEffect(() => {
    dispatch(fetchUserWatchHistory());
  }, []);

  return (
    <Box h="100%">
      <Tabs.Root
        h="100%"
        defaultValue="history"
        variant="plain"
        lazyMount={true}
        display={"flex"}
        flexDirection="column"
      >
        <Tabs.List
          alignItems="center"
          justifyContent="center"
          width="100%"
          gap={4}
          border={0}
          mt={4}
        >
          <Tabs.Trigger
            color={textColor}
            backgroundColor={subAltColor}
            value="recommendation"
            _focus={{ outline: "none", boxShadow: "none" }}
            _selected={{ backgroundColor: mainColor, color: bgColor }}
          >
            <LuBrainCircuit />
            <span className="tab-text">Рекомендации</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            colorPalette="pink"
            backgroundColor={subAltColor}
            value="history"
            _focus={{ outline: "none", boxShadow: "none" }}
            _selected={{ backgroundColor: mainColor, color: bgColor }}
          >
            <LuUser />
            <span className="tab-text">История просмотра</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            colorPalette="pink"
            backgroundColor={subAltColor}
            value="adding"
            _focus={{ outline: "none", boxShadow: "none" }}
            _selected={{ backgroundColor: mainColor, color: bgColor }}
          >
            <LuSquarePlus />
            <span className="tab-text">Добавить фильм</span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="history"
          flex="1"
          overflow="scroll"
          scrollbar="hidden"
        >
          <Center h="100%">
            {isMoviesLoading ? (
              <Spinner size="xl" borderWidth="7px" color={mainColor} />
            ) : (
              <MovieList movies={movies} />
            )}
          </Center>
        </Tabs.Content>
        <Tabs.Content
          value="recommendation"
          flex="1"
          overflow="scroll"
          scrollbar="hidden"
        >
          <Center h="100%">
            <RecMovieList />
          </Center>
        </Tabs.Content>
        <Tabs.Content
          value="adding"
          flex="1"
          overflow="scroll"
          scrollbar="hidden"
        >
            <MovieSearch />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};
