import React, { Component } from "react";
import { withRouter } from "../withRouter";  // new import 
import { connect } from "react-redux";          // new import 
import PropTypes from "prop-types";             // new import 
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import * as actions from '../../store/actions/auth';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
       <h1>Dashboard</h1>
      </Container>
    );
  }
}

// connect action and store and component
const mapStateToProps = (state) => {
  return {


  }
}

const mapDispatchToProps = dispatch => {
  return {
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);