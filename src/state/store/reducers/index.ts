import globalReducer from "../slices/global.store";
import postsReducer from "../slices/posts.store";

const reducer = {
  globalState: globalReducer,
  postsState: postsReducer,
};

export default reducer;
