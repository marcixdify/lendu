import React from 'react'
import { Link } from 'react-router-dom';

const ListNotice = ({notice}) => {
  return (
    <div>
      <Link to={`/notice/${notice.NoticeId}`}>
        <h3>{notice.NoticeTitle}</h3>
        </Link>
    </div>
  )
}

export default ListNotice