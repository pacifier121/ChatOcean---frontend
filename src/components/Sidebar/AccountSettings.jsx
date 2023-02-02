import React from 'react'
import cls from "./AccountSettings.module.css";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { authActions, logoutUser } from '../../store/auth';
import { profileActions } from '../../store/profile';
import { useEffect, useRef } from 'react';

const AccountSettings = () => {
  const dispatch = useDispatch();
  const logoutRef = useRef();
  
  useEffect(() => {
      dispatch(authActions.setLogoutRef(logoutRef.current));
  }, [])
  
  const logoutUserHandler = () => {
    dispatch(profileActions.resetProfile());
    dispatch(logoutUser());
  }
  
  return (
      <div className={"card-shadow category-card"}>
        <span className={"title"}>More Pages</span>
        <div className={"category"}>
            <SettingsIcon sx={{fontSize:"30px"}} />
            <span className={"category-text"}>Settings</span>
        </div>
        <div ref={logoutRef} onClick={logoutUserHandler} className={"category"}>
            <LogoutIcon sx={{fontSize:"30px"}} />
            <div  className={"category-text"} styles={{textDecoration: 'none', color: 'inherit'}}>Log Out</div>
        </div>
      </div>
  )
}

export default AccountSettings