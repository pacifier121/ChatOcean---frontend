import React from 'react'
import cls from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import {PF} from "../../constants/constants";

const removeLinkStyles = { textDecoration: 'none', color: 'inherit', fontSize: "100%"};

const Navbar = () => { 
  return (
    <nav className={cls["navbar"]}>
        <div className={cls["navbarLeft"]}>
            <img src={PF+'logo.png'} alt="" className={cls["brandLogo"]} />
            <span className={cls["brandTitle"]}>ChatOcean</span>
        </div>      
        <div className={cls["navbarCenter"]} >
            <SearchBar />
        </div>
        <div className={cls['navbarRight']}>
           <Link to="/" className={cls["btn-icon"]}>
               <HomeIcon sx={removeLinkStyles} />             
            </Link> 
           <Link to="/notifications" className={cls["btn-icon"]}>
               <NotificationsNoneIcon sx={removeLinkStyles} /> 
            </Link> 
           <Link to="/chat" className={cls["btn-icon"]}>
               <ChatBubbleOutlineIcon sx={removeLinkStyles} />
            </Link> 
           <Link to="/profile/abcd" className={cls["btn-icon"]}>
               <AccountCircleIcon sx={removeLinkStyles} />
            </Link> 
        </div>
    </nav>
  )
}

export default Navbar