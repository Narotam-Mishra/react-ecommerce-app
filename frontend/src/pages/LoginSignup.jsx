import React from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
  const navigate = useNavigate();
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' required />
          <input type="email" placeholder='Email Address' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span onClick={() => navigate('/login/existingUser')}>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup