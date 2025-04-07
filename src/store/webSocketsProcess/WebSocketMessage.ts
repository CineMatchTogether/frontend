export enum MessageType {
    AuthYandexStatus = 'AUTH_YANDEX_STATUS',
    FetchKinopoiskHistory = 'FETCH_KINOPOISK_HISTORY',
}

export enum MessageStatus {
    Success = "SUCCESS",
    Error = "ERROR"
}

export type WebSocketMessage = {
    messageType: MessageType,
    messageStatus?: MessageStatus,
    content?: any
}