import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const ListNotice = ({ notice }) => {
  return (

    <div className="card " style={{width: '18rem'}}>
      <img className="card-img-top" src={'http://127.0.0.1:8000'+notice.NoticeImg} alt="Card image cap" />
      <div className="card-body">

        <p className="small">Data dodania: {notice.NoticeDateAdd}</p>
        <p className="small">Kategoria: {notice.NoticeCategory}</p>
        <p className="small">Cena: {notice.NoticeCredit}</p>
        <h5 className="card-title">{notice.NoticeTitle}</h5>
        <p className="card-text">{notice.NoticeDescription}</p>
        <Link to={`/notice/${notice.NoticeId}`}>
        <a  class="btn btn-primary">Przejdź do ogłoszenia</a>
        </Link>


      </div>
    </div>

  );
};

export default ListNotice;
