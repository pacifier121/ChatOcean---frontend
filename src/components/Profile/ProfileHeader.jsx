import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '../UI/Divider';
import cls from "./ProfileHeader.module.css";
import { NavLink } from 'react-router-dom';
import {asset, PF} from "../../constants/constants";
import { useSelector } from 'react-redux';

const ProfileHeader = () => {
   const classes =  cls["profile-header"] + " card-shadow";
    const { user } = useSelector(state => state.auth)
    const fullName = (user.firstName || '') + " " + (user.lastName || '');

  return (
        <div className={classes}>
            <div className={cls["cover"]}>
                <img src={asset(user.coverImg, 'cover')} alt="" className={cls["cover-img"]} />
            </div>
            <div className={cls["user-info"]}>
                <img src={asset(user.avatar, 'profile')} className={cls["user-info-img"]} />
                <div className={cls["user-info-desc"]}>
                    <span className={cls["user-info-name"]}>{fullName}</span> 
                    <span className={cls["user-info-email"]}>@{user.username}</span> 
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
            <NavLink to="posts" className={(state) => cls["nav-section"] + " linkStyles " + (state.isActive ? cls['active'] : '')}>
                <span>Posts</span>
            </NavLink>
            <NavLink to="videos" className={(state) => cls["nav-section"] + " linkStyles " + (state.isActive ? cls['active'] : '')}>
                <span>Video</span>
            </NavLink>
            <NavLink to="stories" className={(state) => cls["nav-section"] + " linkStyles " + (state.isActive ? cls['active'] : '')}>
                <span>Stories</span>
            </NavLink>
            <NavLink to="followers" className={(state) => cls["nav-section"] + " linkStyles " + (state.isActive ? cls['active'] : '')}>
                <span>Followers</span>
            </NavLink>
            <NavLink to="followings" className={(state) => cls["nav-section"] + " linkStyles " + (state.isActive ? cls['active'] : '')}>
                <span>Followings</span>
            </NavLink>
        </nav>
        </div>
  )
}

export default ProfileHeader