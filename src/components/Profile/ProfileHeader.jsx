import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '../UI/Divider';
import cls from "./ProfileHeader.module.css";
import { NavLink, useParams } from 'react-router-dom';
import {asset, backendURL, PF} from "../../constants/constants";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileUser, followProfileUser, unfollowProfileUser  } from '../../store/profile';

const ProfileHeader = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const { profileUser, isFollowed } = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(fetchProfileUser(user, params.username));
    }, [user])
    
    const followUserHandler = () => {
        dispatch(followProfileUser(user, profileUser));
    }

    const unfollowUserHandler = () => {
        dispatch(unfollowProfileUser(user, profileUser));
    }
    
    const fullName = profileUser && (profileUser.firstName || '') + " " + (profileUser.lastName || '');

   const classes =  cls["profile-header"] + " card-shadow";

  return (
        profileUser && 
        <div className={classes}>
            <div className={cls["cover"]}>
                <img src={asset(user.coverImg, 'cover')} alt="" className={cls["cover-img"]} />
            </div>
            <div className={cls["user-info"]}>
                <img src={asset(profileUser.avatar, 'profile')} className={cls["user-info-img"]} />
                <div className={cls["user-info-desc"]}>
                    <span className={cls["user-info-name"]}>{fullName}</span> 
                    <span className={cls["user-info-email"]}>@{profileUser.username}</span> 
                </div>
                <div className={cls["user-info-actions"]}>
                    { user._id !== profileUser._id && 
                    ( !isFollowed ? 
                        <button onClick={followUserHandler} className={cls["follow-btn"]}>Follow</button> :
                        <button onClick={unfollowUserHandler} className={cls["unfollow-btn"]}>Unfollow</button>
                     )}
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