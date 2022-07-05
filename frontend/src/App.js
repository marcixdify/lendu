import Navbar from "./components/navbar/Navbar";
import BaseRouter from "./routes";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";

//test



class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
    console.log(this.props.isAuthenticated)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar {...this.props}>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover   
            />
            <BaseRouter /></Navbar>
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