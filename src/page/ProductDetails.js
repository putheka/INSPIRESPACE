import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT_BY_ID } from '../services/productService';
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [chosenImage, setChosenImage] = useState("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GET_PRODUCT_BY_ID(id);
        console.log("Product By ID: ", response);
        if (response.images.length > 0) {
          setChosenImage(response.images[0]);
        }
        setProduct(response);
        setIsLoading(false);
      } catch (error) {
        console.log("ERROR GETTING PRODUCT: ", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "49vh" }}>
          <button className="btn btn-success" type="button" disabled>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
          </button>

        </div>
      ) : (
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6 text-center">
              <img src={product.images} className='h-575 w-75' alt='product'
                onError={(e) => { e.target.src = "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-success mt-2">{product.title}</h2>
              <div className="stars d-flex gap-1 justify-content-center align-items-center mt-2 mb-2">
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="gray" />
          </div>
              <p className="text-wrap">
                {product.description}
              </p>
              <h2>Categories</h2>
              <span className="badge rounded-pill bg-success text-white mb-3 me-2">
                {product.category.name}
              </span>
              
              <h4>
                <span>CURRENT PRICE : </span>
                <span style={{ color: 'green' }}>{product.price} $</span>
              </h4>


            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
