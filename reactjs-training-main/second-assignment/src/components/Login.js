import { useState } from "react";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const setUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const setPassWorkdHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    console.log("in login handler", userName, password);
    props.enableValue(true);
  };

  return (
    <div>
      <div className="login-form-container">
        <div className="login-form">
          <div className="form-field">
            <div className="ff-label">
              <label for="username">Username*</label>
            </div>
            <div className="ff-content">
              <input
                type="text"
                id="username"
                value={userName}
                onChange={setUserNameHandler}
              />
            </div>
          </div>

          <div className="form-field">
            <div className="ff-label">
              <label for="password">Password*</label>
            </div>
            <div className="ff-content">
              <input
                type="password"
                id="password"
                value={password}
                onChange={setPassWorkdHandler}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" onClick={loginHandler}>
              Login
            </button>
            <button type="button">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
