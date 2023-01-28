import React from 'react'
import cls from "./Story.module.css";
import Video from "../Videos/Video";
import Photo from "../Photos/Photo";
import logo from "../Navbar/logo.png";
import UserStoryCarousel from "./UserStoryCarousel";
import n1 from  "../Feed/images/nature1.jpg";
import n2 from  "../Feed/images/nature2.jpeg";
import n4 from  "../Feed/images/nature4.jpg";
import BasicInfo from "../UI/BasicInfo";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom"

const removeLinkStyles = { textDecoration: 'none' };

const Story = ({ type }) => {
  const Item = type === 'video' ? 
        <Video showControls={false} className={cls["story-video"]} /> : 
        <Photo className={cls["story-photo"]} />

  return (
      <>
          <BasicInfo className={cls['profile-info']} theme="dark" img={logo} name={"Pacifire Ocean"} info={"1 hr ago"} />
          <Link onClick={() => console.log("helo")} className={cls['home-link']} to="/" style={removeLinkStyles}><HomeIcon sx={{fontSize: '100%'}} /></Link>
            <UserStoryCarousel className={cls["story"]}>
              <Photo src={n1} className={cls["story-photo"]} />
              <Video showControls={false} className={cls["story-video"]} />
              <Photo src={n4} className={cls["story-photo"]} />
            </UserStoryCarousel>
      </>
  )
}

export default Story