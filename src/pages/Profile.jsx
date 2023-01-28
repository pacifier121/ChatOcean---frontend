import React from 'react'
import cls from "./Profile.module.css";
import ProfileHeader from '../components/Profile/ProfileHeader';
import Post from '../components/Feed/Post';
import Video from "../components/Videos/Video";
import FriendRequests from '../components/Feed/FriendRequests';

const Profile = () => {
  return (
      <div className={cls["profile"]}>
        <ProfileHeader />
        <div className={cls["bottomSection"]}>
            <div className={cls['centerSection']}>
                <Post />
                {/* <Video /> */}
            </div>
            <div className={cls['rightSection']}>
                <FriendRequests />    
            </div>
        </div>
      </div>
  )
}

export default Profile