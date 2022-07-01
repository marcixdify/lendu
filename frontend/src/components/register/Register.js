import React, { Component } from "react";
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
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

import { signupNewUser } from "./RegisterActions"; // new import

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
    return (
      // <Container>
      //   <Row>
      //     <Col md="4">
      //       <h1>Sign up</h1>
      //       <Form>
      //         <Form.Group controlId="usernameId">
      //           <Form.Label>Nazwa użytkownika:</Form.Label>
      //           <Form.Control

      //             type="text"
      //             name="username"
      //             placeholder="Enter user name"
      //             value={this.state.username}
      //             onChange={this.onChange}
      //           />
      //           <FormControl.Feedback type="invalid">

      //           </FormControl.Feedback>
      //         </Form.Group>

      //         <Form.Group controlId="usernameId">
      //           <Form.Label>E-mail:</Form.Label>
      //           <Form.Control

      //             type="email"
      //             name="email"
      //             placeholder="Enter email"
      //             value={this.state.email}
      //             onChange={this.onChange}
      //           />
      //           <FormControl.Feedback type="invalid">

      //           </FormControl.Feedback>
      //         </Form.Group>


      //         <Form.Group controlId="usernameId">
      //           <Form.Label>Telefon:</Form.Label>
      //           <Form.Control

      //             type="number"
      //             name="phone"
      //             placeholder="Wpisz numer telefonu"
      //             value={this.state.phone}
      //             onChange={this.onChange}
      //           />
      //           <FormControl.Feedback type="invalid">

      //           </FormControl.Feedback>
      //         </Form.Group>

      //         <Form.Group controlId="passwordId">
      //           <Form.Label>Hasło:</Form.Label>
      //           <Form.Control

      //             type="password"
      //             name="password"
      //             placeholder="Enter password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //           />
      //           <Form.Control.Feedback type="invalid">
      //           </Form.Control.Feedback>
      //         </Form.Group>
      //       </Form>
      //       <Button color="primary" onClick={this.onSignupClick}>
      //         Sign up
      //       </Button>
      //       <p className="mt-2">
      //         Already have account? <Link to="/login">Login</Link>
      //       </p>
      //     </Col>
      //   </Row>
      // </Container>

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
                    Zaloguj się
                  </button>
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

// connect action and reducer
// replace 
// export default Signup;
// with code below:

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (userData) => dispatch(actions.authSignup(userData)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
