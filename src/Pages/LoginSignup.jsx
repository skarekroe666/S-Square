import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="login-home">Already hava an account? <span>Login</span></p>
        <div className="login-agree">
          <input type="checkbox" name='' id=''/>
          <p>By agreeing, I agree to the terms & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup