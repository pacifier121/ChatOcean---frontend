import React from 'react'
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import cls from "./Feed.module.css";
import Post from "./Post";

const Feed = () => {
  return (
      <div className={cls["feed"]}>
        <div className={cls['centerSection']}>
            <Stories />    
            <CreatePost />
            <Post />
            <Post />
        </div>
        <div className={cls['rightSection']}>
            Hello
            {/* <FriendRequests /> */}
        </div>
      </div>
  )
}

export default Feed