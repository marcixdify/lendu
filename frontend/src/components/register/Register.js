import React, { Component } from "react";
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link, Navigate } from "react-router-dom";
import * as actions from '../../store/actions/auth'
import { withRouter } from "../withRouter";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      phone: "",
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // update function to call the action
  onSignupClick = () => {
    const userData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      phone: this.state.phone,
    };
    this.props.onAuth(userData); // <-- signup new user request
  };

  render() {
    const guestLinks = (

      <button
        class="btn btn-outline btn-lg px-5"
        type="submit"
        style={{
          backgroundColor: "#C33149",
          color: "#FFB140",
          borderRadius: "20px",
        }}
        onClick={this.onSignupClick}
      >
        Zarejestruj się
      </button>

    );

    const authLinks = (
      <Navigate to="/notices" />
    );


    console.log("reg: " + this.props.isAuthenticated);
    return (


      <section
        class="vh-100 gradient-custom"
        style={{ backgroundColor: "rgba(196, 146, 36, 0.7)", color: "#FFB140" }}
      >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card  "
                style={{ borderRadius: "1rem", color: "#FFB140" }}
              >
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2
                      class="fw-bold mb-2 text-uppercase"
                      style={{ color: "#C33149" }}
                    >
                      Rejestracja
                    </h2>
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Nazwa użytkownika
                      </label>
                    </div>


                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="number"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Numer telefonu
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                      />
                      <label class="form-label" for="typePasswordX">
                        Hasło
                      </label>
                    </div>



                    {this.props.isAuthenticated ? authLinks : guestLinks}
                  </div>

                  <div>
                    <p class="mb-0">
                      Posiadasz już konto?{" "}
                      <Link to="/login">
                        <a
                          href="#!"
                          class="text-50 fw-bold"
                          style={{ color: "#C33149" }}
                        >
                          Zaloguj się
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (userData) => dispatch(actions.authSignup(userData)),
    logout: () => dispatch(actions.logoutApi()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
