import React from "react";
import "../style/partner.css";

const Partner = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4 mt-5">OUR PARTNER</h2>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <img src={d.img} alt="image" className="img-fluid" />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Partner;
