import React from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const history = useHistory();

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    history.push("/home");
  };

  return (
    <div className="login">
      <label>username</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>username</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

export default Login;
