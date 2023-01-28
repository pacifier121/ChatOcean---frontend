import React from 'react'
import { useParams } from 'react-router-dom';
import Post from '../components/Feed/Post'
import cls from "./PostPage.module.css";
import n1 from "./images/nature1.jpg";
import n2 from "./images/nature2.jpeg";
import n3 from "./images/nature3.jpg";
import n4 from "./images/nature4.jpg";
import v1 from "./videos/nature_video.mp4";
import v2 from "./videos/nature_video_2.mp4";
import Photo from '../components/Photos/Photo';
import Video from '../components/Videos/Video';

const PostPage = () => {
     const params = useParams();
     const type = (params.postId === 'abcde' ? 'video' : 'photo');

  return (
       <div className={cls["post-page"]}>
          <Post>
               <Photo src={n1} />
               <Video src={v1} />
          </Post>
          <Post>
               <Photo src={n3} />
               <Photo src={n2} />
               <Video src={v2} />
          </Post>
          <Post>
               <Photo src={n4} />
               <Photo src={n2} />
          </Post>
       </div> 
  )
}

export default PostPage