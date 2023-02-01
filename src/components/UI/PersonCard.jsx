import React from 'react'
import BasicInfo from './BasicInfo';
import cls from "./PersonCard.module.css";
import { Link } from 'react-router-dom';

const PersonCard = ({ person }) => {
  return (
    <Link to={`/profile/${person.username}`}  className={cls["person-card"] + " card-shadow linkStyles"}>
        <BasicInfo name={"Pacifire Ocean"} info={"@abcdef"} />
        <div className={cls["info"]}>
            <span className="follower-info">12K Followers</span> 
            <span className="following-info">1K Following</span> 
        </div>
    </Link>
  )
}

export default PersonCard