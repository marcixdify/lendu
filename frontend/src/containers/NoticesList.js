import React, { useEffect, useState } from 'react';
import ListNotice from '../components/ListNotice';
import {Link} from 'react-router-dom';

const NoticesList = () => {

    let [notices, setNotices] = useState([])

    useEffect(() =>{
        getNotices()
    },[]
    )

    let getNotices = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/notices/')
        let data = await response.json()
        console.log(data)
        setNotices(data)
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