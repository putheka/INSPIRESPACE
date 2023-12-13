import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ images, title, description, id }) => {
  const placeholderImageUrl =
    'https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149299705.jpg?size=626&ext=jpg&ga=GA1.1.2016474121.1701243185&semt=ais';

  // Use state to track whether the image fails to load
  const [imageError, setImageError] = useState(false);

  return (
    <div className="card py-3 h-100">
      <img
        className="card-img-top mx-auto"
        src={imageError ? placeholderImageUrl : images}
        alt={title}
        style={{ width: '15vh', height: '20vh' }}
        onError={() => setImageError(true)} // Handle image loading error
      />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-truncate">{description}</p>
      </div>
      <Link to={`/product-details/${id}`} className="btn btn-success w-75 mx-auto">
        Details
      </Link>
    </div>
  );
};

export default ProductCard;
