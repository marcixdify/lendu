import "./App.css";
import Navbar from "./components/Navbar";
import NoticesList from "./containers/NoticesList";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./containers/HomePage";
import NoticePage from "./containers/NoticePage";
import AddNotice from "./containers/AddNotice";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseRouter from './routes';
//damian sie sprzedal
//dupa chuj

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <BaseRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
