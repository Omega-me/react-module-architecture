import { AxiosRequestConfig } from 'axios';

export interface IHttpConfig<TData = any> {
  data?: TData;
  axiosConfig?: AxiosRequestConfig;
  message?: string;
}

export interface IResponse<TData = any> {
  results: TData | null;
  errors: any;
  count: number | null;
  statusCode: number;
  success: boolean;
}
