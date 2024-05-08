import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
       <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id=""  placeholder='Your Name'/>
          <input type="email" name="" id=""  placeholder='Email Address'/>
          <input type="password" name="" id=""  placeholder='Password'/>
          <input type="password" name="" id=""  placeholder='Confirm Password'/>
        </div>
        <button>Register</button>
        <p className="loginsignup-login">Already Have An account?<span ><Link to="/Login">Login here</Link></span></p>
        <div className="loginsignup-agree">
        
          <p><input type="checkbox" name="" id="" /> I agree to the term of use & policy</p>
        </div>
       </div>
    </div>
  )   
}

export default LoginSignup