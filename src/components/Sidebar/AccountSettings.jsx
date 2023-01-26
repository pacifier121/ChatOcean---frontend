import React from 'react'
import cls from "./AccountSettings.module.css";
import SettingsIcon from '@mui/icons-material/Settings';

const AccountSettings = () => {
  return (
      <div className={"card-shadow category-card"}>
        <span className={"title"}>More Pages</span>
        <div className={"category"}>
            <SettingsIcon sx={{fontSize:"30px"}} />
            <span className={"category-text"}>Settings</span>
        </div>
      </div>
  )
}

export default AccountSettings