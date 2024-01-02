import React from 'react';

const PlaceholderImage = "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png";

const PreviewCardInfo = ({ product, onClick }) => {
  // Check if product is undefined or not selected
  if (!product || !product.images || product.images.length === 0) {
    // Display default style with placeholder image
    return (
      <div className="card border-success mb-3" onClick={onClick}>
        <img
          className="card-img-top"
          src={PlaceholderImage}
          alt="Placeholder Image"
        />
        <div className="card-body">
          <h5 className="card-title text-success">Title</h5>
          <p className="card-text text-muted">
            Description
          </p>
          <div className="d-flex justify-content-around align-items-center">
            <button className="btn btn-outline-warning">Update</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }

  // Display selected product information
  return (
    <div className="card border-success mb-3" onClick={onClick}>
      <img
        className="card-img-top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = 'https://imgs.search.brave.com/XxT95jM-P-c2Nq5RupOWLf-77JmNjrwoJLOi0iK5sQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM2/MTgyODA2L3ZlY3Rv/ci9uby1pbWFnZS1h/dmFpbGFibGUtc2ln/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9OUhURXRtYlo2/UjU5eGV3cXlJUXNJ/X3BRbDNXM1FESmdu/eEZQSUhiNHdRRT0';
        }}
        src={product.images[0]}
        alt="Item Image"
      />
      <div className="card-body">
        <h5 className="card-title text-success">{product.title}</h5>
        <p className="card-text text-muted">
          {product.description}
        </p>
        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-outline-warning">Update</button>
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PreviewCardInfo;
