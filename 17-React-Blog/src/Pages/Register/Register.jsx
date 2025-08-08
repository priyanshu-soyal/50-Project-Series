import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <form className="registerForm">
        <label htmlFor="username">Username</label>
        <input
          type="username"
          placeholder="Enter your username..."
          id="username"
        />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email..." id="email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          id="password"
        />
        <button className="registerBtn">Register</button>
      </form>
      <Link to="/login" className="registerLoginBtn">
        Login
      </Link>
    </div>
  );
}
