import globalReducer from "../store/global.store";
import postsReducer from "../store/posts.store";

const reducer = {
  globalState: globalReducer,
  postsState: postsReducer,
};

export default reducer;
