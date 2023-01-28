import React from 'react'
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import cls from "./Feed.module.css";
import Post from "./Post";
import FriendRequests from './FriendRequests';
import SuggestedFriends from "./SuggestedFriends";

const DummyFeed = () => {
    return (
        <div style={{ fontSize: "50px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laborum quas mollitia, amet repudiandae eum dolorem et officiis nisi aliquid voluptas, aliquam odio saepe ad odit sunt eius nostrum obcaecati?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laborum quas mollitia, amet repudiandae eum dolorem et officiis nisi aliquid voluptas, aliquam odio saepe ad odit sunt eius nostrum obcaecati?            
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laborum quas mollitia, amet repudiandae eum dolorem et officiis nisi aliquid voluptas, aliquam odio saepe ad odit sunt eius nostrum obcaecati?            
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laborum quas mollitia, amet repudiandae eum dolorem et officiis nisi aliquid voluptas, aliquam odio saepe ad odit sunt eius nostrum obcaecati?            
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laborum quas mollitia, amet repudiandae eum dolorem et officiis nisi aliquid voluptas, aliquam odio saepe ad odit sunt eius nostrum obcaecati?            
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laborum quas mollitia, amet repudiandae eum dolorem et officiis nisi aliquid voluptas, aliquam odio saepe ad odit sunt eius nostrum obcaecati?            
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laborum quas mollitia, amet repudiandae eum dolorem et officiis nisi aliquid voluptas, aliquam odio saepe ad odit sunt eius nostrum obcaecati?            
        </div>
    ) 
}

const Feed = () => {
  return (
      <div className={cls["feed"]}>
        <div className={cls['centerSection']}>
            <Stories />    
            <div className={cls["postsSection"]}>
                <CreatePost />
                <Post />
                <Post type="video" />
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