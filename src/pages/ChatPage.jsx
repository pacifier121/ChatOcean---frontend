import React, { useState } from 'react'
import Chat from "../components/Chat/Chat";
import ChatSidebar from "../components/Chat/ChatSidebar";
import cls from "./ChatPage.module.css";
import MoreOptionsButton from '../components/UI/MoreOptionButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useSelector, useDispatch} from "react-redux";
import { chatActions } from '../store/chat';


const ChatPage = () => {
  const items = []; 
  const dispatch = useDispatch();
  const { chatsVisible } = useSelector(state => state.chat); 

  const toggleChatsHandler = () => {
    dispatch(chatActions.toggleChatsVisible());
  }

  return (
      <div className={cls["chatpage"] + ' ' + (chatsVisible ? ' ' : cls['chatpage-collapsed'])}>
       <div className={cls["chat-container"]}>
            <Chat />
        </div> 
       <div className={cls["sidebar"] + ' ' + (chatsVisible ? ' ' : cls['sidebar-collapsed'])}>
            <div className={cls["sidebar-top"] + ' ' + (chatsVisible ? ' ' : cls['collapsed'])}>
              <ChatSidebar />
            </div>
            <div className={cls["sidebar-bottom"]} style={{backgroundColor: 'transparent'}}>
               <MoreOptionsButton onClick={toggleChatsHandler} className={cls["chats-dropdown"]} contextMenuClass={cls["chats-dropdown-actions"]} items={items}>
                    <ArrowDropDownIcon className={cls["dropdown-icon"] + ' ' + (chatsVisible ? '' : cls['collapsed-dropdown'])} sx={{fontSize: "120%"}} />
               </MoreOptionsButton>
            </div>
        </div> 
      </div>
  )
}

export default ChatPage