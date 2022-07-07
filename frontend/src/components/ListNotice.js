import React from "react";
import { Link } from "react-router-dom";
import css from "./ListNotice.css"
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
const ListNotice = ({ notice }) => {
<link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
//console.log(notice)

  function like (){
    console.log('klik')
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
    .post(`http://127.0.0.1:8000/api/notices/${notice.id}/like/`)
    .then(response => {
        console.log('udalo sie')
    })
    .catch(error => {
    });
  }

  function unlike (){
    //console.log('klik')
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    };
    axios
    .delete(`http://127.0.0.1:8000/api/notices/${notice.id}/like/`)
    .then(response => {
        console.log('udalo sie')
    })
    .catch(error => {
    });
  }

  return (





    <div class="col-md-6 notice" style={{ maxWidth: "none" }}>

      <div class="block product no-border z-depth-2-top z-depth-2--hover">
        <div class="block-image">
          <a href="#">
            <img src={notice.NoticeImg} class="img-center" />
          </a>
          <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
        </div>
        <div class="block-body text-center">
          <h1 class="heading heading-5 strong-600 text-capitalize">

            {notice.NoticeTitle}

          </h1>
          <p class="product-description">
            {notice.NoticeDescription}
          </p>
          <p class="product-description">
            <hr /><strong>{notice.NoticeCredit} zł</strong>
          </p>
          <p class="product-description">
            {notice.NoticeDateAdd.slice(0, 10)}
          </p>
          <div class="product-buttons mt-4">
            <div class="row align-items-center">
              <div class="col-2">

                <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare" onClick={unlike}>
                <FontAwesomeIcon icon='trash'/>
                </button>
              </div>
              <div class="col-8">
                <Link to={`/notice/${notice.id}`}>
                  <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left">
                    Szczegóły
                  </button>
                </Link>
              </div>
              <div class="col-2">
                <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare" onClick={like}>
                <i class="fa fa-heart" > {notice.total_number_of_likes}</i>
                </button>
              </div>

            </div>
          </div>
          
        </div>
      </div>

    </div>

  )
}
export default ListNotice;
