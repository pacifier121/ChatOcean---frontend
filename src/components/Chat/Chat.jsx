import React from 'react'
import Message from "./Message"
import cls from "./Chat.module.css";

const Chat = () => {
  return (
        <div className={cls["chat"]}>
            <Message />
        </div>
  )
}

export default Chat