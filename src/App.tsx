import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";

const App = () => (
  <>
    <Navbar />

    <div style={{ paddingTop: 60 }}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </>
);

export default App;