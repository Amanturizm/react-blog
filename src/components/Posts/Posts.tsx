import React from 'react';
import PostItem from "./PostItem/PostItem";

interface Props {
  posts: IPost[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="d-flex flex-column gap-4">
      {
        posts.map(post => (
          <PostItem post={post} key={`post${post.id}`} />
        ))
      }
    </div>
  );
};

export default Posts;