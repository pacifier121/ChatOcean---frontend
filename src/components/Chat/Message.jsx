import React from 'react'
import cls from "./Message.module.css";

const Message = ({ own }) => {
  return (
       <div className={cls["message"] + ` ${own ? cls["own"] : ""}`}>
          <div className={cls["text"]}>This is some msg</div>  
           <div className={cls["time"]}>7:45pm</div> 
       </div> 
  )
}

export default Message