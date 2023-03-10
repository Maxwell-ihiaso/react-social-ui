import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, error, errorMessage } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username && !password) return errorMessage("username & password cannot be empty")
    if (!username || username === "") return errorMessage("username cannot be empty")
    if (!password) return errorMessage("password cannot be empty")
    login(username);
    navigate("/");
    
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
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
