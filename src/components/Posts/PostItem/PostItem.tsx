import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  post: IPost;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className="container border border-2 border-white rounded-4 p-3">
      <p className="m-0">Created on {post.datetime}</p>
      <h3 className="mb-3 mt-2">{post.title}</h3>
      <Link to={post.id ? post.id : '/'} className="btn btn-outline-primary">Read more {'>>'}</Link>
    </div>
  );
};

export default React.memo(PostItem);