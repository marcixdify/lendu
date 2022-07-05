import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListNoticex from './ListNotice.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faTrash,
  faFileImage,
  faDownload,
  faCalendar,
} from "@fortawesome/fontawesome-free-solid";

export const OwnNoticeActions = (getOwnNotice) => {
  console.log("tak");
  console.log(getOwnNotice);

  return (
    <div class="col-md-6 notice" style={{ maxWidth: "none" }}>
      <div class="block product no-border z-depth-2-top z-depth-2--hover">
        <div class="block-image">
          <a href="#">
            <img src={getOwnNotice.getOwnNotice.NoticeImg} class="img-center" />
          </a>

        </div>
        <div class="block-body text-center">
          <h1 class="heading heading-5 strong-600 text-capitalize">
            {getOwnNotice.getOwnNotice.NoticeTitle}
          </h1>
          <p class="product-description">{getOwnNotice.getOwnNotice.NoticeDescription}</p>
          <p class="product-description">
            <hr />
            <strong>{getOwnNotice.getOwnNotice.NoticeCredit} zł</strong>
          </p>
          <p class="product-description">
            {getOwnNotice.getOwnNotice.NoticeDateAdd.slice(0, 10)}
          </p>
          <p class="product-description"></p>
          <div class="product-buttons mt-4">
            <div class="row align-items-center">
              <div class="col-2">
                <button
                  type="button"
                  class="btn-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Compare"
                >

                </button>
              </div>
              <div class="col-8">
                <Link to={`/notice/edit/${getOwnNotice.getOwnNotice.id}`}>
                  <button
                    type="button"
                    class="btn btn-block btn-primary btn-circle btn-icon-left"
                  >
                    Edytuj 
                  </button>
                </Link>
              </div>
              <div class="col-2">
                <button
                  type="button"
                  class="btn-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Compare"
                >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnNoticeActions;
