import React from "react";
import cls from "./Login.module.css";
import { PF } from "./../constants/constants";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cls["outer-container"]}>
      <div className={cls["poster-container"]}>
        <img src={PF + "poster.png"} alt="" className={cls["poster"]} />
      </div>
      <div className={cls["login-container"] + " box-shadow"}>
        <form onSubmit={submitHandler} className={cls["login-form"]}>
          <div className={cls["brand-container"]}>
            <img src={PF + "logo.png"} alt="" className={cls["brandLogo"]} />
            <span className={cls["brand-title"]}>ChatOcean</span>
          </div>
          <div className={cls["inner-container"]}>
            <div className={cls["normal-login-wrapper"]}>
              <div className={cls["form-control"]}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
              </div>
              <div className={cls["form-control"]}>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
              </div>
              <button type="submit">Log In</button>
            </div>
           <div className={cls["form-divider"]} ></div>
           <div className={cls["oauth-login-wrapper"]}>
              <span>Log In with </span>
              <button className={cls["google"]}>
                <GoogleIcon /> Google                
              </button> 
            </div> 
          </div>
        </form>
        <div className={cls["other-options"]}>
          <span className={cls["other-options-text"]}>
            Don't have an account yet?
          </span>
          <Link to="/register" className={cls["other-options-btn"] + " linkStyles"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
