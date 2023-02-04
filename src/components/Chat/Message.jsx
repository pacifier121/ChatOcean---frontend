import React from 'react'
import cls from "./Message.module.css";
import { format } from 'timeago.js';

const Message = ({ own, msg }) => {
  return (
       <div className={cls["message"] + ` ${own ? cls["own"] : ""}`}>
          <div className={cls["text"]}>{msg.text}</div>  
           <div className={cls["time"]}>{format(msg.time)}</div> 
       </div> 
  )
}

export default Message