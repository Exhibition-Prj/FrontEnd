import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enroll from "./Enroll";
import Main from "./Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Enroll" element={<Enroll />}></Route>{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
