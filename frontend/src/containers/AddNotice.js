import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import * as actions from "../store/actions/auth";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";



class AddNotice extends Component {
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


  onSignupClick = () => {
    let form_data = new FormData();
    form_data.append('NoticeTitle', this.state.NoticeTitle,);
    form_data.append('NoticeDescription', this.state.NoticeDescription);
    form_data.append('NoticeCategory', this.state.NoticeCategory);
    form_data.append('NoticeImg', this.state.NoticeImg);
    form_data.append('NoticeCredit', this.state.NoticeCredit);
    console.log(form_data)
    const userData = {
      NoticeTitle: this.state.NoticeTitle,
      NoticeDescription: this.state.NoticeDescription,
      NoticeImg: this.state.NoticeImg
    };

    console.log(form_data)

    this.props.onAuth(form_data); 
    
  };

  render() {
    return (
      
      <section
        class=" gradient-custom"
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
                      Dodaj ogłoszenie
                    </h2>


                    <div class="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        name="NoticeTitle"
                        value={this.state.NoticeTitle}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Tytuł ogłoszenia
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <textarea
                        type="text"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        value={this.NoticeDescription}
                        onChange={this.onChange}
                        name="NoticeDescription"
                      ></textarea>
                      <label class="form-label" for="typePasswordX">
                      Wprowadź opis
                      </label>
                    </div>
                    
                    <div class="form-outline form-white mb-4">
                    <select
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    name="NoticeCategory"
                    value={this.NoticeCategory}
                    onChange={this.onChange}
                  >
                    <option selected>Wybierz kategorie</option>
                    <option value="Narzędzia">Narzędzia</option>
                    <option value="Maszyny">Maszyny</option>
                    <option value="Ogród">Ogród</option>
                  </select>

                      <label class="form-label" for="typeEmailX">
                        Kategoria
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="number"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        name="NoticeCredit"
                        value={this.NoticeCredit}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Wprowadź cene
                      </label>
                    </div>


                    <div class="form-outline form-white mb-4">
                      <input
                        type="file"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        name="NoticeImg"
                        value={this.NoticeCredit}
                        accept="image/jpeg,image/png,image/gif,image/jpg"
                        onChange={this.handleImageChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Dodaj zdjęcie (opcjonalne)
                      </label>
                    </div>


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
                      Dodaj ogłoszenie
                    </button>
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



const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (form_data) =>
      dispatch(actions.authAddNotice(form_data)),
  };
};


export default connect(mapDispatchToProps)(withRouter(AddNotice));
