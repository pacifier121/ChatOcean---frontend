import React from 'react'
import logo from "../Navbar/logo.png";
import cls from "./StoryCard.module.css";
import { Add } from '@mui/icons-material';

const StoryCard = ({ type }) => {
   const regularCard = (
      <div className={cls["story-card"]}>
        <div className={cls["story-card-user"]}>
            <img src={logo} className={cls["story-card-img"]} />
            <span className={cls["story-card-text"]}>Pacifire Ocean</span>
        </div>
      </div>
   ) 
    
   const addStoryCard = (
      <div className={cls["story-card"]}>
        <div className={cls["story-card-user"]}>
            <Add sx={{color: "blue", backgroundColor: "white", fontSize: "50px", borderRadius: "100%"}} />
            <span className={cls["story-card-text"]}>Add Story</span>
        </div>
      </div>
   )

    const card = type === 'add' ? addStoryCard : regularCard;
    
    return card;
}

export default StoryCard