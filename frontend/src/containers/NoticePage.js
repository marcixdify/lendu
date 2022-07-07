import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import * as actions from "../store/actions/auth";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import NoticeStyle from "./NoticeStyle.css";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

class NoticePage extends Component {


  deleteNotice = async () => {};


  constructor(props, id) {
    super(props);
    this.state = {
      NoticeTitle: "",
      NoticeDescription: "",
      NoticeImg: "",
      getDataNotice: [],
      id: id,
    };
  }

  componentWillMount() {
    let toSliceId = window.location.pathname;
    let id = toSliceId.slice(8);
    this.state.id = id;
    console.log(this.state.id);
    axios
      .get(`http://127.0.0.1:8000/api/notices/${id}/`)
      .then((response) => {
        console.log(response);
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

  onSignupClick = () => {
    let form_data = new FormData();
    form_data.append("NoticeTitle", this.state.NoticeTitle);
    form_data.append("NoticeDescription", this.state.NoticeDescription);
    form_data.append("NoticeImg", this.state.NoticeImg);
    console.log(form_data);
    let toSliceId = window.location.pathname;
    let id = toSliceId.slice(8);

    const userData = {
      NoticeTitle: this.state.NoticeTitle,
      NoticeDescription: this.state.NoticeDescription,
      NoticeImg: this.state.NoticeImg,
    };

    console.log(userData.id);


    this.props.onAuth(form_data, id); 
  };

  createRoom = () => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        `http://127.0.0.1:8000/chat/list/${localStorage.getItem(
          "identifier"
        )}/create/`,
        {
          user1_identifier: `${localStorage.getItem("identifier")}`,
          user2_identifier: `${this.state.getDataNotice.identifier}`,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };
  render() {
    let button;
    if (
      this.state.getDataNotice.identifier ==
      `${localStorage.getItem("identifier")}`
    ) {
      button = (
        <Link to={`/notice/edit/${this.state.id}`}>
          {" "}
          <a class="btn btn-primary">Edytuj ogłoszenie</a>
        </Link>
      );
    }

    return (
      <div class="container">
        <div
          class="card"
          style={{ marginTop: "50px", padding: "3em", lineHeight: "1.5em" }}
        >
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img src={this.state.getDataNotice.NoticeImg} />
                  </div>
                </div>
              </div>
              <div class="details col-md-6">
                <h3 class="product-title">
                  {this.state.getDataNotice.NoticeTitle}
                </h3>
                <p class="product-description">
                  Użytkownik: {this.state.getDataNotice.username}
                </p>

                <div class="rating">
                  <button
                    type="button"
                    class="btn-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Compare"
                    style={{ background: "none", border: "none" }}
                  >
                    <i class="fa fa-heart">
                      {" "}
                      {this.state.getDataNotice.total_number_of_likes}
                    </i>
                  </button>
                </div>
                <h3 class="product-title">Opis:</h3>
                <p class="product-description">
                  {this.state.getDataNotice.NoticeDescription}
                </p>
                <h4 class="price">
                  Cena: <span>{this.state.getDataNotice.NoticeCredit} zł</span>
                </h4>
                <h5 class="sizes">
                  Kategoria:
                  <span class="size" data-toggle="tooltip" title="small">
                    {this.state.getDataNotice.NoticeCategory}
                  </span>
                </h5>

                <div class="action">
                  <Link to="/chat/list-room">
                    <button
                      class="add-to-cart btn"
                      type="button"
                      onClick={this.createRoom}
                      style={{ background: "rgb(195, 49, 73)", color: "#fff" }}
                    >
                      Napisz wiadomość
                    </button>
                  </Link>
                  <button
                    class="like btn btn"
                    type="button"
                    style={{ background: "rgb(195, 49, 73)" }}
                  >
                    <span class="fa fa-heart"></span>
                  </button>
                </div>

                {button}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (form_data, id) => dispatch(actions.authEditNotice(form_data, id)),
  };
};

export default connect(mapDispatchToProps)(withRouter(NoticePage));
