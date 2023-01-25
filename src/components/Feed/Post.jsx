import React from 'react'
import cls from "./Post.module.css";
import logo from "../Navbar/logo.png";
import PostCarousel from "./PostCarousel";
import { MoreHoriz } from '@mui/icons-material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';

const Post = () => {
  return (
        <div className={cls["post"] + " card-shadow"}>
            <div className={cls["post-top"]}>
                <div className={cls["post-top-left"]}>
                    <img src={logo} alt="" className={cls["user-img"]} />
                    <div className={cls["user-info"]}>
                        <span className={cls["user-info-username"]}>Pacifire Ocean</span> 
                        <span className={cls["user-info-time"]}>1 hr ago</span> 
                    </div>
                </div>
                <div className={cls['more-option']}>
                    <MoreHoriz sx={{fontSize: "25px"}} />
                </div>
            </div>
            <div className={cls["post-center"]}>
                <PostCarousel /> 
                <p className={cls["post-center-caption"]}>
                    This is the caption
                </p>
            </div>
            <div className={cls["post-bottom"]}>
                <div className={cls["post-bottom-likes"]}>
                    <ThumbUpOffAltIcon sx={{fontSize: "25px"}} /> 
                    <FavoriteBorderIcon sx={{fontSize: "25px"}} />
                    <span className={cls["post-likes-text"]}>2.8K Likes</span>
                </div>
                <div className={cls["post-bottom-comments"]}>
                    <ChatIcon sx={{fontSize: "25px"}} />
                    <span className={cls["post-comments-text"]}>22 Comments</span>
                </div>
                <div className={cls["post-bottom-share"]}>
                    <ShareIcon sx={{fontSize: "25px"}} /> 
                    <span className={cls["post-share-text"]}>Share</span>
                </div>
            </div>
        </div>
  )
}

export default Post