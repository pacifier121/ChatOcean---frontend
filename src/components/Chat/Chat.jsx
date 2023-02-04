import React from "react";
import Message from "./Message";
import SendIcon from "@mui/icons-material/Send";
import cls from "./Chat.module.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useRef, useReducer } from "react";
import MoreOptionsButton from "../UI/MoreOptionButton";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchChat } from "../../store/chat";

const fileReducer = (state, action) => {
  if (action.type === 'IMG'){
    if (!state.fileSelected){
      state.fileSelected = true;
      state.file = action.payload;
      state.type = 'image';
    } else {
      state.fileSelected = false;
      state.file = null;
      state.type = '';
    }
  } else if (action.type === 'VIDEO'){
    if (!state.fileSelected){
      state.fileSelected = true;
      state.file = action.payload;
      state.type = 'video';
    } else {
      state.fileSelected = false;
      state.file = null;
      state.type = '';
    }
  } else if (action.type === 'CLEAR'){
      state.fileSelected = false;
      state.file = null;
      state.type = '';
  }
  return state;
}

const Chat = ({ }) => {
  const imgRef = useRef();
  const videoRef = useRef();
  const textRef = useRef();
  const { user } = useSelector(state => state.auth);
  const { activeChat } = useSelector(state => state.chat);
  const { chatName } = useParams();
  
  const sendMessageHandler = async(e) => {
    e.preventDefault();
    if (!textRef.current.value) return;
    
    const msg = {
        text: textRef.current.value
    } 
    textRef.current.value = '';

    try {
      await axios.post('/chat/message', { chatName: chatName, senderId: user._id , msg: msg});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cls["chat"]}>
      <div className={cls["chat-wrapper"]}>
        {!activeChat ? <div className={cls['no-chat']}>Select a chat to message</div> :
          activeChat.content?.length === 0 ? 
            <div className={cls['no-messages']}>No messages to show</div> :
            <>
              {activeChat.content.map(msg => (
                  <Message key={msg.time} msg={msg} own={msg.senderId === user?._id} />
              ))}
            </>
        }
      </div>
        {activeChat && 
          <form onSubmit={sendMessageHandler}>
            <div className={cls["chat-input-wrapper"]}>
              <div className={cls["file-btn-wrapper"]}>
                { false && <div className={cls["file-cancel-btn"]} > X </div> }
                <label htmlFor="attachFile" className={ cls["file-btn"] + " " + (false && cls["file-btn-active"]) } >
                    <AttachFileIcon sx={{ fontSize: "100%" }} />
                </label>
              </div>
              <textarea ref={textRef} className={cls["input"]} placeholder="Type something..." ></textarea>
              <button type="submit" className={cls["send-btn"]}>
                <SendIcon sx={{ fontSize: "100%" }} />
              </button>
            </div>
          </form>
        }
    </div>
  );
};

export default Chat;
