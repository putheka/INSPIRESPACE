import React from "react";
import Button from 'react-bootstrap/Button';
import "../style/header.css";

const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <span>Make</span> Your Comfort Is Our<span> Happiness</span>
                </h1>

                <p>Welcome to FURNITURE, where joy meets design. Elevate your space with our curated furniture collection, crafted to bring happiness and style into your home.</p>

                <Button variant="success" as="a" href="#features" className="logo-button">
                  Discover More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
