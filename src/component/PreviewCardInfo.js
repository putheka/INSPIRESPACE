import React from 'react';

const PreviewCardInfo = () => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"
        alt="Item Image"
      />
      <div className="card-body px-3">
        <h5 className="card-title">Green Flower Best Offer!!</h5>
        <hr />
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-warning">Update</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PreviewCardInfo;
