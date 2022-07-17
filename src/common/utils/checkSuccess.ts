import { AxiosResponse } from "axios";
import { EStatusCode } from "../enums";

/**
 *
 * @param response AxiosResponse
 * @returns boolean
 */
export const checkSuccess = (response: AxiosResponse<any, any>): boolean => {
  if (
    response.status === EStatusCode.OK ||
    response.status === EStatusCode.CREATED ||
    response.status === EStatusCode.ACCEPTED ||
    response.status === EStatusCode.NO_CONTENT
  ) {
    return true;
  } else {
    return false;
  }
};
