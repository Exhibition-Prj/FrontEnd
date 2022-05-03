const Login = () => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
