import React from 'react'
import cls from "./StoryCard.module.css";
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import {PF} from "../../constants/constants";

const StoryCard = ({ type, className }) => {
   const cardClasses = `${cls["story-card"]} ${className} card-shadow linkStyles`;

   const regularCard = (
      <Link to="/story/abcd" className={cardClasses} style={{ background: `url(${PF+'covers/back.jpg'})`, backgroundSize: 'cover'}}>
        <div className={"linkStyles"}>
          <div className={cls["story-card-user"]}>
              <img src={PF+'logo.png'} className={cls["story-card-img"]} />
              <span className={cls["story-card-text"]}>Pacifire Ocean</span>
          </div>
        </div>
      </Link>
   ) 
    
   const addStoryCard = (
      <div className={cardClasses}>
        <div className={cls["story-card-user"]}>
            <div className={cls["add-story-btn"]}>
              <Add sx={{ fontSize: "100%" }} />
            </div>
            <span className={cls["story-card-text"]}>Add Story</span>
        </div>
      </div>
   )

    const card = type === 'add' ? addStoryCard : regularCard;
    
    return card;
}

export default StoryCard