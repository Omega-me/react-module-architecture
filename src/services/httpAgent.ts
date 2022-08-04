import { toast } from 'react-toastify';
import { toastOptions } from 'src/common/configs';
import { eHttpMethod } from 'src/common/enums';
import { IHttpConfig, IHttpReponse } from 'src/common/interfaces';
import { checkSuccess } from 'src/common/utils';
import { httpConnector } from './httpConfig';

export const httpAgent = async <TData = any>(
  methode: eHttpMethod,
  url: string,
  config?: IHttpConfig<TData>
): Promise<IHttpReponse<TData> | undefined> => {
  let response: IHttpReponse<TData> | undefined = undefined;
  if (methode === eHttpMethod.POST || methode === eHttpMethod.PUT || methode === eHttpMethod.PATCH) {
    response = await httpConnector[methode](url, config?.data, config?.axiosConfig);
  } else if (methode === eHttpMethod.GET || methode === eHttpMethod.DELETE) {
    response = await httpConnector[methode](url, config?.axiosConfig);
  }
  if (config?.message) {
    if (checkSuccess(response)) {
      toast.success(config?.message, toastOptions);
    }
  }
  return response;
};
