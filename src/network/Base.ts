import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class Base {
	axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: "http://localhost:3065/api",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		});
	}

	public async ajaxGet<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		return this.axiosInstance.get(url, config);
	}

	public async ajaxPost<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		return this.axiosInstance.post(url, data, config);
	}
}
