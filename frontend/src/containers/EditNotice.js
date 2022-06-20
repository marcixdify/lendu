import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import * as actions from "../store/actions/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";



class EditNotice extends Component {
  //let noticeId = match.params.id;




  // let deleteNotice = async ()=> {
  //   fetch(`http://127.0.0.1:8000/api/notices/${id}/delete/`, {
  //     method: 'DELETE',
  //     'headers':{
  //       'Content-Type': 'application/json'
  //     }

  //   })
  // }

  // let handleSubmit = ()=> {
  //   updateNotice();

  // }

  constructor(props) {
    super(props);
    this.state = {
      NoticeTitle: "",
      NoticeDescription: "",
      NoticeImg: "",
      NoticeCategory: "",
      NoticeCredit: "",
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
    form_data.append('NoticeCategory', this.state.NoticeCategory);
    form_data.append('NoticeCredit', this.state.NoticeCredit);
    form_data.append('NoticeImg', this.state.NoticeImg);
    //console.log(form_data)
    let toSliceId = window.location.pathname
    let id = toSliceId.slice(13)

    const userData = {
      NoticeTitle: this.state.NoticeTitle,
      NoticeDescription: this.state.NoticeDescription,
      NoticeImg: this.state.NoticeImg,


    };


    let NoticeTitle = userData.NoticeTitle;
    let NoticeDescription = userData.NoticeDescription;
    let NoticeImg = userData.NoticeImg;
    //console.log(userData.id)

    // console.log(userData.NoticeTitle, userData.NoticeDescription, userData.NoticeImg);
    this.props.onAuth(form_data, id); // <-- signup new user request
  };

  onDeleteClick = () => {
   
    let toSliceId = window.location.pathname
    let id = toSliceId.slice(13)
    console.log("usuń")
    this.props.onAuthDelete(id)
  };

  render() {

    return (

      <Container>
        <Row>
          <Col md="4">
            <h1>Edytuj ogłoszenie</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>Edytuj tytuł ogłoszenia:</Form.Label>
                <Form.Control
                  //isInvalid={this.props.createUser.usernameError}
                  type="text"
                  name="NoticeTitle"
                  placeholder="Wprowadz tytul"
                  value={this.state.NoticeTitle}
                  onChange={this.onChange}
                />
              </Form.Group>
              {/* <div>
        <button onClick={handleSubmit}>aktualizuj</button>
        <button onClick={deleteNotice}>usun ogloszenie</button>
        <p>NotePage {notice?.NoticeTitle}</p>
        <textarea onChange={(e) => {setNotice({...notice, 'NoticeDescription' : e.target.value})}} defaultValue={notice?.NoticeDescription}></textarea>
    </div> */}

              <Form.Group controlId="passwordId">
                <Form.Label>Edytuj opis</Form.Label>
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
                <Form.Label>Edytuj kategorie</Form.Label>
                <Form.Control
                  // isInvalid={this.props.createUser.passwordError}
                  type="text"
                  name="NoticeCategory"
                  placeholder="Edytuj kategoire"
                  value={this.NoticeCategory}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Edytuj cene</Form.Label>
                <Form.Control
                  // isInvalid={this.props.createUser.passwordError}
                  type="text"
                  name="NoticeCredit"
                  placeholder="Wprowadz cene"
                  value={this.NoticeCredit}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Edytuj zdjecie</Form.Label>
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
              Edytuj
            </Button>
            <Button color="primary" onClick={this.onDeleteClick}>
              Usuń
            </Button>
          </Col>
        </Row>
      </Container>

    )
  }
}


const mapDispatchToProps = (dispatch) => {

  return {

    onAuth: (form_data, id) =>
      dispatch(actions.authEditNotice(form_data, id)),

    onAuthDelete: (id) =>
      dispatch(actions.authDeleteNotice(id)),

  };
};

export default connect(mapDispatchToProps)(withRouter(EditNotice));