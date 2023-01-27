import React from 'react'
import cls from "./Notifications.module.css";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteIcon from '@mui/icons-material/Delete';
import Notification from '../components/Notification/Notification';

const Notifications = () => {
  return (
       <div className={cls["notifications-page"]}>
           <div className={cls["container"]}>
               <div className={cls["top"]}>
                   <div className={cls["top-left"]}>
                       <span className={cls["top-left-title"]}>Notifications</span> 
                       <div className={cls["top-left-total"]}>24</div> 
                    </div> 
                   <div className={cls["top-right"]}>
                       <div className={cls["btn-icon"]}>
                            <DoneAllIcon /> 
                        </div> 
                       <div className={cls["btn-icon"]}>
                            <DeleteIcon /> 
                        </div> 
                    </div> 
                </div> 
               <div className={cls["notifications"]}>
                    <Notification />
                    <Notification />
                    <Notification />
                </div> 
            </div>  
       </div> 
  )
}

export default Notifications