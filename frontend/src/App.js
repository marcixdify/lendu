import "./App.css";
import Navbar from "./components/Navbar";
import NoticesList from "./containers/NoticesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/HomePage";
import NoticePage from "./containers/NoticePage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<NoticesList />} />
          <Route path="/notice/:id"  element={<NoticePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
