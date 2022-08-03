import { IGetPostsConfig, IPost } from "src/common/interfaces";
import { resetPostState } from "src/state/store/store/posts.store";
import { useAppDispatch, useAppSelector } from "src/state/store/store";
import { getPosts } from "src/state/store/actions/posts.action";

/**
 * @returns data, isError, isLoading, message, setPosts, resetPostsState
 * @data alias posts of type IPostState[]
 */
const usePosts = () => {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading, isSuccess, message } = useAppSelector((state) => state.postsState);

  /**
   *
   * @summary dispatch getPosts action
   * @param config
   * @returns void
   */
  const setPosts = (config?: IGetPostsConfig): void => {
    dispatch(getPosts(config));
  };
  /**
   * @summary dispatch resetPostState action
   * @return void
   */
  const resetPostsState = (): void => {
    dispatch(resetPostState());
  };
  return { posts: data as IPost[], isError, isLoading, isSuccess, message, setPosts, resetPostsState };
};

export default usePosts;
