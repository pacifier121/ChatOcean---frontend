import React from 'react'
import cls from "./Story.module.css";
import Video from "../Videos/Video";
import Photo from "../Photos/Photo";
import UserStoryCarousel from "./UserStoryCarousel";
import BasicInfo from "../UI/BasicInfo";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom"
import {PF} from "../../constants/constants";

const removeLinkStyles = { textDecoration: 'none' };

const Story = ({ type }) => {
  const Item = type === 'video' ? 
        <Video showControls={false} className={cls["story-video"]} /> : 
        <Photo className={cls["story-photo"]} />

  return (
      <>
          <BasicInfo className={cls['profile-info']} theme="dark" img={PF+'logo.png'} name={"Pacifire Ocean"} info={"1 hr ago"} />
          <Link onClick={() => console.log("helo")} className={cls['home-link']} to="/" style={removeLinkStyles}><HomeIcon sx={{fontSize: '100%'}} /></Link>
            <UserStoryCarousel className={cls["story"]}>
              <Photo src={PF+'images/nature1.jpeg'} className={cls["story-photo"]} />
              <Video showControls={PF+'videos/video_nature.mp4'} src={PF+'videos/video_nature1.mp4'} className={cls["story-video"]} />
              <Photo src={PF+'images/nature4.jpeg'} className={cls["story-photo"]} />
            </UserStoryCarousel>
      </>
  )
}

export default Story