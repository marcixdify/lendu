import React, { Fragment, Button } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../withRouter";
import * as actions from "../../store/actions/auth";
import sidebar from "./sidebar.css";
import logo from "../../assets/img/lendu-logo.png";
import Footer from "../footer/Footer"

class Sidebar extends React.Component {
  render() {
    
    return (
      <div class="sidebar-main">

        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />


        <input type="checkbox" id="check" />
        <label for="check">
          <i class="fas fa-bars" id="btn"></i>
          <i class="fas fa-times" id="cancel"></i>
        </label>
        <div class="sidebar">
          <header>Menu</header>


          <Link to="/dashboard">
            <i class="fas fa-qrcode"></i>
            <span>Dashboard</span>
          </Link>


          <Link to="/notices">
            <i class="fas fa-stream"></i>
            <span>Ogłoszenia</span>
          </Link>

          <Link to="/dashboard/own-notice">
            <i class="fas fa-calendar"></i>
            <span>Moje ogłoszenia</span>
          </Link>

          <Link to="/notice/add">
            <i class="far fa-question-circle"></i>
            <span>Dodaj</span>
          </Link>

          <Link to="/chat/list-room">
            <i class="fas fa-sliders-h"></i>
            <span>Konwersacje</span>
          </Link>

          <Link to="/dashboard">
            <i class="fas fa-link"></i>
            <span>O mnie</span>
          </Link>

          <Link to="/dashboard">
            <i class="fas fa-qrcode"></i>
            <span>Ustawienia</span>
          </Link>

          <a onClick={this.props.logout} href="/">
            <i class="far fa-envelope"></i>
            <span>Wyloguj</span>
          </a>
        </div>



      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logoutApi()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Sidebar));
