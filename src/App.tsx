import React from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import NewPost from "./containers/NewPost/NewPost";

const App = () => (
  <>
    <Navbar/>

    <div style={{paddingTop: 60}}>
      <Routes>
        <Route path={useLocation().pathname === "/" ? "/" : "/posts"} element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />

        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  </>
);

export default App;