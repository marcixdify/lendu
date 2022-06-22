import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseRouter from "./routes";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        
          <Navbar />
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <BaseRouter />
        </BrowserRouter>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);