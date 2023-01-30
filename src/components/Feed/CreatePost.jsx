import React from 'react'
import cls from "./CreatePost.module.css";
import CreateIcon from '@mui/icons-material/Create';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { MoreHoriz } from '@mui/icons-material';
import {PF} from "../../constants/constants";

const CreatePost = () => {
  return (
      <div className={cls["create-post"] + " card-shadow"}>
        <div className={cls["create-post-title"]} >
            <div className={cls["create-post-icon"]} >
                <CreateIcon sx={{ fontSize: "25px" }} />
            </div>
            <span className={cls["create-post-title-text"]} >Create Post</span>
            <span className={cls["submit-btn"]}>Create</span>
        </div>
        <div className={cls['create-post-descbox']}>
            <textarea placeholder={`What's on your mind ${'pacifire'}?`} className={cls['create-post-input']} />
            <img src={PF+'logo.png'} className={cls['create-post-user-img']} />
        </div>
        <div className={cls['create-post-options']}>
            <div className={cls['option']}>
               <VideoCameraBackIcon sx={{fontSize: "25px", color: "red"}} /> 
                <span className={cls['option-text']}>Live Video</span>
            </div>
            <div className={cls['option']}>
               <InsertPhotoIcon sx={{fontSize: "25px", color: "green"}} /> 
                <span className={cls['option-text']}>Photo/Video</span>
            </div>
            <div className={cls['option']}>
               <CameraAltIcon sx={{fontSize: "25px", color: "orange"}} /> 
                <span className={cls['option-text']}>Feeling/Activity</span>
            </div>
            <div className={cls['more-option']}>
                <MoreHoriz sx={{fontSize: "25px"}} />
            </div>
        </div>
      </div>
  )
}

export default CreatePost