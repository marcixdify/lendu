import React, { Component } from "react";
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import { withRouter } from "../withRouter";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

import { signupNewUser } from "./RegisterActions"; // new import

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // update function to call the action
  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    this.props.signupNewUser(userData); // <-- signup new user request
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Sign up</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>Nazwa użytkownika:</Form.Label>
                <Form.Control

                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid">

                </FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="usernameId">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control

                  type="email"
                  name="email"
                  placeholder="Enter user name"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid">

                </FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Hasło:</Form.Label>
                <Form.Control

                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onSignupClick}>
              Sign up
            </Button>
            <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

// connect action and reducer
// replace 
// export default Signup;
// with code below:

Signup.propTypes = {
  signupNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  createUser: state.createUser
});

export default connect(mapStateToProps, {signupNewUser})(withRouter(Signup));