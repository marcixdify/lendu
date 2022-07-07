

import React, { useEffect, useState } from 'react';
import ListNoticeHome from '../components/ListNoticeHome';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import { setAxiosAuthToken, toastOnError } from "../utils/Utils";
import HomeStyle from './HomeStyle.css'

const HomePage = () => {

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
                setNotices(data.slice(0,3))
            })
            .catch(error => {

                toastOnError(error);
            });
    }

    return (
        <div className="notice-container">

            <div class="container">
        <div class="row">
        <div class="col-sm-8">
            <div class="single category">
              <h3 class="side-title">Wiadomości</h3>
              <ul class="list-unstyled">
                <li>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<i class="fa-solid fa-lightbulb-on"></i>
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


                <div class="container" className='mt-5'>
                    <div class="shop-default shop-cards shop-tech">
                        <div class="row d-flex justify-content-center">
                            {
                                notices.map((notice, index) => (
                                    <ListNoticeHome key={index} notice={notice} />
                                ))}
                        </div></div></div>
            
            

                        <div class="faq_area section_padding_130" id="faq">
    <div class="container" className=''>
        <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-lg-6">
                <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                    <h3><span>Frequently </span> Asked Questions</h3>
                    <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-lg-8">
                <div class="accordion faq-accordian" id="faqAccordion">
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                        <div class="card-header" id="headingOne">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I install this app?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                        <div class="card-header" id="headingTwo">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">The apps isn't installing?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Contact form isn't working?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <i class="lni-emoji-sad"></i>
                    <p class="mb-0 px-2">Can't find your answers?</p>
                    <a href="#"> Contact us</a>
                </div>
            </div>
        </div>
    </div>
</div>
            
        </div>

    )
}


export default HomePage