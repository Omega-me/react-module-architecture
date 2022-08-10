import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGlobalState } from 'common/interfaces';
import { APP_TITLE } from 'common/labels';

const initialState: IGlobalState = {
  title: APP_TITLE,
};

const testSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTitle: (state, { payload }: PayloadAction<string | undefined>) => {
      state.title = payload as string;
    },
  },
});

export const { setTitle } = testSlice.actions;
export default testSlice.reducer;
