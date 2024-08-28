import { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../../fireBase/firebase.jsx";
import { getDoc, doc } from "firebase/firestore";
import { setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Login = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign up")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loggingIn = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in Successfully");
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
          setEmail("");
          setPassword("");
          setShowLogin(false);
        } catch (error) {
          console.log(error.message);
          toast.error(error.message, {
            position: "bottom-center",
          });
        }
      };

      const signingIn = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          console.log(user);
          if (user) {
            await setDoc(doc(db, "Users", user.uid), {
              email: user.email,
              name: name,
            });
          }
          console.log("User Registered Successfully!!");
          toast.success("User Registered Successfully!!", {
            position: "top-center",
          });
          setName("");
          setEmail("");
          setPassword("");
          setShowLogin(false);
        } catch (error) {
          console.log(error.message);
          toast.error(error.message, {
            position: "bottom-center",
          });
        }
      };

  
  return (
    <div className='loginpopup'>
        {currState === "Sign up" ? (
            <form action="" className='login-popup-box' onSubmit={signingIn}>
            <div className='login-title'>
                <h2>Sign up</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inp">
                <input type='text' placeholder='Enter Name' onChange={(e) => {setName(e.target.value)}} value={name} required/>
                <input type='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                <input type='password' placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
            </div>
            <button onClick={signingIn}>Create account</button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            </form>
        ) : (
            <form action="" className='login-popup-box' onSubmit={loggingIn}>
            <div className='login-title'>
                <h2>Login</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inp">
                <input type='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                <input type='password' placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
            </div>
            <button onClick={loggingIn}>Login</button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            <p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
            </form>
        )}
        
    </div>
  )
}

export default Login