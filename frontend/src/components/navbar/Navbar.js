import React, { Fragment, Button } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import { withRouter } from "../withRouter";
import * as actions from '../../store/actions/auth'

class Navbar extends React.Component {
  
  render(){
    console.log(this.props.isAuthenticated)

    const guestLinks = (
      <Fragment>
          <Link to="/login/">
            <a class="nav-link">Logowanie</a>
          </Link>
          <Link to="/register/">
            <a class="nav-link">Rejestracja</a>
          </Link>
  
  
      </Fragment>
  );

    const authLinks = (
      
    
      <Fragment>
          <li className='nav-item'>
              <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
          </li>
          <li className='nav-item'>
              <a className='nav-link' onClick={ this.props.logout } href="/">Logout</a>
          </li>
          <Link to="/notice/add">
              <a class="nav-link">Dodaj ogłoszenie</a>
          </Link>
          <Link to="/chat">
              <a class="nav-link">Czat</a>
          </Link>

      </Fragment>
  );
//console.log(this.props.isAuthenticated)
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <a class="navbar-brand">LenDu</a>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">
              <a class="nav-link">Strona główna</a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/notices/">
              <a class="nav-link">Lista ogłoszeń</a>
            </Link>
          </li>

          {this.props.isAuthenticated ? authLinks : guestLinks}

          {this.props.children}

        </ul>
      </div>
    </nav>
  );
}
};

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logoutApi()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
