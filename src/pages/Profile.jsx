import React from 'react'
import cls from "./Profile.module.css";
import ProfileHeader from '../components/Profile/ProfileHeader';
import Post from '../components/Feed/Post';
import FriendRequests from '../components/Feed/FriendRequests';

const Profile = () => {
  return (
      <div className={cls["profile"]}>
        <ProfileHeader />
        <div className={cls["bottomSection"]}>
            <div className={cls['centerSection']}>
                <Post />
            </div>
            <div className={cls['rightSection']}>
                <FriendRequests />    
            </div>
        </div>
      </div>
  )
}

export default Profile