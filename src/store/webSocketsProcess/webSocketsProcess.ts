import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NameSpace } from "../../utils/const";
import { WebSocketProcess } from "../../types/state";
import { WebSocketMessage } from "./WebSocketMessage";

const initialState: WebSocketProcess = {
  isConnected: false,
  oauthMessages: [],
  historyMessages: [],
  error: null,
};

export const webSocketsProcess = createSlice({
  name: NameSpace.WebSockets,
  initialState,
  reducers: {
    connectSocket: (state) => {
      state.isConnected = true;
    },
    disconnectSocket: (state) => {
      state.isConnected = false;
    },
    oauthMessageReceived: (
      state,
      action: PayloadAction<WebSocketMessage>
    ) => {
      state.oauthMessages.push(action.payload);
    },
    historyMessageReceived: (
        state,
        action: PayloadAction<WebSocketMessage>
      ) => {
        state.historyMessages.push(action.payload);
      },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { connectSocket, disconnectSocket, oauthMessageReceived, historyMessageReceived, setError } =
  webSocketsProcess.actions;
