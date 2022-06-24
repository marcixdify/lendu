import React, { useEffect, useState } from 'react';
import ListNotice from '../components/ListNotice';
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import {setAxiosAuthToken,  toastOnError } from "../utils/Utils";
const NoticesList = () => {

    let [notices, setNotices] = useState([])

    useEffect(() =>{
        getNotices()
    },[]
    )

    let getNotices = async () => {


        axios
        .get("http://127.0.0.1:8000/api/notices/")
        .then(response => {
            const data  = response.data;
            setNotices(data)
        })
        .catch(error => {

          toastOnError(error);
        });


        // let response = await fetch('http://127.0.0.1:8000/api/notices/')
        // let data = await response.json()
        // console.log(data)
        // setNotices(data)
    }

  return (
    <div>
        dsada
        <div className="notices">
            {/* <Link to="/notice/new/">
            <button>Dodaj nowe ogłoszenie</button>
            </Link> */}
        {notices.map((notice, index) => (
            <ListNotice key={index} notice={notice} />
        ))}
        </div>
    </div>
  )
}
// 2.09.48

export default NoticesList