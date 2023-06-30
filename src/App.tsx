import React from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import PostForm from "./containers/PostForm/PostForm";
import ReadMore from "./components/ReadMore/ReadMore";

const App = () => (
  <>
    <Navbar/>

    <div style={{paddingTop: 60}}>
      <Routes>
        <Route path={useLocation().pathname === "/" ? "/" : "/posts"} element={<Home />}>
          <Route path=":id" element={<ReadMore />} />
        </Route>

        <Route
          path={useLocation().pathname === "/new-post" ? "/new-post" : "/posts/:id/edit-post"}
          element={<PostForm />}
        />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  </>
);

export default App;