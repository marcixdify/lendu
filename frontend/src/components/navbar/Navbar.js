import React, { Fragment, Button } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../withRouter";
import * as actions from "../../store/actions/auth";
import navbarc from "./navbar.css";
import logo from "../../assets/img/lendu-logo.png";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.2.0/mdb.min.css"
  rel="stylesheet"
/>;
class Navbar extends React.Component {
  render() {
    console.log(this.props.isAuthenticated);

    const guestLinks = (
      <Fragment>
        <Link to="/login/">
          <li class="nav-item">
            <a class="nav-link">Logowanie</a>
          </li>
        </Link>

        <Link to="/register/">
          <li class="nav-item">
            <a class="nav-link">Rejestracja</a>
          </li>
        </Link>
      </Fragment>
    );

    const authLinks = (
      <Fragment>
        <Link to="/dashboard">
          <li class="nav-item">
            <a class="nav-link">Logowanie</a>
          </li>
        </Link>

        <li class="nav-item">
          <a class="nav-link" onClick={this.props.logout} href="/">
            Wyloguj
          </a>
        </li>

        <Link to="/notice/add">
          <li class="nav-item">
            <a class="nav-link">Dodaj ogłoszenie</a>
          </li>
        </Link>

        <Link to="/chat">
          <li class="nav-item">
            <a class="nav-link">Czat</a>
          </li>
        </Link>
      </Fragment>
    );
    //console.log(this.props.isAuthenticated)
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-orange bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} style={{ width: "80px" }}></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/">
                  <li class="nav-item">
                    <a class="nav-link">Strona główna</a>
                  </li>
                </Link>

                <Link to="/notices">
                  <li class="nav-item">
                    <a class="nav-link">Ogłoszenia</a>
                  </li>
                </Link>

                {this.props.isAuthenticated ? authLinks : guestLinks}


              </ul>



              <ul class="navbar-nav d-flex flex-row ms-auto me-3">
              <form class="me-3">
                <div class="form-white input-group" style={{}}>
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Szukaj ogłoszenia"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                </div>
              </form>
                <li class="nav-item me-3 me-lg-0 dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-plus"></i>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                  
                </li>
                
                <li class="nav-item me-3 me-lg-0 dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown1"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                      class="rounded-circle"
                      height="22"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logoutApi()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
