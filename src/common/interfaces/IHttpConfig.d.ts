import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpConfig<TData = any> {
  data?: TData;
  axiosConfig?: AxiosRequestConfig;
  message?: string;
}

export interface IHttpReponse<TData = any> extends AxiosResponse<TData, any> {
  data: IResponse<TData>;
}

export interface IResponse<TData = any> {
  results: TData | null;
  errors: any;
  count: number | null;
  statusCode: number;
  success: boolean;
}
