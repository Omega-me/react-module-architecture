import { eStatusCode } from "../enums";
import { IHtttpReponse } from "../interfaces";

/**
 *
 * @param response AxiosResponse
 * @returns boolean
 */
export const checkSuccess = <TData = any>(response: IHtttpReponse<TData> | undefined): boolean => {
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
