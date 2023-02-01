import React from 'react'
import cls from "./Profile.module.css";
import ProfileHeader from '../components/Profile/ProfileHeader';
import Post from '../components/Feed/Post';
import Photo from '../components/Photos/Photo';
import Video from "../components/Videos/Video";
import FriendRequests from '../components/Feed/FriendRequests';
import {asset, backendURL, dummyPost } from "./../constants/constants";
import { Outlet } from 'react-router-dom';
import StoryCard from '../components/Feed/StoryCard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Content = ({children}) => {
  return (
        <div className={cls["bottomSection"]}>
            <div className={cls['centerSection']}>
                {children}
            </div>
            <div className={cls['rightSection']}>
                <FriendRequests />    
            </div>
        </div>
  ) 
}

export const PostsContent = () => {
    const { profileUser } = useSelector(state => state.profile);
    const { user } = useSelector(state => state.auth);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
       const fetchPosts = async () => {
         try {
           const { data } = await axios.get(backendURL + '/user/posts?userId=' + profileUser._id);
            setPosts(data);
         } catch (err) {
            console.log(err);
         }
       }
      if (profileUser) fetchPosts();
    }, [profileUser, user])

   return (
        <Content>
            {posts.map(post => (
              <Post post={post} owner={profileUser} key={post._id} />
            ))}
        </Content>
   ) 
}

export const VideosContent = () => {
    const { user } = useSelector(state => state.auth);
    const { profileUser } = useSelector(state => state.profile);
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
       const fetchVideos = async () => {
         try {
           const { data } = await axios.get(backendURL + '/user/videos?userId=' + profileUser._id);
            setVideos(data);
         } catch (err) {
            console.log(err);
         }
       }
      if (profileUser){
       fetchVideos();
      }
    }, [profileUser, user])

  return (
        <Content>
              {videos.map(video => (
                  <Post post={dummyPost} owner={profileUser} key={video.src} >
                     <Video autoPlay={false} showControls={true} src={asset(video.src, 'video')} />
                  </Post>
              ))}
        </Content>
  )
}

export const StoriesContent = () => {
  return (
        <Content>
            <div className={cls['stories']} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem'  }}>
              <StoryCard className={cls['storycard']} />
              <StoryCard className={cls['storycard']} />
              <StoryCard className={cls['storycard']} />
            </div>
        </Content>
  )
}


const Profile = () => {
  return (
      <div className={cls["profile"]}>
        <ProfileHeader />
        <Outlet />
      </div>
  )
}

export default Profile