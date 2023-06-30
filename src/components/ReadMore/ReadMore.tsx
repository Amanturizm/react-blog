import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";

const ReadMore = () => {
  const [ info, setInfo ] = useState<IPost>({ datetime: '', title: '', description: '' });

  const { id } = useParams();

  const fetchData = useCallback(async (id: string) => {
    try {
      const { data } = await axiosApi.get<IPost>(`/posts/${id}.json`);

      setInfo({ datetime: data.datetime, title: data.title, description: data.description });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (id) {
      void fetchData(id);
    }
  }, [fetchData, id]);

  const deletePost = async () => {
    try {
      await axiosApi.delete(`/posts/${id}.json`);
    } catch (e) {
      console.error();
    }
  };

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
        <Link to='/' onClick={deletePost} className="btn btn-outline-danger">Delete</Link>
      </div>

      <Link
        to="/posts"
        style={{ width: 30, height: 30, fontSize: '3rem', overflow: 'clip' }}
        className="
        btn
        position-absolute top-0 end-0
        m-3 p-0
        d-flex justify-content-center align-items-center"
      >
        ×
      </Link>
    </div>
  );
};

export default ReadMore;