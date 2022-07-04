import React, { useEffect, useState } from 'react';
import ListNotice from '../components/ListNotice';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import { setAxiosAuthToken, toastOnError } from "../utils/Utils";
import SearchBar from '../components/SearchBar';
//import css from "../components/ListNotice.css"
const NoticesList = () => {

    let [notices, setNotices] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [searchingWord, setSearchingWord] = useState([])

    useEffect(() => {
        getNotices()
    }, []
    )

    let getNotices = async () => {


        axios
            .get("http://127.0.0.1:8000/api/notices/")
            .then(response => {
                const data = response.data;
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
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = notices.filter((value) => {
            console.log(value.NoticeTitle)
            return value.NoticeTitle.includes(searchWord)
        })
        setFilteredData(newFilter)
        setSearchingWord(searchWord)

        //console.log(searchWord.length)
    }
    return (

        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="search">
                    <input className="search-input" type="text" placeholder="Szukaj ogłoszenie..." onChange={handleFilter} />
                </div>
            </div>

            <div className="dataResult"></div>

            {searchingWord.length != 0 ? (
                <div class="container">
                    <div class="shop-default shop-cards shop-tech">
                        <div class="row">
                            {
                                filteredData.map((notice, index) => (
                                    <ListNotice key={index} notice={notice} />
                                ))}
                        </div></div></div>
            ) : (
                <div class="container">
                    <div class="shop-default shop-cards shop-tech">
                        <div class="row d-flex justify-content-center">
                            {
                                notices.map((notice, index) => (
                                    <ListNotice key={index} notice={notice} />
                                ))}
                        </div></div></div>
            )
            }
        </div>

    )
}
// 2.09.48

export default NoticesList