import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./components/Feed/Feed";
import Layout from "./pages/Layout";
import Profile, { PostsContent, VideosContent } from "./pages/Profile";
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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  

  return (
    <Routes>
      <Route path="/login" element={ isLoggedIn ? <Navigate to="/" /> :  <Login />} />
      <Route path="/register" element={ isLoggedIn ? <Navigate to="/" /> : <Register />} />
      <Route path="/" element={ !isLoggedIn ? <Navigate to="/login" /> : <ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
                <Route index element={<Feed type="user-home" /> } />
                <Route path="stories" element={ <Stories /> } />
                <Route path="chat" element={ <ChatPage /> } />
                <Route path="profile/:username" element={ <Profile /> } >
                    <Route index element={<Navigate to="posts" />} /> 
                    <Route path="posts" element={<PostsContent />} /> 
                    <Route path="videos" element={<VideosContent />} /> 
                    <Route path="stories" element={<PostsContent />} /> 
                    <Route path="followers" element={<PostsContent />} /> 
                    <Route path="followings" element={<PostsContent />} /> 
                </Route>
                <Route path="post/:postId" element={ <PostPage /> } />
                <Route path="notifications" element={ <Notifications /> } /> 
            </Route>
            <Route path="/story/:storyId" element={ <Layout storyMode={true} />} >
                <Route index element={<StoryPage />} />
            </Route>
      </Route>
    </Routes>

  );
}

export default App;
