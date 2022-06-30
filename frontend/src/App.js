import Navbar from "./components/navbar/Navbar";
import BaseRouter from "./routes";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom"

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
    console.log(this.props.isAuthenticated)
   // console.log(this.props)
    //if(this.props.isAuthenticated == true){
      //console.log("ZALOGOWANO")
    //}
    
  }
  
  
  
  render() {
    // if(this.props.isAuthenticated == true){
      
    //   let navigate = useNavigate()
    //   navigate(/notices)
    // }
    return (
      <div>
        <BrowserRouter>
        
          <Navbar {...this.props}/>
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