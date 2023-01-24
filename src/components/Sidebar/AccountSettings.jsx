import React from 'react'
import cls from "./AccountSettings.module.css";
import SettingsIcon from '@mui/icons-material/Settings';

const AccountSettings = () => {
  return (
      <div className={cls["account-settings"]}>
        <span className={cls["account-settings-title"]}>Account</span>
        <div className={cls["setting"]}>
            <SettingsIcon sx={{fontSize:"30px"}} />
            <span className={cls["settingText"]}>Settings</span>
        </div>
      </div>
  )
}

export default AccountSettings