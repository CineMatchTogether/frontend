import { MovieDto } from "../../apis/movies-api";
import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getUserWatchHistory = (state: State): Array<MovieDto> => state[NameSpace.Movies].watchHistory;

export const getIsUserWatchHistoryLoading = (state: State): boolean => state[NameSpace.Movies].isWhatchHistoryLoading;