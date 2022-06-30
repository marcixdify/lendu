import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export const Room = (getRoom) => {
  return (
    <div className="card">
      <p className="small">User 1: {getRoom.getRoom.user1_identifier}</p>
      <p className="small">User 2: {getRoom.getRoom.user2_identifier}</p>
      <p className="small">Id pokoju: {getRoom.getRoom.id_conversation}</p>
      <Link
        to={`conversation/${getRoom.getRoom.user2_identifier}/${getRoom.getRoom.id_conversation}`}
      >
        <button
          type="button"
          class="btn btn-primary"
          style={{ width: "250px" }}
        >
          Przejdź do rozmowy
        </button>
      </Link>

    </div>

    
  );
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default Room;
