import NoticesList from "./containers/NoticesList";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./containers/HomePage";
import NoticePage from "./containers/NoticePage";
import AddNotice from "./containers/AddNotice";
import EditNotice from "./containers/EditNotice";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import requireAuth from "./utils/RequireAuth";
import Dashboard from "./components/dashboard/Dashboard"
import ResetPassword from "./components/dashboard/resetPassword/ResetPassword"
import ListUser from "./components/chat/ListUser"
import ListRoom from "./components/chat/ListRoom"
import Chat from "./components/chat/Chat"
import Test from './components/Test'
import OwnNotice from './components/dashboard/ownNotice/OwnNotice'
import Profile from "./components/profile/Profile";

const BaseRouter = () => (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/notices" exact element={<NoticesList />} />
    <Route path="/notice/:id" element={<NoticePage />} />
    <Route path="/notice/edit/:id" element={<EditNotice />} />
    <Route path="/notice/add" element={<AddNotice />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/dashboard/reset-password" element={<ResetPassword />} />
    <Route path="/dashboard/own-notice" element={<OwnNotice />} />
    <Route path="/chat/" element={<ListUser />} />
    <Route path="/chat/list-room" element={<ListRoom />} />
    <Route path="/chat/list-room/conversation/:id/:id" element={<Chat />} />
    <Route path="/test" element={<Test />} />

  </Routes>
);

export default BaseRouter;
