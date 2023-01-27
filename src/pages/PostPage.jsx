import React from 'react'
import Post from '../components/Feed/Post'
import cls from "./PostPage.module.css";

const PostPage = () => {
  return (
       <div className={cls["post-page"]}>
            <Post /> 
       </div> 
  )
}

export default PostPage