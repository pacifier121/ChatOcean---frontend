import React from 'react'
import cls from "./Profile.module.css";
import ProfileHeader from '../components/Profile/ProfileHeader';
import Post from '../components/Feed/Post';
import Photo from '../components/Photos/Photo';
import Video from "../components/Videos/Video";
import FriendRequests from '../components/Feed/FriendRequests';
import {PF} from "./../constants/constants";

const Profile = () => {
  return (
      <div className={cls["profile"]}>
        <ProfileHeader />
        <div className={cls["bottomSection"]}>
            <div className={cls['centerSection']}>
                  <Post>
                       <Photo src={PF+"images/nature1.jpeg"} />
                       <Photo src={PF+"images/nature3.jpeg"} />
                       <Video src={PF+'videos/video_nature_2.mp4'} />
                  </Post>
            </div>
            <div className={cls['rightSection']}>
                <FriendRequests />    
            </div>
        </div>
      </div>
  )
}

export default Profile