import React from 'react'
import poster from "./poster.png";
import cls from "./Register.module.css";
import logo from "../components/Navbar/logo.png";

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  } 
    
  return (
      <div className={cls["outer-container"]}>
          <div className={cls["poster-container"]}>
            <img src={poster} alt="" className={cls["poster"]} />
          </div>
          <div className={cls["register-container"] + " box-shadow"} >
            <form onSubmit={submitHandler} className={cls["register-form"]}>
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
            </form> 
            <div className={cls["other-options"]}>
                <span className={cls["other-options-text"]}>Already have an account?</span>
                <button className={cls["other-options-btn"]}>Log In</button>
            </div>
          </div>
      </div>
  )
}

export default Register