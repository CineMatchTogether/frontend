import { createAction } from "@reduxjs/toolkit";
import { WebSocketMessage } from "./WebSocketMessage";

export const sendMessage = createAction<WebSocketMessage>("webSockets/sendMessage");
export const connectSocketMid = createAction<void>("webSockets/connect");
