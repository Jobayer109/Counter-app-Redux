import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>All posts are here</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            const { title, body } = post;
            return (
              <article>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostView;
