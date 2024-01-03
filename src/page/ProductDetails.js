import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BASE_URL from '../BASE_URL';


const ProductDetails = () => {
  const location = useLocation();
  const id = Number(location.pathname.split("/")[2]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  const getProduct = async () => {
    fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
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
              <h2 className="text-success">{product.title}</h2>
              <p className="text-wrap">
                {product.description}
              </p>
              <h2>Categories</h2>
                <span className="badge rounded-pill bg-success text-white mb-3 me-2">
                  {product.category.name}
                </span>
              <h2>Price</h2>
              <h4>{product.price} $</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
