import React from 'react'
import cls from "./Navbar.module.css";
import logo from "./logo.png";
import SearchBar from "./SearchBar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Navbar = () => { 
  const navigate = useNavigate();

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
             <HomeIcon onClick={() => navigate("/")} sx={{fontSize: "32px", color: "#0B54FA"}} />             
             <NotificationsNoneIcon sx={{fontSize: "32px", color: "#0B54FA"}} /> 
             <ChatBubbleOutlineIcon onClick={() => navigate("/chat")} sx={{fontSize: "32px", color: "#0B54FA"}} />
             <AccountCircleIcon onClick={() => navigate("/profile")} sx={{fontSize: "32px", color: "#0B54FA"}} />
        </div>
    </nav>
  )
}

export default Navbar