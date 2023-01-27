import React from 'react'
import bg from "./bg.jpg";
import logo from "../Navbar/logo.png";
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '../UI/Divider';
import cls from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
        <div className={cls["profile-header"]}>
            <div className={cls["cover"]}>
                <img src={bg} alt="" className={cls["cover-img"]} />
            </div>
            <div className={cls["user-info"]}>
                <img src={logo} className={cls["user-info-img"]} />
                <div className={cls["user-info-desc"]}>
                    <span className={cls["user-info-name"]}>Pacifire Ocean</span> 
                    <span className={cls["user-info-email"]}>pacifire@ocean.com</span> 
                </div>
                <div className={cls["user-info-actions"]}>
                    <button className={cls["follow-btn"]}>Follow</button>
                    <div className={cls["message-btn"]}>
                        <SendIcon sx={{fontSize: "25px"}} /> 
                    </div>
                    <div className={cls["more-options"]}>
                        <MoreHorizIcon sx={{fontSize: "25px"}} /> 
                    </div>
                </div>
            </div>
            <Divider />
        <nav className={cls["profile-nav"]}>
            <div className={cls["nav-section"] + " " + cls["active"]}>
                <span>Posts</span>
            </div>
            <div className={cls["nav-section"]}>
                <span>Video</span>
            </div>
            <div className={cls["nav-section"]}>
                <span>Group</span>
            </div>
            <div className={cls["nav-section"]}>
                <span>Followers</span>
            </div>
            <div className={cls["nav-section"]}>
                <span>Following</span>
            </div>
        </nav>
        </div>
  )
}

export default ProfileHeader