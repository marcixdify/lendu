import "./App.css";
import Navbar from "./components/Navbar";
import NoticesList from "./containers/NoticesList";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./containers/HomePage";
import NoticePage from "./containers/NoticePage";
import AddNotice from "./containers/AddNotice";
import EditNotice from "./containers/EditNotice";
import "bootstrap/dist/css/bootstrap.min.css";

const BaseRouter = () => (
    <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/notices" exact element={<NoticesList />} />
          <Route path="/notice/:id"  element={<NoticePage />} />
          <Route path="/notice/edit/:id"  element={<EditNotice />} />
          <Route path="/notice/add"  element={<AddNotice />} />
    </Routes>
);

export default BaseRouter;