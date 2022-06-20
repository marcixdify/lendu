import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import * as actions from "../store/actions/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";



class NoticePage extends Component {
  //let noticeId = match.params.id;

  


 deleteNotice = async ()=> {
 }
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
      getDataNotice: [],
    };
  }

  componentWillMount(){
    let toSliceId = window.location.pathname
    let id = toSliceId.slice(8);
    axios.get(`http://127.0.0.1:8000/api/notices/${id}/`)
    .then((response) => {
      
      console.log(response);
      console.log('opow')
      const getDataNotice = response.data;
      this.setState({ getDataNotice });
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });

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
    let toSliceId = window.location.pathname
    let id = toSliceId.slice(8)
    
    
    const userData = {
      NoticeTitle: this.state.NoticeTitle,
      NoticeDescription: this.state.NoticeDescription,
      NoticeImg: this.state.NoticeImg,


    };
    
    let NoticeTitle = userData.NoticeTitle;
    let NoticeDescription = userData.NoticeDescription;
    let NoticeImg = userData.NoticeImg;
    console.log(userData.id)

   // console.log(userData.NoticeTitle, userData.NoticeDescription, userData.NoticeImg);
    this.props.onAuth(form_data, id); // <-- signup new user request
  };
  

render() {

  return (
    
    <Container>
      
      <div class="card">
        <div class="card-body">
            <h3 class="card-title">Tytuł: { this.state.getDataNotice.NoticeTitle }
            </h3>
            <h6 class="card-subtitle">Data dodania: { this.state.getDataNotice.NoticeDateAdd }</h6>
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-6">
                    <div class="white-box text-center"><img src={'http://127.0.0.1:8000'+this.state.getDataNotice.NoticeImg} class="img-responsive"/></div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-6">
                    <h4 class="box-title mt-5">Opis ogłoszenia:</h4>
                    <p>{ this.state.getDataNotice.NoticeDescription }</p>
                    {/* <h2 class="mt-5">
                        $153<small class="text-success">(36%off)</small>
                    </h2>
                    <button class="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart">
                        <i class="fa fa-shopping-cart"></i>
                    </button>
                    <button class="btn btn-primary btn-rounded">Buy Now</button> */}
                    {/* <h3 class="box-title mt-5">Key Highlights</h3>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-check text-success"></i>Sturdy structure</li>
                        <li><i class="fa fa-check text-success"></i>Designed to foster easy portability</li>
                        <li><i class="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                    </ul> */}
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h3 class="box-title mt-5">Informacje:</h3>
                    <div class="table-responsive">
                        <table class="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Kategoria:</td>
                                    <td>{ this.state.getDataNotice.NoticeDescription }</td>
                                </tr>
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>


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
          Dodaj ogłoszenie
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
  };
}

export default connect(mapDispatchToProps)(withRouter(NoticePage));