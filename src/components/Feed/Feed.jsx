import React from 'react'
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import cls from "./Feed.module.css";
import Post from "./Post";
import Photo from '../Photos/Photo';
import Video from '../Videos/Video';
import FriendRequests from './FriendRequests';
import SuggestedFriends from "./SuggestedFriends";
import n1 from "../../pages/images/nature1.jpg";
import n2 from "../../pages/images/nature2.jpeg";
import n3 from "../../pages/images/nature3.jpg";
import n4 from "../../pages/images/nature4.jpg";
import v1 from "../../pages/videos/nature_video.mp4";
import v2 from "../../pages/videos/nature_video_2.mp4";


const Feed = () => {
  return (
      <div className={cls["feed"]}>
        <div className={cls['centerSection']}>
            <Stories />    
            <div className={cls["postsSection"]}>
                <CreatePost />
                  <Post>
                       <Photo src={n1} />
                       <Video src={v1} />
                  </Post>
                  <Post>
                       <Photo src={n3} />
                       <Photo src={n2} />
                       <Video src={v2} />
                  </Post>
            </div>
        </div>
        <div className={cls['rightSection']}>
            <FriendRequests />
            <SuggestedFriends />
        </div>
      </div>
  )
}

export default Feed