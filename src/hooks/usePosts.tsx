import { IPostState } from "src/common/interfaces";
import { getPosts, resetPostState } from "src/state/store/slices/posts.store";
import { useAppDispatch, useAppSelector } from "src/state/store/store";

/**
 * @returns data, isError, isLoading, message, setPosts, resetPostsState
 * @data alias posts of type IPostState[]
 */
const usePosts = () => {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading, isSuccess, message } = useAppSelector((state) => state.postsState);

  /**
   * @setPosts sets posts in store
   */
  const setPosts = (): void => {
    dispatch(getPosts({ showCustomErrorMessage: true, customErroMessage: "test" }));
  };
  /**
   * @resetPostsState reset the posts state in store
   */
  const resetPostsState = (): void => {
    dispatch(resetPostState());
  };
  return { posts: data as IPostState[], isError, isLoading, isSuccess, message, setPosts, resetPostsState };
};

export default usePosts;
