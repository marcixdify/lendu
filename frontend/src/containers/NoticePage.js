import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import * as actions from "../store/actions/auth";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import NoticeStyle from './NoticeStyle.css'

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




  deleteNotice = async () => {
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

  constructor(props, id) {
    super(props);
    this.state = {
      NoticeTitle: "",
      NoticeDescription: "",
      NoticeImg: "",
      getDataNotice: [],
      id: id
    };
  }

  componentWillMount() {
    let toSliceId = window.location.pathname
    let id = toSliceId.slice(8);
    this.state.id = id
    console.log(this.state.id)
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



<div class="container">
		<div class="card" style={{marginTop: '50px',
    padding: '3em',
    lineHeight: '1.5em'}}>
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={this.state.getDataNotice.NoticeImg} /></div>
						  {/* <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
						</div>
						{/* <ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						</ul> */}
						
					</div>
					<div class="details col-md-6">
            
						<h3 class="product-title">{this.state.getDataNotice.NoticeTitle}</h3>
            <p class="product-description">Użytkownik: { this.state.getDataNotice.username }</p>

						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
            <h3 class="product-title">Opis:</h3>
						<p class="product-description">{ this.state.getDataNotice.NoticeDescription }</p>
						<h4 class="price">Cena: <span>{ this.state.getDataNotice.NoticeCredit } zł</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">Kategoria:
							<span class="size" data-toggle="tooltip" title="small">{this.state.getDataNotice.NoticeCategory}</span>
						</h5>

						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">Napisz wiadomość</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
              <Link to={`/notice/edit/${this.state.id}`}>
        <a  class="btn btn-primary">Edytuj ogłoszenie</a>
         </Link>
					</div>
				</div>
			</div>
		</div>
	</div>

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