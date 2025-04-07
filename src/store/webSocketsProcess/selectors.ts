import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getOauthMessages = (state: State) => state[NameSpace.WebSockets].oauthMessages;
export const getHistoryMessages = (state: State) => state[NameSpace.WebSockets].historyMessages;
export const getError = (state: State) => state[NameSpace.WebSockets].error;
export const getWebSocketConnection = (state: State) => state[NameSpace.WebSockets].isConnected;