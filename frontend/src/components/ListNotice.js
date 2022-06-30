import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdbreact/dist/css/mdb.css';

const ListNotice = ({ notice }) => {
  console.log(notice)
  return (

    // <div className="card " style={{width: '18rem'}}>
    //   <img className="card-img-top" src={notice.NoticeImg} alt="Card image cap" />
    //   <div className="card-body">

    //     <p className="small">Data dodania: {notice.NoticeDateAdd}</p>
    //     <p className="small">Kategoria: {notice.NoticeCategory}</p>
    //     <p className="small">Cena: {notice.NoticeCredit}</p>
    //     <h5 className="card-title">{notice.NoticeTitle}</h5>
    //     <p className="card-text">{notice.NoticeDescription}</p>
    //     <Link to={`/notice/${notice.id}`}>
    //     <a  class="btn btn-primary">Przejdź do ogłoszenia</a>
    //     </Link>
    //   </div>
    // </div>




<div class="col-md-6 notice">
			<Link to={`/notice/${notice.id}`}>
                <div class="block product no-border z-depth-2-top z-depth-2--hover">
                    <div class="block-image">
                        <a href="#">
                            <img src={notice.NoticeImg} class="img-center"/>
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
						<hr/><strong>{notice.NoticeCredit} zł</strong>
                        </p>
                        <div class="product-buttons mt-4">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        
                                    </button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i class="fa fa-share"></i>
                                    </button>
                                </div>
                                <div class="col-8">
                                    <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left">
                                        <i class="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				</Link>
            </div>
			

























/* {<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card text-black">
          <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img
            src={notice.NoticeImg}
            class="card-img-top"
            alt="Apple Computer"
          />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">{notice.NoticeTitle}</h5>
              <p class="text-muted mb-4">Apple pro display XDR</p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Pro Display XDR</span><span>$5,999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Pro stand</span><span>$999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Vesa Mount Adapter</span><span>$199</span>
              </div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> }*/



















    // <div class="col-md-3">



    // 				<div class="card">

    // 					<div class="image-container">

    // 						<div class="first">
    							
    // 							<div class="d-flex justify-content-between align-items-center">

    // 							<span class="discount">-25%</span>
    // 							<span class="wishlist"><i class="fa fa-heart-o"></i></span>
    							

    // 						    </div>
    // 						</div>

    // 						<img src={notice.NoticeImg} class="img-fluid rounded thumbnail-image" />
    						

    // 					</div>


    // 					<div class="product-detail-container p-2">

    // 							<div class="d-flex justify-content-between align-items-center">

    // 								<h5 class="dress-name">White traditional long dress</h5>

    // 								<div class="d-flex flex-column mb-2">

    // 									<span class="new-price">$3.99</span>
    // 									<small class="old-price text-right">$5.99</small>
    // 								</div>

    // 							</div>


    // 							<div class="d-flex justify-content-between align-items-center pt-1">

    // 								<div class="color-select d-flex ">

    // 									<input type="button" name="grey" class="btn creme" />
    // 									<input type="button" name="red" class="btn red ml-2" />
    // 									<input type="button" name="blue" class="btn blue ml-2" />

    // 								</div>

    // 								<div class="d-flex ">
    									
    // 									<span class="item-size mr-2 btn" type="button">S</span>
    // 									<span class="item-size mr-2 btn" type="button">M</span>
    // 									<span class="item-size btn" type="button">L</span>

    // 								</div>
    								
 
    // 							</div>


    // 							<div class="d-flex justify-content-between align-items-center pt-1">
    // 								<div>
    // 									<i class="fa fa-star-o rating-star"></i>
    // 									<span class="rating-number">4.8</span>
    // 								</div>

    // 								<span class="buy">BUY +</span>
    								
    // 							</div>

    						

    // 					</div>
    					
    // 				</div>





    				


	// 	</div>


  );
};

export default ListNotice;
