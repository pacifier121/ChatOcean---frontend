import React from 'react'
import cls from "./AccountSettings.module.css";
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const AccountSettings = () => {
  return (
      <div className={"card-shadow category-card"}>
        <span className={"title"}>More Pages</span>
        <div className={"category"}>
            <SettingsIcon sx={{fontSize:"30px"}} />
            <span className={"category-text"}>Settings</span>
        </div>
        <Link to="/login" className={"category linkStyles"}>
            <LogoutIcon sx={{fontSize:"30px"}} />
            <div  className={"category-text"} styles={{textDecoration: 'none', color: 'inherit'}}>Log Out</div>
        </Link>
      </div>
  )
}

export default AccountSettings