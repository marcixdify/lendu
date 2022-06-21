import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseRouter from "./routes";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root"; 
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <BaseRouter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
