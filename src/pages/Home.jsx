import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import cls from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={cls["mainSection"]}>
        <Sidebar />
        <Feed type="user-home" />
      </div>
    </>
  )
}

export default Home