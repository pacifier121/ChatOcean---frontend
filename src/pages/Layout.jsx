import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import cls from "./Layout.module.css";

const Layout = ({ children, storyMode }) => {
  const mainSectionClasses =  cls["mainSection"] + " " + (storyMode ? cls["disable-scroll"] : "");

  return (
    <>
      <Navbar />
      <div style={{overflowY: 'hidden'}} className={mainSectionClasses}>
        <div className={cls["leftSection"]}>
          <Sidebar />
        </div>
        <div className={cls['rightSection']}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout