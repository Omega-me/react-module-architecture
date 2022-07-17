import { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { toastOptions } from "src/common/configs";
import { eHttpMethod } from "src/common/enums";
import { checkSuccess } from "src/common/utils";
import { axiosConnector } from "./axiosConfig";

export const axiosAgent = async (
  methode: eHttpMethod,
  url: string,
  config?: { data?: any; axiosConfig?: AxiosRequestConfig; message?: string }
) => {
  let response: AxiosResponse<any, any> | undefined = undefined;
  if (methode === eHttpMethod.POST || methode === eHttpMethod.PUT || methode === eHttpMethod.PATCH) {
    response = await axiosConnector[methode](url, config?.data, config?.axiosConfig);
  } else if (methode === eHttpMethod.GET || methode === eHttpMethod.DELETE) {
    response = await axiosConnector[methode](url, config?.axiosConfig);
  }
  if (config?.message) {
    if (checkSuccess(response)) {
      toast.success(config?.message, toastOptions);
    } else {
      toast.error(config?.message, toastOptions);
    }
  }
  return response;
};
