import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./register.scss";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname ?? "/"

    const handleRegister = (e) => {
   
    navigate("/login", {replace: true});
    
  };

  if (currentUser) return <Navigate to={from} replace/>

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>tSocial</h1>
          <p>
            Become a member of the the fastest growing social community. Explore and be explored!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button type="submit" onClick={e => handleRegister(e)}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
