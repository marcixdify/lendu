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
      <div class="container">

        <h1>Zmień hasło:</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Poprzednie hasło:</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              type="password"
              name="old_password"
              placeholder="Wprowadz poprzednie hasło"
              value={this.state.old_password}
              onChange={this.onChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Nowe hasło:</label>
            <input
              class="form-control"
              id="exampleInputPassword1"
              type="password"
              name="new_password"
              placeholder="Wprowadz nowe hasło"
              value={this.state.new_password}
              onChange={this.onChange}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">
              Wprowadz nowe hasło ponownie:
            </label>
            <input
              class="form-control"
              id="exampleInputPassword1"
              type="password"
              name="new_password2"
              placeholder="Wprowadz nowe hasło"
              value={this.state.new_password2}
              onChange={this.onChange}
            />
          </div>
        </form>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={this.onSignupClick}
        >
          Submit
        </button>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (userData) => dispatch(actions.changePassword(userData)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
