import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import * as actions from "../store/actions/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

//import { authAddNotice } from "../store/actions/auth"; // new import

class AddNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NoticeTitle: "",
      NoticeDescription: "",
      NoticeImg: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

   handleImageChange = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });

};

  // update function to call the action
  onSignupClick = () => {
    let form_data = new FormData();
    form_data.append('NoticeTitle', this.state.NoticeTitle,);
    form_data.append('NoticeDescription', this.state.NoticeDescription);
    form_data.append('NoticeImg', this.state.NoticeImg);
    console.log(form_data)
    const userData = {
      NoticeTitle: this.state.NoticeTitle,
      NoticeDescription: this.state.NoticeDescription,
      NoticeImg: this.state.NoticeImg
    };
    let NoticeTitle = userData.NoticeTitle;
    let NoticeDescription = userData.NoticeDescription;
    let NoticeImg = userData.NoticeImg;
    console.log(form_data)
   // console.log(userData.NoticeTitle, userData.NoticeDescription, userData.NoticeImg);
    this.props.onAuth(form_data); // <-- signup new user request
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
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Dodaj zdjecie</Form.Label>
                <Form.Control
                  // isInvalid={this.props.createUser.passwordError}
                  type="file"
                  name="NoticeImg"
                  accept="image/jpeg,image/png,image/gif,image/jpg"
                  onChange={this.handleImageChange}
                />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (form_data) =>
      dispatch(actions.authAddNotice(form_data)),
  };
};

// const mapStateToProps = state => ({
//   createUser: state.createUser
// });

export default connect(mapDispatchToProps)(withRouter(AddNotice));
