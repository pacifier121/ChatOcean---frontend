import React from "react";
import { Link } from "react-router-dom";
import BasicInfo from "../UI/BasicInfo";
import logo from "../Navbar/logo.png";
import cls from "./FriendRequests.module.css";
import SectionCard from "../UI/SectionCard";

const FriendRequest = () => {
    return (
        <div className={cls["request"]}>
            <BasicInfo img={logo} name={"Pacifire Ocean"} info={"12 mutual friends"} />
            <div className={cls["request-actions"]} >
                <button className={cls["confirm-btn"]}>Confirm</button>
                <button className={cls["delete-btn"]}>Delete</button>
            </div>
        </div>
    )
}

const FriendRequests = () => {
  return (
      <SectionCard title={"Friend Requests"} expandLinkText={"See All"} >
        <FriendRequest />
        <FriendRequest />
        <FriendRequest />
      </SectionCard>
  );
};

export default FriendRequests;
