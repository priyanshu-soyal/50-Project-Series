import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
      <h1>Login</h1>
        <form className="loginForm">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your email...' id='email' />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password...' id='password' />
            <button className='loginBtn'>Login</button>
        </form>
        <Link to="/register" className='loginResisterBtn'  >
          Register
        </Link>
    </div>
  )
}
