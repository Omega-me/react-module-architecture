import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastOptions } from "src/common/configs";
import { IPostState, IStateThunk } from "src/common/interfaces";
import { axiosGet } from "src/services";

const initialState: IStateThunk<IPostState> = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getPosts = createAsyncThunk(
  "auth/getPosts",
  async (
    config: {
      message?: string;
      showErrorMessage?: boolean;
      showCustomErrorMessage?: boolean;
      customErroMessage?: string;
    },
    thunkAPI
  ) => {
    try {
      const response: any = await axiosGet("https://jsonplaceholder.typicode.com/postss", {
        message: config.message,
      });
      return response.data;
    } catch (error: any) {
      const errMessage = error?.response?.data?.message || error.message || error.toString();
      if (config.showErrorMessage) {
        toast.error(errMessage, toastOptions);
      } else if (config.showCustomErrorMessage) {
        toast.error(config.customErroMessage, toastOptions);
        return thunkAPI.rejectWithValue(config.customErroMessage);
      }
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

const auth = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPostState: (state: IStateThunk<IPostState>) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload as IPostState[];
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isError = true;
        state.isLoading = false;
        state.message = payload as string;
      });
  },
});

export const { resetPostState } = auth.actions;

export default auth.reducer;
