import React from 'react'
import logo from "../Navbar/logo.png"
import BasicInfo from '../UI/BasicInfo'
import cls from "./SuggestedFriends.module.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SuggestedRequest = () => {
    return (
        <div className={cls["request"]}>
            <BasicInfo img={logo} name={"Pacifire Ocean"} info={"12 mutual friends"} />
            <button className={cls["profile-btn"]}>
               <KeyboardArrowRightIcon /> 
            </button>
        </div>
    )
}

const SuggestedFriends = () => {
  return (
    <div className={cls["requests-wrapper"] + " " + cls["card-shadow"]}>
      <div className={cls["requests-top"]}>
        <span className={cls["requests-top-text"]}>Suggested Friends</span>
        <a href="#" className={cls["requests-top-link"]}> See All </a>
      </div>
      <hr className={cls["requests-hr"]} />
      <div className={cls["requests-container"]}>
        <SuggestedRequest />
        <SuggestedRequest />
        <SuggestedRequest />
      </div>
    </div>
  )
}

export default SuggestedFriends