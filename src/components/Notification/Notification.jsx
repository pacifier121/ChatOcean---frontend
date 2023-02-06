import React from 'react'
import cls from "./Notification.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {asset, PF} from "../../constants/constants";
import { Link } from 'react-router-dom';

const Notification = ({ type, notification }) => {

  return (
        <div className={(type === 'unread' ? cls['unread'] : '') + ' ' + cls["notification"]}>
            <img src={asset(notification.image, 'profile')} className={cls["user-img"]} />
            <div className={cls["info"]}>
               <div className={cls["info-text"]}>
                    {notification.action === 'like' && (<>
                        <span className={cls['username']}>{notification.username}</span> liked your post
                        <span className={cls['link']}>
                                <Link to={`/post/${notification.postId}`} className="linkStyles">
                                    {notification.desc || 'this post'}
                                </Link>
                            </span>
                    </>)}
                    {notification.action === 'follow' && (<>
                        <span className={cls['username']}>{notification.username}</span> started following you
                    </>)}
                </div> 
                <span className={cls["info-time"]}>1 hr ago</span>
            </div>  
           <div className={cls["more-options"]}>
                <MoreHorizIcon sx={{fontSize: "100%"}} />
            </div> 
        </div>
  )
}

export default Notification