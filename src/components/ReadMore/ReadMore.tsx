import React, { useCallback, useEffect, useState } from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import CloseBtn from "../CloseBtn/CloseBtn";

const ReadMore = () => {
  const [ info, setInfo ] = useState<IPost>({ datetime: '', title: '', description: '' });
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  const fetchData = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const { data } = await axiosApi.get<IPost>(`/posts/${id}.json`);

      setInfo({ datetime: data.datetime, title: data.title, description: data.description });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      void fetchData(id);
    }
  }, [fetchData, id]);

  const navigate = useNavigate();

  const deletePost = async () => {
    setLoading(true);

    try {
      await axiosApi.delete(`/posts/${id}.json`);
    } catch (e) {
      console.error();
    } finally {
      setLoading(false);
      navigate('/');
    }
  };

  const preloader = loading ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : null;

  return (
    <div
      style={{ width: 500, height: 400 }}
      className="position-fixed top-50 start-50 translate-middle rounded-4 p-5 bg-black"
    >
      <p className="m-0">{info.datetime}</p>
      <h1>{info.title}</h1>
      <p>{info.description}</p>

      <div className="d-flex gap-3 position-absolute bottom-0 end-0 m-4">
        <Link to="edit-post" className="btn btn-outline-success">Edit</Link>
        <button onClick={deletePost} className="btn btn-outline-danger">Delete</button>
      </div>

      <CloseBtn to="/posts" />

      {preloader}

      <div className="position-absolute end-100 top-0 bg-black rounded-4 me-5">
        <Outlet />
      </div>
    </div>
  );
};

export default ReadMore;