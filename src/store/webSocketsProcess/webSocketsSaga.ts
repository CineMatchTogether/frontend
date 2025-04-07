import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { connectSocket, disconnectSocket, historyMessageReceived, oauthMessageReceived, setError } from "./webSocketsProcess";
import { EventChannel, eventChannel } from "redux-saga";
import { MessageStatus, MessageType, WebSocketMessage } from "./WebSocketMessage";
import { sendMessage } from "./actions";

let socket: WebSocket | null = null;

interface WebSocketEvent {
  type: "MESSAGE" | "ERROR" | "CLOSE";
  data?: WebSocketMessage | string;
  error?: Event;
}

function createWebSocketChannel(ws: WebSocket): EventChannel<WebSocketEvent> {
  return eventChannel((emit) => {
    ws.onmessage = (event: MessageEvent) => {
        console.log("Raw WebSocket message:", event.data);
        try {
            const parsedData = JSON.parse(event.data); 
            emit({ type: "MESSAGE", data: parsedData }); 
          } catch (error) {
            console.log("Failed to parse WebSocket message:", error);
            emit({ type: "MESSAGE", data: event.data });
          }
    };

    ws.onerror = (error: Event) => {
      emit({ type: "ERROR", error });
    };

    ws.onclose = () => {
      emit({ type: "CLOSE" });
    };

    return () => {
      ws.close();
    };
  });
}
const apiUrl: string = import.meta.env.VITE_CORE_API_URL;
const wsUrl = apiUrl.replace(/^http/, 'ws') + '/api/websocket';

// Сага для подключения WebSocket
function* connectSocketSaga(): Generator<any, void, any> {
  try {
    if (socket && socket.readyState === WebSocket.OPEN) {
        console.log("WebSocket already connected, skipping...");
        return; 
    }
    socket = new WebSocket(wsUrl);

    const wsChannel: EventChannel<WebSocketEvent> = yield call(
        createWebSocketChannel,
        socket
      );

    yield call(handleWebSocketMessages, wsChannel);

    // Ждем открытия соединения
    yield call(function () {
      return new Promise((resolve) => {
        socket!.onopen = () => {
          console.log("WebSocket connection established");
          resolve(true);
        };
      });
    });

    yield put(connectSocket());

  } catch (error) {
    console.log(error);
    yield put(setError("WebSocket connection failed"));
  }
}

// Сага для отключения WebSocket
function* disconnectSocketSaga(): Generator<any, void, any> {
    try {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close(); 
        console.log("WebSocket connection closed intentionally");
        yield put(disconnectSocket()); 
        socket = null; // Сбрасываем ссылку на сокет
      } else {
        console.log("No active WebSocket connection to close");
      }
    } catch (error) {
      console.log(error);
    }
  }

// Сага для обработки сообщений из канала
function* handleWebSocketMessages(
  wsChannel: EventChannel<WebSocketEvent>
): Generator<any, void, WebSocketEvent> {
  while (true) {
    const event: WebSocketEvent = yield take(wsChannel);

    switch (event.type) {
      case "MESSAGE":
        console.log("Received message:", event.data);
        if (typeof event.data === 'string') {
          console.log(event.data);
        } else {
          const message = event.data as WebSocketMessage;
          switch (message.messageType) {
            case MessageType.AuthYandexStatus:
              console.log("Processing AUTH_YANDEX_STATUS:", message.content);
              if (message.messageStatus === MessageStatus.Success) {
                yield put(oauthMessageReceived(message));
              } else if (message.messageStatus === MessageStatus.Error) {
                yield put(setError("Auth Yandex failed: " + (message.content || "Unknown error")));
              }
              break;

            case MessageType.FetchKinopoiskHistory:
              console.log("Processing FETCH_KINOPOISK_HISTORY:", message.content);
              if (message.messageStatus === MessageStatus.Success) {
                yield put(historyMessageReceived(message));
              } else if (message.messageStatus === MessageStatus.Error) {
                yield put(setError("Fetch Kinopoisk history failed: " + (message.content.pageInfo || "Unknown error")));
              }
              break;

            default:
              console.log("Unknown message type:", message.messageType);
              console.log(message);
              break;
          }
        }
        break;
      case "ERROR":
        yield put(setError("WebSocket error: " + event.error));
        break;
      case "CLOSE":
        console.log("WebSocket connection closed");
        yield put(setError("WebSocket closed unexpectedly"));
        wsChannel.close();
        return;
      default:
        break;
    }
  }
}

// Интерфейс для действия отправки сообщения
interface SendMessageAction {
  type: string;
  payload: WebSocketMessage;
}

// Сага для отправки сообщений
function* sendMessageSaga(
  action: SendMessageAction
): Generator<any, void, any> {
    console.log("send message", action.payload)
  try {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(action.payload));
    } else {
      yield put(setError("WebSocket is not connected"));
    }
  } catch (error) {
    yield put(setError("Failed to send message via WebSocket"));
  }
}

export default function* websocketSaga() {
  yield takeLatest(connectSocket.type, connectSocketSaga);
  yield takeEvery(disconnectSocket.type, disconnectSocketSaga);
  yield takeEvery(sendMessage.type, sendMessageSaga);
}
