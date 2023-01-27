import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import cls from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={cls["mainSection"]}>
        <div className={cls["leftSection"]}>
          <Sidebar />
        </div>
        <div className={cls["rightSection"]}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout