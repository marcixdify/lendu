import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import * as actions from '../store/actions/auth';
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

//import { authAddNotice } from "../store/actions/auth"; // new import

class AddNotice extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      NoticeTitle: "",
      NoticeDescription: ""
    };
  }
  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // update function to call the action
  onSignupClick = () => {
    const userData = {
      NoticeTitle: this.state.NoticeTitle,
      NoticeDescription: this.state.NoticeDescription
    };
    let NoticeTitle = userData.NoticeTitle;
    let NoticeDescription = userData.NoticeDescription;
    console.log(userData.NoticeTitle, userData.NoticeDescription)
    this.props.onAuth(NoticeTitle, NoticeDescription); // <-- signup new user request
  };

  render() {
    
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Dodaj ogłoszenie</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>Tytuł ogłoszenia:</Form.Label>
                <Form.Control
                  //isInvalid={this.props.createUser.usernameError}
                  type="text"
                  name="NoticeTitle"
                  placeholder="Wprowadz tytul"
                  value={this.state.NoticeTitle}
                  onChange={this.onChange}
                />

              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Wprowadz opis</Form.Label>
                <Form.Control
                 // isInvalid={this.props.createUser.passwordError}
                  type="text"
                  name="NoticeDescription"
                  placeholder="Wprowadz opis"
                  value={this.NoticeDescription}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">

                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onSignupClick}>
              Dodaj ogłoszenie
            </Button>

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

// AddNotice.propTypes = {
//   signupNewUser: PropTypes.func.isRequired,
//   createUser: PropTypes.object.isRequired
// };

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (NoticeTitle, NoticeDescription) => dispatch(actions.authAddNotice(NoticeTitle, NoticeDescription)) 
  }
}

// const mapStateToProps = state => ({
//   createUser: state.createUser
// });

export default connect(mapDispatchToProps)(withRouter(AddNotice));