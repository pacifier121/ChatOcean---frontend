import React from 'react'
import BasicInfo from '../UI/BasicInfo'
import cls from "./SuggestedFriends.module.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SectionCard from '../UI/SectionCard';
import {PF} from "../../constants/constants";

const SuggestedRequest = () => {
    return (
        <div className={cls["request"]}>
            <BasicInfo img={PF+"logo.png"} name={"Pacifire Ocean"} info={"12 mutual friends"} />
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