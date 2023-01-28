import React from 'react'
import logo from "../Navbar/logo.png";
import cls from "./StoryCard.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';

const StoryCard = ({ type, className }) => {
   const cardClasses = `${cls["story-card"]} ${className}`;

   const regularCard = (
      <Link to="/story/abcd" className={cardClasses}>
        <div className={cls["story-card-user"]}>
            <img src={logo} className={cls["story-card-img"]} />
            <span className={cls["story-card-text"]}>Pacifire Ocean</span>
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