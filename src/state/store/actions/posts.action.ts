import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { toastOptions } from 'src/common/configs';
import { eHttpMethod } from 'src/common/enums';
import { IGetPostsConfig, IPost } from 'src/common/interfaces';
import { axiosAgent } from 'src/services';

export const getPosts = createAsyncThunk('auth/getPosts', async (config: IGetPostsConfig | undefined, thunkAPI) => {
  try {
    const response: AxiosResponse<IPost[], any> | undefined = await axiosAgent(eHttpMethod.GET, '/posts', {
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
