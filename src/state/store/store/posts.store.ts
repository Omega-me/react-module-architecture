import { createSlice } from "@reduxjs/toolkit";
import { IPost, IStateThunk } from "src/common/interfaces";
import { PostsReducer } from "../reducers/posts.reducer";

const initialState: IStateThunk<IPost> = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const auth = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPostState: (state: IStateThunk<IPost>) => {
      new PostsReducer({ state }).resetPostState();
    },
  },
  extraReducers: (builder) => {
    new PostsReducer({ builder }).buildExtraReducers();
  },
});

export const { resetPostState } = auth.actions;
export default auth.reducer;
