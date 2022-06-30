import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export const GetChannel = (getListChanell, getResearchId) => {



  function createRoom() {

    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
      .post(`http://127.0.0.1:8000/chat/list/${localStorage.getItem("identifier")}/create/`, {
        user1_identifier: `${localStorage.getItem("identifier")}`,
        user2_identifier: `${getListChanell.getListChanell.identifier}`
    
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
  }


  return (
    <div className="card">
      <p className="small">Rola: {getListChanell.getListChanell.role}</p>
      <p className="small">
        identyfikator: {getListChanell.getListChanell.identifier}
      </p>


        <button
          type="button"
          class="btn btn-primary"
          style={{ width: "250px" }}
          onClick={createRoom}
        >
          Utwórz czat
        </button>

    </div>
  );
};

export default GetChannel;
