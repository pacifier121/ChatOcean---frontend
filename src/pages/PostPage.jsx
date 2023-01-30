import React from 'react'
import { useParams } from 'react-router-dom';
import Post from '../components/Feed/Post'
import cls from "./PostPage.module.css";
import Photo from '../components/Photos/Photo';
import Video from '../components/Videos/Video';
import {PF} from "./../constants/constants";

const PostPage = () => {
     const params = useParams();
     const type = (params.postId === 'abcde' ? 'video' : 'photo');

  return (
       <div className={cls["post-page"]}>
          <Post>
               <Photo src={PF+'images/nature1.jpeg'} />
               <Video src={PF+'videos/nature_video.mp4'} />
          </Post>
          {/* <Post>
               <Photo src={n3} />
               <Photo src={n2} />
               <Video src={v2} />
          </Post>
          <Post>
               <Photo src={n4} />
               <Photo src={n2} />
          </Post> */}
       </div> 
  )
}

export default PostPage