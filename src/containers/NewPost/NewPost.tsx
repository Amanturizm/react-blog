import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";

const NewPost = () => {
  const [post, setPost] = useState<INewPostForm>({
    title: '',
    description: ''
  });

  const changeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setPost(prevState => ({ ...prevState, [name]: value }));
  };

  const postData = async () => {
    try {
      const data: IPost = { ...post, datetime: new Date().toDateString() };

      await axiosApi.post('/posts.json', data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="container w-50">
      <label htmlFor="input-title" className="form-label">Title</label>
      <input
        name="title"
        id="input-title"
        type="text"
        className="form-control"
        value={post.title}
        onChange={changeValue}
      />

      <label htmlFor="textarea-description" className="form-label">Description</label>
      <textarea
        name="description"
        id="textarea-description"
        cols={2}
        rows={3}
        className="form-control"
        value={post.description}
        onChange={changeValue}
      />

      <Link to="/" onClick={postData} className="btn btn-outline-primary mt-3 px-4">Send</Link>
    </form>
  );
};

export default NewPost;