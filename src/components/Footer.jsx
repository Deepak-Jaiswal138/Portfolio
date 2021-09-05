import React from "react";
import I1 from '../assets/facebook-circular-logo.png';
import I2 from '../assets/github.png';
import I3 from '../assets/google-plus.png';
import I4 from '../assets/twitter.png';


const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer
          class="text-center text-white"
          style={{backgroundColor: '#f1f1f1'}}
        >
          <div class="container pt-4">
            <section class="mb-4">
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-facebook"><img src={I1} style={{height:'30px'}}/></i>
                
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-twitter"><img src={I2} style={{height:'30px'}}/></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-google"><img src={I3} style={{height:'30px'}}/></i>
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-instagram"> <img src={I4} style={{height:'30px'}}/></i>
              </a>

            

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            class="text-center text-dark p-3"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
          >
            © 2020 Copyright:
            <a class="text-dark" href="">
              DEEPAK PORTFOLIO
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
