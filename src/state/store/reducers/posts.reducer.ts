import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IPost, IStateThunk } from 'src/common/interfaces';
import { getPosts } from '../actions';

export class PostsReducer {
  private _builder?: ActionReducerMapBuilder<IStateThunk<IPost>>;
  private _state?: IStateThunk<IPost>;

  constructor(options: { builder?: ActionReducerMapBuilder<IStateThunk<IPost>>; state?: IStateThunk<IPost> }) {
    this._builder = options && options.builder;
    this._state = options && options.state;
  }

  resetPostState() {
    if (this._state) {
      this._state.isLoading = false;
      this._state.isError = false;
      this._state.isSuccess = false;
      this._state.message = '';
      this._state.data = [];
    }
  }

  buildExtraReducers() {
    this._builder &&
      this._builder
        .addCase(getPosts.pending, (state: IStateThunk<IPost>) => {
          state.isLoading = true;
        })
        .addCase(getPosts.fulfilled, (state: IStateThunk<IPost>, { payload }) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.data = payload as IPost[];
        })
        .addCase(getPosts.rejected, (state: IStateThunk<IPost>, { payload }) => {
          state.isError = true;
          state.isLoading = false;
          state.message = payload as string;
        });
  }
}
