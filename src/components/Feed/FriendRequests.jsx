import React from "react";
import { Link } from "react-router-dom";
import BasicInfo from "../UI/BasicInfo";
import logo from "../Navbar/logo.png";
import cls from "./FriendRequests.module.css";

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
    <div className={cls["requests-wrapper"] + " " + cls["card-shadow"]}>
      <div className={cls["requests-top"]}>
        <span className={cls["requests-top-text"]}>Friend Request</span>
        <a href="#" className={cls["requests-top-link"]}> See All </a>
      </div>
      <hr className={cls["requests-hr"]} />
      <div className={cls["requests-container"]}>
        <FriendRequest />
        <FriendRequest />
        <FriendRequest />
      </div>
    </div>
  );
};

export default FriendRequests;
