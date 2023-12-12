import React from "react";
import "../style/footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span>At INSPIRE SPACE, we are passionate about transforming houses into homes. Our journey began with a simple belief – that well-crafted furniture has the power to enhance the quality of life. With an unwavering commitment to craftsmanship and design, we curate collections that not only reflect timeless elegance but also encapsulate the unique stories of those who make a house a home. Join us in creating spaces that inspire, comfort, and tell your story. Welcome to a world where furniture isn't just functional, it's an expression of living well..
        </p>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span> Street 28</span> Phnom Penh, Cambodia</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+855) 16 818 206</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:chhonputheka@gmail.com"> chhonputheka@gmail.com.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>INSPIRE<span>SPACE</span></h2>
        <p className="menu">
          <a href="#features"> OUR PARTNER</a> |
          <a href="#about"> ABOUT</a> |
          <a href="#services"> SERVICES</a> |
          <a href="#testimonials"> CLIENTS</a> |
          <a href="#team"> TEAM</a>
        </p>
        <p className="name">InspireSpace &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
