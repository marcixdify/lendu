import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom"; // new import
import * as actions from "./OwnNoticeActions";
import OwnNoticeActions  from "./OwnNoticeActions";



class OwnNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: localStorage.getItem("role"),
      getOwnNotice: [],
    };
  }


  

  componentDidMount() {


    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .get(`http://127.0.0.1:8000/api/notices/`)
      .then((response) => {
        console.log(response.data)
        var getOwnNotice =  response.data.filter(function(notice) {
            return notice.identifier == `${localStorage.getItem("identifier")}`;
          });
        this.setState({getOwnNotice})
        console.log(getOwnNotice);
        this.props.onAuth(getOwnNotice)

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
    console.log(this.state.getOwnNotice)
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="search">
                </div>
            </div>
        <h1>Twoje ogłoszenia:</h1>
        <div class="container">
                    <div class="shop-default shop-cards shop-tech">
                        <div class="row d-flex justify-content-center">
            {this.state.getOwnNotice.map((getOwnNotice, index) => (
          <OwnNoticeActions href key={index} getOwnNotice={getOwnNotice} />
        ))}
</div></div></div>
</div>
    );
  }
}

// connect action and store and component
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (getOwnNotice) => dispatch(actions.OwnNoticeActions(getOwnNotice)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnNotice);


