import React from 'react'
import cls from "./Navbar.module.css";
import logo from "./logo.png";
import SearchBar from "./SearchBar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <nav className={cls["navbar"]}>
        <div className={cls["navbarLeft"]}>
            <img src={logo} alt="" className={cls["brandLogo"]} />
            <span className={cls["brandTitle"]}>ChatOcean</span>
        </div>      
        <div className={cls["navbarCenter"]} >
            <SearchBar />
        </div>
        <div className={cls['navbarRight']}>
             <NotificationsNoneIcon sx={{fontSize: "32px", color: "#0B54FA"}} /> 
             <ChatBubbleOutlineIcon sx={{fontSize: "32px", color: "#0B54FA"}} />
             <SettingsIcon sx={{fontSize: "32px", color: "#0B54FA"}} />             
             <AccountCircleIcon sx={{fontSize: "32px", color: "#0B54FA"}} />
        </div>
    </nav>
  )
}

export default Navbar