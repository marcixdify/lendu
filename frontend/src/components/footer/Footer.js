import React from 'react'
import FooterCss from './FooterCss.css'
import WhiteLogo from '../../assets/img/lendu-logo-white.png'

function Footer() {
  return (

<footer class="text-center text-lg-start  text-muted" style={{backgroundColor: "#C33149", color: "#FFF"}}>


  <section class="" style={{backgroundColor: "#C33149", color: "#FFF", padding: "10px"}}>
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
          <img src={WhiteLogo} style={{width: "100px"}}/>
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            Lorem
          </h6>
          <p>
            Ipsum
          </p>
          <p>
          Ipsum
          </p>
          <p>
          Ipsum
          </p>
          <p>
          Ipsum
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
          Lorem
          </h6>
          <p>
          Ipsum
          </p>
          <p>
          Ipsum
          </p>
          <p>
          Ipsum
          </p>
          <p>
          Ipsum
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            Kontakt
          </h6>
          <p><i class="fas fa-home me-3"></i> Kraków, ul.Budowa 3/20</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@lendu.pl
          </p>
          <p><i class="fas fa-phone me-3"></i> + 12 234 567 </p>

        </div>

      </div>

    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#fff'}}>
    © 2022 Wszelkie prawa zastrzeżone

  </div>

</footer>

  )
}

export default Footer