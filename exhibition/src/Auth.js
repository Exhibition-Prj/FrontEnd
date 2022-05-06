import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const REST_API_KEY = "7ac4972d62bcd6ad4462f6ca02996c67";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "DBkvoB40nnD1rlAC8dwBhI5sFXhef7m3";
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const history = useNavigate();
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );

      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      history.replace("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (code) {
      getToken();
    }
  }, [code]);
  return null;
};
export default Auth;
