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
import PostPage from "./pages/PostPage";
import StoryPage from "./pages/StoryPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { tryLogin } from "./store/auth";


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(tryLogin());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={ !isLoggedIn ? <Navigate to="/login" /> : <Layout> <Feed type="user-home" /> </Layout> } />
      <Route path="/login" element={ isLoggedIn ? <Navigate to="/" /> :  <Login />} />
      <Route path="/register" element={ isLoggedIn ? <Navigate to="/" /> : <Register />} />
      <Route path="/stories" element={ <Layout> <Stories /> </Layout> } />
      <Route path="/chat" element={ <Layout> <ChatPage /> </Layout> } />
      <Route path="/profile/:username" element={ <Layout> <Profile /> </Layout> } />
      <Route path="/post/:postId" element={ <Layout> <PostPage /> </Layout> } />
      <Route path="/story/:storyId" element={ <Layout storyMode={true}> <StoryPage /> </Layout> } />
      <Route path="/notifications" element={ <Layout> <Notifications /> </Layout> } /> 
    </Routes>
  );
}

export default App;
