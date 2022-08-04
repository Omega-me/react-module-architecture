import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { toastOptions } from 'src/common/configs';
import { eHttpMethod } from 'src/common/enums';
import { IGetPostsConfig, IHttpReponse, IPost } from 'src/common/interfaces';
import { httpAgent } from 'src/services';

export const getPosts = createAsyncThunk('auth/getPosts', async (config: IGetPostsConfig | undefined, thunkAPI) => {
  try {
    const response: IHttpReponse<IPost[]> | undefined = await httpAgent(eHttpMethod.GET, '/posts', {
      message: config?.message,
    });
    return response?.data;
  } catch (error: any) {
    const errMessage = error?.response?.data?.message || error.message || error.toString();
    if (config?.showErrorMessage) {
      toast.error(errMessage, toastOptions);
    } else if (config?.customErroMessage) {
      toast.error(config?.customErroMessage, toastOptions);
      return thunkAPI.rejectWithValue(config?.customErroMessage);
    }
    return thunkAPI.rejectWithValue(errMessage);
  }
});
