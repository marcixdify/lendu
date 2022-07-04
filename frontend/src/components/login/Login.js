import React, { Component } from "react";
import { withRouter } from "../withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import * as actions from "../../store/actions/auth";
import { login } from "./LoginActions.js"; // new import

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    console.log('tak')
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.onAuth(userData); // <--- login request
  };
  render() {
    return (

//d
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
                      Logowanie
                    </h2>
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

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

                    {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}

                    <button
                      class="btn btn-outline btn-lg px-5"
                      type="submit"
                      style={{
                        backgroundColor: "#C33149",
                        color: "#FFB140",
                        borderRadius: "20px",
                      }}
                      onClick={this.onLoginClick}
                    >
                      Zaloguj sięx
                    </button>
                  </div>

                  <div>
                    <p class="mb-0">
                      Nie posiadasz jeszcze konta?{" "}
                      <Link to="/register">
                        <a
                          href="#!"
                          class="text-50 fw-bold"
                          style={{ color: "#C33149" }}
                        >
                          Zarejestruj się
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (userData) => dispatch(actions.authLogin(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
