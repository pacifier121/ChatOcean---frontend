import React from 'react'
import cls from "./Notification.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {PF} from "../../constants/constants";

const Notification = () => {
  return (
        <div className={cls["notification"]}>
            <img src={PF+"logo.png"} className={cls["user-img"]} />
            <div className={cls["info"]}>
               <div className={cls["info-text"]}>
                    <b>User</b> liked your post <b>&lt;link to post&gt;</b>
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