import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BASE_URL from '../BASE_URL';
import PlaceholderDetailCard from '../page/PlaceholderDetailCard'

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
              <img src={product.images} className='h-575 w-75' alt='product' />
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p className="text-wrap">
                {product.description}
              </p>
              <h2>Categories</h2>
              {Array.isArray(product.category) ? (
                // Check if product.category is an array before using map
                product.category.map((item) => (
                  <span
                    className="badge rounded-pill bg-info text-dark mb-3 me-2"
                    key={item.id}
                  >
                    {item.name}
                  </span>
                ))
              ) : (
                // Handle the case where product.category is not an array
                <span className="badge rounded-pill bg-info text-dark mb-3 me-2">
                  {product.category.name}
                </span>
              )}
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
