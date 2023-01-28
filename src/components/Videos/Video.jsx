import React from 'react'
import cls from "./Video.module.css";
import video from "./nature_video.mp4"
import { useRef } from 'react';

const Video = ({ showControls }) => {
    const classes = cls["video-wrapper"] + " card-shadow";
    const videoRef = useRef();
    
     const pauseVideoHandler = () => {
          videoRef.current.pause();
     }
     
     const playVideoHandler = () => {
          videoRef.current.play();
     }

  return (
       <div className={classes}>
              <video ref={videoRef} onTouchStart={pauseVideoHandler} onTouchEnd={playVideoHandler} onTouchCancel={playVideoHandler} 
               autoPlay loop controls={showControls} width="100%" className={cls["video"]}>
                {/* <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" /> */}
                <source src={video} type="video/mp4" />
                {/* <source src="./nature_video.webm" type="video/webm" /> */}
                  Sorry, browser doesn't support video
            </video>
       </div> 
  )
}

export default Video