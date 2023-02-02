import { useState, useEffect } from 'react'
import cls from "./Post.module.css";
import PostCarousel from "./PostCarousel";
import { MoreHoriz } from '@mui/icons-material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';
import {asset, backendURL} from "../../constants/constants";
import { format } from "timeago.js";
import axios from "axios";
import Photo from '../Photos/Photo';
import Video from '../Videos/Video';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';

const postStatesReducer = (state, action) => {
    switch(action.type){
        case 'UPDATE_STATES':
            return {
                isLiked: action.payload.isLiked,
                isFavorite: action.payload.isFavorite,
                totalLikes: action.payload.totalLikes,
                totalComments: action.payload.totalComments
            }
        case 'TOGGLE_LIKE':
            if (state.isLiked)
                return {
                    ...state,
                    isLiked: false,
                    totalLikes: state.totalLikes - 1
                }            
            else
                return {
                    ...state,
                    isLiked: true,
                    totalLikes: state.totalLikes + 1
                }            
        case 'TOGGLE_FAVORITE':
            if (state.isFavorite)
                return {
                    ...state,
                    isFavorite: false,
                }            
            else
                return {
                    ...state,
                    isFavorite: true,
                }            
        default:
            return state;
    }
}

const removeLinkStyles = { textDecoration: 'none', color: 'inherit'};

const Post = ({ children, post, owner }) => {
   const { user } = useSelector(state => state.auth);
   const [{ isLiked, isFavorite, totalLikes, totalComments, comments} , dispatch] = useReducer(postStatesReducer, { isLiked: false, isFavorite: false, totalLikes: 0, totalComments: 0, comments: [] })
    
   useEffect(() => {
        const fetchPostStates = async() => {
            try {
                const { data } = await axios.get(`/post/states/${post._id}/${user._id}`);
                dispatch(postStatesReducer({type: 'UPDATE_STATES', payload: data}))
            } catch (err) {
                console.log(err);
            }
        }
        if (post._id !== 'dummy') fetchPostStates();
   }, [user]);

   const likeButtonHandler = async() => {
        try {
            await axios.put(`/post/${post._id}/like`, { userId: user._id });
            dispatch(postStatesReducer({type: 'TOGGLE_LIKE'}))
        } catch (err) {
            console.log(err) 
        }
   }

   const favoriteButtonHandler = async() => {
        try {
            await axios.put(`/user/${user._id}/favorite`, { postId: post._id });
            dispatch(postStatesReducer({type: 'TOGGLE_FAVORITE'}))
        } catch (err) {
            console.log(err) 
        }
   }

   const carouselContent = (post._id === 'dummy' ? 
        children :
         post.content.map(item => (
              <>
                {(item.type === 'photo') && <Photo key={item.src} src={asset(item.src, 'photo')} />} 
                {(item.type === 'video') && <Video key={item.src} clickToMute={true} autoPlay={true} src={asset(item.src, 'video')} />} 
              </>
          ))
   );
   
    
  return (
        <div className={cls["post"] + " card-shadow"}>
            <div className={cls["post-top"]}>
                <Link to={`/profile/${owner.username}`} replace style={removeLinkStyles}  className={cls["post-top-left"]}>
                    <img src={asset(owner.avatar, 'profile')} alt="" className={cls["user-img"]} />
                    <div className={cls["user-info"]}>
                        <span className={cls["user-info-username"]}>{owner.username}</span> 
                        <span className={cls["user-info-time"]}>{format(owner.createdAt)}</span> 
                    </div>
                </Link>
               <div className={cls["post-top-right"]}>
                   { post._id !== 'dummy' && <Link style={removeLinkStyles} to={`/post/${post._id || 'dummy'}`} replace className={cls["more-option"]}>
                        <ArticleIcon sx={{fontSize: "25px"}} /> 
                        </Link> }
                    <div className={cls['more-option']}>
                        <MoreHoriz sx={{fontSize: "25px"}} />
                    </div>
                </div> 
            </div>
            <div className={cls["post-center"]}>
                <PostCarousel>
                    {carouselContent} 
                </PostCarousel>
                {post._id !== 'dummy' && <p className={cls["post-center-caption"]}>
                    {post.desc}
                </p>}
            </div>
            {post._id !== 'dummy' && <div className={cls["post-bottom"]}>
                <div className={cls["post-bottom-likes"]}>
                   <div onClick={likeButtonHandler} className={cls["button-icon"]}>
                        {isLiked && <ThumbUpIcon sx={{fontSize: "100%", color: "#0B54FA"}} />}
                        {!isLiked && <ThumbUpOffAltIcon sx={{fontSize: "100%"}} />}
                    </div> 
                    <span className={cls["post-likes-text"]}>{ totalLikes ? `${totalLikes} Likes` : '' }</span>
                   <div onClick={favoriteButtonHandler} className={cls["button-icon"]}>
                        {isFavorite && <FavoriteIcon sx={{fontSize: "100%", color: "#ED1651"}} />}
                        {!isFavorite && <FavoriteBorderIcon sx={{fontSize: "100%"}} />}
                    </div> 
                </div>
                <div className={cls["post-bottom-comments"]}>
                   <div className={cls["button-icon"]}>
                        <ChatIcon sx={{fontSize: "100%"}} />
                    </div> 
                    <span className={cls["post-comments-text"]}>{ totalComments ? `${totalComments} Comments` : '' }</span>
                </div>
                <div className={cls["post-bottom-share"]}>
                   <div className={cls["button-icon"]}>
                        <ShareIcon sx={{fontSize: "100%"}} /> 
                    </div> 
                    <span className={cls["post-share-text"]}>Share</span>
                </div>
            </div>}
        </div>
  )
}

export default Post