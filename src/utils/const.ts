export enum AppRoute {
    Main = '/',
    Login = '/login',
    OAuthHandler = '/oauth-handler',
    Recommendation = '/recommendation',
    History = '/history',
    Adding = '/adding'
}

export enum AuthorizationStatus {
    Unknown = 'UNKNOWN',
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
}

export enum NameSpace {
    User = 'USER',
    Movies = 'MOVIES',
    WebSockets = 'WEBSOCKETS'
}