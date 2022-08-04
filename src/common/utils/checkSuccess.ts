import { eStatusCode } from '../enums';
import { IHttpReponse } from '../interfaces';

/**
 *
 * @param response AxiosResponse
 * @returns boolean
 */
export const checkSuccess = <TData = any>(response: IHttpReponse<TData> | undefined): boolean => {
  if (
    response?.status === eStatusCode.OK ||
    response?.status === eStatusCode.CREATED ||
    response?.status === eStatusCode.ACCEPTED ||
    response?.status === eStatusCode.NO_CONTENT
  ) {
    return true;
  } else {
    return false;
  }
};
