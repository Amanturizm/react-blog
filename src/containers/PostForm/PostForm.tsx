import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import CloseBtn from "../../components/CloseBtn/CloseBtn";

const PostForm = () => {
  const [post, setPost] = useState<IPostForm>({ title: '', description: '' });
  const [loading, setLoading] = useState<boolean>(false);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setPost(prevState => ({ ...prevState, [name]: value }));
  };

  const preloader = loading ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : null;

  // POST
  const navigate = useNavigate();

  const postData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data: IPost = { ...post, datetime: new Date().toDateString() };

      await axiosApi.post('/posts.json', data);

      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // EDIT
  const { id } = useParams();

  const getPostContent = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const { data } = await axiosApi.get<IPost>(`/posts/${id}.json`);

      setPost({ title: data.title, description: data.description, datetime: data.datetime });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      void getPostContent(id);
    }
  }, [getPostContent, id]);

  const editData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axiosApi.put(`/posts/${id}.json`, post);

      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={ id ? editData : postData } style={{ minWidth: 300 }} className="container w-50 p-4">
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

      <button className="btn btn-outline-primary mt-3 px-4">
        { id ? 'Edit' : 'Send' }
      </button>

      { id ? <CloseBtn to={`/posts/${id}`} /> : null }
      {preloader}
    </form>
  );
};

export default PostForm;