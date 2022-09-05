import { AxiosResponse } from 'axios';
import { eStatusCode } from '../enums';

/**
 *
 * @param response AxiosResponse
 * @returns boolean
 */
export const checkSuccess = <TData = any>(response: AxiosResponse<TData, any> | undefined): boolean => {
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
