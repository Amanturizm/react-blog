import React, { useCallback, useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const { data: postsData } = await axiosApi.get<IResponseData>('/posts.json');

      setPosts(
        postsData ? Object.keys(postsData).map((id: string) => ({ ...postsData[id], id })) : []
      );
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const preloader = loading ? (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  ) : null;

  return (
    <div className="mt-3">
      { posts.length ? <Posts posts={posts} /> : null }

      {preloader}

      <Outlet />
    </div>
  );
};

export default Home;