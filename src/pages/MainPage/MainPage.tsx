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
import { LuBrainCircuit, LuUser } from "react-icons/lu";

export const MainPage = () => {
  const movies = useAppSelector(getUserWatchHistory);
  const isMoviesLoading = useAppSelector(getIsUserWatchHistoryLoading);
  const dispatch = useAppDispatch();

  const { mainColor, subAltColor, textColor, bgColor } = useColors();

  useEffect(() => {
    dispatch(fetchUserWatchHistory());
  }, []);

  return (
    <Box h="100vh">
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
            Рекомендации
          </Tabs.Trigger>
          <Tabs.Trigger
            colorPalette="pink"
            backgroundColor={subAltColor}
            value="history"
            _focus={{ outline: "none", boxShadow: "none" }}
            _selected={{ backgroundColor: mainColor, color: bgColor }}
          >
            <LuUser />
            История просмотра
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="history" flex="1" overflow="scroll" scrollbar="hidden">
          <Center h="100%">
            {isMoviesLoading ? (
              <Spinner size="xl" borderWidth="7px" color={mainColor} />
            ) : (
              <MovieList movies={movies} />
            )}
          </Center>
        </Tabs.Content>
        <Tabs.Content value="recommendation">Manage your projects</Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};
