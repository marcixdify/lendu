import React from "react";
import { Link } from "react-router-dom";
import css from "./ListNotice.css"


const ListNotice = ({ notice }) => {

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
                <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                  <i class="fa fa-heart"></i>
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
                <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                  <i class="fa fa-heart"></i>
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
