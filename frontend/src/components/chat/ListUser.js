import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GetUser  from "./GetUser";
import * as actions from "./GetUser";
import { connect } from "react-redux"; // new import

class ListChannels extends Component {


  constructor(props, id) {
    super(props);
    this.state = {
      getListChanell: [],
      getResearchId: "",
      id: id,
      getIdentifer: "",
      name: "",
    };
  }

  componentDidMount() {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .get(`http://127.0.0.1:8000/chat/list/${localStorage.getItem("identifier")}/`)
      .then((response) => {
        console.log(response)
        const getListChanell = response.data[0];
        const getResearchId = response.data[1];
        this.setState({ getListChanell });
        this.setState({ getResearchId });

        this.props.onAuth(getListChanell, getResearchId);
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
      <div>
        <Link to="list-room/">
        <button>Utworzone konwersacje</button>
</Link>
        {this.state.getIdentifer}

        {this.state.getListChanell.map((getListChanell, index) => (
          <GetUser href key={index} getListChanell={getListChanell} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (getListChanell, getResearchId) =>
      dispatch(actions.GetChannel(getListChanell, getResearchId)),
  };
};

export default connect(mapDispatchToProps)(ListChannels);
