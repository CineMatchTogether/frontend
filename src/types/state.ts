import { UserDto } from "../apis/core-api";
import { MovieDto } from "../apis/movies-api";
import { store } from "../store";
import { AuthorizationStatus } from "../utils/const"


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    user: UserDto;
    isUserDataLoading: boolean;
}

export type MoviesProcess = {
    watchHistory: Array<MovieDto>;
    isWhatchHistoryLoading: boolean;
}