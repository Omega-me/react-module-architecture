import { IPost } from 'common/interfaces';
import { Spinner } from 'components';
import { usePosts } from 'hooks';
import s from './posts.module.scss';

const Posts = () => {
  const { posts, isLoading, isError, message, setPosts, resetPostsState } = usePosts();

  const handelGetPosts = () => {
    setPosts({ message: 'success' });
  };
  const handelResetPosts = () => {
    resetPostsState();
  };

  return (
    <div className={s.posts}>
      <button onClick={handelGetPosts}>Get posts</button>
      <button onClick={handelResetPosts}>Reset posts</button>
      {isLoading && <Spinner />}
      {isError && <div>{message}</div>}
      {posts &&
        posts.map((post: IPost) => (
          <div key={post.id}>
            {post.title} {post.userId}
          </div>
        ))}
    </div>
  );
};

export default Posts;
