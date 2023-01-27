import React from 'react'
import logo from "../Navbar/logo.png"
import BasicInfo from '../UI/BasicInfo'
import cls from "./SuggestedFriends.module.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SectionCard from '../UI/SectionCard';

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
    <SectionCard title={"Suggested Friends"} expandLinkText={"See All"}>
      <SuggestedRequest />
      <SuggestedRequest />
      <SuggestedRequest />
    </SectionCard>
  )
}

export default SuggestedFriends