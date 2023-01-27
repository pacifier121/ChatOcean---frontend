import React from 'react'
import Message from "./Message"
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import cls from "./Chat.module.css";

const Chat = () => {
  return (
        <div className={cls["chat"]}>
           <div className={cls["chat-wrapper"]}>
                <Message />
                <Message own={true} />
                <Message />
                <Message />
            </div> 
            <div className={cls["chat-input-wrapper"]}>
               <div className={cls["mic-btn"]}>
                  <MicIcon sx={{fontSize: "100%"}}/> 
                </div>  
                <textarea className={cls["input"]} placeholder="Type something..."></textarea>
               <div className={cls["send-btn"]}>
                  <SendIcon sx={{fontSize: "100%"}}/>
                </div>  
            </div> 
        </div>
  )
}

export default Chat