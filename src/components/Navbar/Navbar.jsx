import React from 'react'
import cls from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import {PF} from "../../constants/constants";
import { useSelector } from 'react-redux';

const removeLinkStyles = { textDecoration: 'none', color: 'inherit', fontSize: "100%"};

const Navbar = () => { 
    const { user } = useSelector(state => state.auth);


  return (
    <nav className={cls["navbar"]}>
        <div className={cls["navbarLeft"]}>
            <img src={PF+'logo.png'} alt="" className={cls["brandLogo"]} />
            <Link to="/" className={cls["brandTitle"] + " linkStyles"}>ChatOcean</Link>
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
           <Link to={`/profile/${user.username}`}  className={cls["btn-icon"]}>
               { user.avatar ? <img src={PF+user.avatar} className={cls["user-img"]} /> : <AccountCircleIcon sx={removeLinkStyles} />}
            </Link> 
        </div>
    </nav>
  )
}

export default Navbar