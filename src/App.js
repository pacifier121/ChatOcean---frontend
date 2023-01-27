import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./components/Feed/Feed";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Stories from "./pages/Stories";
import ChatPage from "./pages/ChatPage";
import Notifications from "./pages/Notifications";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Feed type="user-home" />
        </Layout> } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={
        <Layout>
          <Profile />
        </Layout> } />
      <Route path="/stories" element={
        <Layout>
          <Stories />
        </Layout> } />
      <Route path="/chat" element={
        <Layout>
          <ChatPage />
        </Layout> } />
      <Route path="/notifications" element={
        <Layout>
          <Notifications />
        </Layout> } />
    </Routes>
  );
}

export default App;
