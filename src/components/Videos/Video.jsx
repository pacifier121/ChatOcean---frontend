import React from 'react'
import cls from "./Video.module.css";
import { useRef, useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { videoActions } from '../../store/video';


const Video = ({ showControls, clickToMute, autoPlay, muted, src, loop }) => {
     const dispatch = useDispatch();
     const { isVideoPlaying, video, volume } = useSelector(state => state.video);
     const videoRef = useRef();
     
     useEffect(() => {
         return () => {
               if (video) dispatch(videoActions.setVideoStop());
         } 
     }, []) 

     useEffect(() => {
          if (!video) dispatch(videoActions.setVideoStart(videoRef.current));
          
     }, [video]);
    
     const pauseVideoHandler = () => {
          dispatch(videoActions.setVideoPause());
     }
     
     const playVideoHandler = () => {
          dispatch(videoActions.setVideoResume());
     }
     
     const toggleVideoHandler = () => {
          if (video === videoRef.current){
               if (isVideoPlaying) dispatch(videoActions.setVideoPause());
               else dispatch(videoActions.setVideoResume());
          } else {
               dispatch(videoActions.setVideoStart(videoRef.current));
          }
     }
     
     const muteClickHandler = () => {
          if (clickToMute) dispatch(videoActions.toggleVolume());
     }


    const classes = cls["video-wrapper"];

  return (
       <div className={classes} >
              <video ref={videoRef} onTouchStart={pauseVideoHandler} onTouchEnd={playVideoHandler} onTouchCancel={playVideoHandler} 
               autoPlay={autoPlay} muted={muted} preload={'metadata'} loop={loop || true} controls={showControls} width="100%" className={cls["video"]}
               clickToMute={clickToMute}  onClick={toggleVideoHandler} 
               >
                <source src={src} type="video/mp4" />
                {/* <source src="./nature_video.webm" type="video/webm" /> */}
                  Sorry, browser doesn't support video
            </video>
            {clickToMute && <span onClick={muteClickHandler} className={cls["volume-info"]}>
               {volume > 0.4  && <VolumeUpIcon style={{fontSize: "100%"}} />}
               {volume > 0 && volume <= 0.4 && <VolumeDownIcon  style={{fontSize: "100%"}}/>}
               {volume === 0 && <VolumeOffIcon  style={{fontSize: "100%"}}/>}
               </span>}
       </div> 
  )
}

export default Video