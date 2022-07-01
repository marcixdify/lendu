import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import * as actions from "./ResetPasswordActions";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: "",
      new_password: "",
      new_password2: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  onSignupClick = () => {
    const userData = {
      old_password: this.state.old_password,
      new_password: this.state.new_password,
      new_password2: this.state.new_password2,
    };
    this.props.onAuth(userData);
    console.log(userData);
  };

  render() {
    return (
      // <div class="container">

      //   <h1>Zmień hasło:</h1>
      //   <form>
      //     <div class="form-group">
      //       <label for="exampleInputEmail1">Poprzednie hasło:</label>
      //       <input
      //         class="form-control"
      //         id="exampleInputEmail1"
      //         aria-describedby="emailHelp"
      //         type="password"
      //         name="old_password"
      //         placeholder="Wprowadz poprzednie hasło"
      //         value={this.state.old_password}
      //         onChange={this.onChange}
      //       />
      //     </div>
      //     <div class="form-group">
      //       <label for="exampleInputPassword1">Nowe hasło:</label>
      //       <input
      //         class="form-control"
      //         id="exampleInputPassword1"
      //         type="password"
      //         name="new_password"
      //         placeholder="Wprowadz nowe hasło"
      //         value={this.state.new_password}
      //         onChange={this.onChange}
      //       />
      //     </div>

      //     <div class="form-group">
      //       <label for="exampleInputPassword1">
      //         Wprowadz nowe hasło ponownie:
      //       </label>
      //       <input
      //         class="form-control"
      //         id="exampleInputPassword1"
      //         type="password"
      //         name="new_password2"
      //         placeholder="Wprowadz nowe hasło"
      //         value={this.state.new_password2}
      //         onChange={this.onChange}
      //       />
      //     </div>
      //   </form>

      //   <button
      //     type="submit"
      //     class="btn btn-primary"
      //     onClick={this.onSignupClick}
      //   >
      //     Submit
      //   </button>

      // </div>
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
                      Zmień hasło
                    </h2>
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        name="old_password"
                        value={this.state.old_password}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Obecne hasło
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        name="new_password"
                        value={this.state.new_password}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typePasswordX">
                        Nowe hasło
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        name="new_password2"
                        value={this.state.new_password2}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typePasswordX">
                        Powtórz nowe hasło
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
                      onClick={this.onSignupClick}
                    >
                      Zmień hasło
                    </button>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (userData) => dispatch(actions.changePassword(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
