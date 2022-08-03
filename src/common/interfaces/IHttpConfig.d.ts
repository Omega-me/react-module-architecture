import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IHttpConfig<TData = any> {
  data?: TData;
  axiosConfig?: AxiosRequestConfig;
  message?: string;
}

export interface IHttpReponse<TData = any> extends AxiosResponse<TData, any> {}
