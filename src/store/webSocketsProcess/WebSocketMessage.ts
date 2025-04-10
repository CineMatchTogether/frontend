export enum MessageType {
    FetchKinopoiskId = 'FETCH_KINOPOISK_ID',
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