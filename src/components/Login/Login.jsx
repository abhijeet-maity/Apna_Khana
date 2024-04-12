import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Sign up")
  return (
    <div className='loginpopup'>
        <form action="" className='login-popup-box'>
            <div className='login-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inp">
                {currState === "Login"
                ?<></>
                :<input type='text' placeholder='Enter Name' required/>}
                <input type='email' placeholder='Enter Email' required/>
                <input type='password' placeholder='Enter Password' required/>
            </div>
            <button>{currState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currState === "Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default Login