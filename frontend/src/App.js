import "./App.css";
import Navbar from "./components/Navbar";
import NoticesList from "./containers/NoticesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/HomePage";
import NoticePage from "./containers/NoticePage";
import AddNotice from "./containers/AddNotice";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<NoticesList />} />
          <Route path="/notice/:id"  element={<NoticePage />} />
          <Route path="/notice/add"  element={<AddNotice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
