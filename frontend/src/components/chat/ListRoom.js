import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux"; 
import PropTypes from "prop-types"; 
import { Link } from "react-router-dom"; 
import Room from "./Room";
import * as actions from "./Room";

class ListRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: localStorage.getItem("role"),
      getRoom: [],
    };
  }

  componentDidMount() {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .get(`http://127.0.0.1:8000/chat/list/${localStorage.getItem("identifier")}/chat/`)
      .then((response) => {
        console.log(response.data);
        const getRoom = response.data;
        this.setState({ getRoom });
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
      <section style={{ backgroundColor: "eee" }}>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
            <h5 class="font-weight-bold mb-3 text-center text-lg-start">
              Member
            </h5>
        {this.state.getRoom.map((getRoom, index) => (
          <Room href key={index} getRoom={getRoom} />
        ))}


</div>
            </div>
          </div>
        </section>
    );
  }
}


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (getRoom) =>
      dispatch(actions.Room(getRoom)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRoom);