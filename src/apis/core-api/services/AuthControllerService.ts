import type { LoginRequest } from '../models/LoginRequest';
import type { SignupRequest } from '../models/SignupRequest';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataRegisterUser = {
                requestBody: SignupRequest
            }
export type TDataAuthenticateUser = {
                requestBody: LoginRequest
            }

export class AuthControllerService {

	/**
	 * Registration user
	 * @returns UserDto OK
	 * @throws ApiError
	 */
	public static registerUser(data: TDataRegisterUser): CancelablePromise<UserDto> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/auth/signup',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * Get access token by refresh token
	 * @returns UserDto OK
	 * @throws ApiError
	 */
	public static refreshtoken(): CancelablePromise<UserDto> {
				return __request(OpenAPI, {
			method: 'POST',
			url: '/api/auth/refreshtoken',
		});
	}

	/**
	 * Logout user
	 * @returns unknown OK
	 * @throws ApiError
	 */
	public static logoutUser(): CancelablePromise<Record<string, unknown>> {
				return __request(OpenAPI, {
			method: 'POST',
			url: '/api/auth/logout',
		});
	}

	/**
	 * Login user
	 * @returns UserDto OK
	 * @throws ApiError
	 */
	public static authenticateUser(data: TDataAuthenticateUser): CancelablePromise<UserDto> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/auth/login',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

}