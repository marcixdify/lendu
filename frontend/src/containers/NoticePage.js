import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";




const NoticePage = () => {
  //let noticeId = match.params.id;
  let { id } = useParams();
  let [notice, setNotice] = useState(null)

  useEffect(()=> {
    getNotice()
  },[id])

  let getNotice = async ()=> {
    let response = await fetch(`http://127.0.0.1:8000/api/notices/${id}/`);

    let data = await response.json();
    setNotice(data)
  }


  let updateNotice = async () => {
    fetch(`http://127.0.0.1:8000/api/notices/${id}/update/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notice)
    },
    console.log('fetch'))
}


  let handleSubmit = ()=> {
    updateNotice();
 
  }

  return (
    <div>
        <button onClick={handleSubmit}>aktualizuj</button>
        <p>NotePage {notice?.NoticeTitle}</p>
        <textarea onChange={(e) => {setNotice({...notice, 'NoticeDescription' : e.target.value})}} defaultValue={notice?.NoticeDescription}></textarea>
    </div>
  )
}

export default NoticePage