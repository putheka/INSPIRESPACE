import React from "react";
const PlaceholderCard = () => {
  return (
    <div className="placeholder-card card p-0 mt-5" aria-hidden="true">
      <div className="p-absolute image-pard">
        <img
          src="https://img.freepik.com/premium-photo/3d-rendering-3d-illustration-mountains-sun-landscape-gallery-symbol-minimal-image-photo-jpg-file-icon_640106-403.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais"
          className="card-img-top img-fluid"
          alt="default image placeholder "
        />

        <div className="placeholder-glow inner-part p-1">
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
      </div>
    </div>
  );
};

export default PlaceholderCard;
