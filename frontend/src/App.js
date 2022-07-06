import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import BaseRouter from "./routes";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";



class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
    console.log(this.props.isAuthenticated)
    
  }

  render() {
    return (
      <div>
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
        <BrowserRouter>
          <Navbar {...this.props}>
          {this.props.isAuthenticated ? <Sidebar {...this.props}/> : null}
          <BaseRouter />
          </Navbar> 
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