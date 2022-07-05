import React from 'react'
import { Link } from "react-router-dom"; 

export const Chaters = (getChaters) => {
    console.log(getChaters)
  return (
    <div class="card">
    <div class="card-body">
      <ul class="list-unstyled mb-0">
        <li class="p-2">
            <Link to={`/chat/list-room/conversation/${getChaters.getChaters.user2_identifier}/${getChaters.getChaters.id_conversation}`} >
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                style={{ width: "60" }}
              />
              <div class="pt-1">
                <p class="fw-bold mb-0">{getChaters.getChaters.user2_identifier}</p>
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
          </div>
</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Chaters