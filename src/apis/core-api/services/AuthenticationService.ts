import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';



export class AuthenticationService {

	/**
	 * Начать OAuth 2.0 авторизацию через Yandex
	 * Перенаправляет на страницу авторизации Yandex
	 * @throws ApiError
	 */
	public static redirectToOauth2Yandex(): void {
		const authUrl = OpenAPI.BASE + '/oauth2/authorization/yandex';
        if (authUrl.startsWith('http')) {
            window.location.href = authUrl; 
        } else {
            console.error('Invalid OAuth2 URL');
        }
	}

}