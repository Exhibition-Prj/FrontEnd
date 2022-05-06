import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enroll from "./Enroll";
import Address from "./Address";
import Login from "./Login";
import Main from "./Main";
import KakaoRedirectHandler from "./kakao/KakaoRedirectHandler";
import Auth from "./Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Enroll" element={<Enroll />}></Route>
          <Route path="/Address" element={<Address />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path="/oauth/callback/kakao"
            element={<KakaoRedirectHandler />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
