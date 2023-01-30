import React from 'react'
import cls from "./Register.module.css";
import {PF} from "./../constants/constants";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  } 
    
  const googleAuthHandler = () => {
      window.open('http://localhost:8000/auth/google', '_self');
  } 

  return (
      <div className={cls["outer-container"]}>
          <div className={cls["poster-container"]}>
            <img src={PF+'poster.png'} alt="" className={cls["poster"]} />
          </div>
          <div className={cls["register-container"] + " box-shadow"} >
            <form onSubmit={submitHandler} className={cls["register-form"]}>
                <div className={cls["brand-container"]}>
                    <img src={PF+'logo.png'} alt="" className={cls["brandLogo"]} />
                    <span className={cls["brand-title"]}>ChatOcean</span>
                </div>
                <div className={cls["inner-container"]}>
                  <div className={cls["normal-register-wrapper"]}>
                    <div className={cls["form-control"]}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" />
                    </div>                    
                    <div className={cls["form-control"]}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" />
                    </div>                    
                    <div className={cls["form-control"]}>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" />
                    </div>                    
                    <div className={cls["form-control"]}>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input id="confirm-password" type="password" />
                    </div>                    
                    <button type="submit" >Sign Up</button>
                  </div>
                   <div className={cls["form-divider"]} ></div>
                   <div className={cls["oauth-register-wrapper"]}>
                      <span>Register with </span>
                      <button onClick={googleAuthHandler} className={cls["google"]}>
                        <GoogleIcon /> Google                
                      </button> 
                    </div> 
                </div>
            </form> 
            <div className={cls["other-options"]}>
                <span className={cls["other-options-text"]}>Already have an account?</span>
                <Link to="/login" className={cls["other-options-btn"] + " linkStyles"}>Log In</Link>
            </div>
          </div>
      </div>
  )
}

export default Register