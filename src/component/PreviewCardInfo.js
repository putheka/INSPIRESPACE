
import React, { useState } from 'react';
import { Delete_Product } from '../BASE_URL';
import { toast } from 'react-toastify'
import { ThreeCircles } from 'react-loader-spinner'

const PlaceholderImage = "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png";

const PreviewCardInfo = ({ onDelete, product, onUpdate ,onClick }) => {

  const [isLoading, setisLoading] = useState(false)

  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleUpdateProduct = () => {
    setisLoading(true);
    onUpdate(product);
    console.log(handleUpdateProduct)
  };

  const handleDelete = () => {
    setisLoading(true);
  
    Delete_Product(product.id)  
      .then(response => {
        toast.success("Delete successfully");
        onDelete(product.id);
        setisLoading(false);   // This line should not cause a refresh
        setIsCardVisible(null);// Set visibility to false after successful delete
      })
      .catch(error => {
        toast.error("Failed to Delete !! ")
        console.log("Error Delete : ", error)
        setisLoading(false);
      });
  }
  

  // Check if product is undefined or not selected
  if (!product || !product.images || product.images.length === 0) {
    // Display default style with placeholder image
    return (
      <div className="card border-success mb-3 text-center" onClick={onClick}>
        <img
          className="card-img-top"
          src={PlaceholderImage}
          alt="Placeholder Image"
        />
        <div className="card-body">
          <h5 className="card-title text-success">Title</h5>
          <p className="card-text mt-5">Description</p>
          <p className="card-text mt-5">Categories</p>
          <p className="card-text mt-5">Price</p>
          <div className="d-flex justify-content-around align-items-center mt-5">
            <button className="btn btn-outline-warning">Update</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
  
  // Display selected product information
  return (
    <>
    {isCardVisible && ( 
    <div className="card border-success mb-3 text-center" onClick={onClick}>
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
        <p className="card-text">
          <h5>Description</h5>
          {product.description}
          <h5>Categories</h5>
          <h3 className="badge rounded-pill bg-success text-white mb-3 me-2">{product.category.name}</h3>
          <h5>Price</h5>
          <h4>{product.price} $</h4>
        </p>
        <div className="d-flex justify-content-around align-items-center">
          <button
           className="btn btn-outline-warning"
           onClick={handleUpdateProduct}>
            Update
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={handleDelete}
          > 
            {
              isLoading ? <>
              <ThreeCircles
              visible={true}
              height="25"
              width="50"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperClass=""
            /></> :
              " Delete "
            } 
          </button>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default PreviewCardInfo;
