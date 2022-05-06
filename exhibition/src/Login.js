import styles from "./Login.css";
import Google from "./Google";

const Login = () => {
  const CLIENT_ID = "7ac4972d62bcd6ad4462f6ca02996c67";
  const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <h1>
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      </h1>

      <h2>Login</h2>
      <div>
        <label htmlFor="labelID">ID : </label>
        <input type="text" name="ID" />
      </div>
      <div>
        <label htmlFor="labelPW">PW : </label>
        <input type="password" name="PW" />
      </div>
      <div>
        <button type="button">Login</button>
      </div>
      <h1>123</h1>
      <Google />
    </div>
  );
};

export default Login;
