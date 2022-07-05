import React, { Component } from "react";
import { withRouter } from "../components/withRouter"; // new import
import { connect } from "react-redux"; // new import
import * as actions from "../store/actions/auth";
import axios from "axios";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";



class EditNotice extends Component {


  constructor(props) {
    super(props);
    this.state = {
      NoticeTitle: "",
      NoticeDescription: "",
      NoticeImg: "",
      NoticeCategory: "",
      NoticeCredit: "",
      GetCurrentNotice: ""
    };
  }



  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });

  };

  componentDidMount() {
    let toSliceId = window.location.pathname
    let id = toSliceId.slice(13);
    this.state.id = id
    console.log(this.state.id)
    axios.get(`http://127.0.0.1:8000/api/notices/${id}/`)
      .then((response) => {
        console.log(response);
        const NoticeTitle = response.data.NoticeTitle;
        const NoticeDescription = response.data.NoticeDescription;
        const NoticeCategory = response.data.NoticeCategory;
        const NoticeCredit = response.data.NoticeCredit;
        this.setState({ NoticeTitle });
        this.setState({ NoticeDescription });
        this.setState({ NoticeCategory });
        this.setState({ NoticeCredit });

      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

  }


  onSignupClick = () => {
    let form_data = new FormData();
    form_data.append('NoticeTitle', this.state.NoticeTitle,);
    form_data.append('NoticeDescription', this.state.NoticeDescription);
    form_data.append('NoticeCategory', this.state.NoticeCategory);
    form_data.append('NoticeCredit', this.state.NoticeCredit);
    form_data.append('NoticeImg', this.state.NoticeImg);


    let toSliceId = window.location.pathname
    let id = toSliceId.slice(13)
    this.props.onAuth(form_data, id); // <-- signup new user request
  };

  onDeleteClick = () => {
   
    let toSliceId = window.location.pathname
    let id = toSliceId.slice(13)
    toast("Ogłoszenie usunięte!")
    this.props.onAuthDelete(id)
  };

  render() {

    return (



      <section
        class=" gradient-custom"
        style={{ backgroundColor: "rgba(196, 146, 36, 0.7)", color: "#FFB140" }}
      >
        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
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
                      Edytuj ogłoszenie
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
                        value={this.state.NoticeDescription}
                        onChange={this.onChange}
                        name="NoticeDescription"
                      ></textarea>
                      <label class="form-label" for="typePasswordX">
                      Edytuj opis
                      </label>
                    </div>
                    
                    <div class="form-outline form-white mb-4">
                    <select
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    name="NoticeCategory"
                    value={this.state.NoticeCategory}
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
                        value={this.state.NoticeCredit}
                        onChange={this.onChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Edytuj cene
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
                        Edytuj zdjęcie (opcjonalne)
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
                      Edytuj ogłoszenie
                    </button>
                    <button
                      class="btn btn-outline btn-lg px-5"
                      type="submit"
                      style={{
                        backgroundColor: "#C33149",
                        color: "#FFB140",
                        borderRadius: "20px",
                      }}
                      onClick={this.onDeleteClick}
                    >
                      Usuń ogłoszenie
                    </button>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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