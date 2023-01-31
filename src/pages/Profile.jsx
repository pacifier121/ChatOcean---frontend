import React from 'react'
import cls from "./Profile.module.css";
import ProfileHeader from '../components/Profile/ProfileHeader';
import Post from '../components/Feed/Post';
import Photo from '../components/Photos/Photo';
import Video from "../components/Videos/Video";
import FriendRequests from '../components/Feed/FriendRequests';
import {PF} from "./../constants/constants";
import { Outlet } from 'react-router-dom';

export const PostsContent = () => {
   return (
        <div className={cls["bottomSection"]}>
            <div className={cls['centerSection']}>
                  <Post>
                       <Photo src={PF+"images/nature1.jpg"} />
                       <Photo src={PF+"images/nature3.jpg"} />
                       <Video src={PF+'videos/nature_video.mp4'} />
                  </Post>
            </div>
            <div className={cls['rightSection']}>
                <FriendRequests />    
            </div>
        </div>
   ) 
}

export const VideosContent = () => {
  console.log(PF);
  return (
        <div className={cls["bottomSection"]}>
            <div className={cls['centerSection']}>
                  <Post>
                       <Video src={PF+'videos/nature_video_2.mp4'} />
                  </Post>
                  <Post>
                       <Video src={PF+'videos/nature_video_3.mp4'} />
                  </Post>
            </div>
            <div className={cls['rightSection']}>
                <FriendRequests />    
            </div>
        </div>
  )
}

const Profile = () => {
  return (
      <div className={cls["profile"]}>
        <ProfileHeader />
        <Outlet />
      </div>
  )
}

export default Profile