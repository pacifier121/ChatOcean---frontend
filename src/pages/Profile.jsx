import React from 'react'
import cls from "./Profile.module.css";
import ProfileHeader from '../components/Profile/ProfileHeader';
import Post from '../components/Feed/Post';
import Photo from '../components/Photos/Photo';
import Video from "../components/Videos/Video";
import FriendRequests from '../components/Feed/FriendRequests';
import {asset, backendURL, dummyPost } from "./../constants/constants";
import { Outlet, useParams } from 'react-router-dom';
import StoryCard from '../components/Feed/StoryCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonCard from "../components/UI/PersonCard";
import axios from 'axios';
import { fetchProfileFollowers, fetchProfileFollowings, fetchProfilePosts, fetchProfileStories, fetchProfileVideos } from '../store/profile';

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
  const dispatch = useDispatch();
  const params = useParams();
  const { profileUser, posts } = useSelector(state => state.profile);
  
  useEffect(() => {
    const fetchPosts = async() => {
      try {
        dispatch(fetchProfilePosts(profileUser));
      } catch (err) {
        console.log(err); 
      }
    }
    if (posts === null || (params.username !== profileUser.username)) fetchPosts();
  }, [profileUser])

   return (
     posts && 
        <Content>
            {posts.map(post => (
              <Post post={post} owner={profileUser} key={post._id} />
            ))}
        </Content>
   ) 
}

export const VideosContent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { profileUser, videos } = useSelector(state => state.profile);
  
  useEffect(() => {
    const fetchVideos = async() => {
      try {
        dispatch(fetchProfileVideos(profileUser));
      } catch (err) {
        console.log(err); 
      }
    }
    if (videos === null || (params.username !== profileUser.username))  fetchVideos();
  }, [profileUser])

  return (
      videos && 
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
  const dispatch = useDispatch();
  const params = useParams();
  const { profileUser, stories } = useSelector(state => state.profile);
  
  useEffect(() => {
    const fetchStories = async() => {
      try {
        dispatch(fetchProfileStories(profileUser));
      } catch (err) {
        console.log(err); 
      }
    }
   if (stories === null || (params.username !== profileUser.username))  fetchStories();
  }, [profileUser])
  
  
  return (
        stories && 
        <Content>
            <div className={cls['stories']} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem'  }}>
              <StoryCard className={cls['storycard']} />
              <StoryCard className={cls['storycard']} />
              <StoryCard className={cls['storycard']} />
            </div>
        </Content>
  )
}

export const FollowersContent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { profileUser, followers } = useSelector(state => state.profile);
  
  useEffect(() => {
    const fetchFollowers = async() => {
      try {
        dispatch(fetchProfileFollowers(profileUser));
      } catch (err) {
        console.log(err); 
      }
    }
    if (followers === null || (params.username !== profileUser.username)) fetchFollowers();
  }, [profileUser])

  return (
    followers && 
    <Content>
          { followers.length === 0 ?
          <div className={cls['no-followers']}>No one is following you yet</div> :
          <div className={cls['followers-container']}>
              {followers.map(person => (
                <PersonCard key={person._id} followersCount={person.followers.length} followingsCount={person.followings.length} person={person}  />
              ))}
          </div>}
    </Content>
  )
}

export const FollowingsContent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { profileUser, followings } = useSelector(state => state.profile);
  const profile = useSelector(state => state.profile);
  console.log(profile);
  
  useEffect(() => {
    const fetchFollowings = async() => {
      try {
        dispatch(fetchProfileFollowings(profileUser));
      } catch (err) {
        console.log(err); 
      }
    }
    if (followings === null || (params.username !== profileUser?.username)) fetchFollowings();
  }, [profileUser])

  return (
    followings && 
    <Content>
          { followings.length === 0 ?
          <div className={cls['no-followers']}>Follow some people to show here</div> :
          <div className={cls['followers-container']}>
              {followings.map(person => (
                <PersonCard key={person._id} followersCount={person.followers.length} followingsCount={person.followings.length} person={person}  />
              ))}
          </div>}
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