import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import cls from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const Layout = ({ children, storyMode }) => {
  const mainSectionClasses =  cls["mainSection"] + " " + (storyMode ? cls["disable-scroll"] : "");
  const { chatsVisible } = useSelector(state => state.chat);

  return (
    <>
      <Navbar />
      <div className={mainSectionClasses}>
        {chatsVisible && 
          <div className={cls["leftSection"]}>
            <Sidebar />
          </div>
        }
        <div className={cls['rightSection']}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout