import React from 'react'
import Stories from "./Stories";
import cls from "./Feed.module.css";

const Feed = () => {
  return (
      <div className={cls["feed"]}>
        <div className={cls['centerSection']}>
            <Stories />    
        </div>
        <div className={cls['rightSection']}>
            Hello
            {/* <FriendRequests /> */}
        </div>
      </div>
  )
}

export default Feed