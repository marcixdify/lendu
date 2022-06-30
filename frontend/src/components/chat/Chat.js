import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';
import {
  faPaperclip,
  faSmile,
  faPaperPlane,
} from "@fortawesome/fontawesome-free-solid";


class Chat extends Component {
  state = {
    isLoggedIn: true,
    messages: [],
    value: "",
    name: "",
    room: "",
    user_1: "",
    user_2: "",
    id_conversation: "",


  };


  componentWillMount() {
    let url = window.location.pathname
    let strs = url.split('/');
    let user_2 = strs.at(-2)
    let room = strs.at(-1)
    this.setState({user_2})
    this.setState({room})
    console.log(room)

    console.log(this.state.user2_identifier)
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .get(`http://127.0.0.1:8000/chat/messages/${room}/`)
      .then((response) => {
        //console.log(response.data);
        const messages = response.data;
        this.setState({ messages });
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  onButtonClicked = (e) => {
    this.client.send(
      JSON.stringify({
        message: this.state.value,
        user_identifier: `${localStorage.getItem("identifier")}`,
      })
    );
    this.state.value = "";
    e.preventDefault();
  };

  componentDidMount() {
    const path = `ws://127.0.0.1:8000/ws/chat/messages/${this.state.room}/${this.state.user_2}/`;
    //console.log(path);
    this.client = new WebSocket(path);
    //console.log(this.state.user_2);

    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    this.client.onmessage = (message) => {
      console.log(message);
      const dataFromServer = JSON.parse(message.data);
      const messageFromServer = dataFromServer.message;
      console.log(messageFromServer);
      console.log("got reply! ", dataFromServer);
      if (messageFromServer) {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            {
              content: messageFromServer,
              user_identifier: dataFromServer.user,
            },
          ],
        }));
      }
    };
  }

  render() {
    const { classes } = this.props;

    console.log(this.state.messages);

    return (
      <div>
        <section style={{ backgroundColor: "eee" }}>
          <div class="container py-5">
            <div class="row">
              <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                <h5 class="font-weight-bold mb-3 text-center text-lg-start">
                  Member
                </h5>

                <div class="card">
                  <div class="card-body">
                    <ul class="list-unstyled mb-0">
                      <li class="p-2">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              alt="avatar"
                              class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                              style={{ width: "60" }}
                            />
                            <div class="pt-1">
                              <p class="fw-bold mb-0">Brad Pitt</p>
                              <p class="small text-muted">
                                Lorem ipsum dolor sit.
                              </p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">5 mins ago</p>
                            <span class="text-muted float-end">
                              <i class="fas fa-check" aria-hidden="true"></i>
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-7 col-xl-8">
                <ul class="list-unstyled">
                  <ul style={{ overflowY: "scroll", height: "650px" }}>
                    {this.state.messages.map((messages, index) => (
                      <ul>
                        {messages.user_identifier ==
                        `${localStorage.getItem("identifier")}` ? (
                          <li class="d-flex justify-content-between mb-4">
                            <div class="card w-100">
                              <div class="card-header d-flex justify-content-between p-3">
                                <p class="fw-bold mb-0">
                                  {messages.user_identifier}
                                </p>
                                <p class="text-muted small mb-0">
                                  <i class="far fa-clock"></i> 13 mins ago
                                </p>
                              </div>
                              <div class="card-body">
                                <p class="mb-0">{messages.content}</p>
                              </div>
                            </div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                              alt="avatar"
                              class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                              style={{ width: "50px" }}
                            />
                          </li>
                        ) : (
                          <li class="d-flex justify-content-between mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              alt="avatar"
                              class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                              style={{ width: "50px" }}
                            />
                            <div class="card">
                              <div class="card-header d-flex justify-content-between p-3">
                                <p class="fw-bold mb-0">
                                  {messages.user_identifier}
                                </p>
                                <p class="text-muted small mb-0">
                                  <i class="far fa-clock"></i> 12 mins ago
                                </p>
                              </div>
                              <div class="card-body">
                                <p class="mb-0">{messages.content}</p>
                              </div>
                            </div>
                          </li>
                        )}
                      </ul>
                    ))}
                  </ul>

                  <form noValidate onSubmit={this.onButtonClicked}>
                    <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        alt="avatar 3"
                        style={{
                          width: "40px",
                          height: "100%",
                          marginRight: "10px",
                        }}
                      />
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Type message"
                        onChange={(e) => {
                          this.setState({ value: e.target.value });
                          this.value = this.state.value;
                        }}
                      />
                      <a class="ms-1 text-muted">
                        <FontAwesomeIcon icon={faPaperclip} />
                      </a>
                      <a class="ms-3 text-muted">
                        <FontAwesomeIcon icon={faSmile} />
                      </a>
                      <button style={{ border: "none", background: "none" }}>
                        <a class="ms-3">
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </a>
                      </button>
                    </div>
                  </form>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default (Chat);
