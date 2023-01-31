import React from 'react'
import cls from "./Video.module.css";
import { useRef, useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useEffect } from 'react';


const Video = ({ showControls, clickToMute, autoPlay, muted, src, loop }) => {
    const classes = cls["video-wrapper"];
    const videoRef = useRef();
     const [volume, setVolume] = useState(0);
     // const [volumeTimer, setVolumeTimer] = useState(false);
     
     useEffect(() => {
          // let animationTimer = null;
          if (videoRef){
               videoRef.current.volume = volume;
               // setVolumeTimer(true);
               // animationTimer = setTimeout(() => {
               //      setVolumeTimer(false); 
               // }, 1000);
          }
          
          // return () => {
          //      if (animationTimer) clearTimeout(animationTimer); 
          // }
     }, [volume]);
    
     const pauseVideoHandler = () => {
          videoRef.current.pause();
     }
     
     const playVideoHandler = () => {
          videoRef.current.play();
     }
     
     const toggleVideoHandler = () => {
          if (videoRef.current.paused) playVideoHandler();
          else pauseVideoHandler(); 
     }
     
     const muteClickHandler = () => {
          if (clickToMute){
               if (volume > 0.4){
                    setVolume(0.4);
               } else if (volume > 0){
                    setVolume(0);
               } else {
                    setVolume(1);
               }

               // if (videoRef.current.volume > 0.4){
               //      videoRef.current.volume = 0.4;
               // } else if (videoRef.current.volume > 0) {
               //      videoRef.current.volume = 0;
               // } else {
               //      videoRef.current.volume = 1;
               // } 
          } 
     }

  return (
       <div className={classes}>
              <video ref={videoRef} onTouchStart={pauseVideoHandler} onTouchEnd={playVideoHandler} onTouchCancel={playVideoHandler} 
               autoPlay={autoPlay} muted={muted} preload={'metadata'} loop={loop || true} controls={showControls} width="100%" className={cls["video"]}
               clickToMute={clickToMute}  onClick={toggleVideoHandler}
               >
                {/* <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" /> */}
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