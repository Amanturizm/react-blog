import React, { useCallback, useEffect, useState } from 'react';
import axiosApi from "../../axiosApi";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const { data: postsData } = await axiosApi.get<IResponseData>('/posts.json');

      setPosts(
        Object.keys(postsData).map((id: string) => ({ ...postsData[id], id }))
      );
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div className="mt-3">
      <Posts posts={posts} />
    </div>
  );
};

export default Home;