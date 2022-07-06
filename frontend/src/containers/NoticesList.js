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

    }
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = notices.filter((value) => {
            console.log(value.NoticeTitle)
            return value.NoticeTitle.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
        setSearchingWord(searchWord)

        //console.log(searchWord.length)
    }
    return (
        <div className="notice-container">
            <div className="d-flex justify-content-center h-100">
                
                <div class="container">
        <div class="row">
        <div class="col-sm-8">
            <div class="single category">
              <h3 class="side-title">Wyszukiwanie ogłoszeń</h3>
              <ul class="list-unstyled">
                <li>
                <div className="search">
                    <input className="search-input" type="text" placeholder="Szukaj ogłoszenie..." onChange={handleFilter} />
                </div>
                </li>



              </ul>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="single category">
              <h3 class="side-title">Kategorie</h3>
              <ul class="list-unstyled">
                <li>
                  <p>Narzędzia </p><i class="fa-solid fa-lightbulb-on"></i>
                </li>
                <li>
                  <p>Maszyny </p>
                </li>
                <li>
                  <p>Ogród </p>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>
                
            </div>

            <div className="dataResult"></div>

            {searchingWord.length != 0 ? (
                <div class="container">
                    <div class="shop-default shop-cards shop-tech">
                        <div class="row d-flex justify-content-center">
                            {
                                filteredData.map((notice, index) => (
                                    <ListNotice key={index} notice={notice} />
                                ))}
                        </div></div></div>
            ) : (
                <div class="container">
                    <div class="shop-default shop-cards shop-tech"  style={{marginTop:"30px"}}>
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