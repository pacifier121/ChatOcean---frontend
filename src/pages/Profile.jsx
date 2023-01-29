import React from 'react'
import cls from "./Profile.module.css";
import ProfileHeader from '../components/Profile/ProfileHeader';
import Post from '../components/Feed/Post';
import Photo from '../components/Photos/Photo';
import Video from "../components/Videos/Video";
import FriendRequests from '../components/Feed/FriendRequests';
import n1 from "./images/nature1.jpg";
import n2 from "./images/nature2.jpeg";
import n3 from "./images/nature3.jpg";
import n4 from "./images/nature4.jpg";
import v1 from "./videos/nature_video.mp4";
import v2 from "./videos/nature_video_2.mp4";

const Profile = () => {
  return (
      <div className={cls["profile"]}>
        <ProfileHeader />
        <div className={cls["bottomSection"]}>
            <div className={cls['centerSection']}>
                  <Post>
                       <Photo src={n3} />
                       <Photo src={n2} />
                       <Video src={v2} />
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