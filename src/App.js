import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Stories from "./pages/Stories";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import cls from "./App.module.css";
import Register from "./pages/Register";

function App() {
  return (
    <>
      {/* <Register /> */}
      <Navbar />
      <div className={cls["mainSection"]}>
        <div className={cls["leftSection"]}>
          <Sidebar />
        </div>
        <div className={cls["rightSection"]}>
          <Home />
          {/* <Profile /> */}
        </div>
      </div>
    </>
  );
}

export default App;
