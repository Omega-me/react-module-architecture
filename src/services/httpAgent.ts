import { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { toastOptions } from "src/common/configs";
import { checkSuccess } from "src/common/utils";
import { axiosConnector } from "./axiosConfig";

const axiosGet = async (url: string, config?: { axiosConfig?: AxiosRequestConfig; message?: string }) => {
  const response: AxiosResponse<any, any> = await axiosConnector.get(url, config?.axiosConfig);
  if (config?.message) {
    if (checkSuccess(response)) {
      toast.success(config?.message, toastOptions);
    } else {
      toast.error(config?.message, toastOptions);
    }
  }
  return response;
};

const axiosPost = async (url: string, data?: any, config?: { axiosConfig?: AxiosRequestConfig; message?: string }) => {
  const response: AxiosResponse<any, any> = await axiosConnector.post(url, data, config?.axiosConfig);
  if (config?.message) {
    if (checkSuccess(response)) {
      toast.success(config?.message, toastOptions);
    }
  }
  return response;
};

const axiosPut = async (url: string, data?: any, config?: { axiosConfig?: AxiosRequestConfig; message?: string }) => {
  const response: AxiosResponse<any, any> = await axiosConnector.put(url, data, config?.axiosConfig);
  if (config?.message) {
    if (checkSuccess(response)) {
      toast.success(config?.message, toastOptions);
    }
  }
  return response;
};

const axiosPatch = async (url: string, data?: any, config?: { axiosConfig?: AxiosRequestConfig; message?: string }) => {
  const response: AxiosResponse<any, any> = await axiosConnector.patch(url, data, config?.axiosConfig);
  if (config?.message) {
    if (checkSuccess(response)) {
      toast.success(config?.message, toastOptions);
    }
  }
  return response;
};

const axiosDelete = async (url: string, config?: { axiosConfig?: AxiosRequestConfig; message?: string }) => {
  const response: AxiosResponse<any, any> = await axiosConnector.delete(url, config?.axiosConfig);
  if (config?.message) {
    if (checkSuccess(response)) {
      toast.success(config?.message, toastOptions);
    }
  }
  return response;
};

export { axiosGet, axiosPost, axiosPut, axiosPatch, axiosDelete };
