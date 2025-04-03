import type { SettingDto } from '../models/SettingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataSetSettings = {
                requestBody: SettingDto
            }

export class SettingsControllerService {

	/**
	 * Set settings
	 * @returns SettingDto OK
	 * @throws ApiError
	 */
	public static setSettings(data: TDataSetSettings): CancelablePromise<SettingDto> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/set-settings',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

}