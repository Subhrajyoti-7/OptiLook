import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginsignup'>
       <div className="loginsignup-container">
        <h1>Login</h1> 
        <div className="loginsignup-fields">
         
          <input type="email" name="" id=""  placeholder='Enter  Email Address'/>
        
          <input type="password" name="" id=""  placeholder='Enter Password'/>
          
        </div>
        <button>Login</button>
        <p className="loginsignup-login">Not yet registered?<span><Link to="/register">Register here</Link></span></p>
        <div className="loginsignup-agree">
        
          <p><input type="checkbox" name="" id="" /> I agree to the term of use & policy</p>
        </div>
       </div>
    </div>
  )
}

export default Login