import React from 'react'
import Chat from "../components/Chat/Chat";
import ChatSidebar from "../components/Chat/ChatSidebar";
import cls from "./ChatPage.module.css";

const ChatPage = () => {
  return (
      <div className={cls["chatpage"]}>
       <div className={cls["chat-container"]}>
            <Chat />
        </div> 
       <div className={cls["sidebar"]}>
            <ChatSidebar />
        </div> 
      </div>
  )
}

export default ChatPage