import React, { useState } from 'react'
import Chat from "../components/Chat/Chat";
import ChatSidebar from "../components/Chat/ChatSidebar";
import cls from "./ChatPage.module.css";
import MoreOptionsButton from '../components/UI/MoreOptionButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ChatPage = () => {
  const items = []; 
  const [chatsVisible, setChatsVisible] = useState(false);

  const toggleChatsHandler = () => {
    console.log("UES")
    setChatsVisible(state => !state);
  }

  return (
      <div className={cls["chatpage"]}>
       <div className={cls["chat-container"]}>
            <Chat />
        </div> 
       <div className={cls["sidebar"]}>
            <div className={cls["sidebar-top"] + ' ' + (chatsVisible ? cls['collapsed']: '')}>
              <ChatSidebar />
            </div>
            <div className={cls["sidebar-bottom"]}>
               <MoreOptionsButton onClick={toggleChatsHandler} className={cls["chats-dropdown"]} contextMenuClass={cls["chats-dropdown-actions"]} items={items}>
                    <ArrowDropDownIcon className={cls["dropdown-icon"] + ' ' + (chatsVisible ? cls['collapsed-dropdown'] : '')} sx={{fontSize: "120%"}} />
               </MoreOptionsButton>
            </div>
        </div> 
      </div>
  )
}

export default ChatPage