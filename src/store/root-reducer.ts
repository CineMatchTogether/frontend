import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../utils/const";
import { userProcess } from "./userProcess/userProcess";
import { moviesProcess } from "./moveisProcess/moviesProcess";
import { webSocketsProcess } from "./webSocketsProcess/webSocketsProcess";

export const rootReducer = combineReducers({
    [NameSpace.User]: userProcess.reducer,
    [NameSpace.Movies]: moviesProcess.reducer,
    [NameSpace.WebSockets]: webSocketsProcess.reducer
  })