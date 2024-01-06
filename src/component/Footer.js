import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
 
 
// import facebook
import "../style/footer.css";
const Footer = () => {

  
  return (
    <div className="footer ">
      <div className="d-sm-flex flex-sm-column 
      flex-lg-row    
      gap-4 
      px-5 pt-4">
        <div className="left-sides d-sm-flex flex-sm-column   flex-sm-column flex-md-row align-items-md-center  ">
         
          <img
            className="d-block "
            src="./Black_White.png"
            alt="website logo "
          />

          <div className="mt-4  ">
            <h4 className="logo-name ">INSPIRESPACE</h4>
            <p className="col-lg-7">
            At INSPIRE SPACE, we are passionate about transforming houses into homes. Our journey began with a simple belief – that well-crafted furniture has the power to enhance the quality of life. With an unwavering commitment to craftsmanship and design, we curate collections that not only reflect timeless elegance but also encapsulate the unique stories of those who make a house a home. Join us in creating spaces that inspire, comfort, and tell your story. Welcome to a world where furniture isn't just functional, it's an expression of living well.
            </p>
          </div>
        </div>

        <div className="middle-side">
          {/* <div className="d-flex justify-content-around">
            <a className="nav-link"  href="#"> Home </a>
            <a className="nav-link" href="#"> Service </a>
            <a className="nav-link" href="#"> About Us</a>
             
          </div> */}
        </div>

        <div className="right-side   d-md-flex flex-sm-column flex-md-row align-items-md-start justify-content-md-between gap-md-2 flex-lg-column  ">
          <div className="">
            <h4> Email Us </h4>
            <p className="w-md-100">
              {" "}
              Let's keep in touch. We'll send you the latest news and updates
            </p>
            <div className="d-flex">
              <input type="text" />
              <button className="search-button">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
          <div className="social-media  ">
            <h4> Follow Us  </h4>
            <p>   Follow Us to see what we are doing in this journey</p>
            <div className="d-flex gap-3">
              <FontAwesomeIcon icon={faTwitter} color="#108545" size="2x" />
              <FontAwesomeIcon icon={faFacebook} color="#108545" size="2x" />
              <FontAwesomeIcon icon={faInstagram} color="#108545" size="2x" />
              <FontAwesomeIcon icon={faYoutube} color="#108545" size="2x" />
            </div>
          </div>
        </div>
      </div>

      <div className="allrights text-center">
        <p>
          © 2024 All Rights Reserved. Design by{" "}
          <span
            style={{ fontWeight: "bolder" }}
            className="text-light text-weight-bold"
          >
            INSPIRESPACE
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
