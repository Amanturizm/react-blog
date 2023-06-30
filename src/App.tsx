import React from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import ReadMore from "./components/ReadMore/ReadMore";
import PostForm from "./containers/PostForm/PostForm";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";

const App = () => (
  <>
    <Navbar/>

    <div style={{paddingTop: 60}}>
      <Routes>
        <Route path={useLocation().pathname === "/" ? "/" : "/posts"} element={<Home />}>
          <Route path=":id" element={<ReadMore />}>
            <Route path="edit-post" element={<PostForm />} />
          </Route>
        </Route>

        <Route path="/new-post" element={<PostForm />} />

        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  </>
);

export default App;