import { IPostState } from "src/common/interfaces";
import { Spinner } from "src/components";
import { usePosts } from "src/hooks";
import s from "./posts.module.scss";

const Posts = () => {
  const { posts, isLoading, isError, message, setPosts, resetPostsState } = usePosts();
  return (
    <div className={s.posts}>
      <button onClick={() => setPosts()}>Get posts</button>
      <button onClick={resetPostsState}>Reset posts</button>
      {isLoading && <Spinner />}
      {isError && <div>{message}</div>}
      {posts &&
        posts.map((post: IPostState) => (
          <div key={post.id}>
            {post.title} {post.userId}
          </div>
        ))}
    </div>
  );
};

export default Posts;
