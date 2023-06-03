import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import "./login.scss";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { login, error, errorMessage, currentUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname ?? "/"

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username && !password) return errorMessage("username & password cannot be empty")
    if (!username) return errorMessage("username cannot be empty")
    if (!password) return errorMessage("password cannot be empty")
    login(username);
    navigate("/", {replace: true});
    
  };

  if (currentUser) return <Navigate to={from} replace/>

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>tSocial</h1>
          <p>
            A space to create memories and find time with friends family and well wishers..
          </p>
          <span>Don't have an account yet?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" onClick={e => handleLogin(e)}>Login</button>
            {error.isError && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
