import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom"; // new import

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: localStorage.getItem("role"),
      roleExp: "",
      getUserData: "",
    };
  }


  

  componentDidMount() {


    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .get(`http://127.0.0.1:8000/api/auth/user/test/`)
      .then((response) => {
        console.log(response);
        const getUserData = response.data;
        this.setState({ getUserData });
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

  }

  render() {
    return (
      <div>
        <h1>Twoje dane:</h1>
        <h4>Email:{this.state.getUserData.email}</h4>
        <h4>identifier:{this.state.getUserData.identifier}</h4>
        <Link to="reset-password/">
        <button>Resetuj hasło</button>
        </Link>
        <Link to="own-notice/">
        <button>Twoje ogłoszenia</button>
        </Link>
      </div>
    );
  }
}

// connect action and store and component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


