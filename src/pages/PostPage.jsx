import React from 'react'
import { useParams } from 'react-router-dom';
import Post from '../components/Feed/Post'
import cls from "./PostPage.module.css";

const PostPage = () => {
     const params = useParams();
     const type = (params.postId === 'abcde' ? 'video' : 'photo');

  return (
       <div className={cls["post-page"]}>
            <Post type={type} /> 
       </div> 
  )
}

export default PostPage