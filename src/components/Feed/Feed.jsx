import React from 'react'
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import cls from "./Feed.module.css";
import Post from "./Post";
import Photo from '../Photos/Photo';
import Video from '../Videos/Video';
import FriendRequests from './FriendRequests';
import SuggestedFriends from "./SuggestedFriends";
import {PF} from "../../constants/constants";


const Feed = () => {
  return (
      <div className={cls["feed"]}>
        <div className={cls['centerSection']}>
            <Stories />    
            <div className={cls["postsSection"]}>
                <CreatePost />
                  <Post>
                       <Photo src={PF + 'images/nature1.jpg'} />
                       <Video src={PF+'videos/nature_video.mp4'} />
                  </Post>
                  <Post>
                       <Photo src={PF + 'images/nature4.jpg'} />
                       {/* <Photo src={n2} /> */}
                       {/* <Video src={v2} /> */}
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