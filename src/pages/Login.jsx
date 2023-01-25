import React from 'react'
import poster from "./poster.png";
import cls from "./Login.module.css";
import logo from "../components/Navbar/logo.png";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  } 
    
  return (
      <div className={cls["outer-container"]}>
          <div className={cls["poster-container"]}>
            <img src={poster} alt="" className={cls["poster"]} />
          </div>
          <div className={cls["login-container"] + " box-shadow"} >
            <form onSubmit={submitHandler} className={cls["login-form"]}>
                <div className={cls["brand-container"]}>
                    <img src={logo} alt="" className={cls["brandLogo"]} />
                    <span className={cls["brand-title"]}>ChatOcean</span>
                </div>
                <div className={cls["inner-container"]}>
                    <div className={cls["form-control"]}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" />
                    </div>
                    <div className={cls["form-control"]}>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" />
                    </div>                    
                    <button type="submit" >Log In</button>
                </div>
            </form> 
            <div className={cls["other-options"]}>
                <span className={cls["other-options-text"]}>Don't have an account yet?</span>
                <button className={cls["other-options-btn"]}>Sign Up</button>
            </div>
          </div>
      </div>
  )
}

export default Login