import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ images, title, description, id }) => {
  const placeholderImageUrl =
    'https://img.freepik.com/premium-vector/no-image-vector-icon-no-photo-sign-isolated_118339-3177.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais';

  const [imageError, setImageError] = useState(false);

  return (
    <div className="card py-3 h-100">
      <img
        className="card-img-top mx-auto"
        src={imageError ? placeholderImageUrl : images}
        alt={title}
        style={{ width: '20vh', height: '25vh' }}
        onError={() => setImageError(true)} 
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
