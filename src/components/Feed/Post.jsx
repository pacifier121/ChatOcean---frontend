import React from 'react'
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
import {PF} from "../../constants/constants";

const removeLinkStyles = { textDecoration: 'none', color: 'inherit'};

const Post = ({ children }) => {
  return (
        <div className={cls["post"] + " card-shadow"}>
            <div className={cls["post-top"]}>
                <Link to="/profile/abcd" replace style={removeLinkStyles}  className={cls["post-top-left"]}>
                    <img src={PF+'logo.png'} alt="" className={cls["user-img"]} />
                    <div className={cls["user-info"]}>
                        <span className={cls["user-info-username"]}>Pacifire Ocean</span> 
                        <span className={cls["user-info-time"]}>1 hr ago</span> 
                    </div>
                </Link>
               <div className={cls["post-top-right"]}>
                   <Link style={removeLinkStyles} to="/post/abcd" replace className={cls["more-option"]}>
                        <ArticleIcon sx={{fontSize: "25px"}} /> 
                    </Link> 
                    <div className={cls['more-option']}>
                        <MoreHoriz sx={{fontSize: "25px"}} />
                    </div>
                </div> 
            </div>
            <div className={cls["post-center"]}>
                <PostCarousel>
                    {children}
                </PostCarousel>
                <p className={cls["post-center-caption"]}>
                    This is the caption
                </p>
            </div>
            <div className={cls["post-bottom"]}>
                <div className={cls["post-bottom-likes"]}>
                   <div className={cls["button-icon"]}>
                        <ThumbUpOffAltIcon sx={{fontSize: "100%"}} /> 
                    </div> 
                   <div className={cls["button-icon"]}>
                        <FavoriteBorderIcon sx={{fontSize: "100%"}} />
                    </div> 
                    <span className={cls["post-likes-text"]}>2.8K</span>
                </div>
                <div className={cls["post-bottom-comments"]}>
                   <div className={cls["button-icon"]}>
                        <ChatIcon sx={{fontSize: "100%"}} />
                    </div> 
                    <span className={cls["post-comments-text"]}>22 Comments</span>
                </div>
                <div className={cls["post-bottom-share"]}>
                   <div className={cls["button-icon"]}>
                        <ShareIcon sx={{fontSize: "100%"}} /> 
                    </div> 
                    <span className={cls["post-share-text"]}>Share</span>
                </div>
            </div>
        </div>
  )
}

export default Post