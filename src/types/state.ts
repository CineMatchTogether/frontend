import { UserDto } from "../apis/core-api";
import { MovieDto } from "../apis/movies-api";
import { store } from "../store";
import { WebSocketMessage } from "../store/webSocketsProcess/WebSocketMessage";
import { AuthorizationStatus } from "../utils/const";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserDto;
  isUserDataLoading: boolean;
};

export type MoviesProcess = {
  watchHistory: Array<MovieDto>;
  isWhatchHistoryLoading: boolean;
};

export type WebSocketProcess = {
  isConnected: boolean;
  oauthMessages: Array<WebSocketMessage>;
  historyMessages: Array<WebSocketMessage>;
  error: string | null;
};