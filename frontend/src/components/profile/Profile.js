import React, { useEffect, useState, Component, Fragment } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link, Outlet } from "react-router-dom"; // new import
import { useDispatch, useSelector } from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: localStorage.getItem("role"),
      roleExp: "",
      getUserData: "",
    };
  }




  componentDidMount() {


    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .get(`http://127.0.0.1:8000/api/auth/user/test/`)
      .then((response) => {
        console.log(response);
        const getUserData = response.data;
        this.setState({ getUserData });
        console.log(this.state.getUserData)
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
    return (

      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h6 class="f-w-600">{this.state.getUserData.username}</h6>
                      <p>Użytkownik</p>
                      <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Informacje</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">{this.state.getUserData.email}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Telefon</p>
                          <h6 class="text-muted f-w-400">{this.state.getUserData.phone}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Identyfikator</p>
                          <h6 class="text-muted f-w-400">{this.state.getUserData.identifier}</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Zardządzanie</h6>
                      <div class="row">
                        <div class="col-sm-6">
                        <Link to="/dashboard/own-notice">
                          <p class="m-b-10 f-w-600">Moje ogłoszenia</p>
                          </Link>
                        </div>
                        <div class="col-sm-6">
                          <Link to="/dashboard/reset-password">
                          <p class="m-b-10 f-w-600">Resetuj hasło</p>
                          </Link>
                          
                        </div>
                      </div>
                      <ul class="social-link list-unstyled m-t-40 m-b-10">
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


